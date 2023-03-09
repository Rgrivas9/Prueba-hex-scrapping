const fs = require("fs");
/* for (const country of require("../countries.json")) {
  //fs.writeFile(`${country.country}.png`,country.img, ()=>{console.log('Created 💚💚')})
  const outputFileName =`${country.country}.png`
    fs.createWriteStream(outputFileName).write(country.img);

  
} */

const saveImg = async () => {
  for (const country of require("../countries.json")) {
    const response = await fetch(country.img);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const name = country.country.replaceAll(" ", "").toLowerCase();
    const noAcc = name
      .replaceAll("á", "a")
      .replaceAll("é", "e")
      .replaceAll("í", "i")
      .replaceAll("ó", "o")
      .replaceAll("ú", "u");
    const outputFileName = `${noAcc}.png`;
    fs.createWriteStream(outputFileName).write(buffer);
  }
};

saveImg();
