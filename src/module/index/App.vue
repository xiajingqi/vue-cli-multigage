<template>
  <div id="app">
    <toubu></toubu>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  // import Hello from 'components/Hello/Hello'
  import toubu from 'components/head/toubu'

  export default {
    // name: 'app',
    components: {
      toubu
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

