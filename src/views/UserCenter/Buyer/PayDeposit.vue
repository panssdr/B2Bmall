<template>
  <div style="width: 95%;margin: 0 auto;margin-top: 30px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="product" label="订单号" width="140"> </el-table-column>
      <el-table-column prop="product" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="价格" width="80"> </el-table-column>
      <el-table-column prop="number" label="数量" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="单位" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
      <el-table-column prop="status" label="状态" width="80"> </el-table-column>
      <el-table-column prop="status" label="对应需求编号" width="120"> </el-table-column>
      <el-table-column prop="status" label="对应合同编号" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="detail(scope.row.id)" type="text" size="small">支付定金</el-button>
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

    <el-dialog title="支付定金" :visible.sync="dialogFormVisible" width="70%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="订单号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="订单状态" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品名称" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品规格" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品描述" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="单价(元/米)" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="数量(米)" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="佣金" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="定金" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="总价" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="创建日期" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close" type="danger">关闭</el-button>
          <el-button type="primary" @click="pay">支付定金</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog title="支付定金" :visible.sync="dialogFormVisible2" width="60%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form2" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="订单ID" label-width="100px" class="item">
            <el-input v-model="form2.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="付款金额(元)" label-width="100px" class="item">
            <el-input v-model="form2.id" disabled></el-input>
          </el-form-item>
          <span>定金应不少于总款项的30%</span>
          <el-form-item label="付款说明" label-width="100px" class="item">
            <el-input v-model="form2.id" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="付款类型" label-width="100px">
            <el-select v-model="form2.region">
              <el-option label="定金" value="dingjin"></el-option>
              <el-option label="非定金" value="feidingjin"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="付款方式" label-width="100px">
            <el-select v-model="form2.region">
              <el-option label="银行汇款" value="1"></el-option>
              <el-option label="网银支付" value="2"></el-option>
              <el-option label="信用额度支付" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="付款日期" label-width="100px" class="item">
            <el-date-picker type="date" placeholder="选择日期" v-model="form2.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close2" type="danger">关闭</el-button>
          <el-button type="primary" @click="confirmPay">确定支付</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PayDeposit',
  data(){
    return{
      tableData: [{}],
      dialogFormVisible:false,
      dialogFormVisible2:false,
      form:{},
      form2:{}
    }
  },
  methods:{
    detail(id){
      this.dialogFormVisible = true;
    },
    close(){
      this.dialogFormVisible = false;
    },
    close2(){
      this.dialogFormVisible2 = false;
    },
    pay(){
      this.dialogFormVisible = false;
      this.dialogFormVisible2 = true;
    },
    confirmPay(){
      this.$message({
        message: '支付成功',
        type: 'success'
      });
      this.dialogFormVisible2 = false;
    }
  }
}
</script>

<style scoped>

</style>
