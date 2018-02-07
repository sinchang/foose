# Radio 

```html
<template>
  <div>
    <p>Result: {{ result }}</p>
    <fo-radio value="football" name="option" v-model="result" @change="handleChange" checked>Football</fo-radio>
    <fo-radio value="basketball" name="option" v-model="result" @change="handleChange">Basketball</fo-radio>
    <fo-radio checked>Football</fo-radio>
    <fo-radio disabled>Basketball</fo-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 'football'
    }
  },
  methods: {
    handleChange(a, b) {
      console.log(a, b)
    }
  }
}
</script>
```