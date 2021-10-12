<template>
  <div>
    <BuyerInfoHead></BuyerInfoHead>
    <div class="add" style="width: 90%;margin: 0px auto">
      <div class="add-title">新增地址</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm mt-20">
        <el-form-item label="收货人姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="选择地区" prop="add">
          <el-select placeholder="选择省份" @change="pchange"  >
            <el-option
              v-for="(item1, i) in region"
              :key="item1.value"
              :label="item1.label"
              :value="i"
            ></el-option>
          </el-select>
          <el-select placeholder="选择城市" @change="cchange" class="ml-20">
            <el-option
              v-for="(item2, i) in region[pid].children"
              :key="item2.value"
              :label="item2.label"
              :value="i + 1"
            ></el-option>
          </el-select>
          <el-select placeholder="选择街道" @change="schange" class="ml-20">
            <el-option
              v-for="(item, i) in region[pid].children[cid].children"
              :key="item.value"
              :label="item.label"
              :value="i"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细地址" prop="moreadd">
          <el-input v-model="ruleForm.moreadd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存地址</el-button>
        </el-form-item>
      </el-form>
      <div class="add-title mt20">我的地址</div>
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="tel" label="手机号码" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter"> </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[
                    { text: '家', value: '家' },
                    { text: '公司', value: '公司' },
                ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{
                scope.row.tag
              }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
  </div>

</template>
<script>
import BuyerInfoHead from '@/views/UserCenter/Buyer/BuyerInfoHead'
export default {
    name: "Address",
  components: { BuyerInfoHead },
  data() {
        return {
             tableData: [{
          name: '王小虎',
          tel:13188885555,
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          name: '王小虎',
          tel:13188885555,
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          name: '王小虎',
          tel:13188885555,
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          name: '王小虎',
          tel:13188885555,
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }],
            pid: 0,
            cid: 0,
            sid: 0,
            region: [
                {
                    id: 1,
                    value: "北京",
                    label: "北京",
                    children: [
                        {
                            id: 1,
                            value: "丰台区",
                            label: "丰台区",
                            children: [
                                { id: 1, value: "菜户营街道", label: "菜户营街道" },
                                { id: 1, value: "菜户营街道", label: "菜户营街道" },
                            ],
                        },
                        {
                            id: 2,
                            value: "丰台区",
                            label: "丰台区",
                            children: [
                                { id: 1, value: "菜户营街道", label: "菜户营街道" },
                                { id: 1, value: "菜户营街道", label: "菜户营街道" },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    value: "上海",
                    label: "上海",
                    children: [
                        {
                            id: 1,
                            value: "浦东新区",
                            label: "浦东新区",
                            children: [
                                { id: 1, value: "东方明珠", label: "东方明珠" },
                                { id: 2, value: "东方明珠", label: "东方明珠" },
                            ],
                        },
                        {
                            id: 2,
                            value: "浦东新区",
                            label: "浦东新区",
                            children: [
                                { id: 1, value: "东方明珠", label: "东方明珠" },
                                { id: 2, value: "东方明珠", label: "东方明珠" },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    value: "河北",
                    label: "河北",
                    children: [
                        {
                            id: 1,
                            value: "石家庄",
                            label: "石家庄",
                            children: [
                                { id: 1, value: "赵县", label: "赵县" },
                                { id: 2, value: "赵县", label: "赵县" },
                            ],
                        },
                        {
                            id: 2,
                            value: "石家庄",
                            label: "石家庄",
                            children: [
                                { id: 1, value: "赵县", label: "赵县" },
                                { id: 2, value: "赵县", label: "赵县" },
                            ],
                        },
                    ],
                },
            ],
            ruleForm: {
                name: "",
                tel: "",
                add: [
                    {
                        pro: "",
                        city: "",
                        str: "",
                    },
                ],
                moreadd: "",
            },
            rules: {
                name: [
                    { required: true, message: "请输入收货人姓名", trigger: "blur" },
                    { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" },
                ],
                tel: [
                    { required: true, message: "请输入手机号", trigger: "blur" },
                    { min: 11, max: 11, type: "number", message: "手机号格式不对", trigger: "blur" },
                ],
                add: [
                    { required: true, message: "请输入详细收货地址", trigger: "blur" },
                    { message: "请输入正确收货地址", trigger: "blur" },
                ],
                moreadd: [
                    { required: true, message: "请输入详细收货地址", trigger: "blur" },
                    { message: "请输入正确收货地址", trigger: "blur" },
                ],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        pchange(value) {
            console.log(value);
            this.pid = value;
            console.log(this.region[this.pid].children);
        },
        cchange(value) {
            this.cid = value;
            console.log(this.region[this.pid].children[this.sid].children);
        },
        schange(value) {
            this.sid = value;
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>
<style lang="scss" scoped>
.ml-20 {
    margin-left: 20px;
}
.mt-20 {
    margin-top: 20px;
}
.add {
    .add-title {
        height: 40px;
        color: rgb(71, 185, 4);
        font-size: 16px;
        line-height: 40px;
        padding-left: 20px;
        background-color: rgb(253, 252, 227);
    }
}
</style>
