let celsiusIp = document.querySelector('#celsius > input');
let fahIp = document.querySelector('#fahrenheit > input');
let kelvinIp = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusIp.addEventListener('input', function(){
 
    let cTemp = parseFloat(celsiusIp.value)
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    fahIp.value = roundNumber(fTemp)
    kelvinIp.value = roundNumber(kTemp)
})

fahIp.addEventListener('input', function(){
 
    let fTemp = parseFloat(fahIp.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celsiusIp.value = roundNumber(cTemp)
    kelvinIp.value = roundNumber(kTemp)
})

kelvinIp.addEventListener('input', function(){
 
    let kTemp = parseFloat(kelvinIp.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusIp.value = roundNumber(cTemp)
    fahIp.value = roundNumber(fTemp)
})


btn.addEventListener('click', () => {
    celsiusIp.value = ""
    fahIp.value = ""
    kelvinIp.value = ""
})