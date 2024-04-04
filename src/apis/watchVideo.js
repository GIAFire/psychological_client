import instance  from "@/utils/http"

const getWatchVideoList = () =>{
    const obj = instance({
        method:'get',
        url: '/videoList'
    });
    return obj;
}

export {getWatchVideoList}