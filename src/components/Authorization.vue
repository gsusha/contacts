<template>
  <Card class="authorization-card">
    <div class="title">Выберите роль:</div>
    <div class="radio-group">
      <div class="radio">
        <input type="radio" id="user" value="user" v-model="picked" />
        <label for="user">Пользователь</label>
      </div>
      <div class="radio">
        <input type="radio" id="admin" value="admin" v-model="picked" />
        <label for="admin">Администратор</label>
      </div>
    </div>
    <Button @click.prevent="login">Войти</Button>
  </Card>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import router from "@/router";
import Card from "@/components/base/Card.vue";
import Button from "@/components/base/Button.vue";
import { ref } from "vue";
import { UserRole } from "@/enums/common";

const picked = ref(UserRole.guest)

const { setUserRole } = useUserStore();
const login = () => {
  setUserRole(picked.value);
  router.push({ name: 'home' });
}
</script>

<style lang="scss" scoped>
.authorization-card {
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    margin: 0 0 30px 0;
  }

  .radio-group {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0 20px 0;

    .radio {
      display: flex;
      align-items: center;

      margin: 0 30px 0 0;

      &:last-child {
        margin: 0;
      }

      input {
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>
