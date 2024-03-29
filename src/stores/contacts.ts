import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import type { Contact } from "@/types/contact";

export const useContactsStore = defineStore('contacts', () => {
    const contacts = ref<Contact[]>();
    const isLoading = ref(true);

    function setContacts(items: Contact[]) {
        contacts.value = items;
    }

    async function getContacts() {
        try {
            const { data, isFetching } = await useFetch<Contact[]>(import.meta.env.VITE_API_BASE_URL).get().json();
            setContacts(data.value.results);
            isLoading.value = false;
        }
        catch (e) {
            console.log(e);
        }
    }

    return { contacts, getContacts, isLoading }
})
