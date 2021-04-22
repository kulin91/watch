const timeNumbersElementForBelarus = document.getElementById("belarus_time-numbers");
const secondHandElementForBelarus = document.getElementById("belarus_second_hand");
const minuteHandElementForBelarus = document.getElementById("belarus_minute_hand");
const hourseHandElementForBelarus = document.getElementById("belarus_hourse_hand");

const timeNumbersElementForFrance = document.getElementById("france_time-numbers");
const secondHandElementForFrance = document.getElementById("france_second_hand");
const minuteHandElementForFrance = document.getElementById("france_minute_hand");
const hourseHandElementForFrance = document.getElementById("france_hourse_hand");

const regionFrance = 'UTC+2';
const regionBelarus = 'UTC+3';
const regionChina

function timeNow(region) {
  const currentTime = luxon.DateTime.now().setZone(region);
  const result = currentTime.toLocaleString(luxon.DateTime.TIME_24_WITH_SECONDS);
  return result;
};


timeNumbersElementForBelarus.innerHTML = timeNow(regionBelarus);
timeNumbersElementForFrance.innerHTML = timeNow(regionFrance);


function createSecondDeg(region) {
  const timesToClockHand = luxon.DateTime.now().setZone(region);
  const secondsPosition = timesToClockHand.second;
  const degSeconds = 6;
  const result = secondsPosition * degSeconds;
  if (secondsPosition >= 360) {
    secondsPosition = 1;
  }
  return result;
}


function createMinuteDeg(region) {
  const timesToClockHand = luxon.DateTime.now().setZone(region);
  const minutePosition = timesToClockHand.minute;
  const degMinute = 6;
  const result = minutePosition * degMinute;
  if (minutePosition >= 360) {
    minutePosition = 1;
  }
  return result;
}


function createHourseDeg(region) {
  const timesToClockHand = luxon.DateTime.now().setZone(region);
  const hoursePosition = timesToClockHand.toFormat('h');
  const degHourse = 30;
  const result = hoursePosition * degHourse;
  if (hoursePosition >= 360) {
    hoursePosition = 1;
  }
  return result;
}


setInterval(() => {
  timeNumbersElementForBelarus.innerHTML = timeNow(regionBelarus);
  const angleSecondForBelarus = createSecondDeg(regionBelarus);
  secondHandElementForBelarus.style.transform = `rotate(${angleSecondForBelarus}deg)`;
  const angleMinuteForBelarus = createMinuteDeg(regionBelarus);
  minuteHandElementForBelarus.style.transform = `rotate(${angleMinuteForBelarus}deg)`;
  const angleHourseForBelarus = createHourseDeg(regionBelarus);
  hourseHandElementForBelarus.style.transform = `rotate(${angleHourseForBelarus}deg)`;

  timeNumbersElementForFrance.innerHTML = timeNow(regionFrance);
  const angleSecondForFrance = createSecondDeg(regionFrance);
  secondHandElementForFrance.style.transform = `rotate(${angleSecondForFrance}deg)`;
  const angleMinuteForFrance = createMinuteDeg(regionFrance);
  minuteHandElementForFrance.style.transform = `rotate(${angleMinuteForFrance}deg)`;
  const angleHourseForFrance = createHourseDeg(regionFrance);
  hourseHandElementForFrance.style.transform = `rotate(${angleHourseForFrance}deg)`;
}, 1000);









