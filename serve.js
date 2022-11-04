var http=require("http");
var fs=require("fs");
var url=require("url");
http.createServer(function(request,response){
var pathname=url.parse(request.url).pathname;
console.log("Request for"+ pathname +"received.");
fs.readFile('dates.html',function(err,data){
if(err){
console.log(err);
response.write(404,{'content-Type':'text/html'});
}
else
{ response.writeHead(200,{'content-Type':'text/html'});
response.write(data.toString());
}
response.end();});
}).listen(8001);
console.log("server is running");