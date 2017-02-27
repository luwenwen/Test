<template>
  <div class="dynamic-content">
        <!-- 这是内容区域 -->
        <div class="dynamic-list">
          <div class="dynamic-img">
            <img @click="music(1)" src="../assets/img_02.png" alt="">
            <audio id="audio1" style="display:none" loop src="http://oj71bdilf.bkt.clouddn.com/%E9%9F%A9%E7%BA%A2%20-%20%E7%81%B5%E7%8A%80%E4%B8%80%E5%8A%A8.m4a">
              您的浏览器不支持 audio 标签。
            </audio>
          </div>
          <div class="dynamic-con">
            <div class="dynamic-left">
              <img src="../assets/img8.png" alt=""> 
            </div>
            <div class="dynamic-left2">
              <p>
                <span>刘小静</span>-QQ好友
              </p>
              <p>
                3小时前
              </p>
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-xiaoxi"></span>257
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-heart"></span>68
            </div>
          </div>
        </div>

        <div class="dynamic-list">
          <div class="dynamic-img">
            <img @click="music(2)" src="../assets/more.png" alt="">
            <audio id="audio2" style="display:none" loop src="http://oj71bdilf.bkt.clouddn.com/S.H.E%20-%20%E4%BD%A0%E6%9B%BE%E6%98%AF%E5%B0%91%E5%B9%B4.m4a">
              您的浏览器不支持 audio 标签。
            </audio>
          </div>
          <div class="dynamic-con">
            <div class="dynamic-left">
              <img src="../assets/img6.png" alt=""> 
            </div>
            <div class="dynamic-left2">
              <p>
                <span>Sweet-roll</span>-深圳
              </p>
              <p>
                3小时前
              </p>
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-xiaoxi"></span>376
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-heart"></span>145
            </div>
          </div>
        </div>

        <div class="dynamic-list">
          <div class="dynamic-img">
            <img @click="music(3)" src="../assets/img_02.png" alt="">
            <audio id="audio3" style="display:none" loop src="http://oj71bdilf.bkt.clouddn.com/%E9%9F%A9%E7%BA%A2%20-%20%E7%81%B5%E7%8A%80%E4%B8%80%E5%8A%A8.m4a">
              您的浏览器不支持 audio 标签。
            </audio>
          </div>
          <div class="dynamic-con">
            <div class="dynamic-left">
              <img src="../assets/img8.png" alt=""> 
            </div>
            <div class="dynamic-left2">
              <p>
                <span>刘小静</span>-QQ好友
              </p>
              <p>
                3小时前
              </p>
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-xiaoxi"></span>298
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-heart"></span>98
            </div>
          </div>
        </div>

        <div class="dynamic-list">
          <div class="dynamic-img">
            <img @click="music(4)" src="../assets/more.png" alt="">
            <audio id="audio4" style="display:none" loop src="http://oj71bdilf.bkt.clouddn.com/S.H.E%20-%20%E4%BD%A0%E6%9B%BE%E6%98%AF%E5%B0%91%E5%B9%B4.m4a">
              您的浏览器不支持 audio 标签。
            </audio>
          </div>
          <div class="dynamic-con">
            <div class="dynamic-left">
              <img src="../assets/img6.png" alt=""> 
            </div>
            <div class="dynamic-left2">
              <p>
                <span>Sweet-roll</span>-深圳
              </p>
              <p>
                3小时前
              </p>
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-xiaoxi"></span>224
            </div>
            <div class="dynamic-right1">
              <span class="icon iconfont icon-heart"></span>57
            </div>
          </div>
        </div>

        <!-- 这是内容区域 -->

  </div>
   
</template>

<script>

export default {
  name: 'dynamic',
  data () {
    return{
      
    }
  },
  components: {
    
  },
  created () {

  },
  methods : {
    music (id) {
      console.log('audio'+id)
      var myAudio = document.getElementById('audio'+id);
      if(myAudio.paused){
          myAudio.play();
      }else{
          myAudio.pause();
      }
    }
  }
}
</script>

<style scoped>
.dynamic-content{
  background: #1D2027;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
  overflow-y: auto; 
}
.dynamic-list{
  width: 100%;
  height:12.1rem;
  margin-bottom: 2rem;
}
.dynamic-img{
  width: 100%;
  height:8.1rem;
}
.dynamic-img img{
  width: 100%;
  height:100%;
}
.dynamic-con{
  width: 100%;
  height:4rem;
  background: #2E3440;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
}
.dynamic-left{
  width:3.5rem;
  padding-left: 1rem;
}
.dynamic-left2{
  flex:1;
  color:#868A93;

}
.dynamic-left2 span{
  font-size: 1.1rem;
  color:#D1D1DB;
  margin-right: 1rem;
}
.dynamic-right1{
  width:4rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
  color:#D5D7E3;
  font-size: 0.9rem;
}
.dynamic-right1 span{
  margin-right: 0.4rem;
  font-size: 1.4rem;
}
</style>
