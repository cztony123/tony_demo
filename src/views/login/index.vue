<template>
    <div class="login-box">
        <el-form :rules="rules" :model="form" ref="form" label-width="70px" class="login-form">
            <h2 class="login-title">vue+Echarts后台管理系统</h2>
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="form.password" type="password"></el-input>
            </el-form-item>

            <div class="submitBtn">
                <el-button size="small" type="primary" @click="onSubmitLogin">登录</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import myaxios from '@/utils/myaxios'
export default {
    data() {
        return {
            form: {
                username: "",
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 6,
                        max: 16,
                        message: "密码长度在6到16位字符",
                        trigger: ["blur", "change"],
                    }
                ]
            }
        }
    },
    methods: {
        onSubmitLogin() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    myaxios.get('/api/login').then(res =>{
                        if(this.form.username == res.data.data.token && this.form.password == res.data.data.password){
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                            localStorage.setItem('user', res.data.data.token);
                            this.$router.push('home');
                        }else{
                            this.$message.error('用户名或密码错误');
                        }
                    })
                } else {
                    return false;
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.login-form {
    width: 350px;
    background-color: #fff;
    padding: 15px;
    height: 250px;
    border-radius: 20px;
    position: absolute;
    margin-top: -125px;
    margin-left: -175px;
    top: 50%;
    left: 50%;
}

.login-box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ccc;
}

.login-title {
    color: #333;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
}

.el-input {
    width: 250px
}

.submitBtn {
    text-align: center
}
</style>