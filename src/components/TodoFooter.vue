<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值：{{getTotal}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="viewkey==='allTo'?'selected':''" href="javascript:;" @click="show('allTo')">全部</a>
      </li>
      <li>
        <a :class="viewkey==='noTo'?'selected':''" href="javascript:;" @click="show('noTo')">未完成</a>
      </li>
      <li>
        <a :class="viewkey==='yesTo'?'selected':''" href="javascript:;" @click="show('yesTo')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name:'todo-footer',
  computed:{
    ...mapState(['list','viewkey']),
    ...mapGetters(['getTotal'])
  },
  methods: {
    clear(){
      this.$store.commit('CLEAR');
    },
    show(view){
      this.$store.commit('CHANGESHOWVIEW',view)
    }
  },
}
</script>