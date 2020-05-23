const replace = require('replace-in-file');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
async function exec(cmd){
  return new Promise((res, rej) => {
    child_process.exec(cmd,{maxBuffer: 1024 * 1000}, (err) => {
      if (err) {
        rej(err)
      } else {
        res();
      }
    });
  })
}

(async function() {
  const pkgName = path.basename(path.resolve('.'));
  if (pkgName !== 'react-library-boilerplate') {
    try {
      console.log('Renaming app according to your root directory name...');

      await replace({
        files: './*',
        from: /react-library-boilerplate/g,
        to: pkgName,
      });
      await exec('fcli remove ./setup_readme.md && fcli remove ./.git');
    } catch (e) {
      console.log(e);
    }
  }

}());


// 
