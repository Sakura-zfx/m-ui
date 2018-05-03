import Loading from './loading.vue'

export default Vue => {
  const Mask = Vue.extend(Loading)
  const instance = new Mask({
    el: document.createElement('div'),
    data: {
    }
  })
  document.body.appendChild(instance.$el)
  Vue.prototype.$loading = instance
}
