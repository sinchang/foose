<template>
  <tr>
    <table-cell
      v-for="(column, index) in columns"
      :row="row"
      :column="column"
      :key="index" />
  </tr>
</template>

<script>
  import TableCell from './TableCell'

  export default {
    name: 'TableRow',
    components: {
      TableCell
    },
    props: ['columns', 'row']
  }
</script>

