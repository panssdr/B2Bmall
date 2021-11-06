<template>
  <div>
    <div style="margin-left:60px;">
      <el-input
        placeholder="按ID/商家ID/需求ID搜索..."
        style="width: 300px;margin-left: 20px"
        v-model="search"
        type="text"
        clearable
      >
        <template #append>
          <el-button icon="el-icon-search" @click="forSearch"></el-button>
        </template>
      </el-input>
    </div>
    <el-table
      :data="list"
      style="width: 90%;margin: 0 auto"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column prop="id" label="询价ID"> </el-table-column>
      <el-table-column prop="demandID" label="需求ID"> </el-table-column>
      <el-table-column prop="customerID" label="客户ID"> </el-table-column>
      <el-table-column prop="quotedPrice" label="商家报价" width="100">
      </el-table-column>
      <el-table-column prop="merchantID" label="商家ID"> </el-table-column>
      <el-table-column prop="technicianID" label="技术员ID"> </el-table-column>
      <el-table-column prop="qcID" label="QC_ID"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
      <el-table-column prop="analysisDate" label="分析日期"> </el-table-column>
      <el-table-column prop="quotedDate" label="报价日期"> </el-table-column>
      <el-table-column prop="staffID" label="客服ID"> </el-table-column>
      <el-table-column prop="status" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="select(scope.row.id)" type="text" size="small"
            >选择商家询价</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!--    选择商家报价弹窗-->
    <el-dialog title="技术分析" :visible.sync="dialogFormVisible" width="80%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form
          :model="form"
          :inline="true"
          class="demo-form"
          label-position="left"
          ref="form"
        >
          <el-form-item label="需求ID" label-width="100px" class="item">
            <el-input v-model="form.demandID" disabled></el-input>
          </el-form-item>
          <el-form-item
            label="询价ID"
            label-width="100px"
            class="item"
            style="margin-left: 60px"
          >
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求名称" label-width="100px" class="item">
            <el-input v-model="form.goodsName" disabled></el-input>
          </el-form-item>
          <el-form-item
            label="需求规格"
            label-width="100px"
            class="item"
            style="margin-left: 60px"
          >
            <el-input v-model="form.specifications" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求类别" label-width="100px" class="item">
            <el-input v-model="form.category" disabled></el-input>
          </el-form-item>
          <el-form-item
            label="期望单价"
            label-width="100px"
            class="item"
            style="margin-left: 60px"
          >
            <el-input v-model="form.price" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求数量" label-width="100px" class="item">
            <el-input v-model="form.amount" disabled></el-input>
          </el-form-item>
          <el-form-item
            label="详情"
            label-width="100px"
            class="item"
            style="margin-left: 60px"
          >
            <el-input v-model="form.descript" disabled></el-input>
          </el-form-item>

          <el-form-item label="客户已选商家ID" label-width="120px" class="item">
            <el-input v-model="form.isSelectId"></el-input>
          </el-form-item>
          <el-form-item
            label="当前已选商家数"
            label-width="120px"
            class="item"
            style="margin-left: 60px"
          >
            <el-input v-model="isSelectNum"></el-input>
          </el-form-item>

          <el-form-item label="技术分析结果" label-width="100px" class="item">
            <el-input v-model="form.analysisDescript" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>

      <el-table :data="shopList" stripe style="width: 90%;margin: 0 auto" ref="multipleTable"  @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商家ID"> </el-table-column>
        <el-table-column prop="coName" label="公司名称" width="200"> </el-table-column>
        <el-table-column prop="province" label="所在省"> </el-table-column>
        <el-table-column prop="enterpriseScale" label="企业规模"> </el-table-column>
        <el-table-column prop="mainProduct" label="主营产品"> </el-table-column>
        <el-table-column prop="name" label="联系人姓名"> </el-table-column>
        <el-table-column prop="phone" label="联系人手机"> </el-table-column>
        <el-table-column prop="isIndividual" label="商家类型"> </el-table-column>
        <el-table-column prop="status" label="审核状态"> </el-table-column>
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save">确定询价</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "InquiryManagement",
  data() {
    return {
      list: [{}],
      shopList: [{}],
      dialogFormVisible: false,
      form: {},
      currentRow: null,
      isSelectNum:''
    };
  },
  methods: {
    handleSelectionChange() {
         this.isSelectNum=this.$refs.multipleTable.selection.length
        console.log(this.isSelectNum);
    },
    getList() {
      Axios.get("/api/inquirysheet/findAll")
        .then(res => {
          this.list = res.data;
          this.changeStatus(this.list);
        })
        .catch(res => console.log(res));
    },
    changeStatus(list) {
      for (let i = 0; i < list.length; i++) {
        switch (list[i].status) {
          case 0:
            list[i].status = "等待技术分析";
            break;
          case 1:
            list[i].status = "分析完成";
            break;
          case 2:
            list[i].status = "正在收集报价信息";
            break;
          case 3:
            list[i].status = "报价结束";
            break;
          case 4:
            list[i].status = "结束";
            break;
          case 5:
            list[i].status = "中止处理";
            break;
          case 6:
            list[i].status = "正常结束";
            break;
          case 7:
            list[i].status = "客户确认价格不满意";
            break;
          case 8:
            list[i].status = "客户确认价格满意";
            break;
        }
      }
    },
    getShopList() {
      Axios.get("/api/merchant/findAll").then(
        res => {this.shopList = res.data
        this.changeShopListStatus(this.shopList)
        console.log(this.shopList);
        }
      );
    },
    changeShopListStatus(list){
      for (let i = 0; i < list.length; i++) {
        switch (list[i].status) {
          case 0:
            list[i].status = "未审核";
            break;
          case 1:
            list[i].status = "已审核";
            break;
        }
        switch(list[i].isIndividual){
          case 0:
            list[i].isIndividual="企业商家"
            break;
          case 1:
            list[i].isIndividual="个人商家"
            break;
        }
      }
    },
    select(id) {
      // 获取数据库中的相关信息
      this.dialogFormVisible = true;
      Axios.get("/api/inquirysheet/findInquirysheetDemandById/" + id).then(
        res => (this.form = res.data)
      );
    },
    save() {
      let allMerchantID=[]
    for(let i=0;i<this.$refs.multipleTable.selection.length;i++){
       allMerchantID.push(this.$refs.multipleTable.selection[i].id)
     }
    Axios.post("/api/demandsupply/creatDemandSupplyByIds",{
      ids:allMerchantID,
      form:this.form}
    )
  },
    //关闭弹窗
    closeDialog() {
      this.dialogFormVisible = false;
    }
  },
  created() {
    this.getList();
    this.getShopList();
  }
};
</script>

<style scoped></style>
