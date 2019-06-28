import Loadable from "react-loadable"
import Loading from "../common/loading"
//路由懒加载
const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const NotFound=Loadable({
    loader:()=>import("./NotFound"),
    loading:Loading
})
const Bmanagement=Loadable({
    loader:()=>import("./bmanagement"),
    loading:Loading
})
const Users=Loadable({
    loader:()=>import("./users"),
    loading:Loading
})
const AddBusiness=Loadable({
    loader:()=>import("./addBusiness"),
    loading:Loading
})



export{
    Home,
    Login,
    NotFound,
    Bmanagement,
    Users,
    AddBusiness
}