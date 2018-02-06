<template>
  <textarea
    class="form-input"
    :rows="rows"
    :value="value"
    @change="change" />
</template>

<script>
export default {
  name: 'FoTextarea',
  model: {
    event: 'change'
  },
  props: {
    rows: {
      type: Number,
      default: 3
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