(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{289:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__IP9VL",dialogsItems:"Dialogs_dialogsItems__32c2y",active:"Dialogs_active__2eJjP",dialog:"Dialogs_dialog__3LZ_Y",messages:"Dialogs_messages__Zs_gg",message:"Dialogs_message__273Oy"}},294:function(e,a,t){"use strict";t.r(a);var s=t(124),n=t(10),i=t(0),l=t.n(i),m=t(289),o=t.n(m),c=t(11),r=function(e){var a="/dialogs/"+e.id;return l.a.createElement("div",{className:o.a.dialog+" "+o.a.active},l.a.createElement(c.b,{activeClassName:o.a.active,to:a},e.name))},g=function(e){return l.a.createElement("div",{className:o.a.message},e.message)},d=t(125),u=t(126),_=t(64),v=t(65),b=Object(v.a)(30),f=Object(u.a)({form:"dialogsForm"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(d.a,{name:"message",placeholder:"enter message",validate:[v.b,b],component:_.b})),l.a.createElement("div",null,l.a.createElement("button",null,"Send message")))})),E=function(e){var a=e.dialogPage.dialogs.map((function(e){return l.a.createElement(r,{key:e.name+e.id,name:e.name,id:e.id})})),t=e.dialogPage.messages.map((function(e){return l.a.createElement(g,{key:e.id+e.message,id:e.id,message:e.message})}));return l.a.createElement("div",{className:o.a.dialogs},l.a.createElement("div",{className:o.a.dialogsItems},a),l.a.createElement("div",{className:o.a.messages},l.a.createElement("div",null,t),l.a.createElement(f,{onSubmit:function(a){e.onSendMessageClick(a.message)}})))},p=t(92),k=t(8);a.default=Object(k.d)(Object(n.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{onSendMessageClick:function(a){return e(Object(s.b)(a))}}})),p.a)(E)}}]);
//# sourceMappingURL=4.ecb7dbc7.chunk.js.map