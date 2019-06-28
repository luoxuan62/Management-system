import {login} from "../../api/users"
const loginAction=(val)=>({
    type:"LOGIN_ACTION",
    value:val
})
export const loginActionAsync=(val)=>{
    return async (dispatch)=>{
        let data=await login(val)
        console.log(data)
        if(data.code){
            window.sessionStorage.setItem("token",data.data.token)
            dispatch(loginAction(data))
            
        }
        
        
    }
}


