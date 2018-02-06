<template>
  <input
    :class="{
      'form-input': true, 
      [`input-${size}`]: size}"
    :type="type"
    :value="value"
    @change="change">
</template>

<script>
export default {
  name: 'FoInput',
  model: {
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: ''
    },
    value: {
      default: null
    }
  },
  methods: {
    change(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>