<template>
  <div id="app">
    <router-view class="app-view"></router-view>
  </div>
</template>

<script>

import { setREM } from './script/util';
import store from './vuex1/store';

export default {
  name: 'app',
  store,
  data () {
    return {
      show : false,
      prize : ''
    }
  },
  components : {

  },
  created () {
    setREM();
  },
  methods : {
    
  }
}
</script>

<style lang="less">

@import '~vux/src/styles/index.less';
@import './css/iconfont.css';

html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app-view{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
ul,li{
  list-style: none;
}

</style>
