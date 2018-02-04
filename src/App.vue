<template>
  <div id="app">
    <appHead></appHead>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import appHead from '@/components/head/head'
export default {
  name: 'App',
  components: {
    appHead
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "common/style/variable.less";
#app {
  color: @color-theme ;
}
</style>
