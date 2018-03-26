import Select from './src/Select.vue'

export default {
  Select,
  install(Vue) {
    Vue.component(Select.name, Select)
  }
}

export { 
  Select
}