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
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
