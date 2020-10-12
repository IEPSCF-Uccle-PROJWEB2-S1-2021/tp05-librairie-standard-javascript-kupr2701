
let Temperature = 5526; let data = "";

function analyzeTemperature(quantity, data) {
  const tabData = data.split(' '); let verif = false;
  if (quantity <= 0) {
    return 0;
  } else {
    if (quantity <= 10000 && tabData.length === quantity) {
      let i = 0;
      while (i < tabData.length && verif === false) {
        let element = parseInt(tabData[i]);
        if (-273 > element || element > 5526)
          verif = true;
        if (Math.abs(element) <= Temperature) {
          Temperature = element;
        }
        ++i;
      } if (verif === true) {
        Temperature = "error!! les temperatures doivent être comprisent entre -273 à 5526. ";
      }
    } else {
      Temperature = "la quantite semble ne pas correspondre aux datas ";
    }
  }
  return Temperature;
}

/*let Temperature = 5560; let data = "";
function analyzeTemperature(quantity, data) {
  const tabData = data.split(' ');
  if (quantity <= 0) {
    return 0;
  } else if (quantity <= 10000) {
    for (let i = 0; i < tabData.length; ++i) {
      let element = parseInt(tabData[i]);
      if (Math.abs(element) <= Temperature) {
        Temperature = element;
      }
    }
  }
  return Temperature;
}*/

