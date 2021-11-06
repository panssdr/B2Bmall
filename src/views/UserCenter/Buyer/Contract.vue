<template>
  <div style="width: 95%;margin: 0 auto;margin-top: 30px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="合同号" width="140"> </el-table-column>
      <el-table-column prop="product" label="订单号"> </el-table-column>
      <el-table-column prop="product" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="价格" width="80"> </el-table-column>
      <el-table-column prop="number" label="数量" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="单位" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
      <el-table-column prop="status" label="订单状态" width="80"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="detail(scope.row.id)" type="text" size="small">查看合同</el-button>
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[10, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>

    <el-dialog title="创建新订单" :visible.sync="dialogFormVisible" width="70%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="合同号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="合同状态" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
        </el-form>
        <div>
          <p>合同内容</p>
          <p v-html="content"/>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="refuse" type="danger">拒绝合同</el-button>
          <el-button type="primary" @click="agree">同意合同</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Contract',
  data(){
    return{
      tableData: [{}],
      dialogFormVisible:false,
      form:{},
      content:'',
    }
  },
  methods:{
    detail(id){
      this.dialogFormVisible = true;
    },
    agree(){
      this.$message({
        message: '合同签订成功',
        type: 'success'
      });
      this.dialogFormVisible = false;
    },
    refuse(){
      this.dialogFormVisible = false;
    }
  }
}
</script>

<style scoped>

</style>
