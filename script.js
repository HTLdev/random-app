console.log('Hello, World!');
const rondomNumberEL = document.querySelector('#random-number');
rondomNumberEL.addEventListener('click', () => {
    document.querySelector('#result').textContent = Math.random();
});