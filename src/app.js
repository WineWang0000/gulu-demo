import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: true,
    loading3: false
  }
})

//单元测试
//这叫动态生成按钮
import chai from 'chai'
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vueModel = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  vueModel.$mount('#text')
  let useEle = vueModel.$el.querySelector('use')
  console.log(useEle);
  expect(useEle.getAttribute('xlink:href')).to.eq('#icon-setting')
  vueModel.$el.remove()
  vueModel.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'setting',
      loading: true
    }
  })
  button.$mount()
  let useEle = button.$el.querySelector('use')
  expect(useEle.getAttribute('xlink:href')).to.eq('#icon-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('0')
  button.$el.remove()
  button.$destroy()
}

