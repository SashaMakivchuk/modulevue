<template>
  <div>
    <h2>Friend Details</h2>
    <div v-if="friend">
      <p><strong>Last Name:</strong> {{ friend.lastName }}</p>
      <p><strong>First Name:</strong> {{ friend.firstName }}</p>
      <p><strong>Middle Name:</strong> {{ friend.middleName }}</p>
      <p><strong>Birth Year:</strong> {{ friend.birthYear }}</p>
      <p><strong>Cell Phone:</strong> {{ friend.cellPhone }}</p>
      <p><strong>Mobile Phone:</strong> {{ friend.mobilePhone }}</p>
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
