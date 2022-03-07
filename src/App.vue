<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"
    
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

import {mapState} from 'vuex'
export default {
  name:'app',
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  computed:{
    ...mapState(['list'])
  },
  data() {
    return {
      
    }
  },
  created(){
    this.$store.dispatch('getList')
  }
};
</script>