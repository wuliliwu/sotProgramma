<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<style lang="less">

  html {
    font-size: 100px;
  }
  @import "assets/css/normalize.css";
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: "PingFang SC", Helvetica, Arial, sans-serif;
}
li {
  text-decoration: none;
  list-style: none;
}
/*版心*/
  .content {
    width: 1200px;
    margin: 0 auto;
  }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
