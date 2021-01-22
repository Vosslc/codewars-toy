const tickets = (peopleInLine) => {

  let currency25 = 0;
  let currency50 = 0;

  for ( let i = 0; i < peopleInLine.length; i++ ){
    if( peopleInLine[i] === 25 ){
      currency25 += 1;
    }
    if( peopleInLine[i] === 50 ){
      currency25 -= 1; currency50 += 1;
    }
    if ( peopleInLine[i] === 100){
      if( currency50 === 0 && currency25 <= 3 ){
        currency25 -= 3
      }
      else{
        currency25 -= 1; currency50 -= 1
      }
    }
    if ( currency25 < 0 || currency50 < 0 ){
      return 'NO'
    }
  }
return "YES"
}