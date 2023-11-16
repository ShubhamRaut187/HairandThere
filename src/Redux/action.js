import { Login,Logout } from "./actionType"; 

const handleLogin = (val)=>{
    return{
        type:Login,
        payload:val
    }
}

const handleLogout = (val)=>{
    return{
        type:Logout,
        payload:val
    }
}


export{handleLogin,handleLogout}