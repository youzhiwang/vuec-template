<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div id="app">
        <example-component :msg="msg"></example-component>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello, welcome to your first Vue component.'
      }
    }
  }
</script>
