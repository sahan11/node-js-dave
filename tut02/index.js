const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises
//Instead of hardcoding the filename we can write
// fs.readFile(path.join(__dirname, 'jwsh.txt'))

/* READ FILE USING CALLBACK HELL*/

// fs.readFile(path.join(__dirname, 'jwsh.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

// console.log('Hello...')

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
//     if(err) throw err;
//     console.log('Write complete');


//     fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nYes it', (err) => {
//         if(err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'), (err) => {
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })
// }) // This code looks like a callback hell but we ensure that they are called one after the other


// process.on('uncaughtException', err => {
//     console.error(`There was and uncaught error: ${err}`)
//     process.exit(1);
// }) 

/* READ AND WRITE USING PROMISES AND AVOIDING CALLBACK HELL */

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'jwsh.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'jwsh.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), 'Tohar mai ke chodo');
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\nHatt bainchod');
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf8');
        console.log(newData);
        
    } catch(err){
        console.error(err);
    }
}

fileOps();