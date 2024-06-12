<template>
    <div>
        <el-form :inline="true" class="form-inline">
            <el-form-item>
                <el-button type="primary" size="small" icon="el-icon-plus" @click="onAdd">新增</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" align="center" label="姓名" width="auto"/>
            <el-table-column prop="province" align="center" label="省份" width="auto"/>
            <el-table-column prop="city" align="center" label="市区" width="auto"/>
            <el-table-column prop="address" align="center" label="地址" width="auto"/>
            <el-table-column prop="zip" align="center" label="邮编" width="auto"/>
            <el-table-column align="center" label="操作" width="auto">
                <template slot-scope="scope">
                    <el-button size="mini" type="text" icon="el-icon-edit" @click="handleEdit(scope.row)">修改</el-button>
                    <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <add-race ref="createRace" @success="getDataList"></add-race>
    </div>
</template>

<script>
import myaxios from '@/utils/myaxios'
import addRace from './components/addRace.vue'
export default {
    components:{
        addRace
    },
    data() {
        return {
            tableData: [],
        }
    },
    created () {
        this.getDataList()
    },
    methods: {
        getDataList(){
            myaxios.get('/api/data1').then(res =>{
                this.tableData = res.data.items
            })
        },

        //新增
        onAdd(){
            this.$refs.createRace.open()
        },

        //修改
        handleEdit(row) {
            console.log(row);
        },

        //修改
        handleDelete(row) {
            console.log(row);
        }
    },
}
</script>