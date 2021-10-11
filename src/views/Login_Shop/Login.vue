<template>
  <div class="login ">
    <header class="w1200">
      <img src="../../assets/img/index_search_logo.png" alt="" />
      <h2>欢迎登陆</h2>
    </header>
    <main>
      <img src="../../assets/img/login.10e7d594.png" alt="" />
      <div class="login-box">
        <h3>欢迎登陆</h3>
        <el-tabs v-model="activeName">
          <el-tab-pane label="密码登陆" name="first" class="h100p">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="phone">
                <el-input
                  placeholder="用户名"
                  prefix-icon="el-icon-user-solid"
                  v-model.trim="ruleForm.phone"
                ></el-input>
              </el-form-item>
              <el-form-item prop="pwd">
                <el-input
                  placeholder="密码"
                  prefix-icon="el-icon-info"
                  type="password"
                  v-model.trim="ruleForm.pwd"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!-- 验证码-->

              <div class="verification">
                <el-form-item prop="verification">
                  <el-input
                    style="width:200px"
                    placeholder="验证码"
                    prefix-icon="el-icon-thumb"
                    v-model.trim="ruleForm.verification"
                  ></el-input>
                </el-form-item>
                <div style="backgroundColor:red;height:38px;width:100px;" class="aa"></div>
              </div>

              <el-form-item>
                <el-button type="danger" @click="login">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="短信登陆" name="second" class="h100p">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item>
                <el-input
                  placeholder="手机号码"
                  prefix-icon="el-icon-phone"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="密码"
                  prefix-icon="el-icon-more"
                  type="password"
                  autocomplete="off"
                >
                  <el-button slot="append" class="code" @click="getCode"
                    >获取验证码</el-button
                  >
                </el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="danger">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <el-link type="primary" @click="goregis">立即注册</el-link>
      </div>
    </main>
    <footer>
      <p>
        Copy right 江苏紫色鹭网络科技有限公司 版权所有 苏ICP19062880号
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    var checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
    };
    var checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      }
    };
    var checkCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      }
    };
    var checkVerification = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      }
    };
    return {
      activeName: "first",
      ruleForm: {
        pwd: "",
        phone: "",
        tel: "",
        code: "",
        verification: ""
      },
      rules: {
        pwd: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: checkName, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        verification: [{ validator: checkVerification, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      if (this.phone != "") {
        let data = {
          phone: this.ruleForm.phone,
          password: this.ruleForm.pwd
        };
      }
    },
    // 跳转注册
    goregis() {
      this.$router.push("/Regis");
    }, // 获取验证码
    getCode() {
      let btn = document.querySelector(".code");
      let sp = document.querySelector(".code span");
      btn.disabled = "disabled";
      let i = 30;
      let time = setInterval(() => {
        if (i >= 1) {
          i--;
          console.log(sp);
          sp.innerHTML = "倒计时" + i + "秒";
        } else {
          btn.disabled = "true";
          sp.innerHTML = "获取验证码";
          clearInterval(time);
        }
      }, 1000);
    }
  }
};
</script>
<style></style>
<style lang="scss" scoped>
.el-button {
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
.h100p {
  height: 100%;
}
main {
  position: relative;
  img {
    width: 100%;
    vertical-align: middle;
    height: 505px;
  }

  .login-box {
    padding: 30px;
    width: 360px;
    height: 400px;
    position: absolute;
    top: 15%;
    right: 5%;
    background-color: #fff;
    h3 {
      padding-bottom: 10px;
      text-align: center;
    }
    .el-form-item__content {
      margin-left: 20px !important;
    }
  }
}
footer {
  p {
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }
}
.verification{
  display: flex;
  align-items: center;
  justify-content: space-around;
  .aa{
    margin-bottom: 25px;
    margin-left: 5px;
  }
  // background-color: red;
}
</style>
