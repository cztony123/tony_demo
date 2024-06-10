import myaxios from "@/utils/myaxios"

export function login(username,password){
    return myaxios({
        url:'/login',
        method: "post",
        data:{
            username,
            password
        }
    })
}

export function getUserInfo(token){
    return myaxios({
        url:`/user/info?token=${token}`,
        method: "get",
    })
}