import { mount } from '@vue/test-utils'
import Radio  from '../src/Radio.vue'

describe('Radio', () => {
  const createCmp = propsData => mount(Radio, { propsData })
  let cmp

  it('props', () => {
    cmp = createCmp({ name: 'option', value: 'football', disabled: true, checked: true })
    expect(cmp.find('input').attributes().name).toEqual('option')
    expect(cmp.find('input').attributes().value).toEqual('football')
    expect(cmp.find('input').attributes().disabled).toEqual('disabled')
    expect(cmp.vm.isChecked).toBe(true)
  })

  // TODO
})