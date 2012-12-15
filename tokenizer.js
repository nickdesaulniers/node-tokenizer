var regex_queue = [];
var tokens = [];
var source = '';
var regexQueue = [];
var debugFlag = false;

function logSrc () {
  console.log(source);
}

function logTok () {
  console.log('Tokens: ' + tokens);
}

exports.__defineSetter__('debug', function (value) {
  if (typeof value === 'boolean') debugFlag = value;
});

exports.rule = function (tokenType, re) {
  regexQueue.push(function () {
    var ret = false;
    var result = re.exec(source);
    if (result) {
      if (debugFlag) console.log(tokenType + ' token: ' + result[0]);
      tokens.push(result[0]);
      source = source.substring(result[0].length);
      ret = true;
    }
    return ret;
  });
}

exports.tokenize = function (src) {
  source = src;
  if (debugFlag) {
    console.log('-- Starting tokenizer --');
    logSrc();
    console.log('--                    --');
  }

  while (source) {
    var foundToken = regexQueue.some(function (element, index, array) {
      return element();
    });
    if (!foundToken) {
      console.error('Did not find any tokens on this pass:');
      logSrc();
      process.exit(1);
    }
  }

  if (debugFlag) {
    console.log('-- Tokenizing complete --');
    console.log(tokens);
    console.log('--                     --');
  }
  return tokens;
}
