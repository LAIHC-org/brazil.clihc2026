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

    // The previous script replaced `<h5` with `<h2 class="h5"`, but missed the closing tags `</h5>` that weren't followed by `<p>`, `<div` or `<ul`.
    // It also generated `<h5 id="...">...</h2>` in some places.
    
    // First, let's fix any `<h5 id="...">...</h2>` back to `<h3>...</h3>` or similar. We did this manually for one but let's do it globally.
    content = content.replace(/<h5(.*?)>([\s\S]*?)<\/h2>/g, '<h2 class="h5"$1>$2</h2>');

    // Now let's fix any `<h2(.*?)>([\s\S]*?)<\/h5>/g` to close with `</h2>`
    content = content.replace(/<h2(.*?)>([\s\S]*?)<\/h5>/g, '<h2$1>$2</h2>');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
