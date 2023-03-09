const puppeteer = require("puppeteer");
const fs = require("fs");

const scrapping = async () => {
  const BASE_URL = "https://www.banderas-mundo.es/indice";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();

  await page.goto(BASE_URL);
  await page.waitForTimeout(2000);

  const countries = await page.$$eval(".flag-grid > li ", (nodes) => {
    return nodes.map((n) => ({
      country: n.querySelector("span").innerText,
      img: (n.querySelector("img").src).replace('/h80','/w1160'),
      population: n.querySelector('a').getAttribute('data-population'),
      area: n.querySelector('a').getAttribute('data-area')
    }));
  });
/* Array.from(document.querySelectorAll(".inner-column DIV")).map(d => d.getAttribute("data-thing"))
) */
  await browser.close();

  const jsonCountries = JSON.stringify(countries)
  fs.writeFile('countries.json',jsonCountries, ()=>{console.log('Created 💚💚')})
};
scrapping();
