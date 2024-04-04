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

const delVideo = (id) =>{
    const obj = instance({
        method:'post',
        url: '/delVideo',
        data: {
            id:id
        }
    });
    return obj;
}

export {getVideoList,addVideo,delVideo}