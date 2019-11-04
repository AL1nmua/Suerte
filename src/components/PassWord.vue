<template>
    <div>
        <el-breadcrumb separator="/" style="font-size:16px">
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>个人信息管理</el-breadcrumb-item>
            <el-breadcrumb-item>修改密码</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-col span=4>
             <el-form class="user-account-key" ref="form" :model="form"  label-width="100px" :rules="rules">
                <el-form-item label="原密码" prop="prule" >
                    <el-input type="password" placeholder="请输入原密码" v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="prule" >
                    <el-input type="password" placeholder="请设置新密码" v-model="form.newPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="prule" >
                    <el-input type="password" placeholder="请确认新密码" v-model="form.newPassword2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">修改</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                    </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                password:'',
                newPassword:'',
                newPassword2:''
            },
            rules: {
                prule:[
                    { required: true, message: '密码不能为空'}
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('修改成功');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    
        
}
</script>