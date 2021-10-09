<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/base.css';

#app {

}
.w1200{
  width: 1200px;
  margin: 0 auto;
}
.flex-b{
  display: flex;
  justify-content: space-between;
}
.flex-l{
  display: flex;
  justify-content: left;
}
.bg-o{
  background-color: #ff6a06;
}
.font-o{
  color: #ff6a06;
}

.font-b{
  color: #2d82ff;
}
.bg-f5{
  background-color: #f5f5f5;
}
.hr{
    height: 10px;
    background-color: #2d82ff;
}
</style>
