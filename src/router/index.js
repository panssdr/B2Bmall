import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login_Shop/Login.vue";
Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import BuyerInfo from '@/views/UserCenter/Buyer/BuyerInfo'
import AccreditationData from '@/views/UserCenter/Buyer/AccreditationData'
import Address from '@/views/UserCenter/Buyer/Address'
import ChangePwd from '@/views/UserCenter/Buyer/ChangePwd'
import MyDemand from '@/views/UserCenter/Buyer/MyDemand'
import Quote from '@/views/UserCenter/Buyer/Quote'
import MyOrder from '@/views/UserCenter/Buyer/MyOrder'
import Contract from '@/views/UserCenter/Buyer/Contract'
import PayDeposit from '@/views/UserCenter/Buyer/PayDeposit'
import Admin from '@/views/admin/Admin'
import Customer from '@/views/admin/Customer'
import RegisterCustomer from '@/views/admin/RegisterCustomer'
import PurchaseIntention from '@/views/admin/PurchaseIntention'
import AllPurchaseIntention from '@/views/admin/AllPurchaseIntention'
import AddDemand from '@/views/admin/AddDemand'
import DemandManage from '@/views/admin/DemandManage'
import RFQManage from '@/views/admin/RFQManage'
import PublishedQuotes from '@/views/admin/PublishedQuotes'
import ConfirmedQuotes from '@/views/admin/ConfirmedQuotes'
import AlreadyConfirmedQuotes from '@/views/admin/AlreadyConfirmedQuotes'
import AllQuotesInfo from '@/views/admin/AllQuotesInfo'
import InquiryAnalysis from '@/views/admin/InquiryAnalysis'
import InquiryManagement from '@/views/admin/InquiryManagement'
import Quotation from '@/views/UserCenter/Seller/Quotation'
import RFQAndQuotation from '@/views/admin/RFQAndQuotation'
import SecondRAQ from '@/views/admin/SecondRAQ'
import BuildContract from '@/views/admin/BuildContract'
import ReviewContract from '@/views/admin/ReviewContract'
import Collection from '@/views/admin/Collection'
import CollectionManage from '@/views/admin/CollectionManage'
// import { resolve } from "core-js/fn/promise";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    // component: Layout,
    redirect: "/Home",
    // children: [
    //   {
    //     path: "Home",
    //     name: "Home",
    //     component: Home,
    //     // meta: { title: "Dashboard", icon: "dashboard" }
    //   }
    // // ]
  },
  { path:"/admin",
    component:Admin,
    // redirect:"/dashboard/index",
    // children:[
    //   {
    //     path:"index",
    //     name:"index",
    //     component:()=>import("@/views/dashboard/index.vue"),
    //     meta:{title:'Dashboard',icon:"dashboard"},
    //   }
    // ]
    children: [
      {
        path: "reCus",
        name: "RegisterCustomer",
        component: RegisterCustomer,
        meta: { title: "注册客户"}
      },
      {
        path: "customer",
        name: "Customer",
        component: Customer,
        meta: { title: "客户管理"}
      },
      {
        path: "PurInt",
        name: "PurchaseIntention",
        component: PurchaseIntention,
        meta: { title: "购买意向"}
      },
      {
        path: "AllPurInt",
        name: "AllPurchaseIntention",
        component: AllPurchaseIntention,
        meta: { title: "全部购买意向"}
      },
      {
        path: "AddDM",
        name: "AddDemand",
        component: AddDemand,
        meta: { title: "新建需求"}
      },
      {
        path: "DeMan",
        name: "DemandManage",
        component: DemandManage,
        meta: { title: "需求管理"}
      },
      {
        path: "RM",
        name: "RFQManage",
        component: RFQManage,
        meta: { title: "询价管理"}
      },
      {
        path: "PQ",
        name: "PublishedQuotes",
        component: PublishedQuotes,
        meta: { title: "待发布报价"}
      },
      {
        path: "CQ",
        name: "ConfirmedQuotes",
        component: ConfirmedQuotes,
        meta: { title: "待确认报价"}
      },
      {
        path: "ACQ",
        name: "AlreadyConfirmedQuotes",
        component: AlreadyConfirmedQuotes,
        meta: { title: "已确认报价"}
      },
      {
        path: "AQI",
        name: "AllQuotesInfo",
        component: AllQuotesInfo,
        meta: { title: "历史报价信息"}
      },
      {
        path: "IA",
        name: "InquiryAnalysis",
        component: InquiryAnalysis,
        meta: { title: "询价分析"}
      },
      {
        path: "IM",
        name: "InquiryManagement",
        component: InquiryManagement,
        meta: { title: "询价管理"}
      },
      {
        path: "RAQ",
        name: "RFQAndQuotation",
        component: RFQAndQuotation,
        meta: { title: "询价报价审核"}
      },
      {
        path: "SRAQ",
        name: "SecondRAQ",
        component: SecondRAQ,
        meta: { title: "主管审核报价"}
      },
      {
        path: "BC",
        name: "BuildContract",
        component: BuildContract,
        meta: { title: "待建合同订单"}
      },
      {
        path: "RC",
        name: "ReviewContract",
        component: ReviewContract,
        meta: { title: "主管审核订单合同"}
      },
      {
        path: "Collection",
        name: "Collection",
        component: Collection,
        meta: { title: "财务收款确认"}
      },
      {
        path: "CM",
        name: "CollectionManage",
        component: CollectionManage,
        meta: { title: "财务收款确认管理"}
      },
    ]
  },
  {
    path: "/example",

    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "Table", icon: "table" }
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "Tree", icon: "tree" }
      }
    ]
  },

  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "Form", icon: "form" }
      }
    ]
  },

  {
    path: "/nested",
    // hidden: true,
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Menu2",
        meta: { title: "menu2" }
      }
    ]
  },

  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://panjiachen.github.io/vue-element-admin-site/#/",
        meta: { title: "External Link", icon: "link" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
  // 前端页面
  {
    path: "/Home",
    hidden: true,
    name: "Home",
    component: Home,
    meta: {
      title: " 首页"
    }
  },
  {
    path: "/Logins",
    name: "Logins",
    hidden: true,
    component: Login,
    meta: {
      title: " 登陆"
    }
  },
  {
    path: "/UserCenter",
    name: "UserCenter",
    redirect: "/UserCenter/BuyerInfo",
    hidden: true,
    component: resolve => require(["../views/UserCenter/UserCenter.vue"], resolve),
    meta: {
      title: " 用户中心"
    },
    children: [
      {
        path: "MyDemand",
        component:MyDemand,
        name: "MyDemand",
        meta: { title: " 我的需求列表" }
      },
      {
        path: "Quote",
        component:Quote,
        name: "Quote",
        meta: { title: " 报价列表" }
      },
      {
        path: "MyOrder",
        component:MyOrder,
        name: "MyOrder",
        meta: { title: " 我的订单" }
      },
      {
        path: "Contract",
        component:Contract,
        name: "Contract",
        meta: { title: " 合同列表" }
      },
      {
        path: "PayDeposit",
        component:PayDeposit,
        name: "PayDeposit",
        meta: { title: " 支付定金" }
      },
      {
        path: "BuyerInfo",
        component:BuyerInfo,
        name: "BuyerInfo",
        meta: { title: " 买家基本信息" }
      },
      {
        path: "AD",
        component:AccreditationData,
        name: "AccreditationData",
        meta: { title: " 认证资料" }
      },
      {
        path: "Address",
        component:Address,
        name: "Address",
        meta: { title: " 收货地址" }
      },
      {
        path: "ChangePwd",
        component:ChangePwd,
        name: "ChangePwd",
        meta: { title: " 修改密码" }
      },
      {
        path: "Quotation",
        component:Quotation,
        name: "Quotation",
        meta: { title: " 报价单列表" }
      },
      ]
  },
  {
    path: "/Regis",
    name: "Regis",
    hidden: true,
    component: resolve => require(["../views/Login_Shop/Regis.vue"], resolve),
    meta: {
      title: " 注册"
    }
  },
  {
    path: "/Demand",
    name: "AllDemand",
    hidden: true,
    component: resolve => require(["../views/Demand/AllDemand.vue"], resolve),
    meta: {
      title: " 所有需求信息"
    }
  },
  {
    path: "/Provide",
    name: "AllProvide",
    hidden: true,
    component: resolve => require(["../views/Provide/AllProvide.vue"], resolve),
    meta: {
      title: " 所有供应信息"
    }
  },
  {
    path: "/Product",
    name: "Product",
    hidden: true,
    component: resolve => require(["../views/Product/Product.vue"], resolve),
    meta: {
      title: " 产品"
    }
  },
  {
    path: "/Store",
    name: "Store",
    hidden: true,
    component: resolve => require(["../views/Store/Store.vue"], resolve),
    meta: {
      title: " 店铺"
    }
  },
  {
    path: "/ShoppingCar",
    name: "ShoppingCar",
    hidden: true,
    component: resolve => require(["../views/Mine/Mine.vue"], resolve),
    meta: {
      title: " 购物车"
    }
  },
  {
    path: "/StoreInfo",
    name: "StoreInfo",
    hidden: true,
    component: resolve => require(["../views/Store/StoreInfo.vue"], resolve),
    meta: {
      title: " 店铺"
    }
  },
  {
    path: "/ProductDetail",
    name: "ProductDetail",
    hidden: true,
    component: resolve =>
      require(["../views/ProductDetail/ProductDetail.vue"], resolve),
    meta: {
      title: " 商品详情页"
    }
  },
  {
    path: "/MyCollect",
    name: "MyCollect",
    hidden: true,
    component: resolve => require(["../views/Mine/MyCollect.vue"], resolve),
    meta: {
      title: " 店铺"
    }
  },
  {
    path: "/Mine",
    name: "Mine",
    hidden: true,
    component: resolve => require(["../views/Mine/Mine.vue"], resolve),
    meta: {
      title: " 个人中心"
    },
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
