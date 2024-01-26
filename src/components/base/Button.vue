<template>
  <a class="base-button">
    <slot />
  </a>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.base-button {
  display: block;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
}
</style>