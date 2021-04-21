const timeNumbersElement = document.getElementById("time-numbers");
const secondHandElement = document.getElementById("second_hand");
const minuteHandElement = document.getElementById("minute_hand");
const hourseHandElement = document.getElementById("hourse_hand");


function timeNow() {
  const currentTime = luxon.DateTime.now();
  const time = currentTime.toLocaleString(luxon.DateTime.TIME_24_WITH_SECONDS);
  return time;
};


timeNumbersElement.innerHTML = timeNow();


function createSecondDeg () {
  const timesToClockHand = luxon.DateTime.now();
  const secondsPosition = timesToClockHand.second;
  const degSeconds = 6;
  const result = secondsPosition * degSeconds;
  if (secondsPosition >= 360) {
    secondsPosition = 1;
  }
  return result;
}


function createMinuteDeg() {
  const timesToClockHand = luxon.DateTime.now();
  const minutePosition = timesToClockHand.minute;
  const degMinute = 6;
  const result = minutePosition * degMinute;
  if (minutePosition >= 360) {
    minutePosition = 1;
  }
  return result;
}


function createHourseDeg() {
  const timesToClockHand = luxon.DateTime.now();
  const hoursePosition = timesToClockHand.toFormat('h');
  const degHourse = 30;
  const result = hoursePosition * degHourse;
  if (hoursePosition >= 360) {
    hoursePosition = 1;
  }
  return result;
}


setInterval(() => {
  timeNumbersElement.innerHTML = timeNow();
  const angleSecond = createSecondDeg();
  secondHandElement.style.transform = `rotate(${angleSecond}deg)`;
  const angleMinute = createMinuteDeg();
  minuteHandElement.style.transform = `rotate(${angleMinute}deg)`;
  const angleHourse = createHourseDeg();
  hourseHandElement.style.transform = `rotate(${angleHourse}deg)`;
}, 1000);







