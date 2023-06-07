console.log(__dirname);


// setTimeout() requires two arguments which will be:
// 	1. A callback function
// 	2. The time after which the callback function is to be called

const a =async () => {await setTimeout(()=>console.log('This will take 1s to print'), 1000)};
a().then(()=>{
console.log("\n\n\nThis is the module info: ");
console.log(module);

console.log("\n\n\nThis is the process info: ");
console.log(process);
});
