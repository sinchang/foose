<template>
  <div :class="{ 'btn-group': true, 'btn-group-block': block }">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'FoBtnGroup',
    props: {
      block: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

