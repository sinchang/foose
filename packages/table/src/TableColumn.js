export default {
  name: 'FoTableColumn',
  props: {
    prop: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: null
    }
  },
  render (createElement) {
    return createElement('div', this.$slots.default)
  }
}
