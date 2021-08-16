/*const cheerio = require("cheerio");
const request = require("request-promise");

const Scrap = {
    "goldPrice":initScrapGoldPrice()
}

async function initScrapGoldPrice(){
    const goldReq = await request({
        uri: "https://www.livepriceofgold.com/spain-gold-price.html",
        transform: body => cheerio.load(body)
    });

    const goldPriceGr = goldReq('.bold3').next();
    return goldPriceGr.html();
}*/


/*async function initScrapInflation(){
    const inflatReq = await request({
        uri: "https://es.tradingeconomics.com/country-list/inflation-rate?continent=america",
        transform: body => cheerio.load(body)
    });

    //const usaInflation = inflatReq('head');
    //console.log(usaInflation.html()+ "hola");
}*/

module.exports = Scrap;
