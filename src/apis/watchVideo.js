import instance  from "@/utils/http"

const getWatchVideoList = () =>{
    const obj = instance({
        method:'get',
        url: '/watchVideoList'
    });
    return obj;
}

export {getWatchVideoList}