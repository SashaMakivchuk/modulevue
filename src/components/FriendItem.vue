<template>
    <div class="friend-item">
      <h3>{{ friend.lastName }} {{ friend.firstName }} {{ friend.middleName }}</h3>
      <p><strong>Birth Year</strong> {{ friend.birthYear }}</p>
      <p><strong>Cell Phoem</strong> {{ friend.cellPhone }}</p>
      <p><strong>Mobile Phone</strong> {{ friend.mobilePhone }}</p>
    </div>
  </template>

<script>
export default{
    props:{
        friend:Object,
        required:true
    }
};

</script>


