(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213365"],{ac5b:function(e,a,s){"use strict";s.r(a);var t=s("7a23"),o={class:"container-fluid login vh-100"},c={class:"container"},n={class:"col-8 col-lg-5 mx-auto login-form text-light p-4"},r=Object(t["g"])("h2",{class:"text-center"},"後台登入 Login",-1),l={class:"mb-3"},i=Object(t["g"])("label",{for:"email",class:"form-label"},"帳號",-1),d={class:"mb-3"},u=Object(t["g"])("label",{for:"password",class:"form-label"},"密碼",-1),m=Object(t["g"])("div",{class:"d-flex justify-content-end"},[Object(t["g"])("button",{type:"submit",class:"btn btn-secondary"},"登入")],-1);function b(e,a,s,b,p,f){var g=Object(t["x"])("Field"),j=Object(t["x"])("error-message"),O=Object(t["x"])("Form");return Object(t["s"])(),Object(t["d"])("div",o,[Object(t["g"])("div",c,[Object(t["g"])("div",n,[r,Object(t["g"])(O,{onSubmit:f.goTopAdmin},{default:Object(t["H"])((function(e){var s=e.errors;return[Object(t["g"])("div",l,[i,Object(t["g"])(g,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":s["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:p.user.username,"onUpdate:modelValue":a[1]||(a[1]=function(e){return p.user.username=e})},null,8,["class","modelValue"]),Object(t["g"])(j,{name:"email",class:"invalid-feedback"})]),Object(t["g"])("div",d,[u,Object(t["g"])(g,{id:"password",name:"password",type:"password",class:["form-control",{"is-invalid":s["password"]}],placeholder:"請輸入密碼",rules:"required",modelValue:p.user.password,"onUpdate:modelValue":a[2]||(a[2]=function(e){return p.user.password=e})},null,8,["class","modelValue"]),Object(t["g"])(j,{name:"password",class:"invalid-feedback"})]),m]})),_:1},8,["onSubmit"])])])])}s("99af");var p={data:function(){return{user:{username:"",password:""}}},methods:{goTopAdmin:function(){var e=this,a="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.$http.post(a,this.user).then((function(a){if(a.data.success){var s=a.data.token,t=a.data.expired;document.cookie="MyToken=".concat(s,"; expires=").concat(new Date(t)),alert("登入成功～歡迎使用！"),e.$router.push("/admin/products")}else alert("登入失敗！請確認帳號密碼"),e.user.username="",e.user.password=""})).catch((function(e){console.log(e)}))}}};p.render=b;a["default"]=p}}]);
//# sourceMappingURL=chunk-2d213365.f5d55625.js.map