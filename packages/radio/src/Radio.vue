<template>
  <label class="form-radio">
    <input 
      type="radio"
      :value="value"
      @change="handleChange"
      :disabled="disabled"
      :checked="isChecked"
      :name="name">
    <i class="form-icon"/>
    <slot/>
  </label>
</template>

<script>
import { isUndefined } from '../../../src/common/util'

export default {
  name: 'FoRadio',
  model: {
    prop: 'checkedValue',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    checkedValue: {
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked() {
      const { checkedValue } = this

      let { checked } = this

      if (!isUndefined(checkedValue)) {
        checked = checkedValue === this.value
      }

      return checked
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.value, this.checkedValue)
    }
  }
}
</script>