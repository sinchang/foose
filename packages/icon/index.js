import Icon from './src/Icon.vue'

export default {
  Icon,
  /* istanbul ignore next */
  install(Vue) {
    Vue.component(Icon.name, Icon)
  }
}

export { 
  Icon
}