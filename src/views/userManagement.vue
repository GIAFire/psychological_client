<template>
    <el-table :data="tableData" style="width: 100% ">
        <el-table-column prop="id" label="id" width="200" />
        <el-table-column prop="username" label="用户名" width="200" />
        <el-table-column prop="phone" label="手机号" width="200" />
        <el-table-column prop="school" label="学校" width="200" />
        <el-table-column prop="stuNum" label="学号" width="200" />
        <el-table-column prop="status" label="状态" width="200" >
            <template #default="scope" >
                <el-tag :style="getTagStyle(scope.row.status)" disable-transitions>{{scope.row.status === 1 ? '正常' : '封禁' }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="caozuo" label="操作" width="200" #default="scope">
            <el-button type="primary" round>修改</el-button>
            <el-button :style="getBtnStyle(scope.row.status)" round @click="banUserBtn(scope.row.id,scope.row.status)">{{scope.row.status === 1 ? '封禁' : '解封' }}</el-button>
        </el-table-column>


    </el-table>
</template>
<script >
import { ref } from 'vue'
import  { ElTable, ElTableColumn } from 'element-plus'
import { defineComponent } from 'vue'
import { getUserList,banUser } from '@/apis/adminUserList'
import {
    Delete,
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
            console.log(res.data);
            tableData.value = res.data
        });
        const getTagStyle = (status) =>{
            return { '--el-tag-bg-color': status === 1 ? '#00800059' : '#ff000073' };
        }
        const getBtnStyle = (status) =>{
            return { '--el-button-bg-color': status === 1 ? '#00800059' : '#ff000073' };
        }
        const banUserBtn = (id,status) => {
            status = status === 1 ? 0 : 1
            const res = banUser(id,status)
            res.then((res) => {
                if(res.code == "0000"){
                    alert(status = status === 1 ? "解封成功" : "封禁成功")
                    window.location.reload();
                }
            });
        }
        return {
            tableData,getTagStyle,banUserBtn,getBtnStyle
        }
    }
})

</script>
<style>
* {
    padding: 0px;
    margin: 0px;
    color: #76df70 !important;
}
</style>
