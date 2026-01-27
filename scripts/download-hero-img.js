const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
const filePath = path.join(dir, 'hero-element.png');
const url = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/df78dac5-7d8d-47bd-994b-90e733dd5e67/image-1769491972167.png?width=8000&height=8000&resize=contain";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(filePath);
https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download Completed');
  });
}).on('error', (err) => {
  fs.unlink(filePath, () => {});
  console.error('Error: ' + err.message);
});
