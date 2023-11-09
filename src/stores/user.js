import { defineStore } from "pinia"
import { ref } from "vue"


export const useUserStore = defineStore('counter', () => {
    const name = ref('Eduardo')
    const isAuthenticated = ref(false)

    function userLogged() {
        isAuthenticated.value = !isAuthenticated.value
    }

    return { name, isAuthenticated, userLogged }
})