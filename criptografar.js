var metodoDeCodificacao = document.querySelector('#metodoDeCodificao')
var selecaoDeMetodo  = document.querySelector('#selectMethod')

var mensagemDeEntrada = document.querySelector('#mensagemEntrada')
var mensagemDeSaida = document.querySelector('#mensagemSaida')
var resultadoConteiner = document.querySelector('.resultado')

var radioCodificar = document.querySelector('#radioCodificar')
var radioDescodificar = document.querySelector('#radioDescodificar')

var btnCodificar  = document.querySelector('#btnCodificar')
var btnDescodificar = document.querySelector('#btnDescodificar')

selecaoDeMetodo.addEventListener('change', ()=>{

    if(metodoDeCodificacao.value === 'base64'){
        
        radioCodificar.addEventListener('focus', ()=>{
            btnCodificar.classList.remove('invisivel')
            btnDescodificar.classList.add('invisivel')
            btnCodificar.addEventListener('click',()=>{
                resultadoConteiner.classList.remove('invisivel') 
                mensagemDeSaida.textContent= btoa(mensagemDeEntrada.value)
                
            })

        })

        radioDescodificar.addEventListener('focus', ()=>{
            btnDescodificar.classList.remove('invisivel')
            btnCodificar.classList.add('invisivel')
            btnDescodificar.addEventListener('click',()=>{
                resultadoConteiner.classList.remove('invisivel') 
                mensagemDeSaida.textContent= atob(mensagemDeEntrada.value)
                
            })

        })
       
    }else if(metodoDeCodificacao.value ==='cifraCs'){
        console.log('cifra');
        
    }else{
        console.log('selecione algo');
    }

})