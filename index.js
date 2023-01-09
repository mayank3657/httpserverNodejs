// const http=require('http');
// const port=8000;
// const fs=require('fs');
// function requestHandler(req,res){
//     console.log(req.url);
//     res.writeHead(200,{'content-type':'text/html'});
//     fs.readFile('./index.html',function(err,data){
//         if(err){
//             console.log('error',err);
//             return res.end('<h1>Error !</h1>');
//         }
//         return res.end(data);
//     });
//     // res.end('Gotcha');
// }
// const server=http.createServer(requestHandler);
// server.listen(port,function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("server is up and running on port",port);
// });
const http=require('http');
const port=8000;
const fs=require('fs');
function requestHandle(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-text':'text/html'});
    let filePath;
    switch(req.url){
        case '/':
            filePath='./index.html';
            break;
        case '/profile':
            filePath='./profile.html';
            break;
        default:
            filePath='./404.html';
    }
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error !</h1>');
        }
        return res.end(data);
    });
    // res.end('Gotcha');
}
const server=http.createServer(requestHandle);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up and running on port",port);
});