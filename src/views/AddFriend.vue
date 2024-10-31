<template>
    <div>
      <h2>Add Friend</h2>
      <FriendForm @add-friend="addFriend" />
    </div>
  </template>
  
  <script>
  import FriendForm from '../components/FriendForm.vue';
  
  export default {
    name: 'AddFriend',
    components: { FriendForm },
    methods: {
      addFriend(newFriend) {
        console.log('New friend:', newFriend);
        
        this.$router.push('/friends');
      }
    }
  };
  </script>
  
  