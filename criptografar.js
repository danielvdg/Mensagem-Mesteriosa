// variavéis que pegam o valor do mundo HTML
var selectPrincipal = document.querySelector("#selectPrincipal");
var selectLanguage = document.querySelector("#selectLanguage");

var entradaTexto = document.querySelector("#mensagemEntrada");
var resultado = document.querySelector("#mensagemSaida");

var radioCodificar = document.querySelector("#radioCodificar");
var radioDescodificar = document.querySelector("#radioDescodificar");

var btnPrincipal = document.querySelector("#btnPrincipal");

var btnCodificar = document.querySelector("#btnCodificar");
var btnDescodificar = document.querySelector("#btnDescodificar");

var inputIncremento = document.querySelector("#incremento")
var inputIncrementoPincipal = document.querySelector("#incrementoPrincipal")



// adicionando um evento quando eu mudo o tipo de lingaguem que quero utilizar
selectPrincipal.addEventListener("change", function(){
    // classListe que remove display none do css
    btnCodificar.classList.remove("invisivel");        
    btnDescodificar.classList.remove("invisivel")
    
    //Condicional para escolher a criptografia
    if (selectLanguage.value === "base64"){
        inputIncrementoPincipal.classList.add("invisivel")   
        radioCodificar = btoa(entradaTexto.value);
        btnCodificar.addEventListener("click", function(){
            
            resultado.textContent =  radioCodificar;
            console.log(resultado);
            
        });
        
        radioDescodificar = entradaTexto.value;
        btnDescodificar.addEventListener("click", function(){
            
            resultado.textContent = atob(radioDescodificar)
            console.log(resultado);
            
        });
        
    }else if(selectLanguage.value === "cifraCs"){
        radioCodificar = entradaTexto.value;
        inputIncrementoPincipal.classList.remove("invisivel")
        
        
        btnCodificar.addEventListener("click", function(){
            
            var valorIncremento = inputIncremento.value
            radioCodificar.split("");
            var nomeCharCode = [];
            var nomeFromCode = [];
            var juntaGeral ="";           
            
            
            console.log(radioCodificar);
            // esse loop serve para converter minha array de letras separadas para numeros da tabela ASCII
            for( var i = 0 ; i < radioCodificar.length ; i++){
                // transformar minha Array em numero da tabela ASCII
                nomeCharCode.push(radioCodificar[i].charCodeAt()+ valorIncremento);
                nomeFromCode.push(String.fromCharCode(nomeCharCode[i]));
                juntaGeral = nomeFromCode.join("");    
            }
           
            resultado.textContent = juntaGeral             
           
            
        });

        
        
    } else {
        inputIncrementoPincipal.classList.add("invisivel")
        btnCodificar.classList.add("invisivel");        
        btnDescodificar.classList.add("invisivel");
    }   
    
});
