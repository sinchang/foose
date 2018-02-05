import Input from './src/Input.vue'

export default {
  Input,
  /* istanbul ignore next */
  install(Vue) {
    Vue.component(Input.name, Input)
  }
}

export { 
  Input
}