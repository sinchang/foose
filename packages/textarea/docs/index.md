# Textarea

```html
<template>
  <div>
    <p>{{ value }}</p>
    <fo-textarea placeholder="Textarea" v-model="value" @change="handleChange"></fo-textarea>
    <fo-textarea placeholder="Textarea" :rows="5"></fo-textarea>
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
