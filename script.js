const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const buton = document.querySelector('#calcular');
const result = document.querySelector('#result');

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = 'El resultado es: ' + sumaInputs;
}