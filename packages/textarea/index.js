import Textarea from './src/Textarea.vue'

export default {
  Textarea,
  install(Vue) {
    Vue.component(Textarea.name, Textarea)
  }
}

export { 
  Textarea
}