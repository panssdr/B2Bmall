<template>
  <div>
    <header class="w1200">
      <img src="../../assets/img/index_search_logo.png" alt="" />
      <h2>欢迎注册</h2>
    </header>
    <el-card shadow="hover" class="body">
      <div slot="header" class="clearfix">
        <el-button type="text">
          <el-page-header @back="goLogin" content="详情页面" title="返回登陆">
          </el-page-header>
        </el-button>
      </div>
      <div class="regis-main">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
        </el-steps>
        <div v-if="active == 0" class="regis-box">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            style="width:400px"
            class="demo-ruleForm"
          >
            <el-form-item label="手机号" prop="tel">
              <el-input
                type="tel"
                v-model="ruleForm.tel"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item  label="验证码" prop="code">
              <div class="el-captcha"> <el-input  style="width:150px"  type="code" v-model="ruleForm.code" autocomplete="off">
              </el-input> <img src="/api/captcha" onclick="this.src='/api/captcha?d='+new Date()*1" />看不清</div>

            </el-form-item>

            <el-form-item label="">
              <el-checkbox-group v-model="ruleForm.agree">
                <el-checkbox
                  label="创建网站账号的同时，我同意遵守"
                  name="agree"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="">
              <el-link target="_blank">《紫色鹭网服务条款》</el-link>
            </el-form-item>
          </el-form>
          <el-button
          type="primary"
          style="margin: 0 auto;width:480px;"
          @click="next"
          class="w100p"
          >下一步</el-button
        >
        </div>
        <div v-if="active == 1" class="regis-box">
          <el-form
           style="width:400px"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="active == 2" class="regis-box">
          <h2>恭喜你完成注册!!</h2>
        </div>

      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Regis",
  data() {
    var checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        callback();
      }
    };
    var checkCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      active: 0,
      ruleForm: {
        pass: "",
        checkPass: "",
        agree: false,
        tel: "",
        code: ""
      },
      rules: {
        tel: [{ validator: checkTel, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/Login");
    }, // 下一步
    next() {
      if (this.active++ > 1) this.active = 0;
    },
    // 提交页面
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取验证码
    Catpcha() {
      axios.get("/api/captcha").then(res => res.data)
    }
  }
};
</script>
<style lang="scss" scoped>
.w100p {
  width: 100%;
}
header {
  height: 151px;
  display: flex;
  line-height: 151px;
  h2 {
    &::before {
      content: "|";
      margin-right: 20px;
      font-weight: 200;
      color: #999;
    }
  }
}
.body {
  width: 80%;
  margin: 0 auto;

}
.regis-main {
  height: 100%;
  .regis-box {
    width: 60%;
    margin: 0 auto;
    height: 400px;
    padding-top: 80px;
    h2 {
      text-align: center;
      padding-top: 120px;
    }
  }
}
.el-captcha{
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    height: 40px;

  flex: 1;
  }
}
</style>


