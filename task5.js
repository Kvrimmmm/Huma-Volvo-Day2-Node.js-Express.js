import fs from 'fs';

const readableStream = fs.createReadStream('source.txt', { encoding: 'utf8', highWaterMark: 16 });
const writableStream = fs.createWriteStream('destination_task5.txt');

readableStream.on('data', (chunk) => 
{
    writableStream.write(chunk);
});

readableStream.on('end', () => 
{
    console.log('Stream finished successfully');
});