const { ipcRenderer } = require("electron");

const request = require("request-promise");
const cheerio = require("cheerio");

async function initScrapGoldPrice(){
    const $ = await request({
        uri: "https://www.livepriceofgold.com/spain-gold-price.html",
        transform: body => cheerio.load(body)
    });

    const goldPriceGr = $(".data-table-2 tbody .bold3").next().first().text();
    return await goldPriceGr;
}

async function initScrapInflation(){
    const $ = await request({
        uri: "https://fred.stlouisfed.org/series/DGS10",
        transform: body => cheerio.load(body)
    });

    const usaInflation = $(".series-meta-observation-value").html();
    return await usaInflation;
}

initScrapGoldPrice();
initScrapInflation();

//DOM Elements
const oroh1 = document.querySelector("#oro");

const inflationh1 = document.querySelector("#inflation");

initScrapGoldPrice().then(x => {
    oroh1.innerHTML= x;
});

initScrapInflation().then(x => {
    inflationh1.innerHTML= x;
});