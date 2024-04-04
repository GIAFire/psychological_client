<template>
    <el-table :data="tableData" style="width: 100% ">
        <el-table-column prop="id" label="id" width="230" />
        <el-table-column prop="username" label="用户名" width="230" />
        <el-table-column prop="phone" label="手机号" width="230" />
        <el-table-column prop="school" label="学校" width="230" />
        <el-table-column prop="stuNum" label="学号" width="230" />
        <el-table-column prop="caozuo" label="操作" width="230">
            <el-button type="primary" round>修改</el-button>
            <el-button type="danger" round>删除</el-button>
        </el-table-column>


    </el-table>
</template>
<script >
import { ref } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
import { defineComponent } from 'vue'
import { getUserList } from '@/apis/adminUserList'
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

export default defineComponent({
    components: {
        ElTable,
        ElTableColumn, Delete
    },
    setup() {
        const tableData = ref([])
        const res = getUserList()
        res.then((res) => {
            console.log(res.data.data);
            tableData.value = res.data.data
        });
        return {
            tableData,
        }
    }
})

</script>
<style>
* {
    padding: 0px;
    margin: 0px;
    color: #000000 !important;
}
</style>
