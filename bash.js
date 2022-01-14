
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === "May"){
     process.stdout.write('Hi May');
    }
  
    if(cmd === 'pwd'){
        process.stdout.write(process.cwd());
    }
    process.stdout.write('\nprompt > ');
})

// console.log(process.cwd());

// import { cwd } from 'process';
// console.log(`Current directory: ${cwd()}`);

// console.log("Hello World");
