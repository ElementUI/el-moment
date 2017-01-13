(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('moment')) :
  typeof define === 'function' && define.amd ? define(['moment'], factory) :
  (global.ElMoment = factory(global.moment));
}(this, (function (moment) { 'use strict';

moment = 'default' in moment ? moment['default'] : moment;

/**
 * @link https://github.com/vuejs/vue/blob/dev/src/core/vdom/helpers/index.js
 */
function getChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

var ElMoment$1 = {
  name: 'ElMoment',

  abstract: true,

  props: ['value', 'format'],

  render: function render (h) {
    var vnode = getChild(this.$slots.default);
    if (!vnode) { return }

    var opts = vnode.componentOptions;
    var ctx = this.$vnode.componentOptions;

    if (ctx.listeners && ctx.listeners.input) {
      opts.propsData.value = ctx.propsData.value;
      opts.listeners = opts.listeners || {};

      opts.listeners.input = function (val) {
        ctx.listeners.input.fn(val ? moment(val).format(ctx.propsData.format) : val);
      };
    }

    return vnode
  }
};

ElMoment$1.install = function (Vue) {
  Vue.component(ElMoment$1.name, ElMoment$1);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ElMoment$1);
}

return ElMoment$1;

})));
