import instance  from "@/utils/http"

export const toRegister = (phone,password,username,school,stuNum) =>{
    const obj = instance({
        method:'post',
        url: '/register',
        data: {
            phone:phone,
            password:password,
            username:username,
            school:school,
            stuNum:stuNum
        }
    });
    
    return obj;
}