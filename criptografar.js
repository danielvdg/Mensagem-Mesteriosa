var metodoDeCodificacao = document.querySelector("#metodoDeCodificao");
var selecaoDeMetodo = document.querySelector("#selectMethod");

var mensagemDeEntrada = document.querySelector("#mensagemEntrada");
var mensagemDeSaida = document.querySelector("#mensagemSaida");
var resultadoConteiner = document.querySelector(".resultado");

var radioCodificar = document.querySelector("#radioCodificar");
var radioDescodificar = document.querySelector("#radioDescodificar");
var incremento = document.querySelector(".incremento");
var incrementoValor = document.querySelector("#incremento");

var btnCodificar = document.querySelector("#btnCodificar");
var btnDescodificar = document.querySelector("#btnDescodificar");

selecaoDeMetodo.addEventListener("change", () => {
  btnCodificar.classList.add("invisivel");
  btnDescodificar.classList.add("invisivel");
  incremento.classList.add("invisivel");
  resultadoConteiner.classList.add("invisivel");

  if (metodoDeCodificacao.value === "base64") {
    incremento.classList.add("invisivel");
    radioCodificar.addEventListener("focus", () => {
      btnCodificar.classList.remove("invisivel");
      btnDescodificar.classList.add("invisivel");
      resultadoConteiner.classList.add("invisivel");
      btnCodificar.addEventListener("click", () => {
        resultadoConteiner.classList.remove("invisivel");
        mensagemDeSaida.textContent = btoa(mensagemDeEntrada.value);
      });
    });

    radioDescodificar.addEventListener("focus", () => {
      btnDescodificar.classList.remove("invisivel");
      btnCodificar.classList.add("invisivel");
      resultadoConteiner.classList.add("invisivel");
      btnDescodificar.addEventListener("click", () => {
        resultadoConteiner.classList.remove("invisivel");
        mensagemDeSaida.textContent = atob(mensagemDeEntrada.value);
      });
    });
  } else if (metodoDeCodificacao.value === "cifraCs") {
    incremento.classList.remove("invisivel");
    radioCodificar.addEventListener("focus", () => {
      btnCodificar.classList.remove("invisivel");
      btnDescodificar.classList.add("invisivel");
      resultadoConteiner.classList.add("invisivel");

      btnCodificar.addEventListener("click", () => {
        resultadoConteiner.classList.remove("invisivel");
        let arryText = mensagemDeEntrada.value.split("");
        let numeracaoAscii = [];

        let LetrasAscii = [];
        for (let i = 0; i < arryText.length; i++) {
          numeracaoAscii.push(
            arryText[i].charCodeAt() + parseInt(incrementoValor.value)
          );
        }

        for (let i = 0; i < numeracaoAscii.length; i++) {
          LetrasAscii.push(String.fromCharCode(numeracaoAscii[i]));
        }

        mensagemDeSaida.textContent = LetrasAscii.join("");
      });
    });

    radioDescodificar.addEventListener("focus", () => {
      btnDescodificar.classList.remove("invisivel");
      btnCodificar.classList.add("invisivel");
      resultadoConteiner.classList.add("invisivel");

      btnDescodificar.addEventListener("click", () => {
        resultadoConteiner.classList.remove("invisivel");
        let arryText = mensagemDeEntrada.value.split("");
        let numeracaoAscii = [];

        let LetrasAscii = [];
        for (let i = 0; i < arryText.length; i++) {
          numeracaoAscii.push(
            arryText[i].charCodeAt() - parseInt(incrementoValor.value)
          );
        }

        for (let i = 0; i < numeracaoAscii.length; i++) {
          LetrasAscii.push(String.fromCharCode(numeracaoAscii[i]));
        }

        mensagemDeSaida.textContent = LetrasAscii.join("");
        console.log(LetrasAscii);
      });
    });
  } else {
    console.log("selecione algo");
  }
});
