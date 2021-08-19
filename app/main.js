const {app, BrowserWindow, ipcMain} = require("electron");
const request = require("request-promise");
const cheerio = require("cheerio");

//mantener la app viva 
let mainWindow = null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadFile("app/ui/index.html");
    
}

app.whenReady().then(createWindow);

ipcMain.handle("get-gold-price", async () => {
    const $ = await request({
        uri: "https://www.livepriceofgold.com/spain-gold-price.html",
        transform: body => cheerio.load(body)
    });

    const goldPriceGr = $(".data-table-2 tbody .bold3").next().first().text();
    return goldPriceGr;
});

ipcMain.handle("get-usa-inflation", async () => {
    const $ = await request({
        uri: "https://fred.stlouisfed.org/series/DGS10",
        transform: body => cheerio.load(body)
    });

    const usaInflation = $(".series-meta-observation-value").html();
    return usaInflation;
});

ipcMain.handle("get-fear-greed", async () => {
    const $ = await request({
        uri: "https://money.cnn.com/data/fear-and-greed/",
        transform: body => cheerio.load(body)
    });

    let valueFG = $("#needleChart").children().children().first().text().substring(13,40);
    let valueFG2 = "";
    let cont = 0;
    for(i = 0; i<valueFG.length; i++){
        if(valueFG.charAt(i) == " " && cont == 0){

            valueFG2 = valueFG.substring(i+1,20);
            cont++;
        }
    }
    let indicatorNum1 = $(".indicatorContainer").children().children().children().html();
    const indicator1Value = $(".indicatorContainer").children().children().children().next().html();
    let indicator1 = "";
    let cont1 = 0;
    for(i = 0; i<indicatorNum1.length; i++){
        if(indicatorNum1.charAt(i) == ">"){
            if(cont1 == 1){
                indicator1 = indicatorNum1.substring(i+1,60);
            }
            cont1++;
        }
    }

    let indicatorNum2 = $(".indicatorContainer").children().next().children().children().html();
    const indicator2Value = $(".indicatorContainer").children().next().children().children().next().html();
    let indicator2 = "";
    let cont2 = 0;
    for(i = 0; i<indicatorNum2.length; i++){
        if(indicatorNum2.charAt(i) == ">"){
            if(cont2 == 1){
                indicator2 = indicatorNum2.substring(i+1,60);
            }
            cont2++;
        }
    }

    let indicatorNum3 = $(".indicatorContainer").children().next().next().children().children().html();
    const indicator3Value = $(".indicatorContainer").children().next().next().children().children().next().html();
    let indicator3 = "";
    let cont3 = 0;
    for(i = 0; i<indicatorNum3.length; i++){
        if(indicatorNum3.charAt(i) == ">"){
            if(cont3 == 1){
                indicator3 = indicatorNum3.substring(i+1,60);
            }
            cont3++;
        }
    }

    let indicatorNum4 = $(".indicatorContainer").children().next().next().next().children().children().html();
    const indicator4Value = $(".indicatorContainer").children().next().next().next().children().children().next().html();
    let indicator4 = "";
    let cont4 = 0;
    for(i = 0; i<indicatorNum4.length; i++){
        if(indicatorNum4.charAt(i) == ">"){
            if(cont4 == 1){
                indicator4 = indicatorNum4.substring(i+1,60);
            }
            cont4++;
        }
    }

    let indicatorNum5 = $(".indicatorContainer").children().next().next().next().next().children().children().html();
    const indicator5Value = $(".indicatorContainer").children().next().next().next().next().children().children().next().html();
    let indicator5 = "";
    let cont5 = 0;
    for(i = 0; i<indicatorNum5.length; i++){
        if(indicatorNum5.charAt(i) == ">"){
            if(cont5 == 1){
                indicator5 = indicatorNum5.substring(i+1,60);
            }
            cont5++;
        }
    }

    let indicatorNum6 = $(".indicatorContainer").children().next().next().next().next().next().children().children().html();
    const indicator6Value = $(".indicatorContainer").children().next().next().next().next().next().children().children().next().html();
    let indicator6 = "";
    let cont6 = 0;
    for(i = 0; i<indicatorNum6.length; i++){
        if(indicatorNum6.charAt(i) == ">"){
            if(cont6 == 1){
                indicator6 = indicatorNum6.substring(i+1,60);
            }
            cont6++;
        }
    }

    let indicatorNum7 = $(".indicatorContainer").children().next().next().next().next().next().next().children().children().html();
    const indicator7Value = $(".indicatorContainer").children().next().next().next().next().next().next().children().children().next().html();
    let indicator7 = "";
    let cont7 = 0;
    for(i = 0; i<indicatorNum7.length; i++){
        if(indicatorNum7.charAt(i) == ">"){
            if(cont7 == 1){
                indicator7 = indicatorNum7.substring(i+1,60);
            }
            cont7++;
        }
    }
    
    let fearAndGreedData = new Map();

    fearAndGreedData.set("FearAndGreedValue", valueFG2);
    fearAndGreedData.set(indicator1, indicator1Value);
    fearAndGreedData.set(indicator2, indicator2Value);
    fearAndGreedData.set(indicator3, indicator3Value);
    fearAndGreedData.set(indicator4, indicator4Value);
    fearAndGreedData.set(indicator5, indicator5Value);
    fearAndGreedData.set(indicator6, indicator6Value);
    fearAndGreedData.set(indicator7, indicator7Value);

    return fearAndGreedData;
});
