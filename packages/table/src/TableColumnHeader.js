export default {
  name: 'TableColumnHeader',
  props: ['column'],
  render (createElement) {
    return createElement('th', this.column.label)
  }
}