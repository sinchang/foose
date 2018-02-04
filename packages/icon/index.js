import Icon from './src/icon.vue'

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