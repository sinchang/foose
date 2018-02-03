import Label from './src/label.vue'

export default {
  Label,
  /* istanbul ignore next */
  install(Vue) {
    Vue.component(Label.name, Label)
  }
}

export { 
  Label
}