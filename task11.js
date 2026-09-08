import fs from 'fs';

const sourceStream = fs.createReadStream('source.txt');
const destinationStream = fs.createWriteStream('destination_task11.txt');

sourceStream.on('data', (chunk) => 
{
    destinationStream.write(chunk);
});

sourceStream.on('end', () => 
{
    destinationStream.end();
    console.log('File copied successfully using chunks');
});

sourceStream.on('error', (err) =>
{
    console.error('Read error:', err.message);
});

destinationStream.on('error', (err) => 
{
    console.error('Write error:', err.message);
});