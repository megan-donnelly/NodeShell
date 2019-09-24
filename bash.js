process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const pwd = require('./pwd');
    process.stdout.write(pwd());
  } else if (cmd === 'ls') {
    const ls = require('./ls');
    // process.stdout.write(ls());
    console.log(ls());
  } else {
    process.stdout.write(`not found`);
  }

  process.stdout.write('\nYou Typed:' + cmd);
  process.stdout.write('\nprompt > ');
});
