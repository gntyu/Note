exports.a = "aaaa"

exports = "11111"
exports.b = "bbbbb"

exports = module.exports

exports.c = "cccccc"


function print(arr) {
  let i = 0
  const time = setInterval(() => {
    if (i >= arr.length) {
      clearInterval(time)
    } else {
      console.log(arr[i])
      i++
    }
  }, 1000)
}

// print([111, 33344, 'sdfjkd', '我是一个家', 1111, 434, 23, 532, 534, 5])

async function async1() {
  console.log('2.async1 start')
  await async2()
  //A1
  console.log('6.A1')

  new Promise(resolve => {
    resolve()
  }).then(() => {
    //A1-A
    console.log('8.A1-A')
    new Promise(resolve => {
      resolve()
    }).then(() => {
      //A1-A-A
      console.log('====AAA====')
      new Promise(resolve => {
        resolve()
      }).then(() => {
        //A1-A-A-A
        console.log('====AAAA====')
      })
    })
  })
  setTimeout(() => {
    //A1-B
    console.log('11.A1-B')
  }, 0);
}

async function async2() {
  console.log('3.async2')
}

console.log('1.script start')

//B1
setTimeout(function () {
  console.log('9.B1')

  setTimeout(() => {
    //B1-B
    console.log('13.B1-B')
  }, 0);

  new Promise(resolve => {
    resolve()
  }).then(() => {
    //B1-A
    console.log('10.B1-A')
  })
}, 0)

async1();

new Promise(function (resolve) {
  console.log('4.promise1')
  resolve();
}).then(function () {
  //A2
  console.log('7.A2')
  //A2-B
  setTimeout(() => {
    console.log('12.A2-B')
  }, 0);
})

console.log('5.script end')