<template>
  <i 
    :class="{
      'icon': true,
      [`icon-${type}`]: type,
      [`icon-${size}`]: size }" />
</template>

<script>
  export default {
    name: 'FoIcon',
    props: {
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      }
    }
  }
</script>

