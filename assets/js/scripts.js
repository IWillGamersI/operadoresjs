var botao = document.getElementById('botao')

botao.addEventListener('click',()=>{
    
    var numero1 = document.getElementById('numero1')
    var numero2 = document.getElementById('numero2')

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)

    if(!n1 == '' && !n2 == ''){
        
        soma(n1,n2)
    }
    else{
        alert('Digite 2 numeros')
    }

})

const soma = (nu1,nu2)=>{   
    
    var resulIguais = document.getElementById('resultado-iguais') 
    var resulSoma = document.getElementById('resultado-soma') 
    var resulMaior = document.getElementById('resultado-maior') 
    var resulMenor = document.getElementById('resultado-menor') 
    var resulPar = document.getElementById('resultado-par') 
    var resulImpar = document.getElementById('resultado-impar')
    var resultTextoIguais = document.getElementById('resultado-texto-iguais')
    var resultTextoSoma = document.getElementById('resultado-texto-soma')
    var resultCompara = document.getElementById('resultado-compara')
    
    var n1 = Number(nu1)
    var n2 = Number(nu2)
    var resul = n1 + n2
    
    resulSoma.innerHTML = resul
    resultTextoSoma.innerHTML = `A soma de ${n1} e ${n2} é ${resul}`
    
    if(resul > 20){
        resultCompara.innerHTML = `A soma total de ${n1} e ${n2} é maior que 20. `
    }else if(resul > 10 && resul < 20){
        resultCompara.innerHTML = `A soma total de ${n1} e ${n2} é maior que 10 e menor que 20. `
        
    }else{
        resultCompara.innerHTML = `A soma de ${n1} e ${n2} é menor que 10 e menor que 20.`
    }
    
    if(n1 == n2){
        resulIguais.innerHTML = 'É igual!'
        resultTextoIguais.innerHTML = `Os numeros ${n1} e ${n2}, são Iguais.`
    }else{
        resulIguais.innerHTML = 'Não é igual!'
        resultTextoIguais.innerHTML = `Os numeros ${n1} e ${n2}, não são Iguais.`
    }

    if(n1 < n2){
        resulMenor.innerHTML = n1
        resulMaior.innerHTML = n2
    }else{
        resulMenor.innerHTML = n2
        resulMaior.innerHTML = n1
    }

    if(resul % 2 == 0 ){
        resulPar.innerHTML = 'É Par!'
        resulImpar.innerHTML = 'Não é Impar!'
    }else{
        resulPar.innerHTML = 'Não é Par!'
        resulImpar.innerHTML = 'É Impar!'
    }
}


