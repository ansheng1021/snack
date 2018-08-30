import Vue from 'vue'
import Router from 'vue-router'
/* 管理员登录*/
import adminLogin from '../components/admin/login/login'
import forgetpassword from '../components/admin/login/forgetpassword'
import manageshop from '../components/admin/manger/manageshop/manageshop'
/*商家登录*/
import shoplogin from '../components/shop/login/login'
/*商家入驻*/
import admissionindex from '../components/shop/admission/admisssionindex'
/*入驻流程*/
import admissionflow from '../components/shop/admission/admissionflow'
import admissionflow1 from '../components/shop/admission/admissionflow1'
import admissionflow2 from '../components/shop/admission/admissionflow2'
import admissionflow3 from '../components/shop/admission/admissionflow3'
import admissionflow4 from '../components/shop/admission/admissionflow4'
/*审核*/
import header from '../components/generally/header'
import shsjgl from '../components/shop/sh/shsjgl'
import shgl from '../components/shop/sh/shgl'
import shgltg from '../components/shop/sh/shgltg'
import shglwtg from '../components/shop/sh/shglwtg'
/*数据中心*/
import shopdata from '../components/shop/data/shopdata'


//商家管理
//商家登录
import sjlogin from '../components/shop/login/login'
//商家分类

import sjheader from '../components/shop/customer/generl/sjheader'
import sjslide from '../components/shop/customer/generl/slide'
import sjclassfiy from '../components/shop/customer/sjclassfiy'
    //添加分类
import categoryadd from '../components/shop/customer/categoryadd'
//商品列表
import shoplist from '../components/shop/customer/shoplist'


import goodsadd from '../components/shop/customer/goodsadd'
import goodsaddone from '../components/shop/customer/goodsaddone'
import goodsaddsteps2 from '../components/shop/customer/goodsaddsteps2'
import goodsaddsteps3 from '../components/shop/customer/goodsaddsteps3'
import goodslistupdate from '../components/shop/customer/goodslistupdate'



import sjevaluate from '../components/shop/customer/sjevaluate'
   //商品信息

import shopinformation from '../components/shop/customer/storeinfomation/shopinformation'
//商家首页
import sjindex from '../components/shop/sjindex/sjindex'
//订单管理
import queryorder from '../components/admin/manger/ordermanage/queryorder'



//前台首页
import index from '../components/user/index/index'
import list from '../components/user/list/list'
import cateatyinformation from '../components/user/list/cateatyinfor/cateatyinformation'
import detail from '../components/user/list/detail/detail'
import shop from '../components/user/list/shop/shop'
import indexlogin from '../components/user/login/indexlogin'
//个人中心
import personcenter from '../components/user/person/personcenter'
import personinfor from '../components/user/person/personinfor/personinfor'
import myvip from '../components/user/person/myvip/myvip'
import coupon from '../components/user/person/coupon/coupon'
import goldcoin from '../components/user/person/goldcoin/goldcoin'
import wallet from '../components/user/person/wallet/wallet'
import cz from '../components/user/person/wallet/cz/cz'
import qrcz from '../components/user/person/wallet/qrcz/qrcz'
import aboutme from '../components/user/person/aboutme/aboutme'
import servercenter from '../components/user/person/servercenter/servercenter'
//帮助
import smserver from '../components/user/person/help/smserver/smserver'
import help from '../components/user/person/help/help'
//购物车
import shopcar from '../components/user/shopcar/shopcar'
import serverdetail from '../components/user/shopcar/serverdetail/serverdetail'
//订单
import order from '../components/user/order/order'
import fileorder from '../components/user/order/fileorder/fileorder'
import orderlist from '../components/user/order/orderlist/orderlist'
//地址
import selectaddress from '../components/user/address/selectaddress'
import newaddress from '../components/user/person/address/newaddress/newaddress'
import addaddress from '../components/user/person/address/addaddress/addaddress'
import commonaddress from '../components/user/person/address/commomaddress/commonaddress'
//搜索
import search from '../components/user/search/search'
//支付
import pay from '../components/user/pay/pay'
import successpay from '../components/user/pay/suceesspay/sucesspay'
Vue.use(Router)

export default new Router({
  routes: [
       {
        path:'/login',
        name:'login',
        component: adminLogin
      },

      {
          path:'/forgetpassword',
          name:'forgetpassword',
          component: forgetpassword
      },
      {
          path:'/shoplogin',
          name:'shoplogin',
          component: shoplogin
      },
      {
          path:'/admissionindex',
          name:'admissionindex',
          component: admissionindex
      },
      {
          path:'/admissionflow',
          name:'admissionflow',
          component: admissionflow,
          children:[
              {
                  path:'admissionflow1',
                  name:'admissionflow1',
                  component: admissionflow1,
              },
              {
                  path:'admissionflow2',
                  name:'admissionflow2',
                  component: admissionflow2,
              },
              {
                  path:'admissionflow3',
                  name:'admissionflow3',
                  component: admissionflow3,
              },
              {
                  path:'admissionflow4',
                  name:'admissionflow4',
                  component: admissionflow4,
              }
          ]

      },
      {
          path: '/header',
          name: 'header',
          component: header
      },
      //店铺管理
      {
       path:'/manageshop',
       name:'manageshop',
       component: manageshop
       },
        //审核管理
       {
        path:'/shsjgl',
        name:'shsjgl',
        component: shsjgl
        },
        {
             path:'/shgl',
             name:'shgl',
             component: shgl
         },
         {
              path:'/shgltg',
              name:'shgltg',
              component: shgltg
          },
          {
              path:'/shglwtg',
              name:'shglwtg',
              component: shglwtg
            },
                  //数据中心
            {
              path:'/shopdata',
              name:'shopdata',
              component: shopdata
            },
      //商家登录
      {
          path:'/sjlogin',
          name:'sjlogin',
          component: sjlogin
      },
      //商家管理
      {
          path:'/sjheader',
          name:'sjheader',
          component: sjheader,
      },
      {
          path:'/sjslide',
          name:'sjslide',
          component: sjslide,
      },
      {
          path:'/shoplist',
          name:'shoplist',
          component: shoplist
      },
      {
          path:'/categoryadd',
          name:'categoryadd',
          component: categoryadd
      },
        //分类列表
          {
              path:'/sjclassfiy',
              name:'sjclassfiy',
              component: sjclassfiy,

          },
          //商品列表
          {
              path:'/shoplist',
              name:'shoplist',
              component: shoplist
          },
          {
              path:'/goodslistupdate',
              name:'goodslistupdate',
              component: goodslistupdate
          },
          {
              path:'/goodsadd',
              name:'goodsadd',
              component: goodsadd,
              children:[
                  {
                      path:'/goodsaddone',
                      name:'goodsaddone',
                      component: goodsaddone
                  },
                  {
                      path:'/goodsaddsteps2',
                      name:'goodsaddsteps2',
                      component: goodsaddsteps2
                  },
                  {
                      path:'/goodsaddsteps3',
                      name:'goodsaddsteps3',
                      component: goodsaddsteps3
                  }

              ]
          },
          //评价管理
          {
              path:'/sjevaluate',
              name:'sjevaluate',
              component: sjevaluate
          },
      //店铺首页
      {
          path:'/sjindex',
          name:'sjindex',
          component: sjindex
      },
      //商品信息管理
      {
          path:'/shopinformation',
          name:'shopinformation',
          component:shopinformation
      },
     //订单管理
      {
          path:'/queryorder',
          name:'queryorder',
          component:queryorder
      },

      /*前台首页*/
      {
          path:'/',
          name:'index',
          component:index
      },
      {
          path:'/list',
          name:'list',
          component:list
      },
      //分类信息
      {
          path:'/cateatyinformation',
          name:'cateatyinformation',
          component:cateatyinformation
      },
      {
          path:'/detail',
          name:'detail',
          component:detail
      },
      {
          path:'/shop',
          name:'shop',
          component:shop
      },
      {
          path:'/indexlogin',
          name:'indexlogin',
          component:indexlogin
      },
      //个人中心
      {
          path:'/personcenter',
          name:'personcenter',
          component:personcenter
      },
      {
          path:'/personinfor',
          name:'personinfor',
          component:personinfor
      },
      {
          path:'/personinfor',
          name:'personinfor',
          component:personinfor
      },
      {
          path:'/myvip',
          name:'myvip',
          component:myvip
      },
      {
          path:'/coupon',
          name:'coupon',
          component:coupon
      },
      {
          path:'/goldcoin',
          name:'goldcoin',
          component:goldcoin
      },
      {
          path:'/wallet',
          name:'wallet',
          component:wallet
      },
      {
          path:'/help',
          name:'help',
          component:help
      },
      {
          path:'/smserver',
          name:'smserver',
          component:smserver
      },
      {
          path:'/aboutme',
          name:'aboutme',
          component:aboutme
      },
      {
          path:'/servercenter',
          name:'servercenter',
          component:servercenter
      },
      //订单
      {
          path:'/order',
          name:'order',
          component:order
      },
      {
          path:'/orderlist',
          name:'orderlist',
          component:orderlist
      },
      {
          path:'/fileorder',
          name:'fileorder',
          component:fileorder
      },
      //支付
      {
          path:'/pay',
          name:'pay',
          component:pay
      },
      {
          path: '/successpay',
          name: 'successpay',
          component: successpay
      },
      //地址
      {
          path:'/commonaddress',
          name:'commonaddress',
          component:commonaddress
      },
      {
          path:'/selectaddress',
          name:'selectaddress',
          component:selectaddress
      },
      {
          path:'/cz',
          name:'cz',
          component:cz

      },
      {
          path:'/qrcz',
          name:'qrcz',
          component:qrcz

      },
      {
          path:'/addaddress',
          name:'addaddress',
          component:addaddress
      },
      {
          path:'/newaddress',
          name:'newaddress',
          component:newaddress
      },
      //搜索
      {
          path:'/search',
          name:'search',
          component:search
      },
      //购物车
      {
          path:'/shopcar',
          name:'shopcar',
          component:shopcar
      },
      {
          path:'/serverdetail',
          name:'serverdetail',
          component:serverdetail
      }

      ]
})

