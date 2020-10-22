
//使用express 封装的方法
const express = require('express')
const router = express.Router()
const student = require('./student')

router.get('/', (req, res) => {
  res.redirect('/students')
})
router.get('/students', (req, res) => {
  const lists = student.find()
  res.render('index.html', { title: "首页", lists })
  // res.render('aa.art')  --对应 app.engine('art', require('express-art-template')) 的约定
})
router.get('/post', (req, res) => {
  res.render('post.html')
})
router.get('/new', (req, res) => {
  res.render('new.html',{student:{}})
})
router.get('/edit', (req, res) => {
  const info = student.findById(req.query.id)
  res.render('new.html',{student:info})
})
router.get('/delete', (req, res) => {
  const msg = student.delete(req.query.id)
  console.log(msg)
  if (msg===true) {
    res.redirect('/students')
  } else {
    res.end(msg)
  }
})

router.post('/students/new', (req, res) => {
  const msg = student.save(req.body)
  if (msg===true) {
    res.redirect('/students')
  } else {
    res.end(msg)
  }
})
router.post('/students/edit', (req, res) => {
  const msg = student.update(req.body)
  if (msg===true) {
    res.redirect('/students')
  } else {
    res.end(msg)
  }
})

module.exports = router

// 这样并不是很方便
// module.exports = (app) => {
//   app.get('/', (req, res) => {
//     res.render('index.html', { title: "首页", comments })
//     // res.render('aa.art')  --对应 app.engine('art', require('express-art-template')) 的约定
//   })
//   app.get('/post', (req, res) => {
//     res.render('post.html')
//   })
//   app.post('/post', (req, res) => {
//     comments.unshift({
//       ...req.body,
//       date: new Date().toLocaleString()
//     })
//     res.redirect('/')
//   })
// }
