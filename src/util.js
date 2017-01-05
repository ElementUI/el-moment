/**
 * @link https://github.com/vuejs/vue/blob/dev/src/core/vdom/helpers/index.js
 */
export function getChild (children) {
  return children && children.filter(c => c && c.componentOptions)[0]
}
