<template>
  <div class="form-group">
    <select 
      class="form-select"
      :disabled="disabled"
      @change="change"
      :value="value">
      <option value="">Choose an option</option>
      <option 
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :disabled="option.disabled">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FoSelect',
  model: {
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
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