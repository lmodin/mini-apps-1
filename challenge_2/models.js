//controller/models file to parse and reformat data

var reformat = function(text) {
  //define output array
  var response = [];
  //parse text
  var object = JSON.parse(text);
  //add the keys to the response as first line
  var keys = Object.keys(object)
  //pop off the children key at end
  keys.pop()
  response.push(keys.join());

  var addData = function(item) {
    //create an array for the values
    var data = [];
    //iterate through values and push to an array
    for (var key in item) {
    //unless key === children
      if (key !== 'children') {
        data.push(item[key]);
      }
    }
    //join the array and push to response
    response.push(data.join());

    //if item has children,
    if (item.children.length > 0) {
      //iterate through the children
      for (var i = 0; i < item.children.length; i++) {
        addData(item.children[i])
      }
    }
  }

  addData(object)

  //return text
  return htmlTemplate(response.join(`<br>`));
}

//template for appending data to the dom
var htmlTemplate = function (text) {
  return (`<head>
  <title>CSV Generator</title>
  <link href="stylesheet.css" rel="stylesheet" type="text/css">
</head>
<body>
  <form method="post" action="/">
    <input type="submit" value="Submit">
      <textarea text="" name="inputText" id="input"></textarea>
    </input >
  </form>
  <div>
    <h3 class="csvformat">CSV Format</h3>
      <p>${text}</p>
  </div>
  <script src="app.js"></script>
</body>`)
}






/*

HTML format to send back:

`<head>
  <title>CSV Generator</title>
  <link href="stylesheet.css" rel="stylesheet" type="text/css">
</head>
<body>
  <form method="post" action="/">
    <input type="submit" value="Submit">
      <textarea text="" name="inputText" id="input"></textarea>
    </input >
  </form>
  <div>
    <h3 class="csvformat">CSV Format</h3>
      <p>${reponseText}</p>
  </div>
  <script src="app.js"></script>
</body>`

*/



exports.reformat = reformat;

