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
            "id": 1,
            raceType: '张三',
            'humansNumber|18-30': 1
        },
        {
            "id": 2,
            raceType: '李四',
            'humansNumber|18-30': 1
        },
        {
            "id": 3,
            raceType: '王五',
            'humansNumber|18-30': 1
        }
    ]
})

// Mock.mock('/api/data2', 'get', {
//     'items|3': [{
//         "value": 1,
//         'key': 1
//     }]
// })