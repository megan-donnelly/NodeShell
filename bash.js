const pwd = require('./pwd.js');
const ls = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  } else if (cmd === 'ls') {
    process.stdout.write(ls);
    // const folderFiles = fs.readdir('./', 'utf8', (err, files) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     process.stdout.write(files.join('\n'));
    //     process.stdout.write('prompt >');
    //   }
    // });
    // process.stdout.write(folderFiles);
  }

  process.stdout.write('You Typed:' + cmd);
  process.stdout.write('\nprompt > ');
});
