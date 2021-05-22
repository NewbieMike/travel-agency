function zeroPad(num) {
  return num.toString().padStart(2, '0');
}
export const formatTime = value => {
  if ((value) && (typeof (value) === 'number') && (value >= 0)) {
    const seconds = Math.floor(value % 60);
    const mins = Math.floor(value / 60 % 60);
    const hours = Math.floor(value / 3600);
    const finalHour = [hours, mins, seconds];
    let newHour =[];
    finalHour.forEach(
      function(num) {
        let paddedNumber = zeroPad(num);
        newHour.push(paddedNumber);
      }
    ); 
    return newHour.join(':');
    //const final = [hours, mins, seconds].map(element => `${element + 100}`.substring(1));
    //return final.join(':');
  } else {
    return null;
  }
};