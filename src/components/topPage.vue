<template>
    <div class="topBox">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["首页", "导航一", "导航二"],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.topBox {
    background: #c7c7c7;
    height: 40px;
    .el-breadcrumb{
        margin-left: 10px;
        line-height: 40px;
        ::v-deep .el-breadcrumb__separator{
            color: #606266;
        }
    }
}
</style>