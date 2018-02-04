# Table

## Basic

```html
<template>
  <div>
    <fo-table :data="data" hover striped>
      <fo-table-column prop="firstName" label="First name"></fo-table-column>
      <fo-table-column prop="lastName" label="Last name"></fo-table-column>
      <fo-table-column prop="instrument" label="Instrument"></fo-table-column>
      <fo-table-column prop="songs" label="Songs"></fo-table-column>
      <fo-table-column prop="birthday" label="Birthday"></fo-table-column>
      <fo-table-column label="Actions">
        <template slot-scope="row">
          <fo-button @click.native="handleClick(row)">Edit</fo-button>
        </template>
      </fo-table-column>
    </fo-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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