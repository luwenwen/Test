<template>
  <div class="home">
    <div class="home-header">
      <dl>
        <dt class="icon iconfont icon-iconxiaoxi1"></dt>
        <dd>消息</dd>
      </dl>
      <p>天天K歌</p>
      <dl @click="search">
        <dt class="icon iconfont icon-sousuo-sousuo"></dt>
        <dd>搜歌</dd>
      </dl>
    </div>
    <div class="home-nav">
      <ul class="home-ul">
        <li class="home-li1"></li>
        <li class="home-li2" 
            @click="selectss(1)" 
            :class="{'home-active':isCur===1}"
            >点歌台
        </li>
        <li class="home-li1"></li>
        <li class="home-li2"
            @click="selectss(2)" 
            :class="{'home-active':isCur===2}"
            >动态
        </li>
        <li class="home-li1"></li>
        <li class="home-li2"
            @click="selectss(3)" 
            :class="{'home-active':isCur===3}"
            >排名
        </li>
        <li class="home-li1"></li>
      </ul>
    </div>
    <div class="home-main">
      <router-view v-on:message="recieveMessage" class="home-content"></router-view>
    </div> 
  </div>
</template>

<script>
import { Alert } from 'vux'
export default {
  name: 'home',
  data () {
    return{
      isCur : 1,
      value : true,
      show: false,
      show1: false,
      title: '',
      content: ''
    }
  },
  components: {
    Alert
  },
  created () {

  },
  methods : {
    selectss (id) {
      this.isCur = id;
      if(id === 1){
        this.$router.push("/");
      }
      if(id === 2){
        this.$router.push("dynamic");
      }
      if(id === 3){
        this.$router.push("ranking");
      }
    },
    search (){
      this.$router.push("/search");
    },
    recieveMessage: function (text) {
        console.log('监听到子组件变化'+text);
    }


  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction:column;
  flex-direction:column;
  overflow: hidden;
}
.home-header{
  box-sizing:border-box;
  padding:0 2%; 
  background: #F53951;
  height:3.2rem;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
  color:#fff;
}
.home-header dl{
  height: 100%;
  width:2.5rem;
}
.home-header dt{
  padding-top:0.1rem; 
  width:100%;
  font-size: 1.4rem;
  text-align: center;
}
.home-header dd{
  width:100%;
  text-align: center;
  font-size: 0.3rem;
  margin-top:-0.4rem; 
}
.home-header p{
  flex:1;
  -webkit-flex:1;
  text-align: center;
  font-size: 1.6rem;
}
.home-nav{
  width:100%;
  height:3rem;
  background:#353B47;
  color:#8F939C;
}
.home-ul{
  width:100%;
  height:100%;
  display: -webkit-flex;
  display: flex;
  list-style: none;
}
.home-li1{
  -webkit-flex:1;
  flex:1;
}
.home-li2{
  width:4rem;
  font-size: 1.2rem;
  line-height: 3rem;
  text-align: center;
}
.home-ul li{
  height: 100%;
  box-sizing:border-box;
}
.home-active{
  color:#DDE4EC;
  border-bottom:2px solid #F73952; 
}
.home-main{
  background: #fff;
  flex:1;
  -webkit-flex:1;
  width: 100%;
  overflow: hidden;
}
.home-content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
