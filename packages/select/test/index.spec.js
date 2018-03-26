import { mount } from '@vue/test-utils'
import Select  from '../src/Select.vue'

describe('Textarea', () => {
  const createCmp = propsData => mount(Select, propsData)
  let cmp

  it('default', () => {
    cmp = createCmp()
    expect(cmp.find('select').exists()).toBe(true)
  })
})