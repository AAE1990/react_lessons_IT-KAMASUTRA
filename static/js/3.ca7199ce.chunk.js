(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{290:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3a9AH"}},291:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__9TYoY",post:"MyPosts_post__XI9J1"}},292:function(e,t,a){e.exports={item:"Posts_item__1olYd"}},293:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),r=a(290),o=a.n(r),n=a(33);l.a.Component;var u=a(121);var c=e=>{let t=Object(s.useState)(!1),a=Object(u.a)(t,2),r=a[0],o=a[1],n=Object(s.useState)(e.status),c=Object(u.a)(n,2),i=c[0],p=c[1];Object(s.useEffect)(()=>{p(e.status)},[e.status]);return l.a.createElement("div",null,!r&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:()=>{o(!0)}},e.status||"-----")),r&&l.a.createElement("div",null,l.a.createElement("input",{onChange:e=>{p(e.currentTarget.value)},autoFocus:!0,onBlur:()=>{o(!1),e.updateStatus(i)},value:i})))};var i=({profile:e,status:t,updateStatus:a})=>e?l.a.createElement("div",null,l.a.createElement("div",{className:o.a.descriptionBlock},l.a.createElement("img",{src:e.photos.large}),l.a.createElement(c,{status:t,updateStatus:a}))):l.a.createElement(n.a,null),p=a(88),m=a(291),d=a.n(m),E=a(292),b=a.n(E);var h=e=>l.a.createElement("div",{className:b.a.item},l.a.createElement("img",{src:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/be/bedd1c43a23171579086474638f5a9d2249a765a_medium.jpg"}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"like")," ",e.likesCount)),f=a(79),v=a(120),g=a(76),P=a(30);a(54);const k=Object(g.a)(10);let S=Object(v.a)({form:"ProfileAddNewPostForm"})(e=>l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(f.a,{component:P.b,name:"newPostText",placeholder:"Post message",validate:[g.b,k]})),l.a.createElement("div",null,l.a.createElement("button",null,"Add post"))));var j=l.a.memo(e=>{let t=[...e.posts].reverse().map(e=>l.a.createElement(h,{message:e.message,likesCount:e.likesCount}));return l.a.createElement("div",{className:d.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement(S,{onSubmit:t=>{e.addPost(t.newPostText)}}),l.a.createElement("div",{className:d.a.post},t))}),_=a(12);var O=Object(_.b)(e=>({posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}),e=>({addPost:t=>{e(Object(p.a)(t))}}))(j);var x=e=>l.a.createElement("div",null,l.a.createElement(i,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),l.a.createElement(O,null)),w=a(25),B=a(6);class C extends l.a.Component{componentDidMount(){let e=this.props.match.params.userId;e||(e=this.props.authorizedUserId,e||this.props.history.push("/login")),this.props.getUserProfile(e),this.props.getStatus(e)}render(){return l.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}t.default=Object(B.d)(Object(_.b)(e=>({profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.e}),w.f)(C)}}]);
//# sourceMappingURL=3.ca7199ce.chunk.js.map