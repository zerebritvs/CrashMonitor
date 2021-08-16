const { app,  BrowserWindow} = require("electron");

let mainWindow = null;

app.on("ready", () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadFile(__dirname + "/index.html");
});

//oro.innerHTML = initScrapGoldPrice();

/*const cheerio = require("cheerio");
const request = require("request-promise");

async function initScrapGoldPrice(){
    const goldReq = await request({
        uri: "https://www.livepriceofgold.com/spain-gold-price.html",
        transform: body => cheerio.load(body)
    });

    const goldPriceGr = goldReq('.bold3').next();
    return goldPriceGr.html();
}*/