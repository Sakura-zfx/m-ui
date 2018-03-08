import Vue from 'vue'
import Mask from './mask'

let instance
const init = () => {
  const ToastConstructor = Vue.extend(Mask)

  instance = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
}

export default {
  show() {
    if (!instance) {
      init()
    }
    instance.visible = true
  },
  hide() {
    instance.visible = false
  }
}
