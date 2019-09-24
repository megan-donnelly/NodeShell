process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const pwd = require('./pwd');
    process.stdout.write(pwd());
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls') {
    const ls = require('./ls');
    ls();
  } else {
    process.stdout.write(`not found`);
    process.stdout.write('\nprompt > ');
  }
});
