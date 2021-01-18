
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// ! follow URL above for eg and more info.

const data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  console.log(data)
  const byte1 = data.slice(0,8)
  const byte2 = data.slice(8,16)
  const byte3 = data.slice(16,24)
  const byte4 = data.slice(24,32)
  const newArr = [...byte4, ...byte3, ...byte2, ...byte1]
  console.log(newArr)
  console.log(newArr.flat(),"flat")
  return newArr;

}

dataReverse(data);