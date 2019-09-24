const fs = require('fs');

const folderFiles = function() {
  return fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      console.log(files.join('\n'));
      // return files.join('\n');
    }
  });
};

module.exports = folderFiles;
