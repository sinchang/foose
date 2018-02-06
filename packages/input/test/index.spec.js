import { shallow } from '@vue/test-utils'
import Input  from '../src/Input.vue'

describe('Input', () => {
  const createCmp = propsData => shallow(Input, { propsData })
  let cmp

  it('size', () => {
    cmp = createCmp({ size: 'sm' })
    expect(cmp.classes()).toContain('input-sm')
  })

  it('type', () => {
    cmp = createCmp({ type: 'date' })
    expect(cmp.attributes().type).toEqual('date')
  })

  // TODO Event Test
})