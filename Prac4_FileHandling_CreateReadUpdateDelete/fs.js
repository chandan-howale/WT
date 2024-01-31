var fs = require('fs');

txt1 = 'This is demo file';

fs.writeFile('demo.txt', txt1, function(err){
    if(err){throw err;}
    console.log('File is created');
})

//Reading the file
fs.readFile('demo.txt', 'utf8', function(err, data){
    if(err){throw err;}
    console.log("Reading file........");
    console.log(data);
})

//Append File
newtxt = 'appended data';

fs.appendFile('demo.txt',newtxt, function(err){
    if(err){throw err;}
    console.log('File appending....');
})

//Reding File after Apppend
fs.readFile('demo.txt', 'utf8', function(err, data){
    if(err){throw err;}
    console.log("After appending........");
    console.log(data);
})

//Delete File
fs.unlink('demo.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });