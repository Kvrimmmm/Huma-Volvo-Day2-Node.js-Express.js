import EventEmitter from 'events';

class TaskEmitter extends EventEmitter {}

const emitter = new TaskEmitter();

emitter.on('action', (message) => 
{
    console.log(`Received: ${message}`);
});

emitter.emit('action', 'Task 4 is running');