<template>
  <div>
    <Head></Head>
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple">
        <Side></Side>
      </div></el-col>
      <el-col :span="20"><div class="grid-content bg-purple-light"><router-view></router-view></div></el-col>
    </el-row>
  </div>
</template>

<script>
import Side from '@/views/UserCenter/Side'
import Head from '@/components/Head'
export default {
  name: 'UserCenter',
  components: { Head, Side }
}
</script>

<style scoped>

</style>
