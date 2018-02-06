import Button from './src/Button.vue'
import ButtonGroup from './src/ButtonGroup.vue'

export default {
  Button,
  ButtonGroup,
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
  }
}

export { 
  Button,
  ButtonGroup
}