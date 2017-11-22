<template>
  <div id="app">
    <toubu></toubu>
    <div class="haha" ref="haha">
      hehehe
    </div>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import toubu from 'components/head/toubu'
  import $ from 'jquery'

  export default {
    // name: 'app',
    components: {
      toubu
    },
    created(){
      $.ajax({
          type: 'POST',
          url: 'http://api.shijian666.com/peony/activity/getActivityList',
          data: {token:123},
          // dataType: dataType,
          success: function(res){
              if(res.code==0){
                console.log(res)
              }else if(res.code==-1){

              }
          }
        });
    },
    mounted () {
      console.log(this.$refs.haha)
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
