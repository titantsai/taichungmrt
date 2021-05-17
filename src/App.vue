<template>
  <router-view>
  </router-view>
</template>

<style>
:root{
  --green:#8EC31C;
  --green-lighten:#AAD255;
  --blue:#1E7ABB;
  --black:#000000;
  --map-bg:#25282d;
  --disabled:#707070;
  --heading:#474747;
  --caption:#868686;
  --grey:#F2F2F7;
  --white:#FFFFFF;
  --map-tag:#ffffff;
}


body{
  background-color:var(--map-bg);
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
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
  position:absolute;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
