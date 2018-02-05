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

  describe('Icon', () => {
    it('normal', () => {
      cmp = createCmp({ 'iconType': 'check', 'hasIcon': 'right' })
      expect(cmp.classes()).toContain('has-icon-right')
      expect(cmp.find('.form-icon').classes()).toContain('icon-check')
    })

    it('must need hasIcon', () => {
      cmp = createCmp({ 'iconType': 'check' })
      expect(cmp.find('.form-icon').exists()).toBe(false)
    })

    it('loading', () => {
      cmp = createCmp({ 'hasIcon': 'right', 'loading': true })
      expect(cmp.classes()).toContain('has-icon-right')
      expect(cmp.find('.form-icon').classes()).toContain('loading')
    })
  })
})