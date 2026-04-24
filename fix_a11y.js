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

    // Fix heading h5 to h2 class="h5" if it's a section header
    content = content.replace(/<h5 class="d-flex align-items-center mb-3">/g, '<h2 class="h5 d-flex align-items-center mb-3">');
    content = content.replace(/<\/h5>\s*<p>/g, '</h2>\n            <p>');
    content = content.replace(/<\/h5>\s*<div/g, '</h2>\n            <div');
    content = content.replace(/<\/h5>\s*<ul/g, '</h2>\n            <ul');
    
    // Some h5 are like <h5 class="...">...</h5> without spaces immediately following.
    // It's safer to just replace </h5> with </h2> if we replaced the opening tag.
    // Let's do a more robust replacement for the h5 headers
    content = content.replace(/<h5(.*?)>([\s\S]*?)<\/h5>/g, (match, p1, p2) => {
        if (p1.includes('d-flex align-items-center mb-3') || p1.includes('card-title')) {
            // Keep class if we want, but change tag
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

    // Add aria-hidden="true" to icons if they don't have it
    content = content.replace(/<i class="(fa[srlbd]?-|icon-)[^"]*"(?!.*?aria-hidden).*?>/g, (match) => {
        return match.replace('>', ' aria-hidden="true">');
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
