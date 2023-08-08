<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚一同 预约挂号统一平台</p>
            </div>
            <div class="right">
                <div class="help">帮助中心</div>
                <div class="login">登录/注册</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    position: fixed;

    .content {
        width: 1200px;
        height: 70px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            justify-content: center; // aligns items along the horizontal axis of the parent element.
            align-items: center;
            gap: 10px;

            img {
                width: 50px;
            }

            p {
                font-size: 20px;
                color: #000;
            }

        }

        .right {
            display: flex;
            justify-content: center; // aligns items along the horizontal axis of the parent element.
            align-items: center;
            gap: 20px;
            font-size: 14px;
            color: #bbb;
        }
    }
}</style>