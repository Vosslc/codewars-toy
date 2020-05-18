
// Description:
// The function is not returning the correct values. Can you figure out why?

// getPlanetName(3); // should return 'Earth'

//! "break" statement was not in place What happens if I forgot a break?
// If you forget a //!break....
// ....then the script will run from the case where the criterion is met and will run the cases after that regardless if a criterion was met.

function getPlanetName(id){
  var name = id;
  console.log(name)
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}

