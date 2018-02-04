<template>
  <th>
    {{ column.label }}
  </th>
</template>

<script>
  export default {
    name: 'TableColumnHeader',
    props: ['column']
  }
</script>
