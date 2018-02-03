import { shallow } from '@vue/test-utils'
import Label  from '../src/label.vue'

describe('Label', () => {
  it('type', () => {
    const wrapper = shallow(Label, {
      propsData: { type: 'primary' }
    })

    expect(wrapper.classes()).toContain('label-primary')
  })

  it('rounded', () => {
    const wrapper = shallow(Label, {
      propsData: { rounded: true }
    })

    expect(wrapper.classes()).toContain('label-rounded')
  })
})