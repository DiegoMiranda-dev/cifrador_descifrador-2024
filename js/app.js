

let btnencrypt = document.getElementById("btn-encrypt");
let btndecrypt = document.getElementById("btn-decrypt");
let btncopy = document.getElementById("btn-copy");
let resultENDE = document.getElementById("result-en/de");

function encrypt() {
  let mainText = document.getElementById("before-text").value;
  if (mainText.trim() === "") {
    alertsENDE('¡Error!', 'No hay ningún texto para cifrar');
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
    alertsENDE('¡Error!', 'No hay ningún texto para descifrar');
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
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "¡Copiado correctamente!"
    });
  } catch (err) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "¡Oopss..! Error al copiar."
    });
  }
}

function UpdateUI(text, message) {
  
  let showH1 = document.getElementById("show-h1");
  let floatingHTML = document.getElementById("floating");
  let personTextHTML = document.getElementById("person-text");
  let sitPersonHTML = document.getElementById("sit-person");
  showH1.innerText = message;
  floatingHTML.style.justifyContent = "space-between";
  resultENDE.style.width = "250px";
  resultENDE.style.height = "400px";
  personTextHTML.style.display = "flex";
  personTextHTML.style.flexDirection = "column";
  sitPersonHTML.style.display = "none";
  btncopy.style.display = "block";
  resultENDE.innerText = text;
}

function alertsENDE(text, message) {
  let timerInterval;
  Swal.fire({
    title: text,
    html: message,
    timer: 1750,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  return;
  }



btnencrypt.addEventListener("click", encrypt);
btndecrypt.addEventListener("click", decrypt);
btncopy.addEventListener("click", copy);

