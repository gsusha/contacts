import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";
import {UserRole} from "@/enums/common";

export const useUserStore = defineStore('user', () => {
    const userRole = useStorage('role', UserRole.guest);

    const isAuthenticated = computed(() => {
        return userRole.value !== UserRole.guest;
    }) 

    function setUserRole(role: string) {
        userRole.value = role;
    }

    return {isAuthenticated, setUserRole}
})
