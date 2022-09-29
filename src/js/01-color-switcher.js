

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

console.log('btnStart', btnStart);
console.log('btnStop', btnStop);

let timerId = null;

btnStop.setAttribute('disabled', true);

btnStart.addEventListener('click', bStart);

function bStart(event) {
  
  btnStop.removeAttribute('disabled');
  btnStart.setAttribute('disabled', true);

  bodyRef.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  
  console.log(bodyRef.style.backgroundColor);

  btnStop.addEventListener('click', bStop);

function bStop() {
  clearInterval(timerId);
  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');
  btnStop.removeEventListener('click', bStop);
  }
}










setTimeout(() => {
  
  console.log("Second log");
}, 2000);
