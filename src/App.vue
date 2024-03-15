<script setup>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import User from "./components/User.vue";

import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="app">
    <div class="container">
      <Header />
      <div class="content">
        <Sidebar />
        <User :selectedUser="store.state.selectedUser" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.app {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;

  .container {
    width: 100%;
    max-width: 1366px;
    display: flex;
    margin: 0 auto;
    padding: 0 50px;
    flex-direction: column;

    .content {
      display: flex;
      min-height: 575px;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      background: rgb(253, 253, 253);
    }
  }
}
</style>
