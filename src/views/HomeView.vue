<template>
  <main>
    {{ contacts }}
    <Table />

  </main>
</template>

<script setup lang="ts">
import Table from "@/components/Table.vue";
import { useContactsStore } from "@/stores/contacts";
import { onMounted } from "vue";
import {storeToRefs} from "pinia";

const contactsStore = useContactsStore();
const { contacts } = storeToRefs(contactsStore);

contactsStore.getContacts();

console.log(contacts);
</script>
