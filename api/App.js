const express = require('express')
const request = require('request');
//this is essentially the API 
const app = express()
const port = 8080
const token = '7854dfdaa951420e99c303c809f378a0'

app.use(function(req, res, next) {
  // Allow requests from anywhere
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/*
  Returns top headlines for the UK
*/
app.get('/headlines', (req, res) => {
  request(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}`, (err, response, body) => {
    if (err) { return console.log(err); }
    res.send(body)
  });
});

/*
  Takes a query string argument (q) and returns filtered results 
*/
app.get('/filter', (req, res) => {
  const query = req.query.q
  request(`https://newsapi.org/v2/everything?q=${query}&apiKey=${token}`, (err, response, body) => {
    if (err) { return console.log(err); }
    res.send(body)
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))