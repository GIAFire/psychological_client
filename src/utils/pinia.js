import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const userStore = defineStore('mytoken', () => {
    const user = ref({})
    
    const getUser = computed(() => {
        return user.value
    })
    function setUser(data) {
        user.value = data
        const userJsonStr = JSON.stringify(data);
        window.localStorage.setItem('userInfo', userJsonStr)
    }
    function getLocalStorage(data) {
        const jsonData = JSON.parse(data);
        user.value = jsonData
    }
  
    return { getUser, setUser,getLocalStorage }
  })