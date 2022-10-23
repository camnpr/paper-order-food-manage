export default [
    // 园区驾驶舱
    {
        path: '/ParkCockpit',
        component: () => import('../views/visualization/ParkCockpit.vue')
    },
    // 园区驾驶分析
    {
        path: '/AttractionAnalysis',
        component: () => import('../views/visualization/AttractionAnalysis.vue')
    },
    // 园区设备管理
    {
        path: '/DeviceManagement',
        component: () => import('../views/visualization/DeviceManagement.vue')
    },
    // 能源消耗分析
    {
        path: '/EnergyConsumption',
        component: () => import('../views/visualization/EnergyConsumption.vue')
    }
]