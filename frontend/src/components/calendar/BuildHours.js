const BuildHours = (start, end) => {
  let startHour = Number(start.replace(':00', ''));
  let endHour = Number(end.replace(':00', ''));
  const time = endHour - startHour;
  let hourPass;
  let timeArray = [];
  for (let i = 0; i < time; i++) {
    hourPass = startHour + i + " - " + (startHour + i + 1);
    timeArray.push(hourPass);
  }
  return timeArray
};

export default BuildHours;