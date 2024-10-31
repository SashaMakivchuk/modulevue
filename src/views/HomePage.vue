<template>
  <div>
    <h1>Friend Phone Book</h1>
    <router-link to="/friends">Go to Friends List</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped lang="scss">
h1 {
  margin-bottom: 20px;
  color: #28a745;
}

h2 {
  margin-top: 30px;
  color: #28a745;
}

.router-link {
  text-decoration: none;
  color: #28a745;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
}
</style>
