
const puppeteer = require('puppeteer')

const symbols = ["drivers"];

async function app () {
    for await (symbol of symbols){
        const description  = await getdescription(symbol)
        console.log({symbol, description})
    }
}

async function getdescription (symbol) {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage()
    await page.goto(`https://www.formula1.com/en/results.html/2020/${symbols}.html`)
    
    const text = await page.evaluate(()=> {
        return document.querySelector("body > div.site-wrapper > main > article > div > div.ResultArchiveContainer > div.resultsarchive-wrapper > div.resultsarchive-content > div > table").innerHTML

    })

    await browser.close()

    return text

}


app()



