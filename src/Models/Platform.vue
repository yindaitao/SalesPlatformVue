<template>
    <div class="page-wrapper">
        <!-- BEGIN HEADER -->
        <div class="page-header navbar navbar-fixed-top">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">
                <!-- BEGIN LOGO -->
                <div class="page-logo">
                    <a href="index.html">
                        <img src="../assets/logo.png" alt="logo" class="logo-default" /> 
                    </a>
                    <div class="menu-toggler sidebar-toggler">
                        <span></span>
                    </div>
                </div>
                <!-- END LOGO -->
                <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                    <span></span>
                </a>
                <!-- END RESPONSIVE MENU TOGGLER -->
                <TopbarMenu/>
            </div>
            <!-- END HEADER INNER -->
        </div>
        <!-- END HEADER -->
        
        <!-- BEGIN HEADER & CONTENT DIVIDER -->
        <div class="clearfix"> </div>
        <!-- END HEADER & CONTENT DIVIDER -->
        <!-- BEGIN CONTAINER -->
        <div class="page-container">
            <!-- BEGIN SIDEBAR -->
            <div class="page-sidebar-wrapper">
                <!-- BEGIN SIDEBAR -->
                <SidebarMenu/>
                <!-- END SIDEBAR -->
            </div>
            <!-- END SIDEBAR -->
            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <router-view></router-view>
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->
        </div>
        <!-- END CONTAINER -->
        
        <!-- BEGIN FOOTER -->
        <div class="page-footer">
            <div class="page-footer-inner"> 2016 &copy; Dedtech
            </div>
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
        </div>
        <!-- END FOOTER -->
    </div>
</template>

<script>
//css
import "../assets/css/components.min.css";
import "../assets/css/layout.min.css";
import "../assets/css/themes/darkblue.min.css";
import "../assets/css/custom.min.css";

//jquery
import $ from "jquery";

//platform 布局及操作事件
import App from "../assets/scripts/app";
import Layout from "../assets/scripts/layout";
import Demo from "../assets/scripts/demo";
import QuickSidebar from "../assets/scripts/quick-sidebar";

//组件
import TopbarMenu from "../components/TopbarMenu";
import SidebarMenu from "../components/SidebarMenu";

export default {
  name: "Platform",
  //钩子，创建之前
  beforeCreate: function() {
    //添加Body样式
    $("body").addClass(
      "page-header-fixed page-sidebar-closed-hide-logo page-content-white"
    );
  },
  //组件
  components: {
    TopbarMenu,
    SidebarMenu
  },
  //正常运行的
  mounted: function() {
    App.init();

    if (App.isAngularJsApp() === false) {
      Layout.init();
    }

    if (App.isAngularJsApp() === false) {
      Demo.init(); // init metronic core componets
    }

    if (App.isAngularJsApp() === false) {
      QuickSidebar.init(); // init metronic core componets
    }
  },
  //实例被销毁时执行
  destroyed: function() {
    // $("body").css("background-color", "");
  }
};
</script>

