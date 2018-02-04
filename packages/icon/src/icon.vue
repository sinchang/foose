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
        required: false,
        default: ''
      },
      size: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

