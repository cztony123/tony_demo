<template>
    <div class="bookinfo" style="width:100%;" max-height="380">
        <el-table :data="bookinfolist" border>
            <el-table-column label="序号" align="center" prop="id" width="70px"></el-table-column>
            <el-table-column label="姓名" align="center" prop="raceType"></el-table-column>
            <el-table-column label="数量" align="center" prop="humansNumber"></el-table-column>
            <el-table-column label="作者" align="center" prop="autor"></el-table-column>
            <el-table-column label="出版社" align="center" prop="press"></el-table-column>
            <el-table-column label="出版日期" align="center" prop="publicationdate"></el-table-column>
            <el-table-column label="价格" align="center" prop="price"></el-table-column>
            <el-table-column label="数量" align="center" prop="quantity"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import myaxios from '@/utils/myaxios'
export default {
    data() {
        return {
            bookinfolist: []
        }
    },
    created() {
        this.getFirstData()
    },
    methods: {
        getFirstData() {
            myaxios.get('/api/data1').then(res =>{
                console.log(res.data);
                this.bookinfolist = res.data.items
            })
        },
    },
};
</script>