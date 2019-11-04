import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainpage'
import User from '@/components/User'
import Tea from '@/components/Tea'
import Tab from '@/components/Tab'
import Stu from '@/components/Stu'
import Ser from '@/components/Ser'
import See from '@/components/See'
import Pub from '@/components/Pub'
import PassWord from '@/components/PassWord'
import Del from '@/components/Del'
import Add from '@/components/Add'
Vue.use(Router);

//配置路由
export default new Router({
    routes:[
        {//主页
            path:'/',
            name:'MainPage',
            component:MainPage,
            children:[
                {
                    path:'/User',
                    name:'User',
                    component:User
                },
                {
                    path:'/Tea',
                    name:'Tea',
                    component:Tea
                },
                {
                    path:'/Tab',
                    name:'Tab',
                    component:Tab
                },
                {
                    path:'/Stu',
                    name:'Stu',
                    component:Stu
                },
                {
                    path:'/Ser',
                    name:'Ser',
                    component:Ser
                },
                {
                    path:'/See',
                    name:'See',
                    component:See
                },
                {
                    path:'/Pub',
                    name:'Pub',
                    component:Pub
                },
                {
                    path:'/PassWord',
                    name:'PassWord',
                    component:PassWord
                },
                {
                    path:'/Del',
                    name:'Del',
                    component:Del
                },
                {
                    path:'/Add',
                    name:'Add',
                    component:Add
                }
            ]
        }
    ],
    mode:"history"
})