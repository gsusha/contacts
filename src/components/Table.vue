<template>
  <table class="contacts-table">
<!--    <thead>-->
<!--    <tr>-->
<!--      <th v-for="column in tableColumns">-->
<!--        {{ column.name }}-->
<!--&lt;!&ndash;        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>&ndash;&gt;-->
<!--      </th>-->
<!--    </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--    <tr v-for="contact in filteredContacts">-->
<!--      <td v-for="key in columns">-->
<!--        {{ entry[key] }}-->
<!--      </td>-->
<!--    </tr>-->
<!--    </tbody>-->
  </table>
</template>

<script lang="ts" setup>

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
