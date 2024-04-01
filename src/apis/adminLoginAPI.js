import instance  from "@/utils/http"

export const toAdminLogin = (phone,password) =>{
    const obj = instance({
        method:'post',
        url: '/adminLogin',
        data: {
            phone:phone,
            password:password,
        }
    });
    
    return obj;
}