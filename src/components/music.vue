<template>
  <div class="music">
     <audio id="audio1" style="display:none" autoplay loop src="http://oj71bdilf.bkt.clouddn.com/Adele%20-%20Rolling%20in%20the%20Deep.mp3">
        您的浏览器不支持 audio 标签。
     </audio>
  </div>
</template>

<script>
import music from './music';
export default {
  props:["ur"],
  name: 'music',
  methods : {

  },
  components:{
    music
  },
  data (){
    return{
       urls:require("../assets/music.png")
    }
  },
  created (){

  }
}

</script>

<style scoped>

.music img{
  max-width:100%;
  position: fixed;
  z-index: 999;
  width: 2.5rem;
  height: 2.5rem;
  left: .5rem;
  top: 3.5rem;
}
.autoplay {
  -webkit-animation: rotate 1s linear infinite;
  animation: rotate 1s linear infinite;
}
@keyframes rotate{ 0%{
    -webkit-transform:rotate(0);
  }
  to{
    -webkit-transform:rotate(360deg);
  }
}
@-webkit-keyframes rotate{ 0%{
    -webkit-transform:rotate(0);
  }
  to{
    -webkit-transform:rotate(360deg);
  }
}

</style>
