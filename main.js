

function valor (){

const dolar = document.getElementById('dolar').value;

 var real = (dolar / 5.06).toFixed(2) ;

const convertido = document.getElementById('convertido');

convertido.innerHTML = "<p>" + real + "</p>"; 


}

const toggleBtn = document.getElementById('btn1');

const body = document.body;
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const butao = document.getElementById('btn1')

toggleBtn.addEventListener('click', function(){


body.classList.toggle ('dark-mode')

header.classList.toggle('l1')

h1.classList.toggle('titulo')

butao.classList.toggle('btn2')




}) 