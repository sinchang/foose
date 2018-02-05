import { shallow } from '@vue/test-utils'
import Icon  from '../src/Icon.vue'

describe('Icon', () => {
  it('type', () => {
    const wrapper = shallow(Icon, {
      propsData: { type: 'mail' }
    })

    expect(wrapper.classes()).toContain('icon-mail')
  })

  it('size', () => {
    const wrapper = shallow(Icon, {
      propsData: { size: '2x' }
    })

    expect(wrapper.classes()).toContain('icon-2x')
  })
})