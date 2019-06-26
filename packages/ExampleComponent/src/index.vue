<style lang="scss" src="./index.scss" scoped></style>

<template>
    <div class="example">
        <h3>{{msg}}</h3>
        <a href="https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6">
            Read document to get more details.
        </a>
    </div>
</template>

<script>
  import props from './props'

  export default {
    name: 'ExampleComponent',
    props
  }
</script>
