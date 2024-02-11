let btnencrypt = document.getElementById("btn-encrypt");
let btndecrypt = document.getElementById("btn-decrypt");
let btncopy = document.getElementById("btn-copy");
let resultENDE = document.getElementById("result-en/de");

function encrypt() {
  let mainText = document.getElementById("before-text").value;
  if (mainText.trim() === "") {
    alert("Campo de texto vacio >:c");
    return;
  }

  let vowels = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "fat",
  };
  let encryptedText = mainText.replace(/[aeiou]/gi, function (remplaceVowels) {
    return vowels[remplaceVowels.toLowerCase()];
  });
  UpdateUI(encryptedText, 'Texto cifrado con éxito');
  resultENDE.innerText = encryptedText;
}

function decrypt() {
  let mainText = document.getElementById("before-text").value;
  if (mainText.trim() === "") {
    alert("Campo de texto vacio >:c");
    return;
    }

  let replaceVowels = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    fat: "u",
  };
  let decryptedText = mainText.replace(
    /(ai|enter|imes|ober|fat)/gi,
    function (remplaceEncrypt) {
      return replaceVowels[remplaceEncrypt.toLowerCase()];
    }
  );
    UpdateUI(decryptedText, 'Texto descifrado con éxito' );
}

async function copy() {
  try {
    await navigator.clipboard.writeText(resultENDE.value);
    window.alert("Copiado correctamente c:");
  } catch (err) {
    window.alert("Error al copiar :c");
  }
}

function UpdateUI(text, message) {
  
  let showH1 = document.getElementById("show-h1");
  let floatingHTML = document.getElementById("floating");
  let personTextHTML = document.getElementById("person-text");
  let sitPersonHTML = document.getElementById("sit-person");
  showH1.innerText = message;
  floatingHTML.style.borderTopRightRadius = "0px";
  floatingHTML.style.justifyContent = "space-between";
  resultENDE.style.width = "250px";
  resultENDE.style.height = "400px";
  personTextHTML.style.display = "flex";
  personTextHTML.style.flexDirection = "column";
  sitPersonHTML.style.display = "none";
  btncopy.style.display = "block";
  resultENDE.innerText = text;
}


btnencrypt.addEventListener("click", encrypt);
btndecrypt.addEventListener("click", decrypt);
btncopy.addEventListener("click", copy);
