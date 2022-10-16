var fs = require("fs");
var https = require("https");

fs.writeFile(
  __dirname + "/index.html",
  "<p>This is a node generated Paragraph HTML element</p>",
  function (error) {
    if (error) {
      return console.log(error);
    } else {
      return console.log("congrats");
    }
  }
);

var myPhotoURL =
  "https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg?raw=true";
https.get(myPhotoURL, function (response) {
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});
