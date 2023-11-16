let InitialLog={
    status:"out",
    LoginRouteConfig:{
        path:"/loginsignup",
        name:"Login"
    },
    user:{}
}

const loginReducer =(store=InitialLog,action)=>{
    switch(action.type){
        case"Login":{
            return{
                ...store,
                status:"in",
                LoginRouteConfig:{
                    path:"/profile",
                    name:"Profile"
                },
                user:action.payload
            }
        }
        case"Logout":{
            return{
                ...store,
                status:"out",
                LoginRouteConfig:{
                    path:"/loginsignup",
                    name:"Login"
                },
                user:action.payload
            }
        }
        default :{
            return InitialLog;
        }
    }
}

export {loginReducer}