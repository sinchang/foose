export default {
  functional: true,

  props: ['column', 'row'],

  render(createElement, {
    props
  }) {
    const data = {}

    if (props.column.template) {
      return createElement('td', data, props.column.template(props.row.data))
    }

    data.domProps = {}
    data.domProps.innerHTML = props.row.data[props.column.prop]

    return createElement('td', data)
  }
}