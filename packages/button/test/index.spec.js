import { shallow } from '@vue/test-utils'
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'

describe('Button', () => {
  it('type', () => {
    const wrapper = shallow(Button, {
      propsData: { type: 'primary' }
    })

    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('button slot', () => {
    const wrapper = shallow(Button, {
      slots: {
        default: 'hello'
      }
    })

    expect(wrapper.text()).toContain('hello')
  })

  it('size', () => {
    const wrapper = shallow(Button, {
      propsData: { type: 'sm' }
    })

    expect(wrapper.classes()).toContain('btn-sm')
  })

  it('state', () => {
    const wrapper = shallow(Button, {
      propsData: { loading: true }
    })

    expect(wrapper.classes()).toContain('loading')
  })

  it('block', () => {
    const wrapper = shallow(Button, {
      propsData: { block: true }
    })

    expect(wrapper.classes()).toContain('btn-block')
  })

  it('button group default', () => {
    const wrapper = shallow(ButtonGroup)

    expect(wrapper.classes()).toContain('btn-group')
  })

  it('button group block', () => {
    const wrapper = shallow(ButtonGroup, {
      propsData: { block: true }
    })

    expect(wrapper.classes()).toContain('btn-group-block')
  })

  it('button group slot', () => {
    const wrapper = shallow(ButtonGroup, {
      slots: {
        default: ['<button></button>', '<button></button>']
      }
    })
    
    expect(wrapper.findAll('button').length).toEqual(2)
  })
})