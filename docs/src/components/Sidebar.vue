<template>
  <aside class="docs-sidebar off-canvas-sidebar">
    <div class="docs-nav">
      <div class="according-container">
        <div 
          class="accordion"
          v-for="(value, key, index) in list"
          :key="index">
          <input 
            type="checkbox" 
            :id="'accordion-' + index" 
            name="accordion-checkbox" 
            hidden="" 
            checked="">
          <label 
            class="accordion-header c-hand" 
            :for="'accordion-' + index">
            {{ key }}
          </label>
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li 
                class="menu-item"
                v-for="route in value"
                :key="route.path">
                <router-link :to="{ path: route.path }">{{ route.meta.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import routes from '../router/routes'

  export default {
    computed: {
      list() {
        const components = routes.find(route => route.path === '/')
        const groups = []
        const list = {}

        components.children.forEach((component) => {
          const group = (component.meta && component.meta.group) || 'Others'
          if (!list[group]) {
            groups.push(group)
            list[group] = []
          }
          list[group].push(component)
        })

        const sortedList = {}

        groups.sort().forEach((group) => {
          sortedList[group] = list[group]
        })

        return sortedList
      }
    }
  }
</script>

<style lang="less">
  .docs-sidebar .docs-nav {
    bottom: 1.5rem;
    -webkit-overflow-scrolling: touch; 
    overflow-y: auto;
    padding: .5rem 1.5rem;
    position: fixed;
    top: 3.5rem;
    width: 12rem;
  }

  .docs-sidebar .accordion input ~ .accordion-header {
    color: #5b657a;
    font-size: .65rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .docs-sidebar .accordion .menu .menu-item > a {
    background: transparent;
    color: #667189;
    display: inline-block;
  }

  .docs-sidebar .accordion .menu .menu-item {
    font-size: .7rem;
    padding-left: 1rem;
  }
</style>
