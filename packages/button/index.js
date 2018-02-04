import Button from './src/Button.vue'
import ButtonGroup from './src/ButtonGroup.vue'

export default {
  Button,
  ButtonGroup,
  /* istanbul ignore next */
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
  }
}

export { 
  Button,
  ButtonGroup
}