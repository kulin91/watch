const config = [
  {
    country: "Belarus",
    city: "Minsk",
    region: "UTC+3",
    color: "#FAFAFA",
  },
  {
    country: "France",
    city: "Paris",
    region: "UTC+2",
    color: "#FAFAFA",
  },
  {
    country: "China",
    city: "Beijing",
    region: "UTC+8",
    color: "#FAFAFA",
  },
  {
    country: "Canada",
    city: "Ottawa",
    region: "UTC-4",
    color: "#FAFAFA",
  },
  {
    country: "Poland",
    city: "Warsaw",
    region: "UTC+2",
    color: "#FAFAFA",
  },
  {
    country: "Germany",
    city: "Berlin",
    region: "UTC+2",
    color: "#FAFAFA",
  },
  {
    country: "Brazil",
    city: "Rio de Janeiro",
    region: "UTC-3",
    color: "#FAFAFA",
  },
  {
    country: "England",
    city: "London",
    region: "UTC+1",
    color: "#FAFAFA",
  },
  {
    country: "Africa",
    city: "Algiers",
    region: "UTC+1",
    color: "#FAFAFA",
  },
  {
    country: "Africa",
    color: "#FAFAFA",
    city: "Algiers",
    region: "UTC+1",
  },
  {
    country: "Australia",
    city: "Sydney",
    region: "UTC+10",
    color: "#FAFAFA",
  },
];


const createWatcher = (watchConfig, clockId) => {
  const getTickPosition = (time, tickRotationDegree, unit) => {
    const ROUND_DEGREES = 360;
    let currentValue = time[unit];
    if (currentValue >= ROUND_DEGREES) {
      currentValue = 1;
    }
    const result = currentValue * tickRotationDegree;
    return result;
  }

  const getClockNode = (hoursId, minutesId, secondsId, timeId) => {
    const randomColor = '#' + (Math.random().toString(16) + '000000')
      .substring(2, 8).toUpperCase();

    const clone = document.getElementById("watch_template").content.cloneNode(true);
    clone.getElementById("second_tick").id = secondsId;
    clone.getElementById("minute_tick").id = minutesId;
    clone.getElementById("hours_tick").id = hoursId;
    clone.getElementById("time-numbers").id = timeId;
    clone.getElementById("name_of_country").innerHTML = watchConfig.country;
    clone.getElementById("country_city").innerHTML = watchConfig.city;
    clone.getElementById("watch").style.backgroundColor = randomColor;

    return clone;
  };

  const setCurrentTime = (hoursElement, minutesElement, secondsElement, timeElement) => {
    const currentTime = luxon.DateTime.now().setZone(watchConfig.region);
    const formattedTime = currentTime.toLocaleString(luxon.DateTime.TIME_24_WITH_SECONDS);

    timeElement.innerHTML = formattedTime;
    const angleSecond = getTickPosition(currentTime, 6, 'second');
    secondsElement.style.transform = `rotate(${angleSecond}deg)`;
    const angleMinute = getTickPosition(currentTime, 6, 'minute');
    minutesElement.style.transform = `rotate(${angleMinute}deg)`;
    const angleHours = getTickPosition(currentTime, 30, 'hour');
    hoursElement.style.transform = `rotate(${angleHours}deg)`;
  };

  const getIds = (id) => {
    return {
      secondsTickId: `${id}_second_tick`,
      minutesTickId: `${id}_minute_tick`,
      hoursTickId: `${id}_hours_tick`,
      timeNumbersId: `${id}_time-numbers`,
    };
  }

  const { secondsTickId, minutesTickId, hoursTickId, timeNumbersId } = getIds(clockId);

  const clockNode = getClockNode(hoursTickId, minutesTickId, secondsTickId, timeNumbersId);

  const wall = document.getElementById("wall");
  wall.appendChild(clockNode);

  const secondHandElement = document.getElementById(secondsTickId);
  const minuteHandElement = document.getElementById(minutesTickId);
  const hoursHandElement = document.getElementById(hoursTickId);
  const timeNumbersElement = document.getElementById(timeNumbersId);

  setCurrentTime(hoursHandElement, minuteHandElement, secondHandElement, timeNumbersElement);

  setInterval(() => {
    setCurrentTime(hoursHandElement, minuteHandElement, secondHandElement, timeNumbersElement);
  }, 1000);
};

const createWatchers = (configuration) => {
  let currentClockId = 0;
  configuration.forEach(createWatcher, currentClockId++);
};

createWatchers(config);