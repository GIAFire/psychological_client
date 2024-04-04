import instance from 'http'
import{userStore} from '@/utils/pinia'

const token = ''

const getToken = () => {
    if (window.localStorage.getItem("userInfo")) {
        const user = userStore()
        user.getLocalStorage(window.localStorage.getItem("userInfo"))
        token = user.token
    }
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default {getToken}