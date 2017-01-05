'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var moment = _interopDefault(require('moment'));

/**
 * @link https://github.com/vuejs/vue/blob/dev/src/core/vdom/helpers/index.js
 */
function getChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

var cache = {};

var ElMoment$1 = {
  name: 'ElMoment',

  functional: true,

  props: ['value', 'format'],

  render: function render (h, ctx) {
    var vnode = getChild(ctx.children);

    if (!vnode) { return }

    var opts = vnode.componentOptions;
    var id = vnode.tag;

    if (ctx.data.on && ctx.data.on.input) {
      opts.propsData.value = cache[id] || ctx.props.value;
      opts.listeners = opts.listeners || {};

      opts.listeners.input = function (val) {
        if (+cache[id] !== +val) { ctx.parent.$forceUpdate(); }

        cache[id] = val;
        ctx.data.on.input(val ? moment(val).format(ctx.props.format) : val);
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

module.exports = ElMoment$1;
