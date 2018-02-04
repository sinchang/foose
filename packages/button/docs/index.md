# Button

## Button type

```html
<template>
  <div>
    <fo-button @click="handleClick">{{ msg }}</fo-button>
    <fo-button type="primary">Primary</fo-button>
    <fo-button type="success">Success</fo-button>
    <fo-button type="error">Error</fo-button>
    <fo-button type="link">Link</fo-button>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Default',
        data: [
          { firstName: 'John', lastName: 'Lennon', instrument: 'Guitar', birthday: '04/10/1940', songs: 72 },
          { firstName: 'Paul', lastName: 'McCartney', instrument: 'Bass', birthday: '18/06/1942', songs: 70 },
          { firstName: 'George', lastName: 'Harrison', instrument: 'Guitar', birthday: '25/02/1943', songs: 22 },
          { firstName: 'Ringo', lastName: 'Starr', instrument: 'Drums', birthday: '07/07/1940', songs: 2 },
        ]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row)
      }
    }
  }
</script>
```

## Button size

```html
<template>
  <div>
    <fo-button type="primary" size="sm">small button</fo-button>
    <fo-button type="primary">default button</fo-button>    
    <fo-button type="primary" size="lg">large button</fo-button>
  </div>
</template>
```

```html
<template>
  <div>
    <fo-button type="primary" size="sm" block>small block button</fo-button>
    <fo-button type="primary" block>default block button</fo-button>    
    <fo-button type="primary" size="lg" block>large block button</fo-button>
  </div>
</template>
```

## Button state

```html
<template>
  <div>
    <fo-button active>active</fo-button>
    <fo-button loading>loading</fo-button>
    <fo-button disabled>disabled</fo-button>
  </div>
</template>
 
```

## Button group

```html
<template>
   <div>
    <fo-btn-group>
      <fo-button active>active</fo-button>
      <fo-button loading>loading</fo-button>
      <fo-button disabled>disabled</fo-button>
    </fo-btn-group>
    <fo-btn-group block>
      <fo-button active>active</fo-button>
      <fo-button loading>loading</fo-button>
      <fo-button disabled>disabled</fo-button>
    </fo-btn-group>
  </div>
</template>

```