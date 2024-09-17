//This code will run a python script and read its output
var http = require('http');

http.createServer(function (req, res) {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./main.py"]);
    pythonProcess.stdout.on('data', (data) => {
        res.write(data);
        res.end()
       });
}).listen(8080); 