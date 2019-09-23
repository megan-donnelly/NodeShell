process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        process.stdout.write(module.path);
    }

    process.stdout.write('You Typed:' + cmd);
    process.stdout.write('\nprompt > ');
})

