<template>
  <div class="danqu">
    <div class="danqu-header">
      <span @click="goto1"><span class="icon iconfont icon-zuojiantou"></span>返回</span>
      <p>花又开好了</p>
      <span>完成</span>
    </div>
    <div class="danqu-main">
      <div class="danqu-content">
        <div class="danqu-banner">
          <img src="../assets/singing.png" alt="">
        </div>
        <div class="danqu-geci">
          <div class="danqu-juzi" id="movediv">
            <p v-for="item in lyr">{{item}}</p>
          </div>
        </div>
        <div class="danqu-bottom">
          <div class="danqu-left">
            <div class="danqu-left1">
              <span class="icon iconfont icon-play-o"></span>录视频
            </div>
          </div>
          <div class="danqu-img"  v-music>
            <img @click="getlyric" src="../assets/sing_s.png" alt="">
            <audio id="audio1" style="display:none" loop src="http://oj71bdilf.bkt.clouddn.com/Adele%20-%20Rolling%20in%20the%20Deep.mp3">
                您的浏览器不支持 audio 标签。
             </audio>
          </div>
          <div class="danqu-left">
            <div class="danqu-left1">
              <span class="icon iconfont icon-zhongbo"></span>重唱
            </div> 
          </div>
        </div>
      </div>
    </div>
    <!-- <music ></music> -->
     
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
  name: 'danqu',
  data () {
    return{
      isCur : 1

    }
  },
  created () {

  },
  computed:{
    ...mapGetters([
      'lyr'
    ])
  },
  methods : {
    ...mapActions([
      'getlyric'
    ]),
    goto1 (){
      this.$router.push("/");
    }



  }
}
</script>

<style scoped>
.danqu{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction:column;
  flex-direction:column;
  overflow: hidden;
}
.danqu-header{
  box-sizing:border-box;
  padding:0 2%; 
  background: #C62F42;
  height:3.2rem;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
  color:#fff;
}
.danqu-header span{
  width:3.5rem;
  text-align: center;
  font-size: 1rem;
}
.danqu-header span span{
  font-size: 1.4rem;
}
.danqu-header p{
  flex:1;
  -webkit-flex:1;
  text-align: center;
  font-size: 1.6rem;
}
.danqu-main{
  background: #313237;
  flex:1;
  -webkit-flex:1;
  width: 100%;
  overflow:hidden; 
}
.danqu-content{
  height:100%;
  width: 100%;
  overflow:hidden; 
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction:column;
  flex-direction:column;
}
.danqu-banner{
  width:100%;
  height:22rem;
}
.danqu-banner img{
  width:100%;
}
.danqu-geci{
  box-sizing:border-box;
  padding: 6% 0;
  width:100%;
  flex:1;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction:column;
  overflow: hidden;
}
.danqu-juzi{

  width:100%;
  overflow-x:hidden; 
  overflow-y:hidden; 
}
.danqu-juzi p{
  width: 100%;
  color: #55585D;
  font-size: 1.3rem;
  line-height:2.8rem; 
  text-align: center;
}
.danqu-juzi p:nth-child(2) {
  color:#FBFCFE;
}
.danqu-juzi p:nth-child(1) {
  color:#77787D;
}
.danqu-juzi p:nth-child(3) {
  color:#77787D;
}
.danqu-juzi p:nth-child(2) span{
  color:#D2263C;
}
.danqu-bottom{
  height: 5rem;
  width:100%;
  display: -webkit-flex;
  display: flex;
  color:#808186;
}
.danqu-left{
  flex:1;
  position: relative;
}
.danqu-left1{
  flex:1;
  position: absolute;
  width:5rem;
  left:50%;
  bottom:20%;
  -webkit-transform:translatex(-50%);
}
.danqu-left1 span{
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
.danqu-img{
  width:8rem;
}
.danqu-img img{
  width:100%;
}

</style>
