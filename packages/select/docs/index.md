# Textarea

```html
<template>
  <div>
    {{ value }}
    <fo-select :options="options" v-model="value" @change="handleChange"></fo-select>
    <fo-select :options="options" disabled></fo-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        {
          label: 'twitter',
          value: 'twitter',
        },
        {
          label: 'github',
          value: 'github',
        },
        {
          label: 'telegram',
          value: 'telegram',
          disabled: true,
        },
      ]
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
