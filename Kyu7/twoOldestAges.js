// ! ****************
// Two Oldest Ages
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

function twoOldestAges(ages){
  let ages2 = []
  ages2 = ages.sort((a, b) => a - b);
  let oldestAges = ages2.slice(-2)
  // return ages2;
  console.log(ages2, "hit")
  console.log(oldestAges, "hit")
  return oldestAges
}

twoOldestAges( [1, 2, 10, 8] )
// ! ****************