const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

fs.writeFileSync(path.join(__dirname, 'backup.html'), htmlContent, 'utf8');

console.log('บันทึกข้อมูล index.html เรียบร้อยแล้ว');