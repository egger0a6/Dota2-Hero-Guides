# Dota2 Hero Guides

![All Heroes page screenshot](/public/images/screenshots/home_page.png?raw=true)

## Table of contents
- [Dota2 Hero Guides](#dota2-hero-guides)
  - [Table of contents](#table-of-contents)
  - [General Info](#general-info)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Credits](#credits)
  - [Next Steps](#next-steps)

## General Info
This project is a CRUD application that allows users to create simple itemization guides for any hero in the Dota 2 roster. Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The app allows users to login via Google OAuth to create, delete and update their guides. Data is stored in a MongoDB database and hero and item images are fetched from an API.
* For more information about Dota2 [This Video](https://www.youtube.com/watch?v=Cp8neRiF9-k) is a good introduction.
* Or check out the [game](https://www.dota2.com/home) perhaps.

## Getting Started
[Visit here](https://dota2-hero-guides.herokuapp.com/)  
[Project Planning Trello Board](https://trello.com/b/1vfTmTgW/dota2-hero-guides)

## Usage
* **View all heroes** ![All Heroes page screenshot](/public/images/screenshots/all_heroes.png?raw=true)
* **Create a guide** ![Create Guide page screenshot](/public/images/screenshots/create_guide.png?raw=true)
* **View hero details** ![View Hero page screenshot](/public/images/screenshots/hero_details.png?raw=true)
* **Edit guides** ![Edit Guide page screenshot](/public/images/screenshots/edit_guide.png?raw=true)
* **View all profiles** ![All Profiles page screenshot](/public/images/screenshots/all_profiles.png?raw=true)
* **View a single profile** ![Show Profile page screenshot](/public/images/screenshots/show_profile.png?raw=true)

## Technologies
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
* Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js

## Credits
* [Steam WebAPI](https://wiki.teamfortress.com/wiki/WebAPI#Dota_2)
* All the hero and item images, and Dota2 logos used in this project belong to their respective owners and I do not claim any right over them.

## Next Steps
* Option for a user to be able to favorite a hero and have favorited heroes show on their profile page
* Option for users to add a comments to a guide
* Functionality to give guides a rating and sort them by rating on the Hero's page
* ... and more