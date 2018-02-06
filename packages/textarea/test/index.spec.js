import { mount } from '@vue/test-utils'
import Textarea  from '../src/Textarea.vue'

describe('Textarea', () => {
  const createCmp = propsData => mount(Textarea, { propsData })
  let cmp

  it('default', () => {
    cmp = createCmp()
    expect(cmp.find('textarea').exists()).toBe(true)
  })

  it('rows', () => {
    cmp = createCmp({ rows: 5 })
    expect(cmp.attributes().rows).toEqual('5')
  })

  it('set value', () => {
    cmp = createCmp({ value: 'hello' })
    expect(cmp.vm.value).toEqual('hello')
  })

  // TODO Event Test
  // it('change event', () => {
  //   cmp = createCmp({})
  //   const stub = jest.fn()
  //   cmp.setMethods({ change: stub })
  //   cmp.update()    
  //   cmp.vm.$emit('change', 'cat')
  //   expect(stub).toBeCalledWith('cat')
  // })
})