<script setup>
const props = defineProps({
  user: Object,
});
</script>

<template>
  <div class="userCard">
    <img src="../assets/userSmall.png" alt="" width="70" height="70" />
    <div class="userInfo">
      <span class="name">{{ user.name }}</span>
      <span class="email">{{ user.email }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.userCard {
  display: flex;
  align-items: center;

  img {
    background: white;
    border-radius: 10px 0 0 10px;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
    margin-left: 15px;
  }
}
</style>
