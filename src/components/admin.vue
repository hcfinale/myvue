<template>
  <div class="container-fluid" v-cloak>
    <h1 class="text-center">{{ msg }}</h1>
    <p class="font-weight"><small>{{one_msg}}</small></p>
    <input-number v-model="value" :max="11" :min="0"></input-number>
    <hr />
    <p class="font-weight"><small>{{two_msg}}</small></p>
    <p class="font-weight"><small>{{three_msg}}</small></p>
    <url-render :level="3" title="特点">特点</url-render>
    <hr />
    <p class="font-weight"><small>{{four_mag}}</small></p>
    <button @click="handleClick">显示列表</button>
    <ele :list="list"></ele>
    <hr />
    <p>下面是利用vuex实现的全局数据调用</p>
    <p>{{ count }}&&价格{{ $store.state.totalPrice }}</p>
    <button @click="gagarin">+1</button>
    <button @click="relief">-1</button>
  </div>
</template>

<script>
function isValueNumber (value){
	return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value+'');
}
export default {
  name: 'index',
  components:{
  	'inputNumber': {
	  template: '<div class="input-number">\
										<input \
											type="text" \
											:value="currentValue" \
											@change="handleChange"> \
										<button \
											@click="handleDown" \
											:disabled="currentValue <= min">-</button> \
										<button \
											@click="handleUp" \
											:disabled="currentValue >= max">+</button> \
									</div>',
									props:{
										max:{
											type:Number,
											default:Infinity
										},
										min:{
											type:Number,
											default:-Infinity
										},
										value:{
											type:Number,
											default:0
										}
									},
									data: function() {
										return {
											currentValue: this.value
										}
									},
									watch:{
										currentValue: function(val) {
											this.$emit('input',val);
											this.$emit('on-change',val);
										},
										value: function(val){
											this.updateValue(val);
										}
									},
								  methods:{
										handleDown: function() {
											if(this.currentValue <= this.min) return;
											this.currentValue -= 1;
										},
										handleUp: function(){
											if(this.currentValue >= this.max) return;
											this.currentValue += 1;
										},
										updateValue: function(val){
											if(val > this.max) val = this.max;
											if(val <this.min) val = this.min;
											this.currentValue = val;
										},
										handleChange: function(event){
											var val = event.target.value.trim();
											
											var max = this.max;
											var min = this.min;
											
											if(isValueNumber(val)){
												val = Number(val);
												this.currentValue = val;
												if(val > max){
													this.currentValue = max;
												}else if(val < min){
													this.currentValue = min;
												}
											}else {
												event.target.value = this.currentValue;
											}
										}
									},
									mounted: function(){
										this.updateValue(this.value);	
									}
     },
     'urlRender':{
     		props:{
     			level:{
     				type:Number,
     				required:true
     			},
     			title:{
     				type:String,
     				default:'url传参'
     			}
     		},
     		render:function(createElement) {
     			return createElement(
     				'h' + this.level,
     				[
     					createElement(
     						'a',
     						{
     							domProps:{
     								href: '#' + this.title
     							}
     						},
     						this.$slots.default
     					)
     				]
     			)
     		}
     },
     'ele':{
     		props:{
     			list:{
     				type:Array,
     				default:function(){
     					return [];
     				}
     			}
     		},
     		render:function(createElement) {
     			if (this.list.length) {
	 					  return createElement('ul',this.list.map(function(item){
	 						return createElement('li',item);
	 					}));
	 				}else{
	 					return createElement('p','列表目前为空');
	 				}
     		}
     }
  },
  data () {//数据
    return {
      msg: '个人中心',
      one_msg:'数字输入框组件',
      two_msg:'可以从外部关闭的下拉菜单',
      three_msg:'Render函数的用法。',
      four_mag:'显示列表',
      value:5,
      list:[],
    }
  },
  methods:{
  	handleClick: function() {
  		this.list = [
  			'《Vue.js实战》',
  			'《JavaScript高级编程》',
  			'《php冲入门到精通》'
  		];
  	},
    gagarin: function(){
      this.$store.commit('increment')
    },
    relief: function(){
      this.$store.commit('decrease')
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
  // mounted(){
  // 	window.document.title = '后台搜索页面';
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
