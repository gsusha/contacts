<template>
  <Card>
    <div class="title">Выберите роль:</div>
    <Button @click.prevent="login">Войти</Button>
  </Card>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import router from "@/router";
import Card from "@/components/base/Card.vue";
import Button from "@/components/base/Button.vue";

const { setUserRole } = useUserStore();
const login = () => {
  setUserRole('admin');
  router.push({ name: 'home' });
}
</script>