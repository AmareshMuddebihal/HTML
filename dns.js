var dns=require("dns");
var domain="Alliance.edu.in";
dns.lookup(domain, 4, function(error, address, family){
    if (error) {
        console.error("DNS lookup failed with code"  + error.code);
    }else{
        console.log(domain+"->" +address);

    }
    });