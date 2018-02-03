import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

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