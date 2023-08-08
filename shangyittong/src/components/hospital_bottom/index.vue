<template>
    <div class="bottom">
        <div class="content">
            
            <div class="left">京备</div>
            <div class="right">
                <span>联系我们</span>
                <span>联系我们</span>
                <span>联系我们</span>
                <span>联系我们</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.bottom {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .content{
      width: 1200px;  
      height: 100%;
      display: flex;
      justify-content: space-between;

      .left{

      }
      .right{
        display: flex;
        gap: 10px;
        color: gray;
      }
    }
}
</style>