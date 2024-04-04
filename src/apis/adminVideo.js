import instance  from "@/utils/http"

const getVideoList = () =>{
    const obj = instance({
        method:'get',
        url: '/videoList'
    });
    return obj;
}

const addVideo = (videoName,videoUrl,imageUrl,sort) =>{
    const obj = instance({
        method:'post',
        url: '/addVideo',
        data: {
            videoName:videoName,
            videoUrl:videoUrl,
            imageUrl:imageUrl,
            sort:sort
        }
    });
    return obj;
}

export {getVideoList,addVideo}