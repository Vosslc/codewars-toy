
// I originally wrote the code in a convoluted way, see bellow 
function paperwork(n, m) {
  let classmates = n;
  let paperwork = m;
  let totalPapers = [];
  if( classmates <= 0 && paperwork <= 0 ){
    return 0;
  }else if( classmates > 0 && paperwork > 0 ){
    totalPapers = classmates * paperwork;
    return totalPapers
  }else{
    return null;
  }
  
}

// I refractor the code above to look more "readable" see eg below 
function paperwork(classmates, paperwork) {
  if( classmates <= 0 && paperwork <= 0 ){
    return 0;
  }else if( classmates > 0 && paperwork > 0 ){
      return classmates * paperwork;
  }else{
    return null;
  }
  
}

// cleaned the code to be more readable. It's now formated in an arrow function, and I utilized the power of implicit returns.
const paperwork = (classmates, paperwork) => {
  if( classmates <= 0 && paperwork <= 0 ) return 0;
  if( classmates > 0 && paperwork > 0 )return classmates * paperwork;
  return null;
}

paperwork(5,5)


// this is considered best practice

unction paperwork(classmates, paperwork) {
  return classmates > 0 && paperwork > 0 ? classmates * paperwork : 0
}
