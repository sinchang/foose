<template>
  <div class="highlight">
    <slot />
  </div>
</template>

<script>
  import 'highlight.js/styles/atom-one-light.css'
  import hljs from 'highlight.js/lib/highlight'
  import xml from 'highlight.js/lib/languages/xml'
  import css from 'highlight.js/lib/languages/css'
  import javascript from 'highlight.js/lib/languages/javascript'
  // import Clipboard from 'clipboard'
  hljs.configure({
    languages: [
      'xml',
      'css',
      'javascript'
    ],
  })
  hljs.registerLanguage('xml', xml)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('javascript', javascript)

  export default {
     mounted() {
      const code = this.$el.querySelector('code')
      hljs.highlightBlock(code)
    }
  }
</script>

<style lang="less">
  .highlight {
    margin: 20px auto;
    background-color: #f8f9fa;
    padding: 10px;

    code {
      background-color: #f8f9fa;
      color: #333;
    }
  }
</style>
