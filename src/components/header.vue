<template>
  <div class="nav">
  	<span>
  		<a href="#" onclick="javascript :history.back(-1);">
  			<img :src="left_direction" :style="{height:nav.nav_num+'px',float:nav.left,overflow:nav.hidden}" />
  		</a>
  	</span>
  	<span>
	  	<h1 class="text-center white">
	    	{{ title }}<small :style="{'color':nav.propsColor,'fontWeight':nav.weight}">{{ sunNumber }}</small>
	    </h1>
  	</span>
  	<span>
  		<router-link :to="{path:'/search'}">
  			<img :src="search" :style="{height:nav.nav_num+'px',float:nav.right,overflow:nav.hidden}" />
  		</router-link>
  	</span>
  </div>
  <!--<div @click="abshade" class="slide">
  	
  </div>-->
</template>

<script>

export default {
  name: 'HcHeader',
  props:['sunNumber'],	//props中的数据也是可以写成 sun-number
  data () {
    return {
      title: '仿app应用',
			left_direction:'/static/img/left_direction.png',
			search:'/static/img/navigate.png',
			nav:{
				nav_num:'50',
				hidden:'hidden',
				left:'left',
				right:'right',
				propsColor:'red',
				weight:'bold'
			}
    }
  },
  methods:{//方法
//	abshade:function(){
//		
//	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{display: flex;}
.nav span{height: 50px;overflow: hidden;}
.nav span:nth-child(1){flex: 1;}
.nav span:nth-child(2){flex: 3;}
.nav span:nth-child(3){flex: 1;}
.nav span:nth-child(odd):hover{cursor: pointer;}
h1{text-align: center;color: #000000;font-size: 2rem;font-weight: bold;line-height: 50px;}
.nav_bar{position: absolute;top: 50px;left: -2000px;width: 0;z-index: 311111;transition: all .5s;}
.nav_bar.show {left: 0;width: 100%;}
</style>
