
<script setup lang="ts">
import carousel from '@/components/carousel/index.vue'
import Search from '@/components/search/index.vue'
import Level from '@/components/level/index.vue'
import Region from '@/components/region/index.vue'
import Card from '@/components/card/index.vue'
</script>

<template>
    <div class="page_container">
        <carousel />
        <Search />

        <el-row gutter="20">
            <el-col :span="20">
                <Level />
                <Region />
                <Card />
            </el-col>
            <el-col :span="4">254654654</el-col>
        </el-row>



    </div>
</template>



<style lang="scss" scoped>
.page_container {}
</style>