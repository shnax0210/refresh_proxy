var http = require('http'),
    httpProxy = require('http-proxy'),
    parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));

console.log(argv)

var proxyPort = argv.p,
    targetUrl = argv.t,
    secondsBeforeRefrash = argv.s;

var proxy = httpProxy.createProxyServer({});
 

proxy.on('proxyRes', function (proxyRes, req, res) {
  res.setHeader('Refresh', secondsBeforeRefrash.toString());
});

var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: targetUrl });
});
 
console.log("listening on port:", proxyPort)
server.listen(proxyPort);