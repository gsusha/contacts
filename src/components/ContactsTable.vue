<template>
  <table class="contacts-table" rows="">
    <thead>
      <tr>
        <th v-for="column in contactsTableColumns" :key="column.name">
          {{ column.name }}
          <span v-if="column.sortable" class="arrow" />
          <!-- Проставлять класс asc или desc в зависимости от порядка сортировки -->
        </th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="contact in rows" :key="contact.id.value">
      <td class="avatar">
        <img :src="contact.picture.medium" alt="avatar">
      </td>
      <td>{{ `${contact.name.title} ${contact.name.first} ${contact.name.last}` }}</td>
      <td>{{ contact.dob.date }}</td>
      <td>{{ contact.email }}</td>
      <td>{{ contact.phone }}</td>
      <td>{{ `${contact.location.city}, ${contact.location.country}` }}</td>
      <td>{{ contact.nat }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Contact } from "@/types/contact";
import { contactsTableColumns } from "@/utils/common";

type TableProps = {
  rows: Contact[];
};

defineProps<TableProps>();
</script>

<style lang="scss" scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
  color: #181818;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

</style>
