import 'spectre.css'
import './node_modules/spectre.css/docs/dist/spectre-exp.css'

import FoButton, { Button, ButtonGroup } from '../packages/button/index'
import FoLabel, { Label } from '../packages/label/index'

export default {
  Button,
  ButtonGroup,
  Label,
  install(Vue) {
    Vue.use(FoButton)
    Vue.use(FoLabel)
  }
}

export {
  Button,
  ButtonGroup,
  Label
}