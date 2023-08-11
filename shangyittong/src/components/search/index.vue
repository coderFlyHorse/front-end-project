<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
const handleClick = () => {
    console.log('搜索');

}

</script>


<template>
    <div class="search">

        <el-autocomplete clearable placeholder="请输入医院名称" />

        <el-button type="primary" :icon="Search" @click="handleClick"> 搜索 </el-button>
    </div>
</template>
  

<style scoped lang="scss" >
// 深度选择器 :>>> /deep/ ::v-deep :deeo()
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;

    :deep(.el-input__wrapper) {
        width: 600px;
         height: 50px;
    }
    :deep(.el-button){
        height: 50px;
    }

}
</style>