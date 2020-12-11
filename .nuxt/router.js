import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8dd83244 = () => interopDefault(import('..\\pages\\audio\\index.vue' /* webpackChunkName: "pages/audio/index" */))
const _34af6798 = () => interopDefault(import('..\\pages\\aut\\index.vue' /* webpackChunkName: "pages/aut/index" */))
const _ed620cdc = () => interopDefault(import('..\\pages\\bbb\\index.vue' /* webpackChunkName: "pages/bbb/index" */))
const _50899798 = () => interopDefault(import('..\\pages\\download\\index.vue' /* webpackChunkName: "pages/download/index" */))
const _3bc61524 = () => interopDefault(import('..\\pages\\file\\index.vue' /* webpackChunkName: "pages/file/index" */))
const _765473f8 = () => interopDefault(import('..\\pages\\guide\\index.vue' /* webpackChunkName: "pages/guide/index" */))
const _3fdbbcd3 = () => interopDefault(import('..\\pages\\text\\index.vue' /* webpackChunkName: "pages/text/index" */))
const _49b60519 = () => interopDefault(import('..\\pages\\video\\index.vue' /* webpackChunkName: "pages/video/index" */))
const _02db21ce = () => interopDefault(import('..\\pages\\bbb\\a.js' /* webpackChunkName: "pages/bbb/a" */))
const _58cb089f = () => interopDefault(import('..\\pages\\bbb\\dd.js' /* webpackChunkName: "pages/bbb/dd" */))
const _224192fc = () => interopDefault(import('..\\pages\\file\\a.js' /* webpackChunkName: "pages/file/a" */))
const _9660b5b6 = () => interopDefault(import('..\\pages\\guide\\next\\index.vue' /* webpackChunkName: "pages/guide/next/index" */))
const _870b9b70 = () => interopDefault(import('..\\pages\\guide\\themes\\mobile\\theme.min.js' /* webpackChunkName: "pages/guide/themes/mobile/theme.min" */))
const _f87d451a = () => interopDefault(import('..\\pages\\guide\\themes\\silver\\theme.min.js' /* webpackChunkName: "pages/guide/themes/silver/theme.min" */))
const _69e4cc20 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4a8f80fa = () => interopDefault(import('..\\pages\\_dat.vue' /* webpackChunkName: "pages/_dat" */))
const _2df5b206 = () => interopDefault(import('..\\pages\\dat\\index.vue' /* webpackChunkName: "pages/dat/index" */))
const _7732e6b2 = () => interopDefault(import('..\\pages\\dat\\divs.vue' /* webpackChunkName: "pages/dat/divs" */))
const _7cd79a49 = () => interopDefault(import('..\\pages\\dat\\_subDat\\_id.vue' /* webpackChunkName: "pages/dat/_subDat/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/audio",
    component: _8dd83244,
    name: "audio"
  }, {
    path: "/aut",
    component: _34af6798,
    name: "aut"
  }, {
    path: "/bbb",
    component: _ed620cdc,
    name: "bbb"
  }, {
    path: "/download",
    component: _50899798,
    name: "download"
  }, {
    path: "/file",
    component: _3bc61524,
    name: "file"
  }, {
    path: "/guide",
    component: _765473f8,
    name: "guide"
  }, {
    path: "/text",
    component: _3fdbbcd3,
    name: "text"
  }, {
    path: "/video",
    component: _49b60519,
    name: "video"
  }, {
    path: "/bbb/a",
    component: _02db21ce,
    name: "bbb-a"
  }, {
    path: "/bbb/dd",
    component: _58cb089f,
    name: "bbb-dd"
  }, {
    path: "/file/a",
    component: _224192fc,
    name: "file-a"
  }, {
    path: "/guide/next",
    component: _9660b5b6,
    name: "guide-next"
  }, {
    path: "/guide/themes/mobile/theme.min",
    component: _870b9b70,
    name: "guide-themes-mobile-theme.min"
  }, {
    path: "/guide/themes/silver/theme.min",
    component: _f87d451a,
    name: "guide-themes-silver-theme.min"
  }, {
    path: "/",
    component: _69e4cc20,
    name: "index"
  }, {
    path: "/:dat",
    component: _4a8f80fa,
    children: [{
      path: "",
      component: _2df5b206,
      name: "dat"
    }, {
      path: "divs",
      component: _7732e6b2,
      name: "dat-divs"
    }, {
      path: ":subDat/:id?",
      component: _7cd79a49,
      name: "dat-subDat-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
