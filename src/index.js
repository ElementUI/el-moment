import ElMoment from './component'

ElMoment.install = function (Vue) {
  Vue.component(ElMoment.name, ElMoment)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ElMoment)
}

export default ElMoment
