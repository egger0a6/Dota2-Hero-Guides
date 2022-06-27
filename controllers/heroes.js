import axios from "axios";

function index(req, res) {
  // const encodedParams = new URLSearchParams();
  // encodedParams.append("apiKey", "41FB229C2B374BDE239E2F49954A702F");

  // const options = {
  //   method: 'POST',
  //   url: 'https://dota2stefan-skliarovv1.p.rapidapi.com/getGameItems',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'X-RapidAPI-Key': 'fb8c116b0dmsh1a944a77a0b0207p1ade21jsn953179516cf0',
  //     'X-RapidAPI-Host': 'Dota2stefan-skliarovV1.p.rapidapi.com'
  //   },
  //   data: encodedParams
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  //   res.render("heroes/index", {
  //     title: "All Heroes"
  //   });
  // }).catch(function (error) {
  //   console.error(error);
  // });
  res.render("heroes/index", {
    title: "All Heroes"
  })
}

export {
  index
}