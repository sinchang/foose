import Index from '../views/Index.vue'
import Button from '@/button/docs/index.md'
import Label from '@/label/docs/index.md'
import Icon from '@/icon/docs/index.md'
import Table from '@/table/docs/index.md'
import Input from '@/input/docs/index.md'

export default [
  {
    path: '/',
    component: Index,
    children: [
      {
        name: 'button',
        path: 'button',
        meta: {
          group: 'elements',
          title: 'Button'
        },
        component: Button
      },
      {
        name: 'label',
        path: 'label',
        meta: {
          group: 'elements',
          title: 'Label'
        },
        component: Label
      },
      {
        name: 'icon',
        path: 'icon',
        meta: {
          group: 'elements',
          title: 'Icon'
        },
        component: Icon
      },
      {
        name: 'table',
        path: 'table',
        meta: {
          group: 'elements',
          title: 'Table'
        },
        component: Table
      },
      {
        name: 'input',
        path: 'input',
        meta: {
          group: 'elements',
          title: 'Input'
        },
        component: Input
      }
    ]
  }
]