function sayHello(req, res) {
    res.setHeader('Content-Type','text/plain');
    res.end('Hello connect');}

    module.exports=sayHello;