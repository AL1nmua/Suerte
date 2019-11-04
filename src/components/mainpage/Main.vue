<template>
    <div style="margin-top:5px" >
            <el-row  gutter="10" >
                <el-col :span="3">
                    <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                     style="min-height:900px"
                     router :default-active="$route.path">
                    <el-menu-item index="/">
                        <template slot="title">
                            <i class="el-icon-s-home"></i>
                            <span>主界面</span>
                        </template>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-custom"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">个人信息管理</template>
                            <el-menu-item index="/User">查看个人信息</el-menu-item>
                            <el-menu-item index="/PassWord">修改密码</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">教务信息管理</template>
                            <el-menu-item index="/Tea">教师管理</el-menu-item>
                            <el-menu-item index="/Stu">学生管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>实验室管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/Add">新增实验室</el-menu-item>
                            <el-menu-item index="/See">查看实验室</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-s-order"></i>
                            <span>预约信息管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/Tab">排期表</el-menu-item>
                            <el-menu-item index="/Ser">高级搜索</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-edit-outline"></i>
                            <span>公告管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/Pub">发布公告</el-menu-item>
                            <el-menu-item index="/Del">删除公告</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-col>
                <el-col span=21>
                  <div style="margin-top:20px">
                    <router-view></router-view>
                  </div>
                </el-col>
            </el-row>
        </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }
  }
</script>