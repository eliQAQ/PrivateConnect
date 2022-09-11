import axios from 'axios'
import { Message } from 'element-ui'
import router from "../router"

axios.interceptors.response.use(success=>{

    //业务逻辑错误
    if(success.status && success.status == 200 ){
        if(success.data.code == 500 || success.data.code == 401 || success.data.code == 403){
            Message.error({message:success.data.Message});
            return;
        }
        if(success.data.message){
            Message.success({message:success.data.Message});
        }
    }
    return success.data;
}, error=>{
    if(error.response.code == 504 || error.response.code == 404){
        Message.error({message:"服务器错误"});
    }
    else if(error.response.code == 403){
        Message.error({message:"未授权"})
    }
    else if(error.response.code == 401){
        Message.error({message:"未登录"});
        router.replace("/");
    }
    else{
        if(error.response.data.Message){
            Message.error({message:error.response.data.Message});
        }else{
            Message.error({message:"未知错误!"});
        }
    }
    return;
}
);


//返回json格式的请求值
let base = '';
export const postRequest = (url, params) => {
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}