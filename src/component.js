import moment from 'moment'
import { getChild } from './util'

export default {
  name: 'ElMoment',

  abstract: true,

  props: ['value', 'format'],

  render (h) {
    const vnode = getChild(this.$slots.default)
    if (!vnode) return

    const opts = vnode.componentOptions
    const ctx = this.$vnode.componentOptions

    if (ctx.listeners && ctx.listeners.input) {
      opts.propsData.value = ctx.propsData.value
      opts.listeners = opts.listeners || {}

      opts.listeners.input = val => {
        ctx.listeners.input.fn(val ? moment(val).format(ctx.propsData.format) : val)
      }
    }

    return vnode
  }
}
