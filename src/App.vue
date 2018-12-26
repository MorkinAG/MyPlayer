<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  *{
    margin 0
    padding 0
    text-decoration none
    list-style none
  }
  body{
    font-size 12px
    font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
    color #333
    background #F5F5F5
  }
</style>
