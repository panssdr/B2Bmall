<template>
  <div style="width: 90%;margin: 0 auto;margin-top: 30px;">
    <div class="myDemand_header" style="margin-bottom: 20px">
        <el-input placeholder="请输入商品名称"
                  style="width: 300px;margin-left: 20px"
                  v-model="search"
                  type="text"
                  clearable>
          <template #append>
            <el-button icon="el-icon-search" @click="forSearch"></el-button>
          </template>
        </el-input>
      <el-button type="success" style="float: right;margin-right: 10px" class="el-icon-circle-plus-outline" @click="addDemand">创建新的需求</el-button>
    </div>
    <hr>
    <br>
    <div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="编号" width="100"> </el-table-column>
        <el-table-column prop="product" label="商品名称"> </el-table-column>
        <el-table-column prop="price" label="价格" width="120"> </el-table-column>
        <el-table-column prop="number" label="数量" width="120"> </el-table-column>
        <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
        <el-table-column prop="status" label="需求状态" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template #default="scope">
            <el-button @click="detail(scope.row)" type="text" size="small">详细</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button @click="update(scope.row)" type="text" size="small">修改</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button @click="delete(scope.row)" type="text" size="small">删除</el-button>
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
    </div>
<!--添加新的需求弹窗-->
    <el-dialog title="创建新的需求" :visible.sync="dialogFormVisible1" width="80%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :inline="true" :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
          <el-form-item label="商品名称" label-width="100px" class="item">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="类别" label-width="100px" class="item">
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="商品规格" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="单价(元)" label-width="100px" prop="tel" class="item">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="数量" label-width="100px" class="item">
            <el-input v-model="form.number"></el-input>
          </el-form-item>
          <el-form-item label="单位" label-width="100px" prop="company" class="item">
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="商品描述" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="用途" label-width="100px" prop="companyTel" class="item">
            <el-input v-model="form.companyTel" type="textarea"></el-input>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="门幅(吋)" label-width="100px" class="item">
            <el-input v-model="form.type" ></el-input>
          </el-form-item>
          <el-form-item label="面料成分" label-width="100px" class="item">
            <el-input v-model="form.status" ></el-input>
          </el-form-item>
          <br/>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭窗口</el-button>
          <el-button type="primary" @click="save('form')">确定创建</el-button>
        </span>
      </template>
    </el-dialog>
<!--详细信息弹窗-->
    <el-dialog title="详细信息" :visible.sync="dialogFormVisible2" width="80%">
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
          <el-button @click="closeDialog2" type="danger">关闭窗口</el-button>
        </span>
      </template>
    </el-dialog>
    <!--修改弹窗-->
    <el-dialog title="修改需求" :visible.sync="dialogFormVisible3" width="80%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :inline="true" :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
          <el-form-item label="商品名称" label-width="100px" class="item">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="类别" label-width="100px" class="item">
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="商品规格" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="单价(元)" label-width="100px" prop="tel" class="item">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="数量" label-width="100px" class="item">
            <el-input v-model="form.number"></el-input>
          </el-form-item>
          <el-form-item label="单位" label-width="100px" prop="company" class="item">
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="商品描述" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="用途" label-width="100px" prop="companyTel" class="item">
            <el-input v-model="form.companyTel" type="textarea"></el-input>
          </el-form-item>
          <hr>
          <br>
          <el-form-item label="门幅(吋)" label-width="100px" class="item">
            <el-input v-model="form.type" ></el-input>
          </el-form-item>
          <el-form-item label="面料成分" label-width="100px" class="item">
            <el-input v-model="form.status" ></el-input>
          </el-form-item>
          <br/>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog3" type="danger">关闭窗口</el-button>
          <el-button type="primary" @click="save('form')">确定修改</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MyDemand',
  data() {
    return {
      tableData: [{}],
      dialogFormVisible1:false,
      dialogFormVisible2:false,
      dialogFormVisible3:false,
      form:{},
      options1:[{
        value: '选项1',
        label: '时装面料'
      }, {
        value: '选项2',
        label: '工装面料'
      }],
      value1:'',
      options2:[{
        value: '选项1',
        label: '米'
      }, {
        value: '选项2',
        label: '斤'
      }],
      value2:''
    }
  },
  methods:{
    addDemand(){
      this.dialogFormVisible1=true;
    },
    detail(){
      this.dialogFormVisible2=true;
    },
    update(){
      this.dialogFormVisible3=true;
    },
    //关闭弹窗
    closeDialog(){
      this.dialogFormVisible1 = false;
    },
    closeDialog2(){
      this.dialogFormVisible2 = false;
    },
    closeDialog3(){
      this.dialogFormVisible3 = false;
    },

    save(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          this.dialogFormVisible1 = false;
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.item:nth-child(2n){
  float: right;
}
</style>
