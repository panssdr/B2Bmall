<template>
  <div>
    <BuyerInfoHead></BuyerInfoHead>
    <div style="width: 90%;margin: 0px auto;">
      <p style="text-align: center;color: red">全部认证资料</p>
      <el-button type="success" style="margin-top: 20px" class="el-icon-circle-plus-outline" @click="addAD">添加认证资料</el-button>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="ill"
          label="说明">
        </el-table-column>
        <el-table-column
          prop="img"
          label="资料图片"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status"
          label="审核状态"
          width="100">
        </el-table-column>
      </el-table>
    </div>

<!--    添加认证资料弹窗-->
    <el-dialog title="添加认证资料" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
        <el-form-item label="资料说明" label-width="100px" prop="ill">
          <el-input v-model="form.ill" type="textarea" maxlength="30" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="资料上传" label-width="100px">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            ref="upload"
            :limit="1"
            :auto-upload="false"
            :file-list="fileList"
            list-type="picture">
            <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="closeDialog" type="danger">关闭窗口</el-button>
      <el-button type="primary" @click="save('form')">保存信息</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import BuyerInfoHead from '@/views/UserCenter/Buyer/BuyerInfoHead'
export default {
  name: 'AccreditationData',
  components: { BuyerInfoHead },
  data(){
    return{
      tableData:[{}],
      form:{
        ill:''
      },
      fileList:{},
      rules:{
        ill: [
          { required: true, message: '请填写资料说明', trigger: 'blur' }
        ],
      },
      dialogFormVisible:false
    }
  },
  methods:{
    //打开添加认证资料弹窗
    addAD(){
      this.dialogFormVisible=true;
      this.$refs['form'].resetFields();
    },
    //关闭弹窗
    closeDialog(){
      this.dialogFormVisible = false;
    },

    save(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
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
    //确定上传图片
    submitUpload(){
      this.$refs.upload.submit();
    }
  },
}
</script>

<style scoped>

</style>
