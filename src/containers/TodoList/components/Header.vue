<template>
  <div class="header-layout">
    <input @keyup.enter="addTodoItem" data-test="input" v-model="inputValue" type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-layout{
  font-size: 20px;
}
</style>