<template>
	<div class="container margin-top-sm">
		<form class="form-horizontal" :action="actionurl">
			<div class="form-group">
			    <div class="col-sm-8 col-xs-8">
			    	<input type="text" class="form-control" placeholder="Search" v-model="SearchData">
			    </div>
			    <div class="col-sm-4 col-xs-4">
			    	<button type="submit" for="inputEmail3" class="btn btn-info">
						<i class="glyphicon glyphicon-search"></i>
			    		Search
			    	</button>
			    </div>
			</div>
		</form>
		<div class="row">
			<div class="col-xs-12">
				<a :href="SearchUrl">{{ SearchData }}</a>
			</div>
			<div class="col-xs-3" v-for="i in seardata">
				<p class="text-center sborder">
					<a :href="i.src" v-text="i.test"></a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'search',
  data () {//数据
    return {
      msg: 'search页面',
      actionurl: '/search.php',
      SearchData: '',
      SearchUrl:'',
      seardata:[
	      {
	      	src:"http://m.wanho.org",
	      	test:"万和org",
	      },{
	      	src:"/index",
	      	test:"首页",
	      },{
	      	src:"/admin",
	      	test:"后台",
	      },{
	      	src:"/article",
	      	test:"文章",
	      },{
	      	src:"/content",
	      	test:"内容页",
	      }
      ],
    }
  },
//computed:{//计算
//	Search(){
//		return '搜索结果'+this.SearchData
//		//return '计算属性'+this.value.replace(/\d/g,'')
//	}
//},
  methods:{//方法
	
  },
  watch:{//属性的监听
  	SearchData:function(val, oldVal){
  		for(let i=0;i<this.seardata.length;i++){
  			let test = this.seardata[i]['test']
  			if(test.indexOf(val)!=-1){
  				console.log(test)
  				this.seardata[i]['test'] = val
  				this.SearchUrl = this.seardata[i]['src']
  				this.seardata = ''
  			}
  		}
  		this.seardata = this.seardata
  	}
  }
}
</script>

<style scoped>
.sborder{border: 1px solid #323232;font-size: 1.5rem;line-height: 2rem;margin: 1em 0em;}
</style>