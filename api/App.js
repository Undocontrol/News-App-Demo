const express = require('express')
const request = require('request');
//this is essentially the API 
const app = express()
const port = 3010
const token = '7854dfdaa951420e99c303c809f378a0'

/*
app.get('/', (req, res) => res.send('Hello World!'))
app uses http methods and when one is used e.g. app.get
'/' meaning something like localhost:8000/
or '/news'  meaning localhost:8000/news
then you have a function with 2 variables, req and res.
req is the request, so if the user includes a querystring or some POST parameters, they'll be in there.
res is the response, which is empty.. and your function has to put something into it to send back
(which is why it then says, res.send, because it's adding something to the response for your client to see)
*/

request('https://newsapi.org/v2/top-headlines?country=us&apiKey=7854dfdaa951420e99c303c809f378a0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("hello");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))