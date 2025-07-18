const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  console.log('Received input:');
  console.log(input);
  
  const numbers = input.map(String);
  console.log('Parsed numbers:', numbers);
  
  process.exit(0);
});