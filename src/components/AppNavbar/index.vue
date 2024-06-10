<template>
    <div class="navbar">
        <el-menu default-active="1" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" acive-text-color="#ffd04b">
            <el-menu-item index="/home">
                <i class="el-icon-s-home"></i><span slot="title">我的世界</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-setting"></i><span slot="title">世界设定</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/booktype">
                        <span class="titleItem" slot="title">类别管理</span>
                    </el-menu-item>
                    <el-menu-item index="/bookinfo">
                        <span class="titleItem" slot="title">信息管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-platform"></i><span slot="title">库存管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/kucunsearch">
                        <span class="titleItem" slot="title">库存查询</span>
                    </el-menu-item>
                    <el-menu-item index="/rukusearch">
                        <span class="titleItem" slot="title">入库查询</span>
                    </el-menu-item>
                    <el-menu-item index="/chukusearch">
                        <span class="titleItem" slot="title">出库查询</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/user">
                <i class="el-icon-s-check"></i><span slot="title">用户管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created() {

    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
};
</script>


<style scoped>
.navbar {
    position: absolute;
    width: 200px;
    background-color: #545c64;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    color: #fff;
}

.el-menu {
    border-right: none;
}

.titleItem{
    padding-left: 20px;
}
::v-deep .el-menu-item-group__title{
    display: none;
}

</style>