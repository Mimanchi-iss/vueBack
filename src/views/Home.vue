<!--
 * @Author: your name
 * @Date: 2021-09-04 23:42:49
 * @LastEditTime: 2021-10-13 17:11:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\views\Home.vue
-->
<template>
  <div class="box" @click="toggleLogOut">
    <el-container>
      <el-header>
        <div class="header-left">
          <div class="toggle el-icon-s-fold"></div>
          <h3>后台管理系统</h3>
        </div>
        <div class="header-right">
          <div class="full el-icon-rank"></div>
          <div class="ring el-icon-bell"></div>
          <div class="logout" @click="logBtn = !logBtn">
            <img src="../assets/img/log.jpg" alt="" />
            <p class="nickname">{{ nickname }}</p>
            <div class="trigon el-icon-caret-bottom"></div>
          </div>
        </div>
        <div class="logoutClick" v-show="logBtn">
          <i class="trigon-t el-icon-caret-top"></i>
          <ul>
            <li @click="cangKu">项目仓库</li>
            <li @click="logOut">退出登录</li>
          </ul>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="99"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu> -->
            <el-menu-item index="99" @click="goPage('index')">
              <i class="el-icon-s-home"></i>
              <span slot="title" to="/home/table">系统首页</span>
            </el-menu-item>
            <el-menu-item index="1" @click="goPage('table')">
              <i class="el-icon-menu"></i>
              <span slot="title" to="/home/table">基础表格</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goPage('tableSelect')">
              <i class="el-icon-files"></i>
              <span slot="title">table选项卡</span>
            </el-menu-item>
            <el-menu-item index="3" @click="goPage('echarts')">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">echarts图表</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goPage('drop')">
              <i class="el-icon-thumb"></i>
              <span slot="title">拖拽</span>
            </el-menu-item>
            <el-menu-item index="5" @click="goPage('tree')">
              <i class="el-icon-thumb"></i>
              <span slot="title">树结构</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '张三',
      logBtn: false
    };
  },
  methods: {
    toggleLogOut(e) {
      var btn = document.querySelector('.logout');
      if (btn) {
        if (!btn.contains(e.target)) {
          this.logBtn = false;
        }
      }
    },
    cangKu() {
      this.$message.warning('开发中,请等待...');
    },
    logOut() {
      sessionStorage.removeItem('login');
      this.$router.push('/login');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goPage(url) {
      console.log(url);
      this.$router.push(`/home/${url}`);
    }
  }
};
</script>

<style lang="scss" scope>
.el-header {
  background-color: #242f42;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  .header-left {
    display: flex;
    color: white;
    .toggle {
      width: 40px;
      height: 40px;
      margin: 10px auto;
      font-size: 30px;
      line-height: 40px;
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-left: 30px;
    }
  }
  .header-right {
    display: flex;
    margin-right: 20px;
    .full,
    .ring {
      width: 20px;
      height: 20px;
      font-weight: 700;
      padding: 10px;
      margin: 10px 0;
      font-size: 20px;
      margin-right: 10px;
      color: white;
      border-radius: 50%;
    }
    .full:hover,
    .ring:hover {
      background-color: rgba($color: white, $alpha: 0.3);
    }
    .full {
      transform: rotate(45deg);
    }
    .logout {
      /* width: 100px; */
      height: 40px;
      margin: 10px auto;
      display: flex;
      color: white;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
      .nickname {
        font-size: 18px;
        font-weight: 600;
        width: 50px;
        height: 30px;
        margin: 5px auto;
        line-height: 30px;
      }
      .trigon {
        margin: auto;
        font-size: 14px;
        width: 20px;
        height: 20px;
        color: pink;
        margin: 15px auto;
      }
    }
  }
  .logoutClick {
    /* display: none; */
    height: 80px;
    width: 80px;
    position: absolute;
    right: 10px;
    top: 50px;
    box-shadow: 0 0 5px #ccc;
    i {
      /* margin-bottom: -5px; */
      position: absolute;
      top: -25px;
      left: calc(50% - 18px);
      font-size: 36px;
      color: white;
    }
    ul {
      background-color: #fff;
      border-radius: 5px;
      height: 80px;
      margin-top: -1px;
      li {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li:nth-of-type(1) {
        border-bottom: 1px solid #ccc;
      }
      li:hover {
        background-color: #ccc;
        cursor: pointer;
      }
    }
  }
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 100%;
}

.el-main {
  background-color: #eaeaea;
  color: #333;
  text-align: center;
  line-height: 100%;
}

.box > .el-container {
  /* margin-bottom: 40px; */
  height: 100vh;
}
</style>
