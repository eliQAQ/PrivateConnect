<template>
    <div>
        <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">私人用网站登录</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="text" v-model="loginForm.password" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="text" v-model="loginForm.code" placeholder="点击图片，更换验证码" style="width:250px;margin-right:25px;"></el-input>
                <img :src="captchaUrl">
            </el-form-item>
            
            <el-button type="primary" class="loginButton" @click="submitLogin('loginForm')">Login</el-button>
        </el-form>
    </div>  
</template>

<script>
    export default {
        name:"Login",
        data(){
            return{
                captchaUrl:'',
                loginForm:{
                    username:'admin',
                    password:'123',
                    code:''
                },
                rules:{
                    username:[
                        {required: true, message:"用户名不能为空", trigger:'blur'},
                        {min: 5, max: 12, message: '用户名长度在 5 到 12 个字符', trigger: 'blur' }
                    ],
                    password:[{required: true, message:"密码不能为空", trigger:'blur'}],
                    code:[{required: true, message:"验证码不能为空", trigger:'blur'}]
                }
            }
        },
        methods:{
            submitLogin(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        this.$message.error('请按正确格式填写');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    .loginContainer{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 188px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .loginTitle{
        margin: 8px auto 48px auto;
        text-align:center;
    }
    .loginButton{
       width: 100%;
    }
</style>
