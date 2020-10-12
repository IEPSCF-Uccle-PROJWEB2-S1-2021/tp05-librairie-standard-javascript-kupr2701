let msg = "";

function chuckNorris(msg) {
  let result = "";
  let binaire = tobinary(msg);
  console.log(binaire);
  let precedent = "";

  for (let i = 0; i < binaire.length; i++) {
    if (precedent !== binaire.charAt(i)) {

      if(i!==0)
      result += " ";
      if (binaire.charAt(i) === "0") {
        result += "00 0"
      } else {
        result += "0 0"
      }
    } else {
      result = result + "0" ;
    }
    precedent = binaire.charAt(i);
  }
  return result;
}

function tobinary(string) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    const element = string.charCodeAt(index).toString(2);
    result += element;
  }

  return result;
}
