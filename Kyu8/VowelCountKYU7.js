// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// --------------------------
// ! GOAL: Return the number (count) of vowels in the given string.
// -----
// ? We will consider a, e, i, o, u as vowels for this Kata (but not y).
// -----
// ? The input string will only consist of lower case letters and/or spaces.
// --------------------------

function getCount(str) {
  let vowelsCount = 0;
  let spreadArr = [...str];
  let vowelsArr = [];
  for (idx = 0; idx <= spreadArr.length; idx++) {
    if (/[a,e,i,o,u]/.test(spreadArr[idx])) {
      vowelsArr.push(spreadArr[idx]);
    }
  }
  console.log(vowelsArr);
  return vowelsArr.length - 1;
}
getCount("aeiouxxxxxxxx");
