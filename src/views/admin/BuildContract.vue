<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="orderID" label="ID"> </el-table-column>
      <el-table-column prop="demandID" label="需求ID"> </el-table-column>
      <el-table-column prop="customerID" label="客户ID"> </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"> </el-table-column>
      <el-table-column prop="specifications" label="商品规格"> </el-table-column>
      <el-table-column prop="descript" label="订单描述"> </el-table-column>
      <el-table-column prop="price" label="单价"> </el-table-column>
      <el-table-column prop="amount" label="采购数量"> </el-table-column>
      <el-table-column prop="unit" label="单位"> </el-table-column>
      <el-table-column prop="merchantID" label="商家ID"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
      <el-table-column prop="status" label="订单状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  #default="scope">
          <el-button @click="build(scope.row.orderID)" type="text" size="small" style="color: red">创建合同</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="创建合同" :visible.sync="dialogFormVisible" width="70%">
      <div style="width: 80%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="top" :rules="rules" ref="form">
          <el-form-item label="订单ID" label-width="100px" class="item">
            <el-input v-model="form.orderID" disabled></el-input>
          </el-form-item>
          <el-form-item label="合同说明" label-width="100px" prop="address" class="item">
            <el-input v-model="form.descript" type="textarea" :rows="3"></el-input>
          </el-form-item>
          <el-form-item label="合同内容">
            <div id="contract">
              <h2 style="text-align: center">纺织品面料采购合同</h2>
              <p>供方：胜利东纺</p>
              <p>页码：1</p>
              <p>签订地点：</p>
              <p>需方：（客户名字）</p>
              <p>签订时间：xxxx-xx-xx</p>
              <p style="text-indent: 2em">经供需双方友好协商，本着平等自愿的原则，双方就面料购销事宜达成一致，特签署本合同，以便供需双方共同遵守。</p>
              <table style="border-top: 1px solid #ccc;border-left: 1px solid #ccc;width: 100%">
                <thead>
                  <tr>
                    <th>产品编号</th>
                    <th>产品规格</th>
                    <th>数量/米</th>
                    <th>单价(元/米)</th>
                    <th>总金额/元</th>
                    <th>交期</th>
                  </tr>
                </thead>
              </table>
              <p style="color: red">(点击表头根据产品添加表格行，删除此提示内容)</p>
              <p>详细约定事项：</p>
              <p>一．质量要求：</p>
              <p style="text-indent: 2em">（1）按照国家质量标准执行；</p>
              <p style="text-indent: 2em">（2）面料数量溢短不超过 <span style="color: red">x</span> %，布面洁净无污点。</p>
              <p>二．交货方式及包装运输：</p>
              <p style="text-indent: 2em">（1）交货地点/方式：需方指定装货地点。</p>
              <p style="text-indent: 2em">（2）产品的运输费用由供方承担。</p>
              <p style="text-indent: 2em">（3）包装要求：塑料袋包装，每匹贴有唛头，注明产品编号、缸号、色号、米数。</p>
              <p>三．验收标准及提出异议期限:按国家标准验收,有异议需在收到货物后一个星期内提出。</p>
              <p>四．付款方式：1.需方在签订合同之后3天内支付<span style="color: red">30</span>%定金给供方；付清剩下余款后提货。</p>
              <p>五．违约责任：按照《中华人民共和国合同法》执行。</p>
              <p>六．本合同自供需双方签章后生效，合同履行期间，任何一方均不能随意变更或解除合同，供需双方因本合同的履行发生争议，双方应友好协商解决，友好协商不成，任何一方均可向合同签订地所在的人民法院提起诉讼。</p>
              <p>供方签字：</p>
              <p>需方签字：</p>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save('form')">创建合同</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import E from 'wangeditor'
import Axios from 'axios'
let editor
export default {
  name: 'BuildContract',
  data(){
    return{
      list:[{}],
      dialogFormVisible:false,
      form:{
        content:''
      },
    }
  },
  methods:{
    build(id){
      this.dialogFormVisible = true;
      //关联弹窗里的div，new一个editor对象
      this.$nextTick(() => {
        editor = new E('#contract');
        editor.create();
      })
      this.form.orderID = id;
    },
    save(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //获取富文本内的html内容
          this.form.content = editor.txt.html();
          Axios.post("/api/econtract/save",this.form).then(res => {

          })
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          this.dialogFormVisible = false;
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    //关闭弹窗
    closeDialog(){
      this.dialogFormVisible = false;
    },
    getList(){
      Axios.get("/api/order/all").then(res => {
        console.log(res.data)
        this.list=res.data
        // this.changeListStatus(this.list)
      })
    },
  },
  created() {
    this.getList();
  }
}
</script>

<style scoped>

</style>
