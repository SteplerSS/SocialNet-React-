(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{291:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(31),s=t(32),i=t(35),o=t(33),r=t(36),c=t(0),l=t.n(c),m=t(27),u=t(14),g=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(m.a,{to:"/login"})}}]),t}(l.a.Component);return Object(u.b)(g)(a)}},292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3oBg_",dialogsItems:"Dialogs_dialogsItems__25pxs",active:"Dialogs_active__3A1uO",dialog:"Dialogs_dialog__1_4rQ",messages:"Dialogs_messages__1swtA",message:"Dialogs_message__13n9o"}},299:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(292),o=t.n(i),r=function(e){return s.a.createElement("div",{className:o.a.message},e.message)},c=t(11),l=function(e){return s.a.createElement("div",{className:o.a.dialog+" "+o.a.active},s.a.createElement(c.b,{to:"/dialogs/"+e.id},e.name))},m=t(27),u=t(126),g=t(127),d=t(73),b=t(63),f=Object(d.a)(50),p=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(u.a,{component:b.b,validate:[d.b,f],name:"newMessageBody",placeholder:"Enter your message"}),s.a.createElement("div",null,s.a.createElement("button",null,"send message")))})),_=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(l,{name:e.name,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(r,{message:e.message})}));return e.isAuth?s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},s.a.createElement("div",null,n),s.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))):s.a.createElement(m.a,{to:"/login"})},E=t(125),v=t(14),h=t(291),O=t(7);a.default=Object(O.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(E.b)(a))}}})),h.a)(_)}}]);
//# sourceMappingURL=4.13da6f7c.chunk.js.map