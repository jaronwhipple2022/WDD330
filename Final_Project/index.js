
var express = require('express');
var app = express();

app.use(express.static('public'));
//define a route
app.get("/getWebScrape", scrapeProduct);

//exmple code
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const puppeteer = require('puppeteer');

async function scrapeProduct(req, res) {
    url = 'https://www.amazon.com/Camp-Chef-EX60LW-Explorer-Outdoor/dp/B0006VORDY/ref=sr_1_1_sspa?dchild=1&keywords=camp+stove&qid=1626825866&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNjc3Wjc0MUNTTE9BJmVuY3J5cHRlZElkPUEwMjI3MjIyMkw0RzZQMDQwWlNETCZlbmNyeXB0ZWRBZElkPUEwODUxNjc5MkE5SU1FOEIzRTBDSCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    try{
    page.$x('//*[@id="priceblock_ourprice"]').then(el => {
        //const [el] = await page.$x('//*[@id="priceblock_ourprice"]');
        const src = el[0].getProperty('src');
        src.jsonValue().then(srcText => res.send(srcText));
    });

}
catch (e) {
    console.error(e)
}
}


