<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      :value="inputValue"
      @change="changeValue"
      @keyup.enter="sendValue"
    />
  </header>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name:'todo-header',
  computed:{
    ...mapState(['inputValue'])
  },
  methods: {
    changeValue(e){
      this.$store.commit('CHANGEINPUTVALUE',e.target.value)
    },
    sendValue(e){
      if(e.target.value.trim()){
        let value = {id:nanoid(),name:e.target.value,isDone:false}
        this.$store.commit('ADDLIST',value)
        e.target.value=''
      }
    }
  },
}
</script>