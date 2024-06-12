<template>
    <el-dialog :visible.sync="isShow" center title="新增种族" width="600px" @close="closeDialog">
        <el-form :model="form" ref="form" label-width="90px">
            <el-form-item label="姓名:">
                <div class="box">
                    <el-input v-model="form.name"/>
                </div>
            </el-form-item>
            <el-form-item label="省份:">
                <div class="box">
                    <el-input v-model="form.province"/>
                </div>
            </el-form-item>
            <el-form-item label="市区:">
                <div class="box">
                    <el-input v-model="form.city"/>
                </div>
            </el-form-item>
            <el-form-item label="地址:">
                <div class="box">
                    <el-input v-model="form.address"/>
                </div>
            </el-form-item>
            <el-form-item label="邮编:">
                <div class="box">
                    <el-input v-model="form.zip"/>
                </div>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="handleAdd">确认</el-button>
        </span>
    </el-dialog>
</template>

<script>
// import myaxios from '@/utils/myaxios'
export default {
    data() {
        return {
            isShow: false,
            form: {
                name: '',
                province: '',
                city: '',
                address: '',
                zip: '',
            },
        }
    },
    methods: {
        open() {
            this.isShow = true
        },

        //确认按钮
        handleAdd() {
            // myaxios.addUserAPI(this.form).then(res =>{
            //     console.log(res)
            // })
        },

        //点叉关闭
        closeDialog(){
            this.form = {}
        }
    }
}
</script>

<style scoped>
::v-deep .el-dialog__header{
    background: #E5E5E5;
    padding: 15px 15px;
}
.el-input{
    width: 90%;
}
</style>
