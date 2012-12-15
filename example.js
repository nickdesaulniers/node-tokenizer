var fs = require('fs');
var tokenizer = require('./tokenizer');

tokenizer.debug = true;
tokenizer.rule('newline', /^\n/);
tokenizer.rule('whitespace', /^\s+/);
tokenizer.rule('word', /^[^\s]+/);
var tokens = tokenizer.tokenize(fs.readFileSync('./nick.n', 'utf8'));

console.log('Parsed ' + tokens.length + ' tokens');
