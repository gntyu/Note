
const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

const server = http.createServer()
let comments = [
  { name: "zhang san", message: "my first name is leeyen",date:"2017-12-23 22:12:01" },
  { name: "Lee yane", message: "my first name is as dkvf" ,date:"2017-12-23 22:12:01"},
  { name: "zhao san", message: "my first name is sdfle",date:"2017-12-23 22:12:01" },
  { name: "pan ze", message: "my first name is adf",date:"2017-12-23 22:12:01" },
]

server.on('request', (req, res) => {
  const obj = url.parse(req.url, true)
  pathname = obj.pathname
  if (pathname === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) return res.end("404 Not found!")
      res.end(data)
    })
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) return res.end("404 Not found!!")
      const htmlstr = template.render(data.toString(),{comments:comments})
      res.end(htmlstr)
    })
  } else if (pathname === '/pinglun') {
    comments.push({ ...obj.query, date: new Date().toLocaleString() })
    res.statusCode = 302
    res.setHeader('Location', '/post')
    res.end()
    // fs.readFile('./views/post.html', (err, data) => {
    //   if (err) return res.end("404 Not found!!")
    //   const htmlstr = template.render(data.toString(), { comments: comments })
    //   res.statusCode = 302
    //   res.setHeader('Location','/')
    //   res.end(htmlstr)
    // })
  } else if (pathname.indexOf('/public/') > -1) {
    fs.readFile('.' + pathname, (err, data) => {
      if (err) return res.end("404 Not found!!!")
      res.end(data)
    })
  } else {
    fs.readFile('./views/404.html', (err, data) => {
      if (err) return res.end("404 Not found!404")
      res.end(data)
    })
  }


})

//启动服务器，绑定端口
server.listen(3000, () => {
  console.log('启动成功~~')
})