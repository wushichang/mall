import Toast from './Toast'

const toastPlugin = {
  install(Vue){
    // 1.使用插件 首先用extend获取构造函数
    const toastConstructure = Vue.extend(Toast)
    // 2得到插件实例
    const toast = new toastConstructure()

    // ** 一般的插件用三步就好 但是插件中假如还用页面内容的话就需要渲染
    toast.$mount(document.createElement('div')) // 挂载
    document.body.appendChild(toast.$el)


    // 3.应用
    Vue.prototype.$toast = toast
  }
}

export default toastPlugin
