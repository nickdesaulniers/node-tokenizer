var fs = require('fs');
var parser = require('./parser');

parser.debug = true;
parser.rule('newline', /^\n/);
parser.rule('whitespace', /^\s+/);
parser.rule('word', /^[^\s]+/);
var tokens = parser.parse(fs.readFileSync('./nick.n', 'utf8'));

console.log('Parsed ' + tokens.length + ' tokens');
