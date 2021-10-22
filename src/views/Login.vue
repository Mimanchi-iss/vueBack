<!--
 * @Author: your name
 * @Date: 2021-09-04 21:13:12
 * @LastEditTime: 2021-10-13 14:24:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\views\Login.vue
-->
<template>
  <div class="bg-image">
    <div class="login-form">
      <h3>后台管理系统</h3>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { getLogin } from "../api/getData"
// import { getList } from "../api/getData"
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await axios.post(
            "http://localhost:8080/login",
            this.ruleForm
          );
          console.log(result);
          if (result.data.status === 0) {
            this.$store.commit("setLogin", result.data.token);
            this.$router.push("/home");
            this.$message.success("登录成功");
          } else {
            this.$message.error("账号或密码错误,请重试");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scope>
.bg-image {
  height: 100vh;
  background-image: url(../assets/bg.jpeg);
  background-size: 100% 100%;
  .login-form {
    width: 30%;
    height: 300px;
    position: absolute;
    top: 30%;
    left: 45%;
    margin-top: -100px;
    margin-left: -40%;
    overflow: hidden;
    z-index: 2;
    padding: 50px;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    border-radius: 10px;
    h3 {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin: -10px 0 30px;
    }
    .btns {
      padding-left: 40px;
    }
  }
  .login-form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(255, 255, 255, .8); */
    filter: url(../assets/bg.jpeg#blur);
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -ms-filter: blur(15px);
    -o-filter: blur(15px);
    filter: blur(15px);
    z-index: -3;
    margin: -30px;
    background: url("../assets/bg.jpeg"), rgba(255, 255, 255, 0.25);
    background-blend-mode: screen;
    background-attachment: fixed;
    background-position: center top;
    background-size: 100% 100%;
  }
  .el-input {
    width: 80%;
  }
}
</style>
