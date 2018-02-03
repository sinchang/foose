<template>
  <header>
    <router-link 
      :to="{ path: '/' }" 
      class="title">Foose</router-link>
    <nav class="header-nav">
      <a 
        href="https://github.com/sinchang/foose" 
        target="_blank">Github</a>
    </nav>
  </header>
</template>

<style lang="less" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    padding: .8rem 1.8rem;
    width: 100%;
    background-color: #5755d9;
    color: #fff;

    .title {
      font-size: 1.2rem;
    }

    .header-nav {
      a {
        display: inline-block;
        margin-top: 5px;
      }
    }

    a {
      color: #fff;
      text-decoration: none;      
    }
  }
</style>
