<template>
  <div class="page">
    <!-- banner -->
    <div class="banner">
      <div class="container mx-auto text-gray-300 py-12">
        <h5 class="text-4xl font-bold">资讯</h5>
        <div class="text-xl mt-1">企业内训的最新动态、资源等....</div>
      </div>
    </div>

    <!-- content -->
    <div class="container mx-auto mb-4">
      <div class="grid grid-cols-2 lg:grid-cols-3">
        <div class="col-span-2  px-3 mx-3">
          <div class="item shadow flex items-center bg-white mt-4" v-for="(item, index) in 10" :key="index">
            <div class="w-5/12 p-3">
              <img src="@/static/img/info1.jpg" alt="" />
            </div>
            <div class="w-7/12 px-3">
              <p class="text-lg mb-1">苹果四寸手机为何配置A9处理器？</p>
              <div class="hidden  lg:block">
                TVOS2.0是在TVOS1.0与华为MediaOS及阿里巴巴YunOS融合的基础上，打造的新一代智能电视操作系统。华为主要承担开发工作，为何配置A9处内置的电视购物商城由阿里方面负责
              </div>
              <p>admin 15 / 10 /11</p>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="bg-white shadow px-4 py-2 mt-4">
            <p class="text-lg">热门资讯</p>
            <div class="flex items-center py-2" v-for="(item, index) in 5" :key="index">
              <div class="w-5/12 p-2">
                <img src="@/static/img/info2.jpg" alt="" />
              </div>
              <div class="w-7/12 px-3">
                <p class="mb-1">苹果四寸手机为何要配置强大的A9处理器？</p>
                <p>admin 15 / 10 /11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style>
.banner {
  background-image: url('@/static/img/bg.jpg');
  background-size: 100% 100%;
}
.page {
  background: #f5f5f5;
}
</style>
