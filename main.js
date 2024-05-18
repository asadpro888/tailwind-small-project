let buttons = document.querySelectorAll('.bttn');
let spn = document.querySelector('.spn');

let count = 1;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.disabled = true;
    button.style.backgroundColor = `black`
    spn.textContent = Number(spn.textContent) + count;
  });
});