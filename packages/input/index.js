import Input from './src/Input.vue'

export default {
  Input,
  install(Vue) {
    Vue.component(Input.name, Input)
  }
}

export { 
  Input
}