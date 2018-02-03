<template>
  <div class="off-canvas off-canvas-sidebar-show">
    <sidebar/>
    <div class="docs-content off-canvas-content">
      <router-view />      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style lang="less" scoped>
  .off-canvas {
    padding-top: 60px;
  }
</style>
