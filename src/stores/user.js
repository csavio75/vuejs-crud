import { defineStore } from "pinia"
import { ref } from "vue"


export const useUserStore = defineStore('counter', () => {
    const userData = ref({})

    function loggedUser(data) {
        userData.value = data
    }

    return { userData, loggedUser }
})