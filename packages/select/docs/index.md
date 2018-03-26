# Textarea

```html
<template>
  <div>
    {{ value }}
    <fo-select :options="options" v-model="value" @change="handleChange"></fo-select>
    <fo-select :options="options" v-model="value" disabled></fo-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'twitter',
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
