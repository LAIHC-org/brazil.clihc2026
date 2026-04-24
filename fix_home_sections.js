const fs = require('fs');
const path = require('path');

const files = [
    'application/src/components/TheOrganization.vue',
    'application/src/components/TheCoordinationOfProgram.vue',
    'application/src/components/TheSupporters.vue',
    'application/src/components/SpetialThanks.vue'
];

files.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/<h5 class="mb-1">/g, '<h3 class="h5 mb-1">');
        content = content.replace(/<\/h5>/g, '</h3>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated: ' + filePath);
    }
});
