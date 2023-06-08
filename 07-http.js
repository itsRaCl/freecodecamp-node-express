const http = require('http');

const server = http.createServer((req, res)=>{
	if (req.url === '/'){
		res.write('<h1> Hello World welcome to the homepage</h1>')
		res.end('HI WELCOME YOU FUCKERS')
	}else if(req.url === '/about/'){
		res.write('<h1> Hell welcome to the about page</h1>')
		res.end('YOU\'RE FUcked')
	}else{
		res.end('BITCH THIS PAGE DOES\'NT exist ')
	}
})

server.listen(8000)
