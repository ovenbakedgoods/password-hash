var colors = require('colors');

var unsecuredPlainTextPassword = "password";
var bcrypt = require('bcryptjs');
var colors = require('colors');
bcrypt.genSalt(10, function(err,salt){
bcrypt.hash(unsecuredPlainTextPassword, salt, function(err,hash){
console.log(hash.trap.rainbow.strikethrough);
});
});
