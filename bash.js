process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  const path = module.path;

  if (cmd === 'pwd') {
    process.stdout.write(npm);
  }

  process.stdout.write('You Typed:' + cmd);
  process.stdout.write('\nprompt > ');
});
