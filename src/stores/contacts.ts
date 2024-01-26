import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {Contact} from "@/types/contact";

export const useContactsStore = defineStore('contacts', () => {
    const contacts = ref<Contact[]>()

    function setContacts(items: Contact[]) {
        contacts.value = items;
    }

    return { contacts, setContacts }
})
