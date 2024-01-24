<template>
  <a href="#" @click.prevent="login">Войти</a>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import router from "@/router";

const { setUserRole } = useUserStore();
const login = () => {
  setUserRole('admin');
  router.push({ name: 'home' });
}
</script>