(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dee3f86"],{1843:function(e,t,o){"use strict";var n=o("7a23"),c={class:"modal fade",id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},a={class:"modal-dialog",role:"document"},i={class:"modal-content"},d=Object(n["createVNode"])("div",{class:"modal-header bg-primary text-white"},[Object(n["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除確認"),Object(n["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),s={class:"modal-body"},r={class:"modal-footer"},l=Object(n["createVNode"])("button",{class:"btn btn-secondary",type:"button","data-bs-dismiss":"modal"},"取消",-1);function u(e,t,o,u,b,p){return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])("div",a,[Object(n["createVNode"])("div",i,[d,Object(n["createVNode"])("div",s,"您確定要刪除 "+Object(n["toDisplayString"])(o.item.title)+" 嗎？",1),Object(n["createVNode"])("div",r,[l,Object(n["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(t){return e.$emit("confirm",o.item.id)})}," 確認 ")])])])],512)}var b=o("7c2b"),p=o.n(b),m={data:function(){return{modal:""}},props:["item"],mounted:function(){this.modal=new p.a(this.$refs.modal,{keyboard:!1})},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}}};m.render=u;t["a"]=m},"498a":function(e,t,o){"use strict";var n=o("23e7"),c=o("58a8").trim,a=o("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return c(this)}})},"4de4":function(e,t,o){"use strict";var n=o("23e7"),c=o("b727").filter,a=o("1dde"),i=a("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));o("b64b"),o("a4d3"),o("4de4"),o("e439"),o("159b"),o("dbb4");function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,o){var n=o("1d80"),c=o("5899"),a="["+c+"]",i=RegExp("^"+a+a+"*"),d=RegExp(a+a+"*$"),s=function(e){return function(t){var o=String(n(t));return 1&e&&(o=o.replace(i,"")),2&e&&(o=o.replace(d,"")),o}};e.exports={start:s(1),end:s(2),trim:s(3)}},c8d2:function(e,t,o){var n=o("d039"),c=o("5899"),a="​᠎";e.exports=function(e){return n((function(){return!!c[e]()||a[e]()!=a||c[e].name!==e}))}},d0a3:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c={class:"container-fluid"},a=Object(n["createVNode"])("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[Object(n["createVNode"])("h1",{class:"h3 mb-0 text-gray-800"},[Object(n["createVNode"])("i",{class:"fas fa-gift"}),Object(n["createTextVNode"])(" 折價券管理")])],-1),i={class:"row"},d={class:"col-lg-12"},s={class:"card shadow mb-4"},r=Object(n["createVNode"])("div",{class:"card-header py-3"},[Object(n["createVNode"])("h6",{class:"m-0 font-weight-bold text-primary"},"折價券列表")],-1),l={class:"card-body"},u={class:"table-responsive"},b={class:"table mt-4"},p=Object(n["createVNode"])("thead",null,[Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("th",{width:"30%"},"折價券名稱"),Object(n["createVNode"])("th",{width:"10%"},"折扣代碼"),Object(n["createVNode"])("th",{width:"10%",class:"text-end"},"折扣數"),Object(n["createVNode"])("th",{width:"20%",class:"text-center"},"到期日"),Object(n["createVNode"])("th",{width:"10%",class:"text-center"},"是否啟用"),Object(n["createVNode"])("th",{width:"10%",class:"text-center"},"編輯"),Object(n["createVNode"])("th",{width:"10%",class:"text-center"},"刪除")])],-1),m={class:"text-end"},h={class:"text-center"},f={class:"text-center"},O={class:"text-center"},j={class:"text-center"},g={class:"text-center"},V=Object(n["createTextVNode"])(" 目前有 "),N={id:"couponCount"},v=Object(n["createTextVNode"])(" 項折價券 ");function y(e,t,o,y,C,w){var x=Object(n["resolveComponent"])("loading"),k=Object(n["resolveComponent"])("pagination"),M=Object(n["resolveComponent"])("coupon-modal"),I=Object(n["resolveComponent"])("delete-modal");return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])(x,{active:C.isLoading},null,8,["active"]),a,Object(n["createVNode"])("div",i,[Object(n["createVNode"])("div",d,[Object(n["createVNode"])("div",s,[r,Object(n["createVNode"])("div",l,[Object(n["createVNode"])("button",{type:"button",class:"btn btn-sm btn-success",onClick:t[1]||(t[1]=function(e){return w.openModal("add")})}," 新增折價券 "),Object(n["createVNode"])("div",u,[Object(n["createVNode"])("table",b,[p,Object(n["createVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(C.couponList,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:e.id},[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.title),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.code),1),Object(n["createVNode"])("td",m,Object(n["toDisplayString"])(e.percent)+"% ",1),Object(n["createVNode"])("td",h,Object(n["toDisplayString"])(w.convertDatetime(e.due_date)),1),Object(n["createVNode"])("td",f,[Object(n["createVNode"])("span",{class:["badge pointer",e.is_enabled?"bg-success":"bg-secondary"],style:{"font-size":"1em"},onClick:function(t){return w.enableChange(e)}},Object(n["toDisplayString"])(e.is_enabled?"ON":"OFF"),11,["onClick"])]),Object(n["createVNode"])("td",O,[Object(n["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-success move",onClick:function(t){return w.openModal("update",e)}}," 編輯 ",8,["onClick"])]),Object(n["createVNode"])("td",j,[Object(n["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-danger move",onClick:function(t){return w.openModal("delete",e)}}," 刪除 ",8,["onClick"])])])})),128))])])]),Object(n["createVNode"])("div",g,[Object(n["createVNode"])("p",null,[V,Object(n["createVNode"])("span",N,Object(n["toDisplayString"])(C.couponList.length),1),v])]),Object(n["createVNode"])(k,{"page-info":C.pageInfo,onPageChange:w.getCoupon},null,8,["page-info","onPageChange"])])])])]),Object(n["createVNode"])(M,{coupon:C.tempCoupon,title:C.couponModalTitle,onModifyCoupon:w.modifyCoupon,ref:"couponModal"},null,8,["coupon","title","onModifyCoupon"]),Object(n["createVNode"])(I,{item:C.tempCoupon,onConfirm:w.deleteCoupon,ref:"deleteModal"},null,8,["item","onConfirm"])])}var C=o("5530"),w=(o("99af"),o("498a"),o("d529")),x={class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog"},M={class:"modal-content"},I={class:"modal-header bg-primary text-white"},T={class:"modal-title",id:"couponModalLabel"},_=Object(n["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),$={class:"modal-body"},D={class:"row"},L={class:"col-sm-12"},P={class:"mb-3"},S=Object(n["createVNode"])("label",{for:"name",class:"form-label"},[Object(n["createTextVNode"])(" 折價券標題"),Object(n["createVNode"])("span",{class:"text-red"}," *")],-1),B={class:"mb-3"},E=Object(n["createVNode"])("label",{for:"name",class:"form-label"},[Object(n["createTextVNode"])(" 折價券代碼"),Object(n["createVNode"])("span",{class:"text-red"}," *")],-1),F={class:"mb-3"},U=Object(n["createVNode"])("label",{for:"name",class:"form-label"},[Object(n["createTextVNode"])(" 折扣數"),Object(n["createVNode"])("span",{class:"text-red"}," *")],-1),J={class:"mb-3"},R=Object(n["createVNode"])("label",{for:"name",class:"form-label"},[Object(n["createTextVNode"])(" 到期日"),Object(n["createVNode"])("span",{class:"text-red"}," *")],-1),z={class:"mb-3 col-md-6"},A=Object(n["createVNode"])("div",{class:"mb-2"},"是否啟用",-1),H={class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},q=Object(n["createVNode"])("label",{class:"btn btn-outline-success",for:"is_enabled"},"ON",-1),G=Object(n["createVNode"])("label",{class:"btn btn-outline-secondary",for:"not_enable"},"OFF",-1),K={class:"modal-footer"},Q=Object(n["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 ",-1);function W(e,t,o,c,a,i){var d=Object(n["resolveComponent"])("v-date-picker");return Object(n["openBlock"])(),Object(n["createBlock"])("div",x,[Object(n["createVNode"])("div",k,[Object(n["createVNode"])("div",M,[Object(n["createVNode"])("div",I,[Object(n["createVNode"])("h5",T,Object(n["toDisplayString"])(o.title),1),_]),Object(n["createVNode"])("div",$,[Object(n["createVNode"])("div",D,[Object(n["createVNode"])("div",L,[Object(n["createVNode"])("div",P,[S,Object(n["withDirectives"])(Object(n["createVNode"])("input",{id:"name",type:"text",class:"form-control",placeholder:"請輸入折價券標題","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.couponInfo.title=e})},null,512),[[n["vModelText"],a.couponInfo.title]])]),Object(n["createVNode"])("div",B,[E,Object(n["withDirectives"])(Object(n["createVNode"])("input",{id:"name",type:"text",class:"form-control",placeholder:"請輸入折價券代碼","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.couponInfo.code=e})},null,512),[[n["vModelText"],a.couponInfo.code]])]),Object(n["createVNode"])("div",F,[U,Object(n["withDirectives"])(Object(n["createVNode"])("input",{id:"name",type:"number",class:"form-control",placeholder:"請輸入折扣數","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.couponInfo.percent=e}),max:"100",min:"0"},null,512),[[n["vModelText"],a.couponInfo.percent,void 0,{number:!0}]])]),Object(n["createVNode"])("div",J,[R,Object(n["createVNode"])(d,{"update-on-input":!1,placeholder:"請輸入到期日",modelValue:a.couponInfo.due_date,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.couponInfo.due_date=e}),"model-config":a.modelConfig,mode:"datetime"},{default:Object(n["withCtx"])((function(e){var t=e.inputValue,o=e.inputEvents;return[Object(n["createVNode"])("input",Object(n["mergeProps"])({id:"name",class:"form-control",placeholder:"請輸入到期日",value:t},Object(n["toHandlers"])(o)),null,16,["value"])]})),_:1},8,["modelValue","model-config"])]),Object(n["createVNode"])("div",z,[A,Object(n["createVNode"])("div",H,[Object(n["createVNode"])("input",{type:"radio",class:"btn-check",name:"btnradio",id:"is_enabled",autocomplete:"off",checked:a.couponInfo.is_enabled,onClick:t[5]||(t[5]=function(e){return a.couponInfo.is_enabled=!0})},null,8,["checked"]),q,Object(n["createVNode"])("input",{type:"radio",class:"btn-check",name:"btnradio",id:"not_enable",autocomplete:"off",checked:!a.couponInfo.is_enabled,onClick:t[6]||(t[6]=function(e){return a.couponInfo.is_enabled=!1})},null,8,["checked"]),G])])])])]),Object(n["createVNode"])("div",K,[Q,Object(n["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=function(t){return e.$emit("modify-coupon")})}," 送出 ")])])])],512)}var X=o("7c2b"),Y=o.n(X),Z={data:function(){return{modal:"",couponInfo:{},modelConfig:{type:"number"}}},props:{coupon:{type:Object,default:function(){return{}}},title:{type:String,default:function(){return""}}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},watch:{coupon:function(){this.couponInfo=this.coupon}},mounted:function(){this.modal=new Y.a(this.$refs.modal,{keyboard:!1})}};Z.render=W;var ee=Z,te=o("1843"),oe={data:function(){return{isLoading:!1,updateId:-1,couponList:[],tempCoupon:{},pageInfo:{total_pages:1,current_page:1,has_pre:!1,has_next:!1},couponModalTitle:"新增折價券"}},components:{pagination:w["a"],couponModal:ee,deleteModal:te["a"]},methods:{getCoupon:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("ethan","/admin/coupons?page=").concat(t)).then((function(t){t.data.success?(e.couponList=t.data.coupons,e.pageInfo=t.data.pagination):e.$moshaToast(t.data.message,{type:"danger",showIcon:!0,position:"bottom-right"}),e.isLoading=!1})).catch((function(e){console.log(e)}))},openModal:function(e,t){switch(e){case"add":case"update":t?(this.couponModalTitle="修改折價券",this.tempCoupon=Object(C["a"])({},t)):(this.updateId=-1,this.couponModalTitle="新增折價券",this.tempCoupon={title:"",code:"",percent:0,due_date:Date.now(),is_enabled:1}),this.$refs.couponModal.openModal();break;case"delete":this.tempCoupon=Object(C["a"])({},t),this.$refs.deleteModal.openModal();break;default:break}},modifyCoupon:function(){var e=this,t=0;if(""===this.tempCoupon.title&&(setTimeout((function(){e.$moshaToast("請輸入折價券標題",{type:"danger",showIcon:!0,position:"bottom-right"})}),1),t+=1),""===this.tempCoupon.code&&(setTimeout((function(){e.$moshaToast("請輸入折價券代碼",{type:"danger",showIcon:!0,position:"bottom-right"})}),1),t+=1),""===this.tempCoupon.due_date&&(setTimeout((function(){e.$moshaToast("請輸入到期日",{type:"danger",showIcon:!0,position:"bottom-right"})}),1),t+=1),""===this.tempCoupon.percent&&(setTimeout((function(){e.$moshaToast("請輸入折扣數",{type:"danger",showIcon:!0,position:"bottom-right"})}),1),t+=1),0===t){var o={data:{title:this.tempCoupon.title.trim(),code:this.tempCoupon.code.trim(),due_date:parseInt(this.tempCoupon.due_date,10)||0,percent:parseInt(this.tempCoupon.percent,10)||0,is_enabled:this.tempCoupon.is_enabled}};this.tempCoupon.id?this.editCoupon(this.tempCoupon.id,o,(function(){e.$refs.couponModal.hideModal()})):this.addCoupon(o,(function(){e.$refs.couponModal.hideModal()}))}},enableChange:function(e){var t={data:{title:e.title,code:e.code,due_date:e.due_date,percent:e.percent,is_enabled:1-e.is_enabled}};this.editCoupon(e.id,t)},addCoupon:function(e,t){var o=this;this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("ethan","/admin/coupon"),e).then((function(e){e.data.success?(o.$moshaToast(e.data.message,{type:"success",showIcon:!0,position:"bottom-right"}),o.getCoupon()):(o.$moshaToast(e.data.message,{type:"danger",showIcon:!0,position:"bottom-right"}),o.isLoading=!1),t&&t()})).catch((function(e){console.log(e)}))},editCoupon:function(e,t,o){var n=this;this.isLoading=!0,this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("ethan","/admin/coupon/").concat(e),t).then((function(e){e.data.success?(n.$moshaToast(e.data.message,{type:"success",showIcon:!0,position:"bottom-right"}),n.getCoupon()):(n.$moshaToast(e.data.message,{type:"danger",showIcon:!0,position:"bottom-right"}),n.isLoading=!1),o&&o()})).catch((function(e){console.log(e)}))},deleteCoupon:function(e){var t=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("ethan","/admin/coupon/").concat(e)).then((function(e){e.data.success?(t.$refs.deleteModal.hideModal(),t.$moshaToast(e.data.message,{type:"success",showIcon:!0,position:"bottom-right"}),t.getCoupon()):(t.$moshaToast(e.data.message,{type:"danger",showIcon:!0,position:"bottom-right"}),t.isLoading=!1)})).catch((function(e){console.log(e)}))},convertDatetime:function(e){return new Date(e).toLocaleString()}},created:function(){this.getCoupon()}};oe.render=y;t["default"]=oe},dbb4:function(e,t,o){var n=o("23e7"),c=o("83ab"),a=o("56ef"),i=o("fc6a"),d=o("06cf"),s=o("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(e){var t,o,n=i(e),c=d.f,r=a(n),l={},u=0;while(r.length>u)o=c(n,t=r[u++]),void 0!==o&&s(l,t,o);return l}})},e439:function(e,t,o){var n=o("23e7"),c=o("d039"),a=o("fc6a"),i=o("06cf").f,d=o("83ab"),s=c((function(){i(1)})),r=!d||s;n({target:"Object",stat:!0,forced:r,sham:!d},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})}}]);
//# sourceMappingURL=chunk-2dee3f86.932ed51c.js.map