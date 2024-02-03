<template>
  <table :class="[{ loading: isLoading }, 'contacts-table']">
    <thead>
      <tr>
        <th v-for="column in contactsTableColumns" :key="column.name">
          {{ column.name }}
          <span v-if="column.sortable" class="arrow" />
          <!-- Проставлять класс asc или desc в зависимости от порядка сортировки -->
        </th>
      </tr>
    </thead>
    <tbody v-if="isLoading">
      <LoadingIcon />
    </tbody>
    <tbody v-else>
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
import LoadingIcon from '@/assets/images/Loader.svg';

type TableProps = {
  rows: Contact[];
  isLoading: boolean;
};

defineProps<TableProps>();
</script>

<style lang="scss" scoped>
table {
  display: block;
  border-radius: 3px;
  border: 1px solid #666666;

  &.loading {
    tbody {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;

      svg {
        width: 100px;
      }
    }
  }
}

th {
  background: #232323;
  font-weight: 500;
}

tbody {
  tr {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      height: 1px;
      width: 100%;
      opacity: 0.3;
      background: #666666;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
}


th,
td {
  min-width: 120px;
  padding: 10px 20px;
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

.avatar {
  img {
    border-radius: 50%;
  }
}
</style>
