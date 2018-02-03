import Index from '../views/Index.vue'
import Button from '../../../packages/fo-button/docs/index.md'

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
      }
    ]
  }
]