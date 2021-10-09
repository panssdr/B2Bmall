<template>
    <div class="w890">
        <div class="title">
            <p>
                <span>在线留言</span>
            </p>
        </div>
        <div class="msg">
            <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                <el-form-item label="您的姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="tel">
                    <el-input v-model="ruleForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="活动形式" prop="msg">
                    <el-input type="textarea" v-model="ruleForm.msg"> </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即创建</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        ruleForm: {
                name: "",
                tel: '',
                msg: "",
            },
        rules: {
                name: [
                    { required: true, message: "请输入姓名", trigger: "blur" },
                    { min: 3, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
                ],
                tel: [{ required: true, message: "请输入联系方式", trigger: "blur" }],
                msg: [{ required: true, message: "请输入留言", trigger: "blur" }],
            },
      };
    },
    
};
</script>
<style lang="scss" scoped>
.title {
    p {
        border-bottom: 3px solid #2d82ff;
        span {
            display: inline-block;
            padding: 10px 20px;
            font-size: 14px;
            color: #fff;
            background-color: #2d82ff;
        }
    }
}
.msg {
    margin-top: 20px;
}
</style>
