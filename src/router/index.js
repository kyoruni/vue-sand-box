import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo.vue')
  },
  {
    path: '/draggable',
    name: 'draggable',
    component: () => import('../views/Draggable.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Editor.vue')
  },
  {
    // 親子コンポーネント間のメソッド実行について
    path: '/parent',
    name: 'parent',
    component: () => import('../views/Parent.vue')
  },
  {
    // 親子コンポーネント間のメソッド実行について
    path: '/parent2',
    name: 'parent2',
    component: () => import('../views/Parent2.vue')
  },
  {
    // #21 配列のコピー
    path: '/array-copy',
    name: 'arrayCopy',
    component: () => import('../views/ArrayCopy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
