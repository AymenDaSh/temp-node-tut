const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/test.txt','utf-8');

console.log(first, second);

writeFileSync(
  './content/result-syncs.txt',
  `here is the result : ${first}, ${second}`,
  {flag: 'a'}
) 