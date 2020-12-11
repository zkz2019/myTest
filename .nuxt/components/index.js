export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Zj } from '../..\\components\\zj.vue'
export { default as Bjs } from '../..\\components\\kz\\bjs.js'
export { default as Kz } from '../..\\components\\kz\\kz.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyZj = import('../..\\components\\zj.vue' /* webpackChunkName: "components_zj" */).then(c => c.default || c)
export const LazyBjs = import('../..\\components\\kz\\bjs.js' /* webpackChunkName: "components_kz/bjs" */).then(c => c.default || c)
export const LazyKz = import('../..\\components\\kz\\kz.vue' /* webpackChunkName: "components_kz/kz" */).then(c => c.default || c)
