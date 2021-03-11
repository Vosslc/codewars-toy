// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// ? THIS IS MY CODE.
const warnTheSheep = (queue) => {
  // const queueLength = queue.length
    if (queue[queue.length -1] === "wolf") {
      return "Pls go away and stop eating my sheep"
    } else{
      let index = queue.findIndex( (x) => x == 'wolf' );

      return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`
    }
}

// ! CODE BELOW IS CONSIDER BEST PRACTICE. 
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

// warnTheSheep(["sheep", "sheep", "wolf"])

warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep"])



// const warnTheSheep = (queue) => {
//   const warnSheep = [];
//   const warnWolf = [];

//   if 
// }