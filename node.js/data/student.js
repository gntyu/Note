
/* 
数据操作文件模块
只处理数据，不关注业务
*/

const fs = require('fs')
const dbPath = './db.json'


/* 
获取列表
*/
exports.find = () => {
  try {
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'))
  } catch (err) {
    return err
  }

}

/* 
获取单个
*/
exports.findById = (id) => {
  try {
    const list = JSON.parse(fs.readFileSync(dbPath, 'utf8'))
    const res = list.filter(element =>element.id == id);
    return res.length>0?res[0]:{}
  } catch (err) {
    return err
  }

}


/* 
新增
*/
exports.save = (data) => {
  const lists = JSON.parse(fs.readFileSync(dbPath, 'utf8'))
  lists.push({ ...data, id: lists[lists.length - 1].id + 1 })
  try {
    fs.writeFileSync(dbPath, JSON.stringify(lists))
    return true
  } catch (err) {
    return err
  }
}

/* 
编辑
*/
exports.update = (data) => {
  data.id=Number(data.id)
  const lists = JSON.parse(fs.readFileSync(dbPath, 'utf8'))
  const _lists = lists.map(item => {
    if (item.id === data.id) {
      return data
    }
    return item
  })

  try {
    fs.writeFileSync(dbPath, JSON.stringify(_lists))
    return true
  } catch (err) {
    return err
  }
}


/* 
删除
*/
exports.delete = (id) => {
  const lists = JSON.parse(fs.readFileSync(dbPath, 'utf8'))
  const _lists = lists.filter(item => item.id !== Number(id))
  console.log('_lists',_lists)
  try {
    fs.writeFileSync(dbPath, JSON.stringify(_lists))
    return true
  } catch (err) {
    return err
  }
}
