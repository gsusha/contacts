<template>
  <div class="auth">
    <AuthorizationCard />
  </div>
</template>

<script setup lang="ts">
import AuthorizationCard from "@/components/AuthorizationCard.vue";
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