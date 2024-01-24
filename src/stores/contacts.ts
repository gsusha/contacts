import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', () => {
    const contacts = ref()

    function setContacts(items: object[]) {
        contacts.value = items;
    }

    return { contacts, setContacts }
})
