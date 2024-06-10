<template>
    <div class="header">
        <a href="/" style="padding-left: 30px">
            <img src="@/assets/logo.png" class="logo" />
            <span class="title">后台管理系统</span>
        </a>
        <el-dropdown>
            <span class="el-dropdown-link">
                <i class="el-icon-user-solid"></i> {{userData}} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-user" @click.native="onLogOut">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userData: null
        }
    },
    created(){
        this.userData = localStorage.getItem('user')
    },
    methods: {
        onLogOut(){
            this.$router.push('/');
            this.$message({
                message: '退出成功',
                type: 'success'
            });
        }
    },
};
</script>

<style scoped>
.header {
    position: absolute;
    line-height: 50px;
    background-color: #130505;
    left: 0;
    right: 0;
    top: 0;
    color: #fff;
}

.logo {
    border-radius: 5px;
    vertical-align: middle;
    width: 25px;
}

.title {
    position: absolute;
    color: #fff;
    padding-left: 5px;
    font-size: 18px;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.el-dropdown {
    float: right;
    margin-right: 30px;
}</style>