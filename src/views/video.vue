<template>
    <el-button type="primary" @click="dialogFormVisible = true">
        上传视频
    </el-button>
    <el-divider />
    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
        <fromElemnt></fromElemnt>
    </el-dialog>
        <el-table :data="tableData" style="width: 100% ">
            <el-table-column prop="id" label="id" width="230" />
            <el-table-column prop="video_name" label="视频名称" width="230" />
            <el-table-column prop="video_url" label="视频地址" width="230" />
            <el-table-column label="封面图片" width="230">
                <template #default="scope">
                    <el-image style="width: 100px; height: 100px" :src="scope.row.image_url" fit="cover" />
                </template>
            </el-table-column>
            <el-table-column prop="sort" label="序号" width="230" />
            <el-table-column prop="caozuo" label="操作" width="230" #default="scope">
                <el-button type="primary" round @click="editItem(scope.row.id)">修改</el-button>
                <el-button type="danger" round @click="deleteItem(scope.row.id)">删除</el-button>
            </el-table-column>
        </el-table>
</template>
<script >
import { ref } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
import { defineComponent } from 'vue'
import { getVideoList } from '@/apis/adminVideo'
import fromElemnt from '@/components/fromElemnt.vue';
import { Delete } from '@element-plus/icons-vue'

export default defineComponent({
    components: {
        ElTable, ElTableColumn, Delete, fromElemnt
    },
    setup() {
        
        const dialogFormVisible = ref(false)
        const tableData = ref([])

        const res = getVideoList()
        res.then((res) => {
            console.log(res.data.data);
            tableData.value = res.data.data
        });

        const deleteItem = (id) => {
            
        }

        
        return {
            tableData, dialogFormVisible,deleteItem
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
