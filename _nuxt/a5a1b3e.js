(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{643:function(t,e,r){"use strict";r.r(e);r(45),r(81),r(82),r(337),r(197),r(198),r(135),r(27),r(39),r(83),r(84);var n=r(32),c=r(105),o=r(13);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"HomePage",data:function(){return{node:"",list:"",recipient:"",selectedContracts:[]}},computed:d(d(d({},Object(c.d)("withdrawal",["targets","txs"])),Object(c.c)("withdrawal",["totalLink"])),{},{totalWithdrawal:function(){return Object(o.fromWei)(this.selectedContracts.reduce((function(t,e){var r=e.payment;return t=t.add(Object(o.toBN)(r))}),Object(o.toBN)(0)).toString())}}),mounted:function(){var t=this;setTimeout((function(){t.recipient=t.$provider.address}),1e3)},methods:d(d({},Object(c.b)("withdrawal",["withdraw","processUserData"])),{},{onProcess:function(){this.processUserData({list:this.list,node:this.node,recipient:this.recipient})},onWithdraw:function(){this.withdraw({targets:this.selectedContracts})},renderPayment:function(t){return Object(o.fromWei)(t)},renderTx:function(t){return"https://etherscan.io/tx/".concat(t)}})},h=r(53),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("h1",{staticClass:"title is-4"},[t._v("\n    Flux-withdrawal. The tool to withdraw payment from multiple Flux Agregator\n    smart contracts.\n  ")]),t._v(" "),r("b-field",{staticClass:"mb-5",attrs:{label:"Node address"}},[r("b-input",{model:{value:t.node,callback:function(e){t.node=e},expression:"node"}})],1),t._v(" "),r("b-field",{attrs:{label:"Contracts list"}},[r("b-input",{attrs:{type:"textarea"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),t._v(" "),r("b-field",[r("b-button",{attrs:{type:"is-info"},on:{click:t.onProcess}},[t._v("Process")])],1),t._v(" "),t._l(t.targets,(function(e){return r("b-field",{key:e.contract},[r("b-checkbox",{attrs:{"native-value":e},model:{value:t.selectedContracts,callback:function(e){t.selectedContracts=e},expression:"selectedContracts"}},[t._v("\n      "+t._s(e.contract)+" - "+t._s(t.renderPayment(e.payment))+"\n    ")])],1)})),t._v(" "),r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"Total avaliable"}},[t._v("\n      "+t._s(t.totalLink)+"\n    ")]),t._v(" "),r("b-field",{attrs:{label:"Total withdrawal"}},[t._v("\n      "+t._s(t.totalWithdrawal)+"\n    ")])],1),t._v(" "),r("b-field",{staticClass:"mt-5",attrs:{label:"Recipient"}},[r("b-input",{model:{value:t.recipient,callback:function(e){t.recipient=e},expression:"recipient"}})],1),t._v(" "),r("b-field",[r("b-button",{attrs:{type:"is-primary"},on:{click:t.onWithdraw}},[t._v("Withdraw")])],1),t._v(" "),t._l(t.txs,(function(e){return r("b-field",{key:e},[r("a",{attrs:{href:t.renderTx(e),target:"_blank"}},[t._v(t._s(e))])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);