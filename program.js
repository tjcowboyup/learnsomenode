// var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is my name");
//   response.end();
// }).listen(8080);

// console.log(process.argv) 

//#1
// console.log("HELLO WORLD");

//#2
// var result = 0;

// for (var i = 2; i<process.argv.length; i++){
//   result += Number(process.argv[i]);
// }
// console.log(result);

//#3
// var fs = require('fs');

// var result = fs.readFileSync(process.argv[2]);
// var lines = result.toString().split('\n').length-1;
// console.log(lines);

//#4
// var fs = require('fs');

// fs.readFile(process.argv[2], function(err, content){
//   console.log(content.toString().split('\n').length-1);
//   })

//#5
// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function(err, list){
//   list.forEach(function(file){
//     if (path.extname(file) === "." + process.argv[3])
//       console.log(file);
//     });
//   });

//#6
var filter = require('./module.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];
filter(dirName, fileExt, function(err, list){
  if (err)
    return console.log(err);

  list.forEach(function(file)
  {
    console.log(file);
  });
});


