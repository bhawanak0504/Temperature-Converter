
const calculateTemp = () => {
    const numberTemp = parseFloat(document.getElementById('temp').value);
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fehToCel = (fehr) => {
        let celsius = Math.round((fehr - 32) * 5/9);
        return celsius;
    }

    let result;

    if (valueTemp === 'cel') { 
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`; 
    } else {
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`; 
    }
}

const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

const btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100;
}

/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp - 32) * (5/9) + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

btn.addEventListener('click', ()=>{
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});