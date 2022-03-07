<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:li.isDone}" v-for="li in showView" :key="li.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="li.isDone"/>
        <label>{{li.name}}</label>
        <button class="destroy" @click="destroyTask(li.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'todo-main',
  computed:{
    ...mapGetters(['showView'])
  },
  methods: {
    destroyTask(id){
      this.$store.commit('DELETEIDTASK',id)
    }
  },
}
</script>