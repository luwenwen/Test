import home from './components/home';
import choose from './components/choose';
import dynamic from './components/dynamic';
import ranking from './components/ranking';
import danqu from './components/danqu';
import search from './components/search';

module.exports = function(VueRouter){
	const router = new VueRouter({
		routes:[
			{
				name:'home',
				path:'/',
				component: home,
				children:[
					{
						name:'choose',
						path:'/',
						component: choose
					},
					{
						name:'dynamic',
						path:'dynamic',
						component: dynamic
					},
					{
						name:'ranking',
						path:'ranking',
						component: ranking
					}
				]
			},
			{
				name:'danqu',
				path:'/danqu',
				component: danqu
			},
			{
				name:'search',
				path:'/search',
				component: search
			}
		]
	})
	
	return router;
}