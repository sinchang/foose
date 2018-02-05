import { shallow, mount } from '@vue/test-utils'
import Table from '../../table/src/Table.vue'
import TableColumn from '../../table/src/TableColumn'

describe('Table', () => {
  it('hover', () => {
    const wrapper = shallow(Table, {
      propsData: { hover: true }
    })

    expect(wrapper.find('table').classes()).toContain('table-hover')
  })

  it('striped', () => {
    const wrapper = shallow(Table, {
      propsData: { striped: true }
    })

    expect(wrapper.find('table').classes()).toContain('table-striped')
  })
})

describe('TableColumn', () => {
  it('init', () => {
    const wrapper = shallow(TableColumn, {
      slots: {
        default: '<button class="btn"></button>'
      }
    })

    expect(wrapper.find('button').classes()).toContain('btn')
  })
})