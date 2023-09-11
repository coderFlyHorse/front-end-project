<template>
    <div>
        <el-card shadow="hover" class="box-card">
            <div class="content">

                <div class="left">
                    <div class="upper">北京医院</div>
                    <div class="down">
                        <div class="tip">
                            <img src="@/assets/svg/zan.svg" alt=""> <span>三级甲等</span>
                        </div>
                        <div class="tip"> <img src="@/assets/svg/clock.svg" alt=""> <span>下午三点</span></div>
                    </div>
                </div>
                <div class="right"><img src="../../assets/images/logo.png" alt=""></div>
            </div>
        </el-card>
    </div>
</template>

<script name="card" lang="ts" setup>

</script>

<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: space-between;

    .left {
        width: 60%;

        .upper {}


        .down {
            .tip  {
                display: flex;
                align-items: center;
                margin-top: 10px;
                color: #7f7f7f;
                gap: 5px;
            }



            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            color: #7f7f7f;
        }

    }

    .right {
        img {
            width: 5opx;
            height: 50px;
        }
    }
}
</style>