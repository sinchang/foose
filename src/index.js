import 'spectre.css'
import './node_modules/spectre.css/docs/dist/spectre-exp.css'

import FoButton, { Button, ButtonGroup } from '../packages/fo-button/index'

export default {
  Button,
  ButtonGroup,
  install(Vue) {
    Vue.use(FoButton)
  }
}

export {
  Button,
  ButtonGroup
}