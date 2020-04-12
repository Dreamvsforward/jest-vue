import { shallowMount } from '@vue/test-utils'
import TodoList from './../../TodoList/index.vue'
it('TodoList 初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
})
it('TodoList 执行 addItem 的时候，会增加一个内容', () => {
    const content = 'hello world'
    const wrapper = shallowMount(TodoList);
    wrapper.vm.addUndoItem(content);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([content])
})
