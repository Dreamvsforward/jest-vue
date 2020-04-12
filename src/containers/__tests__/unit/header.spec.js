import { shallowMount } from '@vue/test-utils'
import Header from './../../TodoList/components/Header.vue'

describe('测试header模块', () => {
  // it ('Header 样式发生改变，做提示', () => {
  //   const wrapper = shallowMount(Header)
  //   expect(wrapper).toMatchSnapshot()
  // })
  it('Header包含 input 框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })
  it('Header中 input 初始值为空 ', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })
  it('Header中 input 框值发生变化，数据应该跟着变', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('hello world')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('hello world')
  })
  it('Header中 input 框输入回车，无内容，无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('')
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeFalsy()
  })
  it('Header中 input 框输入回车，有内容时，向外触发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('hello world')
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy()
  })
})
