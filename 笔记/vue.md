一.v-once
  <h2 v-once>{{message}}</h2>
  <!-- 元素和组件只渲染一次 不会随数据的改变而改变 -->
二.v-html
  <h2>{{url}}</h2>不打开url
  <h2 v-html="url"></h2>打开url
三.v-test
  <h2>{{message}},李银河！</h2>显示message
  <h2 v-test="message"> ,李银河！</h2>不显示message
四.v-pre
  <h2 v-pre>{{message}}</h2>
  <!-- 跳过编译过程 -->
五.v-bind
  <img v-bind:src="imgURL" alt="">
  <!-- v-bind用于绑定一个或多个属性值,或者向另一个组件传递props值 -->
六.v-for
  <li v-for="(m,index) in movies">{{index}} {{m}}</li>
七.
  const app = new Vue ({
    el: '#app',
    data: {

    },
    computed: {

    }
    methods: {

    }
  })
八.computed的set和get
九.v-on
  监听
十.v-if
十一.v-show
十二.v-model
  双向绑定
  <div id="app">
  <!-- 1.修饰符: lazy -->
  <input type="text" v-model.lazy="message">
  <!-- 写完后敲回车才绑定到message -->
  <h2>{{message}}</h2>
  <!-- 2.修饰符: number -->
  <input type="number" v-model.number="age">
  <h2>{{age}} {{typeof age}}</h2>
  <!-- 3.修饰符: trim -->
  <input type="text" v-model.trim="name">
  <!-- 自动去除前面的空格 -->
  <h2>{{name}}</h2>
十三.路由
1.index.js文件
  -配置路由: const Home = () => import('../components/Home')
  -安装路由功能: Vue.use(VueRouter)
  -创建VueRouiter对象: const routes=[{},{},...]
  -路由对象的属性: path component meta{title} children:[{}.{},...]
  -配置路由和组件间的关系: const router=new VueRouter({routes,mode:'history',linkActiveClass:'active'})
  -将router对象传到vue实例: export default router
  -重定向: path:'',redirect:'/home'
  -导航守卫
  //前置守卫guard
  router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  console.log(to);
  next()
  })
  //后置钩子hook
  router.afterEach((to, from) => {
    console.log('.....')
  })

2.vue文件
  1.template
  -导入路由: <router-link to="/home">首页</router-link>
  -预定位置: <router-view></router-view>
  2.script:export default {}
  -name:
  -data(){return{}}
  -computed:{}
  -methods:{}
3.this.$router
  -push({path,query})新页面
  -replace()
4.传递参数
  1.params
  -配置路由格式: /router/:id
  -传递的方式: 在path后面跟上对应的值(paramas.abc)
  -传递后形成的路径: /router/123,/router/abc
  2.query
  -配置路由格式: /router
  -传递的方式: 对象中使用query的key作为传递方式
  -传递后形成的路径: /router?id=123,/router?id=abc
十四.vuex
1.index.js文件
  import Vue from 'vue'
  import Vuex from 'vuex'
  //安装插件
  Vue.use(Vuex)
  //创建对象
  const store = new Vuex.Store({五个对象})
  //导出store独享
  export default store
2.main.js文件
  import store from './store'
  new Vue增加store
3.App.vue文件
  引入counter: {{$store.state.counter}}
  export deffault增加: components:{HellowVuex}
  在methods中引入mutations方法: 函数名(){this.$store.commit('方法名')}
  拿到并展示getters方法: {{$store.getters.方法名}}
4.HellowVuex.vue文件
  引入counter: {{$store.state.counter}}
  export deffault中name:"HellowVuex"
5.五个对象
  state
  mutations
  actions
  getters
  mudules
十五.封装axios
1.request.js文件
  import axios from "axios";
  import { startLoading, endLoading } from "../common/Loading";
  export function request(config) {
    const instance = axios.create({
      baseURL: "/api",
      timeout: 30000,
      withCredentials: true,
    });
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        if (config.url != "/login/qr/check") {
          startLoading();
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        endLoading();
        return response;
      },
      error => {
        endLoading();
        return Promise.reject(error);
      }
    );
    instance.defaults.withCredentials = true;
    return instance(config);
  }
2.其他文件
  import {request} from '../request'
  export function getHotComment(参1,参2){
      return request({
          url:'/comment/hot',
          params:{
              参1,
              参2,
              limit:
          }
      })
  }