const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const dirs = [path.join(__dirname, 'src')];

dirs.forEach(d => {
  walkDir(d, function(filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      content = content.replace(/PK Door/gi, 'Xây Dựng Nhà Đà Nẵng');
      content = content.replace(/PKDoor/gi, 'Xây Dựng Nhà Đà Nẵng');
      content = content.replace(/pkdoor\.vn/gi, 'xaydungnhadanang.vn');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
      }
    }
  });
});

let indexHtmlPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  let content = fs.readFileSync(indexHtmlPath, 'utf8');
  let originalContent = content;
  content = content.replace(/PK Door/gi, 'Xây Dựng Nhà Đà Nẵng');
  content = content.replace(/PKDoor/gi, 'Xây Dựng Nhà Đà Nẵng');
  if (content !== originalContent) {
    fs.writeFileSync(indexHtmlPath, content, 'utf8');
    console.log('Updated', indexHtmlPath);
  }
}
