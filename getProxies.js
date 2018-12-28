const ProxyLists = require('proxy-lists');
const fs = require('fs');

const options = {sourceOptions:{bitproxies:{apiKey:"zYGqri6l6Q88SNATaOKH8hUIQLhnhb9K"}}}

const proxiesList = []
const gettingProxies = ProxyLists.getProxies();
 
gettingProxies.on('data', function(proxies) {
	fs.appendFileSync('./proxieslist.json', JSON.stringify(proxies) ,'utf8')
});
gettingProxies.on('error', function(error) {
    // Some error has occurred.
    console.error(error);
});

