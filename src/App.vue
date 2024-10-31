<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/friends">Friends List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #f9f9f9;
  min-height: 100vh;
}

nav {
  padding: 20px;
  background-color: #28a745;
  color: white;
  a {
    font-weight: bold;
    color: white;
    margin: 0 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}

h1,
h2 {
  color: #000;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: #28a745;
  }
}
</style>
