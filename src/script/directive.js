import Vue from 'vue';
Vue.directive('music',{
	bind (el,binding){
		var timer = null,num = 5;
		var Img = el.children[0];
		var Audio = el.children[1];
		Img.addEventListener("click",function(){
			var movediv = document.getElementById('movediv');
			if(Audio.paused){
		        Img.className = "autoplay";
		        Audio.play();
		        //console.log(movediv);
				timer = setInterval(()=>{
					movediv.style.marginTop = -(num++) +'px';
				},100)

		    }else{
		        Img.className = "";
		        Audio.pause();
		        clearInterval(timer);
		    }
		})
	    
	}
})
