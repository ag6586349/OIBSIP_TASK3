let celInput = document.querySelector('.celsius > input')
let KelInput = document.querySelector('.kelvin > input')
let fahInput = document.querySelector('.fahrenheit > input')
let btn = document.querySelector('.clear button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celInput.addEventListener('input',function(){
    let c = parseFloat(celInput.value)
    let k = c+273.15
    let f = (c*(9/5))+32

    fahInput.value=roundNumber(f)
    KelInput.value=roundNumber(k)
})
fahInput.addEventListener('input',function(){
    let f = parseFloat(fahInput.value)
    let k = (f-32)*(5/9)+273.15
    let c = (f-32)*(5/9)

    celInput.value=roundNumber(c)
    KelInput.value=roundNumber(k)
})
KelInput.addEventListener('input',function(){
    let k = parseFloat(KelInput.value)
    let c = k-273.15
    let f = (k-273.15)*(9/5)+32

    fahInput.value=roundNumber(f)
    celInput.value=roundNumber(c)
})

btn.addEventListener('click',()=>{
    celInput.value=""
    KelInput.value=""
    fahInput.value=""
})