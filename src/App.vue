<template>
  <router-view>
  </router-view>
</template>

<style>

:root{
    --green:#8EC31C;
    --green-lighten:#AAD255;
    --blue:#1E7ABB;
    --white:#FFFFFF;
}

@media (prefers-color-scheme: light){
  
  :root{
    --black:#000000;
    --map-bg:#25282d;
    --map-tag:#959595;
    --heading:#474747;
    --caption:#868686;
    --grey:#F2F2F7;
    --divider:#3C3C4336;
    --modalbg:#FFFFFF;
    --list-hd:#F2F2F7;
    --list-bg:#FFFFFF;
  }
}

@media (prefers-color-scheme: dark) {
  :root{
    --black:#000000;
    --map-bg:#25282d;
    --map-tag:#8C8C8C;
    --heading:#FFFFFF;
    --caption:#757575;
    --grey:#74748018;
    --divider:#54545865;
    --modalbg:#1D1D1D;
    --list-hd:#000000;
    --list-bg:#1C1C1C;
  }
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
