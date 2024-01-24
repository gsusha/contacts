import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const userRole = ref();
    const isAuthenticated = ref(false)

    isAuthenticated.value = !!localStorage.getItem('role');

    function setUserRole(role: string) {
        localStorage.setItem('role', role);
        userRole.value = role;
        isAuthenticated.value = true;
    }

    return { isAuthenticated, setUserRole }
})
