<template>
  <button 
    :class="{
      'btn': true, 
      [`btn-${type}`]: type, 
      [`btn-${size}`]: size, 
      'btn-block': block,
      'active': active, 
      'loading': loading, 
      'disabled': disabled }">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'FoButton',
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
      },
      block: {
        type: Boolean,
        required: false,
        default: false
      },
      active: {
        type: Boolean,
        required: false,
        default: false
      },
      loading: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>
