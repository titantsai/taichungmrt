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
    --system-blue:#0A84FF;
}

@media (prefers-color-scheme: light){
  
  :root{
    --map-bg:#E5E5E5;
    --map-tag:#141414;

    --modal-bg:#FFFFFF;
    --modal-handle:#C7C7C7;

    --list-hd:#F2F2F7;
    --list-bg:#FFFFFF;
    --list-divider:#3C3C4336;


    --heading:#474747;
    --caption:#868686;
    --grey:#F2F2F7;

  }
}

@media (prefers-color-scheme: dark) {
  :root{
    --map-bg:#25282d;
    --map-tag:#FFFFFF;

    --modal-bg:#1C1C1E;
    --modal-handle:#24242478;

    --list-hd:000000;
    --list-bg:#1C1C1E;
    --list-divider:#54545865;

    --heading:#FFFFFF;
    --caption:#757575;
    --grey:#74748018;

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
