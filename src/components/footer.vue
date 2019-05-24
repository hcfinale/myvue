<template>
  <div class="footer text-center">
  	<hr color="#000000" />
  	<p v-text="msg"></p>
  	<button type="submit">
		  <slot>测试</slot>
		</button>
    <button @click="pass" class="btn btn-default">点我向父级传数据</button>
    <slot name="hcapple">no apple</slot>
    <slot name="hcbananer">no bananer</slot>
    <i style="display: block;margin-bottom: 3rem;"></i>
    <div class="tab-footer">
    	<div class="tab">
    		<router-link :to="{path:'/index'}"><i class="glyphicon glyphicon-home"></i></router-link>
    	</div>
    	<div class="tab">
    		<router-link :to="{path:'/list/red/aa'}"><i class="glyphicon glyphicon-th-list"></i></router-link>
    	</div>
    	<div class="tab">
    		<router-link :to="{path:'/article'}"><i class="glyphicon glyphicon-list-alt"></i></router-link>
    	</div>
    	<div class="tab">
    		<router-link :to="{path:'/admin'}"><i class="glyphicon glyphicon-user"></i></router-link>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HcFooter',
  data () {//数据
    return {
      msg: '这个是底部公用部分,放版权信息，域名备案信息等',
      value:'子组件footer中的数据'
    }
  },
  methods:{//方法
  	pass(){
  		this.$emit('slide',this.value)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{color: #f80404;}
.tab-footer{position:fixed;bottom:0;left:0;right:0;display:block;width:100%;height:3rem;border-top:1px solid #000;background:#FFF;z-index:10}
.tab-footer .tab{display:block;float:left;width:25%;line-height:3rem;text-align:center;cursor:pointer;color:#007AFF;font-size:1.2rem}
</style>
