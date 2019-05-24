<template>
  <div class="container">
    <h2 class="text-center margin-top-md">{{ msg }}</h2>
    <article>
    	{{ bodyarticle }}
    </article>
  </div>
</template>

<script>
export default {
  name: 'MyArticle',
  data () {
    return {
      msg: '2018#带着微博去旅行#数据盘点：原创短视频传播爆发',
      bodyarticle:'随着#带着微博去旅行#在微博网友中受欢迎程度越来越高，今年的#带着微博去旅行#活动全程吸引了谢娜、王源、王俊凯等近170位明星和300多位各领域KOL、红人的热情参与，共收集227档原创视频栏目，总播放量高达31亿。其中，@北石同学 视频栏目累计播放量破2900万，@旅游约吗 视频播放量累计破2500万，@旅行囧记 视频播放量破1600万。与此同时，全程共20期超吸睛的博物馆真人秀，总播放量高达5亿。其中，@娄艺潇 探秘大英博物馆，单支视频播放量破 690万，@北石同学 探访广东省博物馆，累计视频播放量破900万。本次活动力推的微博故事主题共收集到数十万优质作品，总播放量近2亿。其中，密子君参与#城市美食季#活动，单条故事播放量高达537万，成为名副其实的爆款故事。除了作品之外，百城大使参与三大故事主题，并评选出三大爆款城市，最终新疆、贵阳、成都分别获得城市奇观季、城市旅拍季、城市美食季爆款城市。在新增玩法方面，今年与国家文物局合作，联动陕西、广东、河南等国内八大知名博物馆一起发起的博物馆集卡玩法大受欢迎，微博网友集卡总计2700万次，旅行路线、iPhone XS Max、旅行基金等精美大奖也发放给幸运微博用户。在接受文化熏陶的旅游过程中，还有机会赢取精美大奖，对于广大微博网友来说，实在是再幸福不过的事情了。了解了今年全程的精彩活动盘点后，广大网友们有没有很期待明年的#带着微博去旅行#活动呢！'
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