<template>
  <a :href="url" class="base-button">
    <slot />
  </a>
</template>

<script lang="ts" setup>
type ButtonProps = {
  url?: string;
};

defineProps<ButtonProps>();
</script>

<style lang="scss" scoped>
.base-button {
  display: block;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
}
</style>
