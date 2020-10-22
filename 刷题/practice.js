// ~function () {
//   String.prototype.myReplace = function (T,callback) {
//     T = new RegExp(T,'g')
//     let res = '', i = 0
//     for (let result = T.exec(this); result !== null; result = T.exec(this)){
//       console.log(result)
//       res += this.substring(i,result.index) + callback(...result)
//       i = result.index+result[0].length
//     }
//     // while ((result = T.exec(this)) !== null) {
//     //   console.log(result)
//     //   res += this.substring(i,result.index) + callback(...result)
//     //   i = result.index+result[0].length
//     // }
//     res += this.substring(i)
//     return res
//   }
// }()
// let S = "qinzhenWEN是个大傻子！。~kdkWEN...WENksjdfch两居室的"
// let T = 'WEN'
// console.log(S.myReplace(T, (...item) => {
//   return "@"
// }))
let obj = JSON.parse("{ \"a\": 1 }")
console.log(obj)


