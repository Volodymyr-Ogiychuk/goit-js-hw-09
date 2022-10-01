
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputValid: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days:  document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    timerBlock: document.querySelector('.timer'),
    timerItem: document.querySelectorAll('.field'),
    timerLabel: document.querySelectorAll('.label'),
}

const { inputValid, timerHtml, btnStart, days, hours, minutes, seconds, timerBlock, timerItem, timerLabel, } = refs;



let timerDiff = 0;

timerBlock.style.display = 'flex';
timerBlock.style.marginTop = '20px';

timerItem.forEach(element => {
    element.style.display = 'flex';
    element.style.marginRight = '12px';
    element.style.flexDirection = 'column';
    element.style.alignItems = 'center';
    element.style.fontWeight = '500'
    element.style.fontSize = '26px'
});

timerLabel.forEach(element => {

    element.textContent = element.textContent.toUpperCase();
    element.style.fontSize = '10px';
    element.style.fontWeight = '600';
})
    

btnStart.disabled = true;
console.log('Current time: ', inputValid.value);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const { defaultDate } = this.config;
        if (selectedDates[0] < defaultDate) {
            btnStart.disabled = true;
            Notify.failure('Please choose a date in the future')
            console.log('Current time after choose: ', selectedDates[0]);
        } else {
                btnStart.disabled = false;   
            Notify.success('Date is correct');
            console.log('Current time after choose: ', selectedDates[0]);
        }
    
  },
};

flatpickr(inputValid, options);

btnStart.addEventListener('click', timerStart);

function timerStart() {

    countdown = setInterval(() => {
        const timerDiff = new Date(inputValid.value) - new Date();
        console.log(timerDiff);
         btnStart.disabled = true;

        if (timerDiff >= 0) {
            
            const timeObj = timeConverter(timerDiff);

            days.textContent = `${addLeadingZero(timeObj.days)} `;
            hours.textContent = `${addLeadingZero(timeObj.hours)} `;
            minutes.textContent = `${addLeadingZero(timeObj.minutes)} `;
            seconds.textContent = `${addLeadingZero(timeObj.seconds)} `;
        } else {
            Notify.success('Countdown finished');
            clearInterval(countdown)
        }

    }, 1000)
}

function timeConverter (ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}


