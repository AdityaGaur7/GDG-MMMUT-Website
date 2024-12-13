const fs = require('fs');
const path = require('path');

const listFiles = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      console.log(`Directory: ${filePath}`);
      listFiles(filePath);
    } else {
      console.log(`File: ${filePath}`);
    }
  });
};

listFiles('src/components/ui');
