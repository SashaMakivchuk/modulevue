<template>
  <div>
    <h2>Friend Details</h2>
    <div v-if="friend">
      <p>Last Name: {{ friend.lastName }}</p>
      <p>First Name: {{ friend.firstName }}</p>
      <p>Middle Name:{{ friend.middleName }}</p>
      <p>Birth Year: {{ friend.birthYear }}</p>
      <p>Cell Phone: {{ friend.cellPhone }}</p>
      <p>Mobile Phone: {{ friend.mobilePhone }}</p>
    </div>
    <div v-else>
      <p>No friend found.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FriendDetails",
  props: ["id"],
  computed: {
    ...mapState(["friends"]),
    friend() {
      return this.friends.find((friend) => friend.id === parseInt(this.id));
    },
  },
  created() {
    this.$store.dispatch("loadFriends");
  },
};
</script>
<style scoped lang="scss">
h2 {
  margin-bottom: 20px;
  color: #28a745;
}

.friend-details {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;

  p {
    margin: 10px 0;
    font-size: 16px;
    color: #000;
  }
}
</style>
