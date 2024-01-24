<template>
  <div class="auth">
    <Authorization />
  </div>
</template>

<script setup lang="ts">
import Authorization from "@/components/Authorization.vue";
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .auth {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>