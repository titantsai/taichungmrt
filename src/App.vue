<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/routes">捷運路線圖</router-link>
  </div>
  <router-view/>
</template>

<style>
:root{
  --green:#8EC31C;
  --green-lighten:#AAD255;
  --blue:#1E7ABB;
  --map-bg:#25282d;
  --heading:#474747;
  --caption:#868686;
  --grey:#F2F2F7;
  --map-tag:#ffffff;
}


body{
  background-color:var(--map-bg);
 
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
