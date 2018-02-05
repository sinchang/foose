# Input

```html
<template>
  <div>
    <p>Text: {{ value }}</p>
    <fo-input placeholder="Enter" v-model="value" @change="handleChange"></fo-input>
    <fo-input readonly placeholder="Readonly"></fo-input>
    <fo-input disabled placeholder="Disabled"></fo-input>
    <fo-input size="sm" placeholder="Small Size"></fo-input>
    <fo-input type="date"></fo-input>
    <fo-input has-icon="right" icon-type="check" placeholder="Enter"></fo-input>
    <fo-input has-icon="right" icon-type="check" loading placeholder="Enter"></fo-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 'hi',
      }
    },
    methods: {
      handleChange(v) {
        console.log(v)
      }
    }
  }
</script>
```