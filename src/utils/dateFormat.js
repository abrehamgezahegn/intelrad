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

const getDate = (date) => {
  const month = monthNames[date.getMonth()];
  const dateNum = date.getDate();
  const year = date.getFullYear();
  return `${dateNum} ${month}, ${year}`;
};

const secondsToDate = (seconds) => {
  const t = new Date(1970, 0, 2); // Epoch
  t.setSeconds(seconds);
  return t;
};

export { getDate, secondsToDate };
