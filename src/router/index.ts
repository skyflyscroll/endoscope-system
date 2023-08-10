import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Background from '../views/background/home.vue';
import authKey from '../utils/authKey';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/switch',
    },
    {
        path: '/background',
        name: 'Background',
        component: Background,
        children: [
            {
                path: 'dashboard',
                name: 'BackgroundDashboard',
                meta: {
                    title: authKey.menuKeyData.dashboard.text,
                    permiss: authKey.menuKeyData.dashboard.id,
                },
                component: () => import(/* webpackChunkName: "BackgroundDashboard" */ '../views/background/dashboard.vue'),
            },
            {
                path: 'apartRole',
                name: 'ApartRole',
                meta: {
                    title: authKey.menuKeyData.apartRole.text,
                    permiss: authKey.menuKeyData.apartRole.id,
                },
                component: () => import(/* webpackChunkName: "ApartRole" */ '../views/background/apartRole.vue'),
            },
            {
                path: 'roleManage',
                name: 'RoleManage',
                meta: {
                    title: authKey.menuKeyData.roleManage.text,
                    permiss: authKey.menuKeyData.roleManage.id,
                },
                component: () => import(/* webpackChunkName: "RoleManage" */ '../views/background/roleManage.vue'),
            },
            {
                path: 'authManage',
                name: 'AuthManage',
                meta: {
                    title: authKey.menuKeyData.authManage.text,
                    permiss: authKey.menuKeyData.authManage.id,
                },
                component: () => import(/* webpackChunkName: "AuthManage" */ '../views/background/authManage.vue'),
            },
            {
                path: 'patientList',
                name: 'PatientList',
                meta: {
                    title: authKey.menuKeyData.patientList.text,
                    permiss: authKey.menuKeyData.patientList.id,
                },
                component: () => import(/* webpackChunkName: "PatientList" */ '../views/background/patientList.vue'),
            },
            {
                path: 'dataStatistics',
                name: 'DataStatistics',
                meta: {
                    title: authKey.menuKeyData.dataStatistics.text,
                    permiss: authKey.menuKeyData.dataStatistics.id,
                },
                component: () => import(/* webpackChunkName: "DataStatistics" */ '../views/background/dataStatistics.vue'),
            },
            {
                path: 'messageList',
                name: 'MessageList',
                meta: {
                    title: authKey.menuKeyData.messageList.text,
                    permiss: authKey.menuKeyData.messageList.id,
                },
                component: () => import(/* webpackChunkName: "MessageList" */ '../views/background/messageList.vue'),
            },
            {
                path: 'user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/background/user.vue'),
            },
        ],
    },
    {
        path: '/device',
        name: 'Device',
        children: [
            {
                path: 'dashboard',
                name: 'DeviceDashboard',
                meta: {
                    title: '内镜状态',
                },
                component: () => import(/* webpackChunkName: "DeviceDashboard" */ '../views/device/dashboard.vue'),
            },
        ],
    },
    {
        path: '/switch',
        name: 'Switch',
        meta: {
            title: '切换系统',
        },
        component: () => import(/* webpackChunkName: "switch" */ '../views/switch.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/deviceLogin',
        name: 'DeviceLogin',
        meta: {
            title: '设备信息系统',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/deviceLogin.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '没有找到页面',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/404.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role) {
        if(to.path === '/'){
            next('/switch');
        } else {
            next()
        }
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;
