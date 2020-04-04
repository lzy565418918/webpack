// 完成计算功能

// 引用计算模块
import cal from "@@/js/cal";
// 引入css文件
import "@@/css/index";
// 引入less文件
import "@@/css/less.less";
// 引入scss文件
import "@@/css/cass.scss";
// 引入elementUI的字体文件
import "../node_modules/element-ui/lib/theme-chalk/index.css";
// 引入vue
import Vue from "vue";
// 引入App.vue
import App from "@/App";
// 得到所有的元素
var v1 = document.querySelector("#v1");
var v2 = document.querySelector("#v2");
var v3 = document.querySelector("#v3");
var sel = document.querySelector("#sel");
var btn = document.querySelector("#btn");

// ES6语法
let name = "jonyj";
let age = 38;
let obj = {
  name,
  age,
  sayhi() {
    console.log(this.name);
  }
};
obj.sayhi();

// 给按钮添加点击事件
btn.onclick = function() {
  // 得到两个输入框中的内容
  var val1 = +v1.value;
  var val2 = +v2.value;
  // 计算
  switch (sel.value) {
    case "0":
      v3.value = cal.jia(val1, val2);
      break;
    case "1":
      v3.value = cal.jian(val1, val2);
      break;
    case "2":
      v3.value = cal.cheng(val1, val2);
      break;
    case "3":
      throw new Error();
      v3.value = cal.chu(val1, val2);
      break;
    default:
      break;
  }
};

// 创建Vue势力
new Vue({
  el: "#app",
  render: h => h(App)
});
