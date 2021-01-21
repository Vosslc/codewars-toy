function fizzbuzz(n)
{
  let i = 1; 
  let arr = [];
  console.log("fizzbuzz(n) has been called")
  while(i <= n) {
    let fizz = (i % 3 === 0);
    let buzz = (i % 5 === 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
      console.log(fizz,('fizz'))
      console.log(buzz,('buzz'))
    }
    else {
      arr.push(i);
      console.log("push(i)")
    }
    i++;
  }
  console.log("End of while loop. Now return arr with push() values")
  return arr;
}

let fizzify = fizzbuzz;

fizzbuzz(15)