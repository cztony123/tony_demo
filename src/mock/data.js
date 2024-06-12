import Mock from 'mockjs'

// 登录
Mock.mock('/api/login', 'get', {
    "code":200,
    "flag":true,
    "message":"验证成功",
    "data": {
        "token":"admin",
        "password":"123456"
    }
})

//首页列表
Mock.mock('/api/data1', 'get', {
    'items': [
        {
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路',
            zip: 200333
        },
    ]
})