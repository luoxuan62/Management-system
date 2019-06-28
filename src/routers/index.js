//路由的配置文件
import {
    Home,
    Login,
    NotFound,
    Users,
    Bmanagement,
    AddBusiness
} from "../views"
//基础路由
export const mainRoute = [
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/404",
        component:NotFound
    }
]

//页面级别的路由
export const pageRoute = [
    {
        pathname:"/admin/home",
        component:Home,
        title:"首页",
        icon:"home"
    },
    {
        pathname:"/admin/bmanagement",
        title:"商家管理",
        icon:"copy",
        children:[
            {
                title:"商家列表",
                pathname:"/admin/bmanagement",
                component:Bmanagement
            },
            {
                title:"商家店铺",
                pathname:"/admin/addBusiness",
                component:AddBusiness
            }
        ]
    },
    {
        pathname:"/admin/users",
        component:Users,
        title:"用户管理",
        icon:"user",
        children:[
            {
                title:"用户列表",
                pathname:"/admin/users1"
            },
            {
                title:"用户权限",
                pathname:"/admin/users2"
            }
        ]
    }
    
]