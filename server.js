const express = require('express');
const request = require('request');
const app = express();
app.use('/', (req, res) => {
   const target = "https://reddit.com" + req.url; // Change this to the website you want to proxy
   req.pipe(request(target)).pipe(res);
});
app.listen(8080, () => console.log('Proxy running on port 8080'));
