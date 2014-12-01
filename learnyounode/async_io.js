// Write a program that uses a single asynchronous filesystem operation:
// 1) to read a file
// 2) print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.


var fs = require('fs');

var file = process.argv[2];
fs.readFile(file, function (err, contents) {

var num_lines = contents.toString().split('\n').length - 1
console.log(num_lines)
});



