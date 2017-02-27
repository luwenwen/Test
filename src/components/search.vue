<template>
  <div class="search">
    <div class="search-header">
      <span @click="goto1"><span class="icon iconfont icon-zuojiantou"></span>返回</span>
      <p>搜 索</p>
      <span></span>
    </div>
    <div class="search-main">
      <div class="search-input">
        <div class="search-quan">
          <input type="text" v-model="values" @keydown="searchs" placeholder="搜索歌曲、歌手名">
          <span class="search-huatong icon iconfont icon-huatong"></span>
        </div>
      </div>
      <div class="search-content">
        <ul>
          <li v-for="item in domearr">
            <p class="search-p1">{{item.author}} - {{item.name}}</p>
            <p class="search-p2">
              <span class="span-first">00:00 / {{item.date}}</span> 
              <span class="icon iconfont icon-xiazai"></span>
              <span class="icon iconfont icon-mv"></span>
              <span class="icon iconfont icon-heart"></span>
              <span class="icon iconfont icon-shanchu"></span>
              <span class="icon iconfont icon-xiao21"></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
  name: 'search',
  data () {
    return{
      domearr : [],
      values : ''
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
    searchs (e){
      if(e.keyCode == 13){
        if(this.values){
          console.log(this.values);
          var e = e || window.e;
          var _this = this;
          //console.log(e);
              this.$Tool.ajax({
                url:'api.Demo.tests',
                data:{name:this.values},
                success(data,res){
                  _this.domearr = res.data.data; 
                  console.log(res);
                },
                error(res){
                  console.log(res);
                }
              })
          
        }else{
            console.log("aasd")
            this.$vux.alert.show({
              title: "警告！",
              content: '输入不能为空',
              onShow () {
                //console.log('Plugin: I\'m showing')
              },
              onHide () {
                //console.log('Plugin: I\'m hiding now')
              }
            })

        }
      
      }
    },
    goto1 (){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction:column;
  flex-direction:column;
  overflow: hidden;
}
.search-header{
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
.search-header span{
  width:3.5rem;
  text-align: center;
  font-size: 1rem;
}
.search-header span span{
  font-size: 1.4rem;
}
.search-header p{
  flex:1;
  -webkit-flex:1;
  text-align: center;
  font-size: 1.6rem;
}
.search-main{
  background:#fff;
  flex:1;
  -webkit-flex:1;
  width:100%;
  overflow-y:auto;
  overflow-x:hidden;  
}
.search-input{
  width:100%;
  height:4rem;
  background: #fff;
  box-sizing: border-box;
  padding: 1rem 1rem;
}
.search-quan{
  border-radius: 1rem;
  height:100%;
  width:100%;
  border: 1px solid #ccc;
  position: relative;
}
.search-quan input{
  box-sizing:border-box;
  border-radius: 1rem;
  height:100%;
  line-height: 100%;
  width:100%;
  background: #fff;
  border: none;
  outline: none;
  padding: 0 1rem;
  text-align: center;
}
.search-huatong{
  position: absolute;
  top:0;
  right:1rem;
  font-size: 1.5rem;
}
.search-content{
  margin-top: 1rem;
  width: 100%;
  box-sizing:border-box;
  padding: 0 1rem;
} 
.search-content ul{
  width: 100%;
  
} 
.search-content li{
  box-sizing:border-box;
  padding: 0 1rem;
  width: 100%;
  height:4rem;
  font-size: 1.1rem;
  border-bottom: 1px solid #ccc;
} 
.search-p1{
  height:2rem;
  line-height: 2.5rem;
  color:#aaa;
} 
.search-p2{
  height:2rem;
  line-height: 1.7rem;
  color:#aaa;
  display: -webkit-flex;
  display: flex;
}
.search-p2 span{
  width:2rem;
  text-align: center;
  font-size: 1.2rem;
}
.search-p2 .span-first{
  -webkit-flex:1;
  flex:1;
  text-align: left;
  font-size: 1rem;
}


</style>
