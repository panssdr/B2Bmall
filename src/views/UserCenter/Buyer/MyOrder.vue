<template>
  <div style="width: 95%;margin: 0 auto;margin-top: 30px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="订单号" width="140"> </el-table-column>
      <el-table-column prop="product" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="价格" width="80"> </el-table-column>
      <el-table-column prop="number" label="数量" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="单位" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
      <el-table-column prop="status" label="状态" width="80"> </el-table-column>
      <el-table-column prop="status" label="对应需求编号" width="120"> </el-table-column>
      <el-table-column prop="status" label="对应合同编号" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button @click="demand(scope.row)" type="text" size="small">需求</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="detail(scope.row)" type="text" size="small">详细</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="pay(scope.row)" type="text" size="small">付款列表</el-button>
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
<!--    需求详细信息-->
    <el-dialog title="详细信息" :visible.sync="dialog1" width="80%">
      <div style="width: 90%;margin: 0 auto">
        <el-descriptions class="margin-top" :column="3" size="medium" border="true">
          <el-descriptions-item label="编号">kooriookami</el-descriptions-item>
          <el-descriptions-item label="类别">18100000000</el-descriptions-item>
          <el-descriptions-item label="商品规格">苏州市</el-descriptions-item>
          <el-descriptions-item label="商品描述">学校</el-descriptions-item>
          <el-descriptions-item label="单价">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="数量">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="单位">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="用途">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="商品图片">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="状态">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="创建日期">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog1" type="danger">关闭窗口</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 订单详情-->
    <el-dialog title="详细信息" :visible.sync="dialog2" width="80%">
      <div style="width: 90%;margin: 0 auto">
        <el-descriptions class="margin-top" :column="3" size="medium" border="true">
          <el-descriptions-item label="订单号">kooriookami</el-descriptions-item>
          <el-descriptions-item label="订单状态">18100000000</el-descriptions-item>
          <el-descriptions-item label="商品名称">18100000000</el-descriptions-item>
          <el-descriptions-item label="商品规格">苏州市</el-descriptions-item>
          <el-descriptions-item label="商品描述">学校</el-descriptions-item>
          <el-descriptions-item label="单价">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="数量">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="单位">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="佣金">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="定金">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="总价">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="支付金额">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          <el-descriptions-item label="创建日期">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog2" type="danger">关闭窗口</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data(){
    return{
      tableData:[{}],
      dialog1:false,
      dialog2:false,
    }
  },
  methods:{
    demand(){
      this.dialog1=true;
    },
    detail(){
      this.dialog2=true;
    },
    closeDialog1(){
      this.dialog1=false;
    },
    closeDialog2(){
      this.dialog2=false;
    },
  }
}
</script>

<style scoped>

</style>
