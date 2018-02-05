<template>
  <span 
    :class="{
      'label': true, 
      [`label-${type}`]: type,
      'label-rounded': rounded }">
    <slot/>
  </span>
</template>

<script>
  export default {
    name: 'FoLabel',
    props: {
      type: {
        type: String,
        default: ''
      },
      rounded: {
        type: Boolean,
        default: false
      }
    }
  }
</script>