import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

let userData = {
  
  delay: formRef.elements.delay.value,
  step: formRef.elements.step.value,
  amount: formRef.elements.amount.value
};

formRef.addEventListener('input', event => {

  const { name, value } = event.target;
    
  userData[name] = value;
  
});

const handleSubmit = event => {
  event.preventDefault();
  let delayValue = Number(userData.delay);
  let stepValue = Number(userData.step);
  let amountValue = Number(userData.amount);

  for (let i = 1; i <= amountValue; i += 1) {

    createPromise(i, delayValue)
      .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayValue += stepValue
 
  };
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    });
    
  }
  
  formRef.addEventListener('submit', handleSubmit)
  



  
