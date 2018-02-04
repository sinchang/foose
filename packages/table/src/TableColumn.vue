<template>
  <div>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'FoTableColumn',
    props: {
      prop: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: null
      }
    }
  }
</script>
