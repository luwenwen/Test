<template>
  <div class="ranking-content">
        <!-- 这是内容区域 -->
    <div class="ranking-button">
      <div class="ranking-center">
        <!-- <x-button @click.native="demo01_onIndexChange (0)">
          <span @click="change(1)" :class="{'ranking-active':isCur===1}">好友作品榜</span>
        </x-button>
        <x-button @click.native="demo01_onIndexChange (1)">
          <span @click="change(2)" :class="{'ranking-active':isCur===2}">好友歌手榜</span>
        </x-button>  -->
        <span @click="change(0)" :class="{'ranking-active':isCur===0}">好友作品榜</span>
        <span @click="change(1)" :class="{'ranking-active':isCur===1}">好友歌手榜</span>
      </div>
    </div>
    <div class="ranking-list">
      <swiper 
            v-model="demo01_index" 
            height="750px" 
            @on-index-change="onSwiperItemIndexChange" 
            :show-dots="false"
            >
        <swiper-item class="swiper-list">
          <ul class="ranking-ul">
            <li v-for="arr in array">
              <div class="ranking-left">
                {{arr.id}}
              </div>
              <div class="ranking-img">
                <img :src="arr.img" alt="">
              </div>
              <div class="ranking-cen">
                <p>{{arr.size}}</p>
                <span>{{arr.name}}</span>
              </div>
              <div class="ranking-right">
                <img src="../assets/right.png" alt="">
              </div>
            </li>
          </ul>
        </swiper-item>
        <swiper-item class="swiper-list">
          <ul class="ranking-ul">
            <li v-for="arr in array">
              <div class="ranking-left">
                {{arr.id}}
              </div>
              <div class="ranking-img">
                <img :src="arr.img" alt="">
              </div>
              <div class="ranking-cen">
                <p>{{arr.size}}</p>
                <span>{{arr.name}}</span>
              </div>
              <div class="ranking-right">
                <img src="../assets/right.png" alt="">
              </div>
            </li>
          </ul>
        </swiper-item>
      </swiper>
    </div>
      <!-- 这是内容区域 -->
  </div>
   
</template>

<script>
import { Swiper, GroupTitle, SwiperItem } from 'vux';
export default {
  name: 'ranking',
  data () {
    return{
      isCur:0,
      demo01_index:0,
      array:[]
    }
  },
  components: {
    Swiper,
    SwiperItem,
    GroupTitle
  },
  methods : {
    change (id) {
      this.isCur = id;
      this.demo01_index = id;
    },
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  },
  created () {
    /*this.$http({
      url : "./api/music",
      method : 'GET'
    }).then(function(res){
      this.array = res.data.data;
      console.log(this.array);

    },function(err){
      console.log(err);
    })*/
    
    var _this = this;
    this.$Tool.ajax({
      url:'api.Demo.tests',
      data:{name:'zhangsan'},
      success(data,res){
        _this.array = res.data.data; 
        console.log(res);
      },
      error(res){
        console.log(res);
      }
    })

  }
}
</script>

<style scoped>
.ranking-content{
  background: #1D2027;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
  overflow-y: auto; 
}
.ranking-button{
  box-sizing:border-box;
  width: 100%;
  height:4rem;
  padding-top:1rem; 
  border-bottom: 1px solid #1E2126;
}
.ranking-center{
  width:14.6rem;
  height:2rem;
  border: 1px solid #F53951;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
}
.ranking-center span{
  height: 100%;
  flex:1;
  text-align: center;
  color: #898C93;
  line-height: 2rem;
}
.ranking-center .ranking-active{
  color: #EFEDE0;
  background: #F53951;
  border-radius: 0.5rem;
}
.ranking-list{
  width:100%;
}
.swiper-list{
  width:100%;
  height:auto;
}
.ranking-ul{
  width:100%;
}
.ranking-ul li{
  width:100%;
  height:4rem;
  border-bottom: 1px solid #20232A;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items:center;
}
.ranking-ul li:nth-of-type(1) .ranking-left{
  color:#F73267;
}
.ranking-ul li:nth-of-type(2) .ranking-left{
  color:#F73267;
}
.ranking-ul li:nth-of-type(3) .ranking-left{
  color:#F73267;
}
.ranking-left{
  width:5.66rem;
  text-align: center;
  font-size: 3rem;
  color:#65686F;
}
.ranking-left span{
  text-align: center;
  color:#F73267;
}
.ranking-img{
  width:4rem;
}
.ranking-cen{
  flex:1;
  color:#65686F;
}
.ranking-cen span{
  flex:1;
  color:#DBDFE2;
  font-size: 1.1rem;
}
.ranking-right{
  width:3rem;
}


</style>
