import { loader } from '@core'
import { App, Home } from '@layouts'
export default [
  {
    path: '/',
    name: 'home',
    redirect: '/analysis',
    component: Home,
    meta: {
      title: '仪表盘',
      icon: 'icon-shop_fill'
    },
    children: [
      {
        path: '/analysis',
        name: 'analysis',
        component: loader('views/dashboard/analysis'),
        meta: {
          auth: true,
          title: '收支分析',
          icon: 'icon-picture'
        }
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: Home,
    meta: {
      title: '产品管理',
      icon: 'icon-redpacket'
    },
    children: [
      {
        path: '/product_table',
        name: 'product_table',
        component: loader('views/product/table.vue'),
        meta: {
          auth: true,
          title: '产品列表',
          icon: 'icon-publishgoods_fill'
        }
      }
    ]
  },
  {
    path: '/materials',
    name: 'materials',
    component: Home,
    meta: {
      title: '原材料管理',
      icon: 'icon-redpacket'
    },
    children: [
      {
        path: '/materials_table',
        name: 'materials_table',
        component: loader('views/materials/table.vue'),
        meta: {
          auth: true,
          title: '原材料列表',
          icon: 'icon-publishgoods_fill'
        }
      }
    ]
  },
  {
    path: '/vendor',
    name: 'vendor',
    component: Home,
    meta: {
      title: '供应商管理',
      icon: 'icon-redpacket'
    },
    children: [
      {
        path: '/vendor_table',
        name: 'vendor_table',
        component: loader('views/vendor/table.vue'),
        meta: {
          auth: true,
          title: '供应商列表',
          icon: 'icon-publishgoods_fill'
        }
      }
    ]
  },
  // {
  //   path: '/auth-home',
  //   name: 'auth-home',
  //   component: App,
  //   meta: {
  //     title: '鉴权页',
  //     icon: 'icon-zhiwen'
  //   },
  //   children: [
  //     {
  //       path: '/login',
  //       name: 'login',
  //       component: loader('views/auth/login.vue'),
  //       meta: {
  //         title: '登录页',
  //         icon: 'icon-addressbook'
  //       }
  //     },
  //     {
  //       path: '/login2',
  //       name: 'login2',
  //       component: loader('views/auth/login2.vue'),
  //       meta: {
  //         title: '登录页2',
  //         icon: 'icon-addressbook'
  //       }
  //     },
  //     {
  //       path: '/register',
  //       name: 'register',
  //       component: loader('views/auth/register.vue'),
  //       meta: {
  //         title: '注册页',
  //         icon: 'icon-addpeople'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/error-home',
  //   name: 'error-home',
  //   component: App,
  //   meta: {
  //     title: '错误页',
  //     icon: 'icon-delete'
  //   },
  //   children: [
  //     {
  //       path: '/e403',
  //       name: 'e403',
  //       component: loader('packages/exception/403.vue'),
  //       meta: {
  //         title: '403',
  //         icon: 'icon-xiaomi'
  //       }
  //     },
  //     {
  //       path: '/e404',
  //       name: 'e404',
  //       component: loader('packages/exception/404.vue'),
  //       meta: {
  //         title: '404',
  //         icon: 'icon-xiaomi'
  //       }
  //     },
  //     {
  //       path: '/e500',
  //       name: 'e500',
  //       component: loader('packages/exception/500.vue'),
  //       meta: {
  //         title: '500',
  //         icon: 'icon-xiaomi'
  //       }
  //     },
  //     {
  //       path: '/e600',
  //       name: 'e600',
  //       component: loader('packages/exception/600.vue'),
  //       meta: {
  //         title: '路由配置错误',
  //         icon: 'icon-xiaomi'
  //       }
  //     }
  //   ]
  // }
]
