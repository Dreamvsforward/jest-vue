<template>
  <div class="todo-list">
    <Header @add="addUndoItem"></Header>
    <ul>
      <li v-for="(item, index) in undoList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "TodoList",
  components: {
    Header
  },
  data() {
    return {
      locName: "todolist",
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    }
  }
}
</script>

<style scoped lang="stylus">
.todo-list {
  font-size: 20px;
}
</style>
