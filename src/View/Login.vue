<template>
    <div class="login">
        <!-- BEGIN LOGO -->
        <div class="logo">
            <a>
                <img src="../assets/logo-big-white.png" />
            </a>
        </div>
        <!-- END LOGO -->

        <!-- BEGIN LOGIN -->
        <div class="content">
            <!-- BEGIN LOGIN FORM -->
            <div class="login-form">
                <div class="alert alert-danger" v-bind:class="{'display-hide':errorMessage===null}" @click="closeMessage">
                    <button class="close" data-close="alert"></button>
                    <span> {{errorMessage}} </span>
                </div>

                <div class="form-title" v-bind:class="{'display-hide':errorMessage!==null}">
                    <span class="form-title">Welcome.</span>
                    <span class="form-subtitle">Please login.</span>
                </div>
                <div class="form-group">
                    <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
                    <input class="form-control form-control-solid placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="username" v-model="userName" />
                </div>
                <div class="form-group">
                    <input class="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password" v-model="password" v-on:keypress="nextInputFocus" />
                </div>
                <div class="form-actions">
                    <button type="submit" v-on:click="submit" class="btn red btn-block uppercase">Login</button>
                </div>

            </div>
            <!-- END LOGIN FORM -->
        </div>
        <div class="copyright"> 2013 © Dedtech. </div>
        <!-- END LOGIN -->
    </div>
</template>

<script>
"use strict";
import relayApi from "../Api/relayApi"; //转发服务器地址
import requestApi from "../Api/requestApi"; //ajax请求参数
import cookie from "../Api/cookie"; //记录登陆后Cookie的值
import router from "../router";

import $ from "jquery";
import "../assets/backstretch/jquery.backstretch";
import * as md5 from "../assets/md5encrypt";

export default {
  name: "Login",
  beforeCreate: function() {},
  //实例创建后执行此方法
  created: function() {
    console.log(this.$root.$children[0]);
    //关闭加载动画
    this.$root.$children[0].loading = false;
    //加载背景图
    $("body").backstretch(
      [
        "../static/bg/1.jpg",
        "../static/bg/2.jpg",
        "../static/bg/3.jpg",
        "../static/bg/4.jpg"
      ],
      {
        fade: 1000,
        duration: 4000
      }
    );
  },
  data() {
    return {
      userName: "manager",
      password: "",
      errorMessage: null
    };
  },
  methods: {
    nextInputFocus: function(event) {
      console.log(event);
      if (event.charCode === 13 && event.target.name === "password") {
        this.submit();
      }
    },
    submit: function() {
      let mythis = this;
      let paw = md5.hex_md5(mythis.password);
      requestApi.path = "/Token";
      requestApi.data =
        "grant_type=password&username=" + mythis.userName + "&password=" + paw;
      //访问
      $.ajax({
        url: relayApi,
        type: "POST",
        data: requestApi,
        success: function(response) {
          cookie.login = true;
          cookie.value = response.cookie;
          mythis.$parent.loading = true; //启动loading动画
          router.push("Platform");
          console.log(response);
        }
      }).fail(function(error) {
        console.log(error.responseText);
        let errObj = JSON.parse(error.responseText);
        mythis.errorMessage = errObj.error_description;
      });
    },
    closeMessage: function() {
      this.errorMessage = null;
    }
  },
  //实例被销毁时执行
  destroyed: function() {
    //销毁背景图
    $.backstretch("destroy");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Cubic Bezier Transition */
/***
Login page
***/

.login .logo {
  margin: 0 auto;
  margin-top: 100px;
  padding: 15px;
  text-align: center;
}

.login .content {
  width: 400px;
  margin: 40px auto 40px auto;
}

.login .form-title {
  margin-bottom: 20px;
}

.login .form-title {
  color: #edf4f8;
  font-size: 19px;
  font-weight: 400 !important;
}

.login .form-subtitle {
  color: #c9dce9;
  font-size: 17px;
  font-weight: 300 !important;
  padding-left: 10px;
}

.login .content h4 {
  color: #555;
}

.login .content .hint {
  color: #b7d1e2;
  padding: 0;
  font-size: 14px;
  margin: 15px 0 7px 0;
}

.login .content .login-form,
.login .content .forget-form {
  padding: 0px;
  margin: 0px;
}

.login .content .form-control {
  border: none;
  background-color: #6ba3c8;
  border: 1px solid #6ba3c8;
  height: 43px;
  color: #d9ecf9;
}
.login .content .form-control:focus,
.login .content .form-control:active {
  border: 1px solid #83b8db;
}
.login .content .form-control::-moz-placeholder {
  color: #d9ecf9;
  opacity: 1;
}
.login .content .form-control:-ms-input-placeholder {
  color: #d9ecf9;
}
.login .content .form-control::-webkit-input-placeholder {
  color: #d9ecf9;
}

.login .content select.form-control {
  padding-left: 9px;
  padding-right: 9px;
}

.login .content .forget-form {
  display: none;
}

.login .content .register-form {
  display: none;
}

.login .content .form-title {
  font-weight: 300;
  margin-bottom: 25px;
}

.login .content .form-actions {
  clear: both;
  border: 0px;
  padding: 0px 30px 25px 30px;
  margin-left: -30px;
  margin-right: -30px;
}

.form-actions .forget-password-block {
  padding-top: 7px;
}

.login-options {
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 50px;
  border-top: 1px solid #69a0c4;
  border-bottom: 1px solid #69a0c4;
}

.login-options h4 {
  margin-top: 8px;
  font-weight: 600;
  font-size: 15px;
  color: #b7d1e2 !important;
}

.login .forget-password {
  font-size: 14px;
}

.login-options .social-icons {
  float: right;
  padding-top: 3px;
}

.login-options .social-icons li a {
  border-radius: 15px 15px 15px 15px !important;
  -moz-border-radius: 15px 15px 15px 15px !important;
  -webkit-border-radius: 15px 15px 15px 15px !important;
}

.login .content .forget-form .form-actions {
  border: 0;
  margin-bottom: 0;
  padding-bottom: 20px;
}

.login .content .register-form .form-actions {
  border: 0;
  margin-bottom: 0;
  padding-bottom: 0px;
}

.login .content .form-actions .checkbox {
  margin-top: 8px;
  display: inline-block;
}

.login .content .form-actions .btn {
  margin-top: 1px;
}

.login .btn {
  font-weight: 600;
  padding: 10px 25px !important;
}

.login .content .forget-password {
  color: #d7eaf7;
  font-size: 15px;
}

.login .content .rememberme {
  margin-top: 8px;
}

.login .content .mt-checkbox {
  color: #c9dce9 !important;
}

.login .content .mt-checkbox > span:after {
  border-color: #c9dce9 !important;
}

.login .content .create-account {
  text-align: center;
  margin-top: 20px;
}

.login .content .create-account p a {
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
}

.login .content .create-account a {
  display: inline-block;
  margin-top: 5px;
}

/* footer copyright */
.login .copyright {
  text-align: center;
  margin: 10px auto 30px 0;
  padding: 10px;
  color: #c9dce9;
  font-size: 13px;
}

@media (max-width: 1400px) {
  .login .logo {
    margin-top: 100px;
  }
}

@media (max-width: 480px) {
  /***
  Login page
  ***/
  .login .logo {
    margin-top: 30px;
    padding: 0px;
  }
  .login .content {
    width: 245px;
  }
  .login .content h3 {
    font-size: 22px;
  }
  .login .checkbox {
    font-size: 13px;
  }
}
</style>

