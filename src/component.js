import moment from 'moment'
import { getChild } from './util'

const cache = {}

export default {
  name: 'ElMoment',

  functional: true,

  props: ['value', 'format'],

  render (h, ctx) {
    const vnode = getChild(ctx.children)

    if (!vnode) return

    const opts = vnode.componentOptions
    const id = vnode.tag

    if (ctx.data.on && ctx.data.on.input) {
      opts.propsData.value = cache[id] || ctx.props.value
      opts.listeners = opts.listeners || {}

      opts.listeners.input = function (val) {
        if (+cache[id] !== +val) ctx.parent.$forceUpdate()

        cache[id] = val
        ctx.data.on.input(val ? moment(val).format(ctx.props.format) : val)
      }
    }

    return vnode
  }
}
