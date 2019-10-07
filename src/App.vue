<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All</router-link>｜
      <router-link to="/about">In Progress</router-link>｜
      <router-link to="/about">Todo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  padding: 5px 10px;
  border-radius: 5px;
  min-width: 100px;
  margin-right: 10px;
}

input[type="text"] {
  padding: 5px 10px;
  margin-right: 10px;
}

label {
  margin: 10px auto 0;
  border-bottom: 1px solid #dddd;
}
</style>
