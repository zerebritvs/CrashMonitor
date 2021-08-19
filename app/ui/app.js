
//Paint the data on screen
async function paintData(){
    try{
        const goldPrice = await api.getGoldPrice();
        const usaInflation = await api.getUsaInflation();
        const fearAndGreedData = await api.getFearGreed();
        const whilshire5000 = await api.getWilshire5000();
        const gdpValue = await api.getGDP();
        const buffetIndicator = parseFloat(whilshire5000)/parseFloat(gdpValue);
        console.log(parseFloat(whilshire5000));
        console.log(parseFloat(gdpValue));
        console.log(buffetIndicator);

        const goldCell = document.querySelector("#goldValue");
        const inflationCell = document.querySelector("#usaInflationValue");
        const ind1Value = document.querySelector("#ind-1-value");
        const ind2Value = document.querySelector("#ind-2-value");
        const ind3Value = document.querySelector("#ind-3-value");
        const ind4Value = document.querySelector("#ind-4-value");
        const ind5Value = document.querySelector("#ind-5-value");
        const ind6Value = document.querySelector("#ind-6-value");
        const ind7Value = document.querySelector("#ind-7-value");
        

        goldCell.innerHTML = goldPrice;
        inflationCell.innerHTML = usaInflation;
        ind1Value.innerHTML = fearAndGreedData.get("Junk Bond Demand");
        ind2Value.innerHTML = fearAndGreedData.get("Market Momentum");
        ind3Value.innerHTML = fearAndGreedData.get("Put and Call Options");
        ind4Value.innerHTML = fearAndGreedData.get("Safe Haven Demand");
        ind5Value.innerHTML = fearAndGreedData.get("Market Volatility");
        ind6Value.innerHTML = fearAndGreedData.get("Stock Price Breadth");
        ind7Value.innerHTML = fearAndGreedData.get("Stock Price Strength");


    }catch(err){
        console.log(err);
    }
}

paintData();

