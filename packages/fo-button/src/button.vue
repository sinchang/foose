<template>
  <button :class="['btn', typeClass, sizeClass, blockClass, activeClass, loadingClass, disabledClass]">
    <slot />
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
    },
    computed: {
      typeClass() {
        return this.type ? 'btn-' + this.type : ''
      },
      sizeClass() {
        return this.size ? 'btn-' + this.size : ''
      },
      blockClass() {
        return this.block ? 'btn-block' : ''
      },
      activeClass() {
        return this.active ? 'active' : ''
      },
      loadingClass() {
        return this.loading ? 'loading' : ''
      },
      disabledClass() {
        return this.disabled ? 'disabled' : ''
      }
    }
  }
</script>
