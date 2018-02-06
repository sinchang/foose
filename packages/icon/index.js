import Icon from './src/Icon.vue'

export default {
  Icon,
  install(Vue) {
    Vue.component(Icon.name, Icon)
  }
}

export { 
  Icon
}