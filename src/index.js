import 'spectre.css'
import './node_modules/spectre.css/docs/dist/spectre-exp.css'
import './node_modules/spectre.css/docs/dist/spectre-icons.css'

import FoButton, { Button, ButtonGroup } from '../packages/button/index'
import FoLabel, { Label } from '../packages/label/index'
import FoIcon, { Icon } from '../packages/icon/index'

export default {
  version: '0.0.1',
  Button,
  ButtonGroup,
  Label,
  Icon,
  install(Vue) {
    Vue.use(FoButton)
    Vue.use(FoLabel)
    Vue.use(FoIcon)
  }
}

export {
  Button,
  ButtonGroup,
  Label,
  Icon
}