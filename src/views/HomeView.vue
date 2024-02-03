<template>
  <main>
    <h1>Контакты:</h1>
    <ContactsTable :rows="contacts" :is-loading="isLoading" />
  </main>
</template>

<script setup lang="ts">
import ContactsTable from "@/components/ContactsTable.vue";
import { useContactsStore } from "@/stores/contacts";
import { storeToRefs } from 'pinia'

const contactsStore = useContactsStore();
const { contacts, isLoading } = storeToRefs(contactsStore);

contactsStore.getContacts();
</script>

<style lang="scss" scoped>
main {
  padding: 100px 0;

  h1 {
    margin-bottom: 30px;
  }
}
</style>
