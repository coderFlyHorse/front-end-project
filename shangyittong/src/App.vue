<template>
  <div class="container">
    <HostitalTop />
    <div class="content">

      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>

    </div>
    <HostitalBottom />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {

    min-height: 700px;
    margin-top: 80px;
    width: 1200px;
  }
}
</style>