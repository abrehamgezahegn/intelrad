const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "De",
];

const getDate = (seconds) => {
  const date = new Date(seconds * 1000);
  const month = monthNames[date.getMonth()];
  const dateNum = date.getDate();
  const year = date.getFullYear();
  return `${dateNum} ${month}, ${year}`;
};

const getTime = (seconds) => {
  const date = new Date(seconds * 1000);

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export { getDate, getTime };
