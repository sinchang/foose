import Label from './src/Label.vue';

export default {
  Label,
  install(Vue) {
    Vue.component(Label.name, Label)
  }
}

export { Label }
