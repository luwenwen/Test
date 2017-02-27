<template>
  <div class="home-content">
        <!-- 这是内容区域 -->
        <div class="home-banner">
          <swiper :aspect-ratio="300/800" auto @on-index-change="onSwiperItemIndexChange" dots-class="custom-bottom" dots-position="center">
            <swiper-item class="swiper-demo-img">
              <img src="../assets/img_01.png">
            </swiper-item>
            <swiper-item class="swiper-demo-img">
              <img src="../assets/img_03.jpg">
            </swiper-item>
            <swiper-item class="swiper-demo-img">
              <img src="../assets/img_02.png">
            </swiper-item>
          </swiper>
        </div>
        <div class="home-fenlei">
          <dl @click="showPlugin('男歌手')">
            <dt>
              <img src="../assets/img1.png" alt="">
            </dt>
            <dd>男歌手</dd>
          </dl>
          <dl @click="showPlugin('女歌手')">
            <dt>
              <img src="../assets/img2.png" alt="">
            </dt>
            <dd>女歌手</dd>
          </dl>
          <dl @click="showPlugin('乐队组合')">
            <dt>
              <img src="../assets/img3.png" alt="">
            </dt>
            <dd>乐队组合</dd>
          </dl>
          <dl @click="showPlugin('语种点歌')">
            <dt>
              <img src="../assets/language.png" alt="">
            </dt>
            <dd>语种点歌</dd>
          </dl>
        </div>
        <!-- scroller -->
        <div class="home-guoji">
          <scroller lock-y scrollbar-x>
            <div class="box1">
              <div class="box1-item">
                <img src="../assets/pic1.png" alt="">
              </div>
              <div class="box1-item">
                <img src="../assets/pic2.png" alt="">
              </div>
              <div class="box1-item">
                <img src="../assets/pic3.png" alt="">
              </div>
              <div class="box1-item">
                <img src="../assets/pic1.png" alt="">
              </div>
              <div class="box1-item">
                <img src="../assets/pic2.png" alt="">
              </div>
              <div class="box1-item">
                <img src="../assets/pic3.png" alt="">
              </div>
            </div>
          </scroller>
        </div>
        <!-- scroller -->
        <div class="home-remen">
          <h2>
            <span>热门歌曲</span>
          </h2>
          <ul class="home-list">
            <li v-for="item in demo01Arr">
              <div class="home-left">
                <p>
                  <span>{{item.name}}</span>{{item.size}}
                </p>
                <p>
                  {{item.comment}}
                </p>
              </div>
              <div class="home-right" @click="gotos1(item.id)">
                <div class="home-huatong" @click="gotos(item.id)" >
                  <span class="icon iconfont icon-huatong1"></span>演唱
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 这是内容区域 -->
  </div>
   
</template>

<script>
import { Scroller, Swiper, SwiperItem } from 'vux';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'home',
  data () {
    return{
      demo01_index: 0,
      swiperItemIndex: 1,
      demo01Arr:[]
    }
  },
  components: {
    Scroller,
    Swiper,
    SwiperItem
  },
  created () { 
    //dev-ser.js
    /*this.$http({
      url : "./api/music",
      method : 'GET'
    }).then(function(res){
      console.log(res);
      this.demo01Arr = res.data.data;
      console.log(this.demo01Arr);
      console.log(res);
    },function(err){
      console.log(err);
    })*/

    var _this = this;
    this.$Tool.ajax({
      url:'api.Demo.tests',
      data:{name:'zhangsan'},
      success(data,res){
        _this.demo01Arr = res.data.data; 
        //console.log(res);
      },
      error(res){
        console.log(res);
      }
    })
    
    /*setTimeout(function(){
      console.log(_this.demo01Arr);
    },2000)*/

  },
  methods : {

    showPlugin (str) {
      this.$vux.alert.show({
        title: str,
        content: '此链接无效',
        onShow () {
          //console.log('Plugin: I\'m showing')
        },
        onHide () {
          //console.log('Plugin: I\'m hiding now')
        }
      })
    },
    showPluginAuto () {
      this.showPlugin()
      setTimeout(() => {
        this.$vux.alert.hide()
      }, 3000)
    },
    onSwiperItemIndexChange (index) {
      //console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    gotos (id) {
      console.log(id);
      if (id) {
        this.$emit('message',id);
      }

      this.$router.push("/danqu");
    },
     ...mapActions([
      'gotos1'
    ])

  }
}
</script>

<style scoped>
.home-content{
  background: #1D2027;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
  overflow-y: auto; 
}
.swiper-demo-img img {
  width: 100%;
}
.home-fenlei{
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
  color:#7C7F84;
  height:7rem;
  border-bottom: 1px solid #1F2229;
}
.home-fenlei dl{
  flex:1;
  text-align: center;
}
.home-fenlei dt{
  width: 2.9rem;
  height:2.9rem;
  margin: 0 auto 0.5rem;

}
.home-fenlei dd{
  font-size: 1rem;
}
.home-guoji{
  box-sizing:border-box;
   height: 6rem;
   padding-top: 1rem;
}
.box1 {
  height: 100%;
  position: relative;
  width: 41.5rem;
}
.box1-item {
  width: 5.7rem;
  height: 3.6rem;
  display:inline-block;
  margin-left: 1.2rem;
  float: left;
  text-align: center;
  line-height: 3.6rem;
}
.home-remen{
  width:100%;
  border-top: 1px solid #23262D;
}
.home-remen h2{
  height:3.2rem;
  line-height: 3.2rem;
  padding-left:1.3rem;
}
.home-remen h2 span{
  font-size: 1.4rem;
  padding-left:0.5rem;
  border-left: 2px solid #F53952; 
  color:#98999E;
}
.home-list{
  width:100%;
  color: #6D7075;
}
.home-list li{
  height:4.5rem;
  width:100%;
  display: -webkit-flex;
  display: flex;
  box-sizing:border-box;
  -webkit-align-items:center;
  padding: 0 5%;
  background: #21242B;
  border-bottom: 1px solid #23262D;
  border-top: 1px solid #23262D;
}
.home-right{
  width:5.2rem;
}
.home-huatong{
  box-sizing:border-box;
  width:5rem;
  height:1.7rem;
  border-radius: 1rem;
  border: 2px solid #F53952;
  padding-left: 0.5rem;
  color:#FDFFFE;
  font-size: 0.9rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
}
.home-huatong span{
  padding-top: 0.2rem;
  font-size: 1.5rem;
}
.home-huatong img{
  margin:0 0.2rem 0 0;
}
.home-left{
  flex:1;
}
.home-left span{
  color:#FDFFFE;
  font-size: 1.1rem;
  margin-right: 1rem;
}
</style>
