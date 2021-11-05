<template>
  <div style="width: 55%;margin: 0px auto;margin-top: 20px">
    <el-form
      :inline="true"
      :model="form"
      class="demo-form-inline"
      label-position="left"
      ref="form"
    >
      <el-form-item label="商品名称" label-width="100px" class="item">
        <el-input v-model="form.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="类别" label-width="100px" class="item">
        <el-select v-model="form.categoryID1" placeholder="请选择">
          <el-option
            v-for="item in categoryID1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <hr />
      <br />
      <el-form-item label="商品规格" label-width="100px" class="item">
        <el-input v-model="form.specifications"></el-input>
      </el-form-item>
      <el-form-item label="单价(元)" label-width="100px" class="item">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <hr />
      <br />
      <el-form-item label="数量" label-width="100px" class="item">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item label="单位" label-width="100px" class="item">
        <el-select v-model="form.unit" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <hr />
      <br />
      <el-form-item label="商品描述" label-width="100px" class="item">
        <el-input v-model="form.descript" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="用途" label-width="100px" class="item">
        <el-input v-model="form.usePurpose" type="textarea"></el-input>
      </el-form-item>
      <hr />
      <br />
      <el-form-item label="门幅(吋)" label-width="100px" class="item">
        <el-input v-model="form.width"></el-input>
      </el-form-item>
      <el-form-item label="面料成分" label-width="100px" class="item">
        <el-input v-model="form.ingredient"></el-input>
      </el-form-item>
      <br />
      <el-form-item>
        <el-button type="success" @click="saveUpdate(form)">新建需求</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "AddDemand",
  data() {
    return {
      categoryID1: [
        { label: "时装面料", value: 1 },
        { label: "工装面料", value: 2 },
        { label: "家纺布艺", value: 3 },
        { label: "工业用布", value: 4 },
        { label: "功能性新产品", value: 5 },
        { label: "坯布市场", value: 6 },
        { label: "辅料市场", value: 7 }
      ],
      options2: [
        { label: "米", value: "米" },
        { label: "公斤", value: "公斤" },
        { label: "吨", value: "吨" },
        { label: "布", value: "布" },
        { label: "纱线", value: "纱线" }
      ],
      value2: "米",
      form: {
        goodsName: "",
        categoryID1: 1,
        specifications: "",
        price: "",
        customerID: 13,
        amount: "",
        unit: "米",
        descript: "",
        usePurpose: "",
        width: "",
        ingredient: ""
      }
    };
  },
  methods: {
    saveUpdate(formName) {
      Axios.post(
        "/api/demand/createTableByCustomerService",
        formName
      ).catch(res => console.log(res));
    }
  }
};
</script>

<style scoped></style>
