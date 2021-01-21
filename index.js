// //need to get the latitude and longitude

// window.addEventListener('load', () => {
//   let lon;
//   let lat;

//   if (navigator.geolocation) { // allows to find the location of the user by finding lat and lon 
//     navigator.geolocation.getCurrentPosition(positon => {
//       console.log(positon);
//     })
//   } 
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = "4949dd583c1044568f0a4fdce27fa5b9";
// const port = 
const fs = require('fs')

app.get('/', (req, res) => {
  res.render('index')
});

app.use(express)
