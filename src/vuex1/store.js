import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

//import * as actions from './actions';
//import * as getters from './getters';
const state = {
    count: 0,
    lyr : ["现在无歌词"],
    id : '1'
};
const actions = {
	add ({commit,state}){
		commit('add',1)
	},

	reduce ({commit,state}){
		commit('updata',1)
	},
	getlyric ({commit,state}){
		//console.log(Vue.Tool.ajax)
		Vue.Tool.ajax({
	        url:'api.Demo.select',
	        data:{name:'zhangsan'},
	        success(data,res){
	          //console.log(res.data);
	          commit('lyrics',res.data.Rolling.lyric)
	        },
	        error(res){
	          console.log(res);
	        }
	    })
	},
	gotos1 ({commit,state},id) {
		console.log(id);
		commit('updata',id)
	}

}
const getters = {
	count : state => state.count,
	lyr : state => state.lyr,
	id : state => state.id
}
//修改state数据的方法全部放在这里
const mutations = {
    add (state,num){
    	state.count = state.count + num;
    },
    updata (state,num){
    	state.count = state.count - num;
    },
    lyrics (state,str){
		state.lyr = str;
    },
    changeid (state,str){
    	state.id = str;
    }
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})