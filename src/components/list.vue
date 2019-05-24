<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div class="media">
		  <div class="media-left media-middle">
		    <a href="#">
		      <img class="media-object" src="../assets/iconroute.jpg" width="100%" />
		    </a>
		  </div>
		  <div class="media-body">
		    <h4 class="media-heading">标题部分哦</h4>
		    	文章描述，打法是否啊你发送按评估价上坡估计你个屁读后感哪怕是减肥按时评估范围
		  </div>
		</div>
		<div class="media">
		  <div class="media-left media-middle">
		    <a href="#">
		      <img class="media-object" src="../assets/iconroute.jpg" width="100%" />
		    </a>
		  </div>
		  <div class="media-body">
		    <h4 class="media-heading">标题部分哦</h4>
		    	文章描述，打法是否啊你发送按评估价上坡估计你个屁读后感哪怕是减肥按时评估范围
		  </div>
		</div>
		<ul class="list-group">
		  <li class="list-group-item">
		    <span class="badge">1</span>
		    Cras justo odio
		  </li>
		  <li class="list-group-item">
		    <span class="badge">12</span>
		    	哈哈哈
		  </li>
		  <li class="list-group-item">
		    <span class="badge">14</span>
		    	拉阿拉蕾
		  </li>
		</ul>
    <p>{{ $route.params.color }}</p>
    <p>{{ $route.params.type }}</p>
    <button @click="getParam">点我获取参数</button>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  data () {//数据
    return {
      msg: '测试动态组件list页面',
    }
  },
  methods:{//方法
  	getParam(){
  		console.log(this.$route.params)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media-body{width: auto;}
</style>
