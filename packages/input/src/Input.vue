<template>
  <div 
    v-if="hasIcon" 
    :class="[`has-icon-${hasIcon}`]">
    <input
      :class="{
        'form-input': true, 
        [`input-${size}`]: size}"
      :type="type"
      :value="value"
      @change="change">
    <i 
      :class="{
        'form-icon': true,
        'loading': loading,
        'icon': !loading,
        [`icon-${iconType}`]: iconType && !loading }" />
  </div>
  <input
    v-else
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
    // only left or right
    hasIcon: {
      type: String,
      default: ''
    },
    value: {
      default: null
    },
    iconType: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>