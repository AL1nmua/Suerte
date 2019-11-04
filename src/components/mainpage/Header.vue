<template>
    <div style="width:100%;background-color: #545c64; overflow: hidden;height:50px">
            <span class="demonstration" style="float:left;padding-top:15px;color:white;margin-left:1%">
                网站首页
            </span>
            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
</template>
