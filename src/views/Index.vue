<!--
 * @Author: your name
 * @Date: 2021-09-06 22:03:29
 * @LastEditTime: 2021-10-22 15:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\views\Index.vue
-->
<template>
  <div class="all">
    <div class="top">
      <div class="top-left">
        <div class="admin">
          <div class="head">
            <img src="../assets/img/log.jpg" alt="" />
            <div class="username">
              <h3>admin</h3>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="local">
            <p>上次登录时间:</p>
            <p>上次登录地点:</p>
          </div>
        </div>
        <div class="language">
          <h3>语言详情</h3>
          <div style="padding: 5px">
            <div>
              <p>Vue</p>
              <el-progress :percentage="71.3" :color="'#42B983'"></el-progress>
            </div>
            <div>
              <p>JavaScript</p>
              <el-progress :percentage="24.1" :color="'#F1E05A'"></el-progress>
            </div>
            <div>
              <p>CSS</p>
              <el-progress :percentage="13.7"></el-progress>
            </div>
            <div>
              <p>HTML</p>
              <el-progress :percentage="5.9" :color="'#F56C6C'"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="seeData">
          <div class="user">
            <i class="el-icon-user"></i>
            <div>
              <p>{{ user.num }}</p>
              <p>{{ user.title }}</p>
            </div>
          </div>
          <div class="system">
            <i class="el-icon-bell"></i>
            <div>
              <p>{{ system.num }}</p>
              <p>{{ system.title }}</p>
            </div>
          </div>
          <div class="number">
            <i class="el-icon-goods"></i>
            <div>
              <p>{{ number.num }}</p>
              <p>{{ number.title }}</p>
            </div>
          </div>
        </div>
        <div class="toDo">
          <div class="header">
            <span>待办事项</span>
            <el-input v-model="addTodo" placeholder="请输入内容"></el-input>
            <span @click="addBtn">添加</span>
          </div>
          <ul class="list">
            <li v-for="item in listData" :key="item.id">
              <el-checkbox label="item.id" class="done" v-model="item.status">{{
                item.thing
              }}</el-checkbox>
              <div class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                ></el-button>
                <el-button
                  type="primary"
                  icon="el-icon-delete"
                  size="mini"
                ></el-button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="left">
        <!-- <schart class="wrapper" canvasId="canvas" :options="options"></schart> -->
      </div>
      <div class="right">
        <!-- <schart class="wrapper" canvasId="canvas" :options="options"></schart> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Schart from "vue-schart";
export default {
  // components: {
  //   Schart,
  // },
  data() {
    return {
      user: {
        num: 1234,
        title: "用户访问量",
      },
      system: {
        num: 321,
        title: "系统消息",
      },
      number: {
        num: 5000,
        title: "数量",
      },
      listData: [
        { id: 1, thing: "修复10个bug", status: "todo" },
        { id: 2, thing: "修复10个bug", status: "todo" },
        { id: 3, thing: "修复10个bug", status: "todo" },
        { id: 4, thing: "修复10个bug", status: "do" },
        { id: 5, thing: "修复10个bug", status: "do" },
      ],
      addTodo: "",
      addInitId: 5,
    };
  },
  methods: {
    addBtn() {
      var id = this.addInitId++;
      this.addInitId = id;
      var thing = this.addTodo;
      this.listData.push({ id: id, thing: thing, status: "todo" });
      this.addTodo = "";
    },
  },
};
</script>

<style lang="scss" scope>
.all {
  .top {
    height: 500px;
    margin-bottom: 20px;
    display: flex;
    .top-left {
      width: 300px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .admin,
      .language {
        border-radius: 5px;
        box-shadow: 0 0 3px #ccc;
        background-color: #ffffff;
      }
      .admin {
        height: 235px;
        margin-bottom: 30px;
        .head {
          height: 150px;
          width: 80%;
          margin: 0 auto;
          border-bottom: 2px solid #ccc;
          display: flex;
          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 35px 0;
            margin-right: 30px;
          }
          .username {
            height: 80px;
            margin: 35px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: flex-start;
            h3 {
              text-align: left;
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        .local {
          width: 80%;
          margin: 0 auto;
          padding: 15px 0;
          p {
            text-align: left;
            margin-bottom: 5px;
          }
        }
      }
      .language {
        height: 235px;
        h3 {
          height: 50px;
          border-bottom: 1px solid #ccc;
          text-align: left;
          line-height: 50px;
          text-indent: 1em;
          margin-bottom: 10px;
        }
        div p {
          text-align: left;
          text-indent: 0.5em;
        }
      }
    }
    .top-right {
      flex: 1;
      border-radius: 5px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      .seeData {
        height: 23%;
        margin-bottom: 3%;
        display: flex;
        justify-content: space-between;
        .user,
        .system,
        .number {
          width: 31%;
          display: flex;
          background-color: white;
          border-radius: 5px;
          box-shadow: 0 0 5px #ccc;
          overflow: hidden;
          i {
            height: 100%;
            width: 40%;
            background-color: #409eff;
            font-size: 60px;
            color: white;
            line-height: 110px;
          }
          div {
            padding: 30px 0;
            flex: 1;
            p {
              text-align: center;
            }
            p:nth-of-type(1) {
              font-weight: 700;
              color: #409eff;
              font-size: 24px;
            }
            p:nth-of-type(2) {
              margin-top: 10px;
              font-size: 12px;
            }
          }
        }
        .system {
          i {
            background-color: lightgreen;
          }
        }
        .number {
          i {
            background-color: red;
          }
        }
      }
      .toDo {
        flex: 1;
        border: 1px solid red;
        .header {
          display: flex;
          padding: 0px 30px 0;
          span:nth-of-type(1) {
            width: 100px;
            line-height: 40px;
            text-align: left;
            margin-right: 40%;
          }
          .el-input {
            width: 35%;
            height: 40px;
            border-radius: 5px;
          }
          span:nth-of-type(2) {
            margin-left: 2%;
            color: lightskyblue;
            line-height: 40px;
          }
        }
        .list {
          margin-top: 20px;
        }
        .list li {
          border-bottom: 1px solid #ccc;
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
      }
    }
  }
  .down {
    height: 300px;
    border: 1px solid blue;
    display: flex;
    .left {
      border: 1px solid gold;
      width: 50%;
      height: 100%;
      .wrapper {
        width: 100%;
        height: 100%;
        #canvas {
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
    .right {
      border: 1px solid purple;
    }
  }
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  text-decoration: line-through;
  color: #ccc;
}
</style>