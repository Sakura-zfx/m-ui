import Vue from 'vue'
import Mask from './mask'

let instance
const init = () => {
  const ToastConstructor = Vue.extend(Mask)

  instance = new ToastConstructor({
    el: document.createElement('div')
  })
  instance.$on('tap', () => {
    if (instance.tapCb && instance.tapCb) {
      instance.tapCb()
    }
  })
  document.body.appendChild(instance.$el)
}

const MaskConstructor = () => {
  if (!instance) {
    init()
  }
  instance.visible = true
}

MaskConstructor.setCb = (cb) => {
  if (!instance) {
    init()
  }
  instance.tapCb = cb
}

MaskConstructor.hide = () => {
  if (instance) {
    instance.visible = false
  }
}

export default MaskConstructor
