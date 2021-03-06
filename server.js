import 'dotenv/config.js'
import express from 'express'
import favicon from "serve-favicon";
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import session from 'express-session'
import logger from 'morgan'
import methodOverride from 'method-override'
import passport from 'passport'
import { passUserToView } from "./middleware/middleware.js";

// connect to MongoDB with mongoose
import('./config/database.js')

// load passport
import('./config/passport.js')

// require routes
import { router as indexRouter } from './routes/index.js'
import { router as authRouter } from './routes/auth.js'
import { router as heroesRouter } from "./routes/heroes.js";
import { router as guidesRouter } from "./routes/guides.js";
import { router as profilesRouter } from "./routes/profiles.js";

// create the express app
const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// view engine setup
app.set(
  'views',
  path.join(__dirname, 'views')
)
app.set('view engine', 'ejs')

// middleware
app.use(favicon(path.join(__dirname, 'public', "images", "favicons", "dota2-icon.png")))
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({ extended: true, limit: "25mb" }))
app.use(
  express.static(
    path.join(__dirname, 'public')
  )
)

// session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'lax',
    },
  })
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// custom middleware
app.use(passUserToView);

// router middleware
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use("/heroes", heroesRouter);
app.use("/guides", guidesRouter);
app.use("/profiles", profilesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error', {
    title: `???? ${err.status || 500} Error`,
  })
})

export { app }