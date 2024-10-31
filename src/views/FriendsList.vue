<template>
  <div>
    <FriendForm @add-friend="addFriend" />
    <h2>Friend List</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        <div>
          <strong>{{ friend.firstName }} {{ friend.lastName }}</strong>
        </div>
        <div>
          <p><strong>Middle Name:</strong> {{ friend.middleName }}</p>
          <p><strong>Birth Year:</strong> {{ friend.birthYear }}</p>
          <p><strong>Cell Phone:</strong> {{ friend.cellPhone }}</p>
          <p><strong>Mobile Phone:</strong> {{ friend.mobilePhone }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FriendForm from "@/components/FriendForm.vue";

export default {
  components: {
    FriendForm,
  },
  computed: {
    ...mapState(["friends"]),
  },
  created() {
    this.loadFriends();
  },
  methods: {
    ...mapActions(["loadFriends", "addFriend"]),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

li div {
  font-weight: bold;
}

li div p {
  margin: 5px 0;
}
</style>
