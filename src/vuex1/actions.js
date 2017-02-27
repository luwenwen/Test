import Vue from 'vue';

const add = function({commit,state}){
	commit('add',1)
}

const reduce = function({commit,state}){
	commit('updata',1)
}

const getlyric = function({commit,state}){
	//console.log(Vue.Tool.ajax)
	Vue.Tool.ajax({
        url:'api.Demo.select',
        data:{name:'zhangsan'},
        success(data,res){
          //console.log(res.data);
          commit('lyrics',res.data.Chengdu.lyric)
        },
        error(res){
          console.log(res);
        }
    })
	
}

export {
	add,
	reduce,
	getlyric
}