<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul class="hospital-category">
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.level {
    color: #7f7f7f;

    h1 {

        font-weight: 900;
        margin: 10px 0px;
    }

    .content {
        .hospital-category {
            li {
                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                color: #55a6fe;
            }

            display: flex;
            gap: 15px;
        }

        .left {
   
            width: 50px;
            margin-right: 10px;

        }

        display: flex;
    }
}</style>