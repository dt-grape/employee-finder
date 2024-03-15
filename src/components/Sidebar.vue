<script setup>
import UserCard from "./UserCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchUsers = async () => {
  await store.dispatch("fetchUsers");
};

const selectUser = (user) => {
  store.commit("SET_SELECTED_USER", user);
};

const filteredUsers = computed(() => {
  if (store.state.searchQuery && store.state.searchQuery.trim()) {
    const searchQueries = store.state.searchQuery
      .split(",")
      .map((query) => query.trim());
    return store.state.users.filter((user) =>
      searchQueries.some(
        (query) =>
          query &&
          query.trim() &&
          (user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.id.toString() === query),
      ),
    );
  } else {
    return [];
  }
});
</script>

<template>
  <aside class="sidebar">
    <span class="text">Поиск сотрудников</span>
    <input
      class="input"
      type="text"
      placeholder="Введите id или имя"
      v-model="store.state.searchQuery"
      @input="searchUsers"
    />
    <span class="text">Результаты</span>
    <div class="results">
      <ul class="userList" v-if="filteredUsers.length">
        <li
          class="userItem"
          v-for="user in filteredUsers"
          :key="user.id"
          @click="selectUser(user)"
          :class="{ selected: user === store.state.selectedUser }"
        >
          <UserCard :user="user" />
        </li>
      </ul>
      <div v-else>
        <span v-if="store.state.isSearching">{{ "Поиск..." }}</span>
        <span v-else-if="store.state.searchQuery">{{
          "Ничего не найдено"
        }}</span>
        <span v-else>{{ "Начните поиск" }}</span>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 30px;
  position: relative;

  .text {
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-align: left;
  }

  .input {
    width: 250px;
    height: 49px;
    padding: 16px 24px;
    box-sizing: border-box;
    border: 1.5px solid rgb(233, 236, 239);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    font-size: 14px;
  }

  .results {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;

    .userList {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .userItem {
        display: flex;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        background: rgb(255, 255, 255);
        cursor: pointer;
        transition-duration: 0.2s;
        width: 250px;

        &:hover {
          background: rgb(233, 236, 239);
        }

        &.selected {
          background: rgb(233, 236, 239);
        }
      }
    }
  }
}
</style>
