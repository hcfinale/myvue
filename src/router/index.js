import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import admin from '@/components/admin'
import list from '@/components/list'
import article from '@/components/article'
import content from '@/components/content'
import secondary from '@/components/secondary'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    	{	//路由重定向，当访问根目录的时候自动跳转到admin路由
    		path: '/',
    		redirect: '/index',
            meta: {
                title: '主页'
            }
    	},
		{
    		path: '/',
    		name: 'index',
            meta: {
                title: '主页'
            },
            // component:'index',    基本上是这个
            component: (resolve) => require(['@/components/index.vue'], resolve)
    	},{
            path: '/index',
            name: 'index',
            meta: {
                title: '主页'
            },
            component: (resolve) => require(['@/components/index.vue'], resolve)
        },{
        	path: '/admin',
        	name: 'admin',
            meta: {
                title: '后台'
            },
        	component: (resolve) => require(['@/components/admin.vue'], resolve)
        },{
        	path:'/search',
        	name:'search',
            meta: {
                title: '搜索'
            },
        	component: (resolve) => require(['@/components/search.vue'], resolve)
        },{
        	//path: '/list/:color/pp/:type',
        	path: '/list/:color/:type',
        	name: 'MyList',
            meta: {
                title: '列表页面'
            },
        	component: (resolve) => require(['@/components/list.vue'], resolve)
        },{
        	path: '/article',
        	name: 'MyArticle',
            meta: {
                title: '文章页面'
            },
        	component: (resolve) => require(['@/components/article.vue'], resolve)
        },{
        	path: '/content',
        	name: 'MyContent',
            meta: {
                title: 'content动态加载页面'
            },
        	component: (resolve) => require(['@/components/content.vue'], resolve),
        	children:[
        		{
        			path: 'secondary',
        			name: 'secondary',
                    meta: {
                        title: '二级路由页面'
                    },
        			component: (resolve) => require(['@/components/secondary.vue'], resolve),
        		}
        	]
        },{
            //当访问的路由不存在的时候，默认就会访问index路由页面
            path:'*',
            redirect:'/index'
        }
    ]
})