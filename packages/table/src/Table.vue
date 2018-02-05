<template>
  <div>
    <table
      :class="{
        table: true,
        [`table-striped`]: striped,
        [`table-scroll`]: scroll,
        [`table-hover`]: hover }" >
      <thead>
        <table-column-header
          v-for="(column, index) in columns"
          :key="index"
          :column="column" />
      </thead>
      <tbody>
        <table-row
          v-for="(row, index) in rows"
          :key="index"
          :row="row"
          :columns="columns" />
      </tbody>
    </table>
    <div style="display:none">
      <slot/>
    </div>
  </div>
</template>

<script>
  import TableColumnHeader from './TableColumnHeader.js'
  import TableRow from './TableRow'

  export default {
    name: 'FoTable',
    components: {
      TableColumnHeader,
      TableRow  
    },
    props: {
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      scroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        required: false,
        default: () => []
      }
    },
    data() {
      return {
        columns: [],
        rows: []
      }
    },
    mounted() {
      if (this.$slots.default) {
        const columnComponents = this.$slots.default
        .filter(column => column.componentInstance)
        .map(column => column.componentInstance)

        columnComponents.forEach(column => {
          this.columns.push({
            label: column.label,
            width: column.width,
            prop: column.prop,
            template: column.$scopedSlots.default
          })
        })
      }
      

      this.data && this.data.forEach((data, index) => {
        data.rowId = index
        this.rows.push(data)
      })

      // console.log(this)
    }
  }
</script>

