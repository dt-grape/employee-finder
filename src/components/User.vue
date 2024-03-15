<script setup>
import { useStore } from "vuex";

const store = useStore();
defineProps({
  selectedUser: Object,
});
</script>

<template>
  <div class="userInfo" v-if="store.state.selectedUser">
    <img src="../assets/Rectangle%204.png" alt="" width="424" height="286" />
    <div class="info">
      <span class="text name">{{ selectedUser.name }}</span>
      <div class="personalInfo">
        <span class="text"
          >email:
          <p class="email">{{ selectedUser.email }}</p>
        </span>
        <span class="text"
          >phone:
          <p class="phone">{{ selectedUser.phone }}</p>
        </span>
      </div>
      <div class="aboutMe">
        <span class="text">О себе:</span>
        <span
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          eligendi eos et facere harum, ipsum minima perspiciatis rem veritatis
          vitae. Deserunt eaque error fugit harum incidunt ipsam, porro
          similique tempora!
        </span>
      </div>
    </div>
  </div>
  <div class="userInfo" v-else>
    <span class="selectUser"
      >Выберите пользователя, чтобы посмотреть его профиль</span
    >
  </div>
</template>

<style scoped lang="scss">
.userInfo {
  display: flex;
  margin-left: 20px;
  column-gap: 60px;
  border-left: 1px solid rgb(224, 224, 224);
  padding: 30px;
  width: 100%;
  justify-content: center;

  .text {
    display: flex;
    column-gap: 15px;
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-align: left;

    .email,
    .phone {
      color: rgb(51, 51, 51);
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      text-align: left;
    }
  }

  .selectUser {
    align-self: center;
    justify-self: center;
  }

  .info {
    display: flex;
    flex-direction: column;

    .name {
      margin-bottom: 10px;
    }

    .personalInfo {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }

    .aboutMe {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 25px;
    }
  }
}
</style>
