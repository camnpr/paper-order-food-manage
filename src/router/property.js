// 物业管理页面相关的路由
export default [
  // 物业总览
  {
    path: 'totalProperty',
    component: () => import('../views/property/totalProperty.vue')
  },
  // 访客管理
  {
    path: 'VisitorInfo',
    component: () => import('../views/property/Visitor/VisitorInfo.vue')
  },
  {
    path: 'VisitorComeGo',
    component: () => import('../views/property/Visitor/VisitorComeGo.vue')
  },
  {
    path: '/property/VisitorInfo/addVisitor',
    component: () => import('../views/property/Visitor/addVisitor.vue')
  },
  {
    // 占位符
    path: '/property/VisitorInfo/VisitorDetails/:rowData',
    // 起个名字 方便使用params传递参数
    name: 'VisitorDetails',
    component: () => import('../views/property/Visitor/VisitorDetails.vue')

  },

  // 车辆管理
  {
    path: 'CarInfo',
    component: () => import('../views/property/Car/CarInfo.vue')
  },
  {
    path: 'CarComeGo',
    component: () => import('../views/property/Car/CarComeGo.vue')
  },
  {
    path: 'addCar',
    component: () => import('../views/property/Car/addCar.vue')
  },
  {
    // 占位符
    path: '/property/CarInfo/carDetails/:rowData',
    // 起个名字 方便使用params传递参数
    name: 'carDetails',
    component: () => import('../views/property/Car/carDetails.vue')

  },
  // 设备管理
  {
    path: 'accessControl',
    name: 'accessControl',
    component: () => import('../views/property/device/accessControl.vue'),
    redirect: '/property/accessControl/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue'),

      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      },

    ]
  },
  {
    path: 'addList',
    component: () => import('../views/property/device/Submenu/addList.vue')
  },
  {
    path: 'vehicleBarrier',
    component: () => import('../views/property/device/vehicleBarrier.vue'),
    redirect: '/property/vehicleBarrier/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]
  },
  {
    path: 'waterMeter',
    component: () => import('../views/property/device/waterMeter.vue')
    ,
    redirect: '/property/vehicleBarrier/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]

  },
  {
    path: 'chargingPile',
    component: () => import('../views/property/device/chargingPile.vue')
    ,
    redirect: '/property/chargingPile/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]

  },
  {
    path: 'securityMonitor',
    component: () => import('../views/property/device/securityMonitor.vue')
    ,
    redirect: '/property/securityMonitor/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]

  },
  {
    path: 'elevatorControl',
    component: () => import('../views/property/device/elevatorControl.vue')
    ,
    redirect: '/property/elevatorControl/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]

  },
  {
    path: 'fire',
    component: () => import('../views/property/device/fire.vue')
    ,
    redirect: '/property/fire/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]

  },
  {
    path: 'sourceNetStorage',
    component: () => import('../views/property/device/sourceNetStorage.vue'),
    redirect: '/property/sourceNetStorage/DeviceList',
    children: [
      // 设备管理下面3个子页面的路由
      {
        path: 'DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: 'AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: 'Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]

  }

]

