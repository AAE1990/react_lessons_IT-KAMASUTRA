(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{290:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__27YNL",dialogsItems:"Dialogs_dialogsItems__1gAtV",active:"Dialogs_active__2zO3K",messages:"Dialogs_messages__3QMzH",formAddText:"Dialogs_formAddText__12vjo"}},296:function(e,a,s){"use strict";s.r(a);var t=s(0),l=s.n(t),d=s(99),m=s(290),n=s.n(m),i=s(11);var o=e=>{let a="/dialogs/"+e.id;return l.a.createElement("div",{className:n.a.dialog},l.a.createElement(i.b,{to:a}," ",e.name," "))};var c=e=>l.a.createElement("div",{className:n.a.dialog},e.message),g=s(79),r=s(123),b=s(22),v=s(56);const u=Object(v.a)(50);var E=Object(r.a)({form:"dialogAddMessageForm"})(e=>l.a.createElement("form",{onSubmit:e.handleSubmit,className:n.a.formAddText},l.a.createElement(g.a,{component:b.b,validate:[v.b,u],name:"newMessageBody",placeholder:"Enter your message"}),l.a.createElement("div",null,l.a.createElement("button",null,"Send"))));var _=e=>{let a=e.dialogsPage,s=a.dialogs.map(e=>l.a.createElement(o,{name:e.name,key:e.id,id:e.id})),t=a.messages.map(e=>l.a.createElement(c,{message:e.message,key:e.id}));a.newMessageBody;return l.a.createElement("div",{className:n.a.dialog+" "+n.a.active},l.a.createElement("div",{className:n.a.dialogsItems},s),l.a.createElement("div",{className:n.a.messages},l.a.createElement("div",null,t)),l.a.createElement(E,{onSubmit:a=>{e.sendMessage(a.newMessageBody)}}))},p=s(10),f=s(135),M=s(7);a.default=Object(M.d)(Object(p.b)(e=>({dialogsPage:e.dialogsPage}),e=>({sendMessage:a=>{e(Object(d.b)(a))}})),f.a)(_)}}]);
//# sourceMappingURL=4.b700a365.chunk.js.map