const config = [
  {
    country: "Belarus",
    city: "Minsk",
    region: "UTC+3",
    key: "by",
    color: "#FAFAFA",
  },
  {
    country: "France",
    city: "Paris",
    region: "UTC+2",
    key: "fr",
    color: "#FAFAFA",
  },
  {
    country: "China",
    city: "Beijing",
    region: "UTC+8",
    key: "ch",
    color: "#FAFAFA",
  },
  {
    country: "Canada",
    city: "Ottawa",
    region: "UTC-4",
    key: "cn",
    color: "#FAFAFA",
  },
  {
    country: "Poland",
    city: "Warsaw",
    region: "UTC+2",
    key: "pl",
    color: "#FAFAFA",
  },
  {
    country: "Germany",
    city: "Berlin",
    region: "UTC+2",
    key: "gr",
    color: "#FAFAFA",
  },
  {
    country: "Brazil",
    city: "Rio de Janeiro",
    region: "UTC-3",
    key: "br",
    color: "#FAFAFA",
  },
  {
    country: "England",
    city: "London",
    region: "UTC+1",
    key: "en",
    color: "#FAFAFA",
  },
  {
    country: "Africa",
    city: "Algiers",
    region: "UTC+1",
    key: "af",
    color: "#FAFAFA",
  },
  {
    country: "Australia",
    city: "Sydney",
    region: "UTC+10",
    key: "au",
    color: "#FAFAFA",
  },
];

function randomColor() {
  const result = '#' + (Math.random().toString(16) + '000000')
  .substring(2, 8).toUpperCase();
  return result;
}

function timeNow(region) {
  const currentTime = luxon.DateTime.now().setZone(region);
  const result = currentTime.toLocaleString(luxon.DateTime.TIME_24_WITH_SECONDS);
  return result;
};

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

function createWatchers(watchConfig) {
  const secondHandId = `${watchConfig.key}_second_hand`;
  const minuteHandId = `${watchConfig.key}_minute_hand`;
  const hourseHandId = `${watchConfig.key}_hourse_hand`;
  const timeNumbersId = `${watchConfig.key}_time-numbers`;
  const nameOfCountryId = `${watchConfig.key}_name_of_country`;
  const countryCityId = `${watchConfig.key}_country_city`;
  const watchColorId = `${watchConfig.key}_watch`;

  const temp = document.getElementById("watch_template");
  const clone = temp.content.cloneNode(true);

  clone.getElementById("second_hand").id = secondHandId;
  clone.getElementById("minute_hand").id = minuteHandId;
  clone.getElementById("hourse_hand").id = hourseHandId;
  clone.getElementById("time-numbers").id = timeNumbersId;
  clone.getElementById("name_of_country").id = nameOfCountryId;
  clone.getElementById("country_city").id = countryCityId;
  clone.getElementById("watch").id = watchColorId;

  const wall = document.getElementById("wall");
  wall.appendChild(clone);

  const secondHandElement = document.getElementById(secondHandId);
  const minuteHandElement = document.getElementById(minuteHandId);
  const hourseHandElement = document.getElementById(hourseHandId);
  const timeNumbersElement = document.getElementById(timeNumbersId);
  const nameOfCountryElement = document.getElementById(nameOfCountryId);
  const countryCityElement = document.getElementById(countryCityId);
  const watchColorElement = document.getElementById(watchColorId);

  nameOfCountryElement.innerHTML = watchConfig.country;
  countryCityElement.innerHTML = watchConfig.city;
  watchColorElement.style.backgroundColor = `${randomColor()}`;

  setInterval(() => {
    timeNumbersElement.innerHTML = timeNow(watchConfig.region);
    const angleSecond = createSecondDeg(watchConfig.region);
    secondHandElement.style.transform = `rotate(${angleSecond}deg)`;
    const angleMinute = createMinuteDeg(watchConfig.region);
    minuteHandElement.style.transform = `rotate(${angleMinute}deg)`;
    const angleHourse = createHourseDeg(watchConfig.region);
    hourseHandElement.style.transform = `rotate(${angleHourse}deg)`;
  }, 1000)
}



config.forEach(createWatchers)


//******************************************************** */



