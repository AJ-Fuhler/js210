const dms = angle => {
  const DEGREE = '\u00B0';
  const SECONDS_IN_HOUR = 3600;
  const MINUTES_IN_HOUR = 60;
  const SECONDS_IN_MINUTE = 60;

  const degrees = parseInt(angle, 10) % 360;

  if (degrees === 0) {
    return `0${DEGREE}00'00"`;
  }

  const hourPercentage = angle - degrees;
  const totalSeconds = Math.floor(SECONDS_IN_HOUR * hourPercentage);
  const minutes = Math.floor(totalSeconds / MINUTES_IN_HOUR);
  const seconds = totalSeconds - (minutes * SECONDS_IN_MINUTE);

  const degreeStr  = `${degrees}${DEGREE}`;
  const minutesStr = `${minutes}`.length === 1 ? `0${minutes}'` : `${minutes}'`;
  const secondsStr = `${seconds}`.length === 1 ? `0${seconds}"` : `${seconds}"`;

  return degreeStr + minutesStr + secondsStr;
};

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");