import Radio from './src/Radio.vue'

export default {
  Radio,
  install(Vue) {
    Vue.component(Radio.name, Radio)
  }
}

export { 
  Radio
}