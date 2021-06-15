import Countdown from './modules/countdown.js';

const dataAtual = new Date();
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// take the values
const input = document.querySelector('#date');
const alertIvalid = document.querySelector('.form span');
const play = document.querySelector('.form .btn-play');
const reset = document.querySelector('.time-area .btn-reset');
const timeArea = document.querySelector('.time-area');
const form = document.querySelector('.form');
const daysScreen = document.querySelector('[data-time="day"]');
const hoursScreen = document.querySelector('[data-time="hours"]');
const minutesScreen = document.querySelector('[data-time="minutes"]');
const secondsScreen = document.querySelector('[data-time="seconds"]');
let clearTime = false;
let finaleDate;
// clear the values
function transformDates(data) {
  const regespClear = /\D/g;
  const regespSelect = /(\d{2})(\d{2})(\d{4})/g;
  const dataArray = data.replace(regespClear, '').replace(regespSelect, '$1,$2,$3').split(',');
  const dayValue = dataArray[0];
  const month = monthArray[dataArray[1] - 1];
  const year = dataArray[2];
  const dateValue = `${dayValue} ${month} ${year}`;
  return dateValue;
}
// validate the values
function validData(data) {
  const valid = new Date(data);
  if (valid.getTime() > dataAtual.getTime()) {
    alertIvalid.style.display = 'none';
    return true;
  } else {
    alertIvalid.style.display = 'block';
  }
}
// put the values in the api and screen
function setValues(datavalue) {
  form.style.display = 'none';
  timeArea.style.display = 'flex';
  let datefuture = new Countdown(`${datavalue}`);
  daysScreen.innerText = datefuture.days;
  hoursScreen.innerText = datefuture.hours;
  minutesScreen.innerText = datefuture.minutes;
  secondsScreen.innerText = datefuture.seconds;
  const intervalTime = setInterval(() => {
    if (clearTime) {
      clearInterval(intervalTime);
    } else {
      datefuture = new Countdown(`${datavalue}`);
      daysScreen.innerText = datefuture.days;
      hoursScreen.innerText = datefuture.hours;
      minutesScreen.innerText = datefuture.minutes;
      secondsScreen.innerText = datefuture.seconds;
      localStorage.Savedate = datavalue;
    }
  }, 1000);
  return function resetTime() {
    datefuture = 0;
    input.value = '';
    form.style.display = 'flex';
    timeArea.style.display = 'none';
  };
}
// reset the values
function hendalReset(event) {
  event.preventDefault();
  clearTime = true;
  localStorage.clear();
  const reset = setValues();
  reset();
}
// event data transformation
function hendalCountdown(event) {
  event.preventDefault();
  const data = input.value;
  const dateValue = transformDates(data);
  const dateValid = validData(dateValue);
  if (dateValid) {
    finaleDate = dateValue;
    setValues(finaleDate);
    clearTime = false;
  }
}
// reload window
function initFunctions() {
  if (localStorage.Savedate) {
    setValues(localStorage.Savedate);
    clearTime = false;
  } else {
    form.style.display = 'flex';
  }
  play.addEventListener('click', hendalCountdown);
  reset.addEventListener('click', hendalReset);
}
window.addEventListener('load', initFunctions);
