//express app
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
//const models = require('/models.js')
app.use(express.static('client')) //should this not be app?
var formatter = require('./models.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//get text input from the client

app.post('/', (req, res, next) => {
  //call a function to render the input text into a csv style format
  console.log('I got a request')
  //console.log('request: ', req.body.inputText)
  var responseText = formatter.reformat(req.body.inputText)
  res.status(200).send(responseText)
  res.end();
})


//app.get('')
//function that converts text into csv format

app.listen(port, () => console.log('listening on port 3000'))