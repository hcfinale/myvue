<template>
	<div class="container-fluid" v-cloak>
		<div class="app-header">
			<!--keep-alive是一个配合组件处理缓存的组件-->
			<keep-alive>
		    	<hc-header :is="myheader" sun-number=100></hc-header>
		    </keep-alive>
		</div>
		<i style="display:block;margin-top: 50px;"></i>
		<div class="container">
			<keep-alive>
				<router-view>
					<solt>如果没有出现内容，这就是默认内容。</solt>
				</router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<keep-alive>
				<!--:is&slot 为具名插槽-->
		    	<hc-footer :is="myfooter" @slide="toggle">
		    		<p slot="hcapple">apple</p>
	    			<p slot="hcbananer">bananer</p>
		    	</hc-footer>
		    </keep-alive>
		</div>
	</div>	
</template>

<script>
import HcHeader from '@/components/header'
import HcFooter from '@/components/footer'
export default {
	name: 'layout',
	components:{ HcHeader,HcFooter },
	data () {//数据
		return {
			myheader:'hc-header',
			myfooter:'hc-footer',
		}
	},
	methods:{
	  	toggle(val){
	  		console.log('传过来'+val)
	  	}
  	}
}
</script>

<style>
@charset "utf-8";
[v-cloak]{display: none;}
html { width:100%;font-family:"微软雅黑",Helvetica, sans-serif;}
body{ width:100%; overflow-x:hidden; font-size:10px;}
body, html, p, blockquote, img, label, p, h1, h2, h3, h4, h5, h6, pre, ul, ol, li, dl, dt, dd, form, a, fieldset, input, th, td {margin: 0; padding: 0; border: 0; outline: none;}
*{ margin: 0; padding: 0;}
ul, ol{list-style: none;}
a{text-decoration:none;vertical-align:baseline;cursor:pointer;color:#000}
a:hover{text-decoration:none;color:#000}
input{ -webkit-appearance: none; outline: none; border: none;}
img{ border-style:none;vertical-align:middle;}
/*=============================顶部公用部分=============================*/
.font-weight{font-weight: bold;}
.container-fluid{display:block;width: 100%;padding: 0;margin: 0;}.app-header{display: block;width: 100%;height: 50px;background: #448ACA;color: #000000;}
.app-header{position: fixed;top: 0;left: 0;right: 0;display: block; width: 100%;height: 50px;background: #448ACA;color: #000000;z-index: 5;}
.margin-top-lg{margin-top: 3rem;}
.margin-top-md{margin-top: 2rem;}
.margin-top-sm{margin-top: 1rem;}
.margin-top-xs{margin-top: 0.5rem;}
</style>