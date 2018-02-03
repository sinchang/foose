# Button

## Button type

```html
<template>
  <div>
    <fo-button>Default</fo-button>
    <fo-button type="primary">Primary</fo-button>
    <fo-button type="success">Success</fo-button>
    <fo-button type="error">Error</fo-button>
    <fo-button type="link">Link</fo-button>    
  </div>
</template>
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