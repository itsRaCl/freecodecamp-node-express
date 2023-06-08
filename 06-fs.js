const {readFile, writeFile}= require("fs");
console.log("This is before the file is loaded");
const rf = readFile('./test_files/file.txt', 'utf-8', (err, data)=>{
	if (err){
		console.log(err)
	}
	console.log(`These are the file contents:\n data}`);
	wf = writeFile('./test_files/read_test.txt', `${data}`,(err, data)=>{
		if (err){
			console.log(err);
			return;
		}
		console.log(data);

	} );
});
console.log("This is after the file is loaded");



