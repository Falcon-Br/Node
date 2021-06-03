const http = require('http');
const url = require('url');
const fs = require('fs');

//Cria o servidor
http.createServer((request, response) => {

    let path = express.json()
    let fileName = "." + path;

    fs.readFile(fileName, (error, data)=>{

        if(error){
            response.writeHead(404, {"Content-Type:": "text/html"});
            response.end("<h1>Página não encontranda</h1>")
        }else{
            response.writeHead(200, {"Content-Type:": "text/html"});
            response.write(data);
            response.end();
        }

    })

    response.end();



}).listen(3000, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor rodando na porta 3000");
    }
    
})