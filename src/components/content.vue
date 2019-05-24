<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'MyContent',
  data () {//数据
    return {
      msg: '动态组件content页面',
    }
  },
  methods:{//方法
  	
  }
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
