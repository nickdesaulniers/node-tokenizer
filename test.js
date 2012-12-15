var fs = require('fs');
var parser = require('./parser');

parser.rule('newline', /^\n/);
parser.rule('whitespace', /^\s+/);
parser.rule('word', /^[^\s]+/);
parser.parse(fs.readFileSync('./nick.n', 'utf8'));
