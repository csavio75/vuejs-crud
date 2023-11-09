import { defineStore } from "pinia"
import { ref } from "vue"


export const useUserStore = defineStore('counter', () => {
    const userData = ref({})
    const isAuthenticated = ref(false)

    function userLogged() {
        isAuthenticated.value = !isAuthenticated.value
    }

    function loggedUser(data) {
        userData.value = data
    }

    return { userData, isAuthenticated, userLogged, loggedUser }
})