<template>
  <div class="bg-gray-50 border-b-2">
    <div class="container mx-auto h-xl flex justify-between items-center">
      <div>
        <img src="@/static/img/logo.png" alt="" />
      </div>
      <div class="hidden md:block">
        <ul class="flex">
          <li
            @click="handleListChange(index, item)"
            :class="current === index ? 'bg-gray-200' : ''"
            class="hover:bg-gray-200 px-4 h-xl align-middle cursor-pointer flex flex-col justify-center"
            v-for="(item, index) in navList"
            :key="index"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <button class="block md:hidden hover:bg-gray-200 button mr-4 navbar-toggle">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface objNav {
  title: String
  route: any
}
const navList: objNav[] = [
  {
    title: '首页',
    route: '/home'
  },
  {
    title: '资讯',
    route: '/about'
  },
  {
    title: '案例',
    route: '/news'
  },
  {
    title: '关于',
    route: '/product'
  },

]
const current = ref(0)
const router = useRouter()

const handleListChange = (index: number, item: objNav) => {
  current.value = index
  router.push(item.route)
}
</script>
<style>
.navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle {
  border-color: #ddd;
}
.navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
</style>
