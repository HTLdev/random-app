console.log('Hello, Wooorld!');
const rondomNumberEL = document.querySelector('#random-number');
rondomNumberEL.addEventListener('click', () => {
    document.querySelector('#result').textContent = Math.random();
});