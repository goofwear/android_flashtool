(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);p&&p(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("8a23"),r=n.n(s);r.a},"12cb":function(e,t,n){t["en-US"]=n("fdfc")},"56d7":function(e,t,n){"use strict";n.r(t);n("b64b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("a925"),a=n("f309");s["a"].use(a["a"]);var o=new a["a"]({}),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-snackbar",{model:{value:e.snackbarShown,callback:function(t){e.snackbarShown=t},expression:"snackbarShown"}},[e._v(" "+e._s(e.snackbarText)+" ")]),n("v-dialog",{style:{zIndex:e.dialogOptions.zIndex},attrs:{"max-width":e.dialogOptions.width},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancel(t)}},model:{value:e.dialogShown,callback:function(t){e.dialogShown=t},expression:"dialogShown"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:e.dialogOptions.color,dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e.dialogTitle))])],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!e.dialogMessage,expression:"!!dialogMessage"}],staticClass:"pa-4"},[e._v(e._s(e.dialogMessage))]),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:""},nativeOn:{click:function(t){return e.dialogNo(t)}}},[e._v("No")]),n("v-btn",{attrs:{color:"primary darken-1",text:""},nativeOn:{click:function(t){return e.dialogYes(t)}}},[e._v("Yes")])],1)],1)],1),n("v-content",[n("v-container",{staticClass:"container"},[n("header",[n("div",{staticClass:"langs"},[n("v-select",{attrs:{solo:"",dense:"",flat:"",items:e.langs,"prepend-inner-icon":"mdi-web"},model:{value:e.$root.$i18n.locale,callback:function(t){e.$set(e.$root.$i18n,"locale",t)},expression:"$root.$i18n.locale"}})],1),n("h1",{domProps:{innerHTML:e._s(e.$t("title"))}})]),n("v-stepper",{attrs:{vertical:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[n("v-stepper-step",{attrs:{complete:e.step>1,step:"1"}},[n("span",{staticClass:"step"},[e._v(e._s(e.$t("prepare:title")))])]),n("v-stepper-content",{attrs:{step:"1"}},[e.supported?n("div",{staticClass:"section"},[n("p",{domProps:{innerHTML:e._s(e.$t("prepare:p1"))}}),n("p",[n("ol",[n("li",{domProps:{innerHTML:e._s(e.$t("prepare:p1:li1"))}}),n("li",{domProps:{innerHTML:e._s(e.$t("prepare:p1:li2"))}}),n("li",{domProps:{innerHTML:e._s(e.$t("prepare:p1:li3"))}}),n("li",{domProps:{innerHTML:e._s(e.$t("prepare:p1:li4"))}}),n("li",{domProps:{innerHTML:e._s(e.$t("prepare:p1:li5"))}})])])]):n("div",{staticClass:"section"},[n("p",{domProps:{innerHTML:e._s(e.$t("prepare:unsupported:p1"))}}),n("p",{domProps:{innerHTML:e._s(e.$t("prepare:unsupported:p2"))}})]),e.supported?n("div",{staticClass:"nav"},[n("v-btn",{attrs:{color:"primary",depressed:""},on:{click:function(t){e.step=2}}},[e._v(e._s(e.$t("prepare:next")))])],1):e._e()]),n("v-stepper-step",{attrs:{complete:e.step>2,step:"2",rules:[function(){return e.supported}]}},[e.supported?e.name?n("span",{staticClass:"step"},[e._v(e._s(e.$t("connect:title:connected",{name:e.name})))]):n("span",{staticClass:"step"},[e._v(e._s(e.$t("connect:title")))]):n("span",{staticClass:"step"},[e._v(e._s(e.$t("connect:title:unsupported")))])]),n("v-stepper-content",{attrs:{step:"2"}},[n("div",{staticClass:"section"},[n("p",{domProps:{innerHTML:e._s(e.$t("connect:p1"))}}),n("p",{domProps:{innerHTML:e._s(e.$t("connect:p2"))}})]),n("div",{staticClass:"nav"},[n("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.connect}},[e._v(e._s(e.$t("connect:connect")))]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.step=1}}},[e._v(e._s(e.$t("connect:previous")))])],1)]),n("v-stepper-step",{attrs:{complete:e.step>3,step:"3"}},[e.selected?n("span",{staticClass:"step"},[e._v(e._s(e.$t("select:title:selected",{name:e.selected?e.selected.name:null})))]):n("span",{staticClass:"step"},[e._v(e._s(e.$t("select:title")))])]),n("v-stepper-content",{attrs:{step:"3"}},[n("div",{staticClass:"section"},[n("upload",{ref:"upload",staticClass:"upload",attrs:{accept:"application/zip",extensions:"zip",drop:!0,"drop-directory":!1},on:{"input-file":e.selectFile},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[e.uploader&&e.uploader.dropActive?n("div",{staticClass:"upload-hint active",domProps:{innerHTML:e._s(e.$t("select:uploader:active"))}}):e.selected?n("div",{staticClass:"upload-hint selected"},[e._v(e._s(e.selected?e.selected.name:null))]):n("div",{staticClass:"upload-hint",domProps:{innerHTML:e._s(e.$t("select:uploader:normal"))}})])],1),n("div",{staticClass:"nav"},[n("v-btn",{attrs:{color:"primary",depressed:"",disabled:!e.selected},on:{click:function(t){e.step=4}}},[e._v(e._s(e.$t("select:next")))]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.step=2}}},[e._v(e._s(e.$t("select:previous")))])],1)]),n("v-stepper-step",{attrs:{complete:e.step>4,step:"4"}},[n("span",{staticClass:"step"},[e._v(e._s(e.$t("confirm:title")))])]),n("v-stepper-content",{attrs:{step:"4"}},[e.flashing?n("div",{staticClass:"section"},[n("p",{domProps:{innerHTML:e._s(e.$t("confirm:flashing"))}}),n("v-progress-linear",{attrs:{value:e.progress?Math.round(e.progress/e.progressTotal*100):0,indeterminate:0==e.progress}})],1):n("div",{staticClass:"section"},[n("p",{domProps:{innerHTML:e._s(e.$t("confirm:p1"))}})]),e.flashing?e._e():n("div",{staticClass:"nav"},[n("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.sideload}},[e._v(e._s(e.$t("confirm:start")))]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.step=3}}},[e._v(e._s(e.$t("confirm:previous")))])],1)]),n("v-stepper-step",{attrs:{complete:e.step>5,step:"5"}},[n("span",{staticClass:"step"},[e._v(e._s(e.$t("done:title")))])]),n("v-stepper-content",{attrs:{step:"5"}},[n("div",{staticClass:"section"},[n("p",{domProps:{innerHTML:e._s(e.$t("done:p1"))}})]),n("div",{staticClass:"nav"},[n("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.reset}},[e._v(e._s(e.$t("done:reset")))])],1)])],1)],1)],1),n("footer",[e._v(" ©2020 ")])],1)},c=[],l=(n("99af"),n("d81d"),n("fb6a"),n("b0c0"),n("d3b7"),n("8a79"),n("96cf"),n("1da1")),p=n("14b8"),d=n.n(p),u=n("8019"),f=n.n(u),v=n("12cb"),h=n.n(v);n("ace4"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7");function b(e){return new Promise((function(t,n){var s=new FileReader;s.onload=function(e){return t(new Uint8Array(e.target.result))},s.onabort=function(){return t(null)},s.onerror=function(e){return n(e)},s.readAsArrayBuffer(e)}))}var m=Object.keys(h.a).sort().map((function(e){return{text:h.a[e].name,value:e}})),g={name:"App",components:{upload:f.a},data:function(){return{langs:m,supported:"undefined"!=typeof navigator.usb,step:1,name:null,files:[],uploader:null,selected:null,flashing:!1,progress:0,progressTotal:0,snackbarShown:!1,snackbarText:"",dialogShown:!1,dialogResolve:null,dialogMessage:null,dialogTitle:null,dialogOptions:{color:"primary",width:290,zIndex:200}}},watch:{step:function(){this.uploader=this.$refs.upload}},methods:{showSnackbar:function(e){this.snackbarText=e,this.snackbarShown=!0},showDialog:function(e,t,n){var s=this;return this.dialogShown=!0,this.dialogTitle=e,this.dialogMessage=t,this.dialogOptions=Object.assign(this.dialogOptions,n),new Promise((function(e){s.dialogResolve=e}))},dialogYes:function(){this.dialogResolve(!0),this.dialogShown=!1},dialogNo:function(){this.dialogResolve(!1),this.dialogShown=!1},selectFile:function(e){e?e.name.endsWith(".zip")?(this.selected=e.file,this.step=3):(this.selected=null,this.showSnackbar(this.$t("hint:zip"))):this.selected=null},connect:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.open("WebUSB");case 3:return e.usb=t.sent,t.next=6,e.usb.connectAdb("host::");case 6:if(e.adb=t.sent,"sideload"==e.adb.mode){t.next=15;break}return t.next=10,e.showDialog(e.$t("prompt:reboot:title"),e.$t("prompt:reboot:message"));case 10:if(!t.sent){t.next=13;break}return t.next=13,e.adb.reboot("sideload");case 13:return e.usb.close(),t.abrupt("return");case 15:n=e.usb.device,s=n.manufacturerName,r=n.productName,e.name="".concat(s," ").concat(r),e.step=3,t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](0),console.error(t.t0),"NotFoundError"!=t.t0.name&&e.showSnackbar(e.$t("hint:connect"));case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))()},sideload:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,s,r,a,o,i,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.flashing=!0,e.progress=0,n=65536,t.next=5,b(e.selected);case 5:return s=t.sent,t.next=8,e.adb.open("sideload-host:".concat(s.length,":").concat(n));case 8:r=t.sent,e.progressTotal=s.length;case 10:if(!e.flashing){t.next=35;break}return t.next=13,r.receive();case 13:if(a=t.sent,"OKAY"!=a.cmd){t.next=17;break}return t.next=17,r.send("OKAY");case 17:if("WRTE"==a.cmd){t.next=19;break}return t.abrupt("continue",10);case 19:if(o=new TextDecoder("utf-8").decode(a.data),"DONEDONE"!=o&&"FAILFAIL"!=o){t.next=22;break}return t.abrupt("break",35);case 22:return i=parseInt(o)*n,c=i+n,c>s.length&&(c=s.length),l=s.slice(i,c),t.next=28,r.send("WRTE",l);case 28:return t.next=30,r.send("OKAY");case 30:if(e.progress+=l.length,!(e.progress>=e.progressTotal)){t.next=33;break}return t.abrupt("break",35);case 33:t.next=10;break;case 35:e.step=5,e.flashing=!1;case 37:case"end":return t.stop()}}),t)})))()},reset:function(){this.name=null,this.selected=null,this.progress=0,this.progressTotal=0,this.step=1}}},_=g,k=(n("034f"),n("2877")),x=n("6544"),w=n.n(x),y=n("7496"),C=n("8336"),$=n("b0af"),S=n("99d9"),T=n("a523"),O=n("a75b"),P=n("169a"),M=n("8e36"),L=n("b974"),j=n("2db4"),A=n("2fa4"),V=n("7e85"),H=n("e516"),R=n("56a4"),E=n("71d9"),D=n("2a7f"),F=Object(k["a"])(_,i,c,!1,null,null,null),N=F.exports;w()(F,{VApp:y["a"],VBtn:C["a"],VCard:$["a"],VCardActions:S["a"],VCardText:S["b"],VContainer:T["a"],VContent:O["a"],VDialog:P["a"],VProgressLinear:M["a"],VSelect:L["a"],VSnackbar:j["a"],VSpacer:A["a"],VStepper:V["a"],VStepperContent:H["a"],VStepperStep:R["a"],VToolbar:E["a"],VToolbarTitle:D["a"]});n("4d63"),n("ac1f"),n("25f0"),n("466d");var I=n("b85c");function z(e,t){var n,s=Object(I["a"])(t);try{for(s.s();!(n=s.n()).done;){var r,a=n.value,o=Object(I["a"])(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(B(i,a))return i}}catch(c){o.e(c)}finally{o.f()}}}catch(c){s.e(c)}finally{s.f()}}function B(e,t){var n=U(e),s=U(t);return s[1]?t==e:s[0]==n[0]}function U(e){return e.match(/^([^-]+)(.*)$/),[RegExp.$1,RegExp.$2]}s["a"].config.productionTip=!1,s["a"].use(r["a"]);var W=Object.keys(h.a).sort(),Y=navigator.languages,J=new r["a"]({locale:z(W,Y),fallbackLocale:"en-US",messages:h.a});new s["a"]({i18n:J,vuetify:o,render:function(e){return e(N)}}).$mount("#app")},"8a23":function(e,t,n){},fdfc:function(e){e.exports=JSON.parse('{"name":"English (US)","title":"Open Android Flash Tool","prepare:title":"Prepare","prepare:p1":"Please ensure:","prepare:p1:li1":"","prepare:p1:li2":"","prepare:p1:li3":"","prepare:p1:li4":"","prepare:p1:li5":"","prepare:unsupported:p1":"WebUSB API was not supported by your browser.","prepare:unsupported:p2":"Please use the latest version of Google Chrome.","prepare:next":"Continue","select:title":"Select a package","select:title:selected":"Selected: {name}","select:uploader:normal":"Drop or <a>select</a> a package","select:uploader:active":"Drop the package here","select:previous":"Previous","select:next":"Continue","connect:title":"Connect to a phone","connect:title:unsupported":"Browser not supported","connect:title:connected":"Connected: {name}","connect:p1":"Enable ADB Sideload mode of Recovery and plug your phone to the computer. Then, click \\"Connect phone\\" below. Select your phone in the shown dialog and click \\"Connect\\".","connect:p2":"If you\'re doing the flash on a Windows PC, and you can\'t see any phones in the dialog, you may need to install <a href=\\"https://developer.android.com/studio/run/win-usb\\">this driver</a> first.","connect:connect":"Connect phone","connect:previous":"Previous","confirm:title":"Flash","confirm:p1":"Everything is ready. Click \\"Start\\".","confirm:flashing":"Flashing, please wait…","confirm:start":"Start","confirm:previous":"Previous","done:title":"Done","done:p1":"Congratulations! Flash done. <a>Got an error?</a>","done:reset":"Finish and return","hint:zip":"A package should be a ZIP file.","hint:connect":"Connect failed, please retry.","prompt:reboot:title":"Confirm","prompt:reboot:message":"The device is not in Sideload mode. Reboot to Sideload mode?","END":""}')}});
//# sourceMappingURL=app.2713f9c0.js.map