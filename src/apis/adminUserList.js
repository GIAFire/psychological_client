import instance  from "@/utils/http"

export const getUserList = () =>{
    const obj = instance({
        method:'get',
        url: '/userList'
    });
    
    return obj;
}