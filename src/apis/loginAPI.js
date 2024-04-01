import instance  from "@/utils/http"

export const toLogin = (phone,password) =>{
    const obj = instance({
        method:'post',
        url: '/login',
        data: {
            phone:phone,
            password:password,
        }
    });
    
    return obj;
}