const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('application/src', function(filePath) {
  if (filePath.endsWith('.vue')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/<h5(.*?)>([\s\S]*?)<\/h5>/g, (match, p1, p2) => {
        if (p1.includes('d-flex') || p1.includes('card-title')) {
            let newP1 = p1;
            if (!newP1.includes('class="h5') && !newP1.includes('class="')) {
                newP1 += ' class="h5"';
            } else if (!newP1.includes('h5') && newP1.includes('class="')) {
                newP1 = newP1.replace('class="', 'class="h5 ');
            }
            return `<h2${newP1}>${p2}</h2>`;
        }
        return match;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
