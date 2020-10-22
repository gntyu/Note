const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')


//开放资源
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))
//配置art-template模板引擎 约定模板的文件属性
// app.engine('art', require('express-art-template'))  --也可以

app.engine('html', require('express-art-template'))
//views 文件夹是约定
//如果想要约定 目录，可
// app.set('views', './public')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application json
app.use(bodyParser.json())

// router(app)  -->自己封装
app.use(router)



app.listen(3000, () => {
  console.log('start!')
})