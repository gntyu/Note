console.log(1)
setTimeout(function () { 
  console.log(2)
  process.nextTick(() => {
    console.log( 3 )
  })
  new Promise(resolve1 => {
    console.log( 4 )
    resolve1();
  }).then(() => {
    console.log( 5 )
  })
})

process.nextTick(() => {
  console.log( 6 )
})

setTimeout(function () { 
  console.log(9)
  new Promise(resolve1 => {
    console.log( 11 )
    resolve1();
  }).then(() => {
    console.log( 12 )
  })
  process.nextTick(() => {
    console.log(10 )
  })
})