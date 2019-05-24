<template>
  <div class="hello">
    <h3 class="text-center">{{ msg }}</h3>
    <leave-msg><solt>此组件如果有内容，这里的内容就不会被看到</solt></leave-msg>
  </div>
</template>

<script>
export default {
  name: 'secondary',
  components:{
  	'leave-msg':{
  		render:function(createElement){
  			var _this = this;
  			//渲染聊天内容列表
  			if(_this.list.length){
  				var listNode = createElement('ul',_this.list.map(function(item){
  					return createElement('li',[
  						createElement(
     						'a',
     						{
     							domProps:{
     								href: '#' + item
     							},
     							style:{
     								fontSize:'15px',
     								fontWeight:'bold'
     							}
     						},
     						item
     					)
  					]);
  				}));
  			}else{
  				var listNode = createElement('p','没有聊天内容');
  			}
  			return createElement('div',[
  				listNode,
  				createElement('textarea',{
  					attrs:{
  						placeholder:'请输入内容，并按回车键发送'
  					},
  					style:{
  						width:'200px',
  						height:'100px'
  					},
  					on:{
  						keyup:function(event){
  							//如果不是回车键，不发送数据
  							if (event.keyCode != 13) {
  								return;
  							} else{
  								//添加输入的内容到聊天窗口
  								_this.list.push(event.target.value);
  								//发送成功之后，清空聊天窗口
  								event.target.value = '';
  							}
  						}
  					}
  				})
  			])
  		},
  		data:function(){
  			return {
  				value:'',
      		list:[]
  			}
  		},
  	}
  },
  data () {//数据
    return {
      msg: '二级路由页面,模拟聊天窗口',
    }
  },
  methods:{//方法
  	
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {font-weight: normal;}
ul {list-style-type: none;padding: 0;}
li {display: inline-block;margin: 0 10px;}
a {color: #42b983;}
</style>
