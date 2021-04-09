<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<style lang="less">

  @import "assets/css/normalize.css";
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: "PingFang SC", Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*width: 100%;*/
  /*height: 100%;*/
}
li {
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
