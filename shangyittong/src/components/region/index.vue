<script lang="ts" setup>

</script>
<template>
    <div class="region">
        <div class="content">
            <div class="left">
                地区:
            </div>
            <ul>
                <li class="active">全部</li>
                <li v-for="(i, index) in 15" :key="index">{{ i }}昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.region {
    width: 100%;
    height: 100%;
    color: #7f7f7f;
    margin-top: 10px;

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            width: 50px;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            width: calc(100% - 30px);

            li {
                &.active {

                    color: #55a6fe;
                }
            }

            li:hover {

                color: #55a6fe;
            }


        }
    }
}</style>