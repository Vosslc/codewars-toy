// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

function past(hr, min, sec) {
  let hours = 3600000;
  let minutes = 60000;
  let seconds = 1000;
  let totalHours;
  let totalMinutes;
  let totalSeconds;

  if (hr <= 23){
    totalHours = hours * hr 
  }if (min <= 59){
    totalMinutes = minutes * min 
  }if (sec <= 59){
    totalSeconds = seconds * sec 
  }
  return totalHours + totalMinutes + totalSeconds

  
}

past(0,1,10)



// Below is Best Practice

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}