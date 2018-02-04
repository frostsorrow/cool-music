<template>
  <div class="app-head">
    <i class="icon"></i>
    <span>Cool Music</span>
  </div>
</template>

<script>
  export default{
    name: 'appHead'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/style/variable.less";
  .app-head{
    color: @color-theme;
    font-size: @font-size-l-s;
    font-weight: bold;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .icon{
    display: inline-block;
    width: 30px;
    height: 32px;
    margin-right: 5px;
    vertical-align: middle;
    .bg-image('logo');
    background-size: 30px 32px;
  }

  /*背景图片*/
  .bg-image(@url){
    background-image: url("@{url}@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    .bg-image(@url){
      background-image: url("@{url}3x.png");
    }
  }
</style>
