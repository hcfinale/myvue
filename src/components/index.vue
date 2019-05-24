<template>
  <div class="index">
    <h4 class="text-center margin-top-xs">{{ msg }}</h4>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6" v-for="(i,index) in bauble">
        <img class="img-thumbnail" :src="i.bburl" :alt="index" :title="i.species" />
        <p class="text-center">{{ i.species }}</p>
        <p class="text-center" v-text="i.price"></p>
      </div>
    </div>
    <h1 v-if="active ==='ok'">Yes</h1>
    <h1 v-else>No</h1>
    <h4 @click="myconsole">console控制台输出内容</h4>
    <p>
      <input type="text" v-model="value" class="form-control" />
    </p>
    <p>{{ valueSum }}</p>
    <p>下面是个循环列表</p>
    <input type="text" v-on:keydown.13="add" v-model="myadd" class="form-control" />    
    <keep-alive>
      <div :is="mycontent"></div>
    </keep-alive>
    <div class="row">
      <button type="button" class="btn btn-primary btn-lg btn-block" @click="ToggleComponent">切换组件</button>
    </div>
    <!--这个router-link中智能写router下面index.js中设置的路由-->
    <!--<router-link :to="{path:'/admin'}">to admin page</router-link>
    <router-link :to="{path:'/content'}">to MyContent page</router-link>-->
  </div>
</template>

<script>
import MyContent from '@/components/content'
import MyList from '@/components/list'

export default {
  name: 'index',
  components:{ MyContent,MyList },
  data () {//数据
    return {
      msg: '欢迎来到VUEapp',
      active: 'ok',
      mycontent:'my-content',
      value: '',
      myadd:'',
      bauble:[
        {
          "bburl":"/static/img/car.jpg",
          "species":"汽车",
          "price":"500元"
        },
        {
          "bburl":"/static/img/kursaal.jpg",
          "species":"游乐场",
          "price":"100元/次"
        },
        {
          "bburl":"/static/img/plane.jpg",
          "species":"玩具飞机",
          "price":"600元"
        },
        {
          "bburl":"/static/img/watergun.jpg",
          "species":"玩具水枪",
          "price":"50元"
        },
        {
          "bburl":"/static/img/ball.jpg",
          "species":"皮球",
          "price":"88元"
        },
        {
          "bburl":"/static/img/bear.jpg",
          "species":"小熊",
          "price":"66元"
        },
        {
          "bburl":"/static/img/robot.jpg",
          "species":"机器人",
          "price":"300元"
        },
        {
          "bburl":"/static/img/violin.jpg",
          "species":"小提琴",
          "price":"100元"
        },
      ],
      mylist:[
        "name",
        "adg",
        "address"
      ]
    }
  },
  computed:{//计算属性，可以自动执行
    valueSum(){
      return '计算属性'+this.value
//    return '计算属性'+this.value.replace(/\d/g,'')
    }
  },
  methods:{//方法
    myconsole:function(){
      console.log(123)
    },
    add:function(){
      this.mylist.push(this.myadd)
      console.log(this.mylist)
    },
    ToggleComponent:function(){
      if(this.mycontent === 'my-content'){
        this.mycontent = 'my-list'
      }else{
        this.mycontent = 'my-content'
      }
    }
  },
  watch:{//属性的监听
    value:function(val, oldVal){
      console.dir('现在的值'+val+'原来的值'+oldVal)
    }
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

a {
  color: #42b983;
}
</style>
