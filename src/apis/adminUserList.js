import instance from "@/utils/http"


const getUserList = () => {
    const obj = instance({
        method: 'get',
        url: '/userList'
    })
    return obj;
};

const banUser = (id,status) => {
    const obj = instance({
        method: 'post',
        url: '/banUser',
        data: {
            id:id,
            status:status
        }
    })
    return obj;
};
export { getUserList,banUser }