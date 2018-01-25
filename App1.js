var notes=require('./notes.js');
var yargs=require('yargs');

const argv = yargs.argv;
var command = argv.[0];
console.log('Command: ', command);
console.log('Yargs', argv);
//argv.title, argv.body
if (command === 'add') {
    notes.add();
} else if (command === 'list') {
    notes.getAll();
}