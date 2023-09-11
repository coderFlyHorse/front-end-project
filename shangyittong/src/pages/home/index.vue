
<script setup lang="ts">

import carousel from '@/components/carousel/index.vue'
import Search from '@/components/search/index.vue'
import Level from '@/components/level/index.vue'
import Region from '@/components/region/index.vue'
import Card from '@/components/card/index.vue'

import { ref } from 'vue'
import { onMounted } from 'vue'

let pageNu = ref<number>(1)
let pageSize = ref<number>(10)
import { getHositalList } from './api/api.ts'
const getList = async () => {
    let res = await getHositalList(pageNu.value, pageSize.value)

    console.log(res);


}
onMounted(() => {
    getList()
})

const handleSizeChange = (size: number) => {

    pageSize.value = size
    getList()

}
const handleCurrentChange = (current: number) => {
    pageNu.value = current
    getList()

}

</script>

<template>
    <div class="page_container">
        <carousel />
        <Search />

        <el-row :gutter="20">
            <el-col :span="20">
                <Level />
                <Region />
                <div class="hospital">
                    <Card class="item" v-for="item in 10" :key="item" />
                    <el-pagination v-model:current-page="pageNu" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
                        layout=" prev, pager, next, jumper,sizes, total" :total="13" @size-change="handleSizeChange"
                        @current-change="handleCurrentChange" />
                </div>

            </el-col>
            <el-col :span="4">254654654</el-col>
        </el-row>



    </div>
</template>



<style lang="scss" scoped>
.page_container {}

.hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    margin-top: 20px;

    .item {
        width: 48%;
    }
}
</style>