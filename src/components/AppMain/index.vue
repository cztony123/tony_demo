<template>
    <div class="main">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <span class="line"></span>
            <el-breadcrumb-item v-show="$route.path=='/booktype' || $route.path== '/bookinfo'">信息管理</el-breadcrumb-item>
            <el-breadcrumb-item v-show="$route.path=='/chukusearch' || $route.path== '/kucunsearch' || $route.path== '/rukusearch'">库存管理</el-breadcrumb-item>
            <el-breadcrumb-item  :to="{path: $route.path}">{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            123
        </div>
    </div>
</template>

<style scoped>
.main {
    position: absolute;
    background-color: #e7e7e7;
    left: 200px;
    right: 0;
    top: 50px;
    bottom: 0;
    overflow-y: auto;
}
.el-breadcrumb{
    height: 12px;
    padding: 15px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    margin-bottom: 10px;
  }
  .line{
    position: absolute;
    color: #fff;
    border-left: 3px solid #ccc;
    left:27px;
    height: 15px;
  }
</style>