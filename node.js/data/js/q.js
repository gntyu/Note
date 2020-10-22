// console.log('q start')

const url = "https://www.bilibili.com/video/BV1FW411H7e6?from=search&seid=1878615523535625465"

const findParams = (url) => {
  const obj = {}
  if (url.indexOf('?') < 0) return obj
  const query = url.split('?')[1]
  query.split('&').map(item => {
    obj[item.split('=')[0]]=item.split('=')[1]
  })
  return obj
}

const findParamsReg = (url) => {
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]+)/g
  url.replace(reg, (...item)=>{
    // console.log(arguments)
    obj[item[1]]=item[2]
  })
  return obj
}


// console.log(findParams(url))
console.log(findParamsReg(url))



