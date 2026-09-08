import fs from 'fs';

const sourceStream = fs.createReadStream('source.txt');
const destinationStream = fs.createWriteStream('destination.txt');

sourceStream.pipe(destinationStream);

destinationStream.on('finish', () => {
    console.log('File copied successfully');
});

sourceStream.on('error', (err) => {
    console.error('Read error:', err.message);
});

destinationStream.on('error', (err) => {
    console.error('Write error:', err.message);
});