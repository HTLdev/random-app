const max= document.querySelector('#max');
const min=document.querySelector('#min');
const resultEl=document.querySelector('#result');
const randomNumberEl=document.querySelector('#random-number');

const rondomNumberEL = document.querySelector('#random-number');
rondomNumberEL.addEventListener('click', () => {
    document.querySelector('#result').textContent = Math.random();
});