(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{290:function(e,t,a){e.exports={profile:"ProfileInfo_profile__1-sub",img:"ProfileInfo_img__24zfr",avatar:"ProfileInfo_avatar__37NyP",contacts:"ProfileInfo_contacts__1npzD"}},291:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2BvJU",posts:"MyPosts_posts__33kqI"}},292:function(e,t,a){e.exports={item:"Post_item__13Y1z"}},293:function(e,t,a){"use strict";a.r(t);var n=a(27),o=a(28),l=a(30),r=a(29),s=a(0),i=a.n(s),c=a(94),u=a(290),m=a.n(u),p=a(40),f=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(c.a)(l,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){o(!0)}},u||"-----")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u,onChange:function(e){var t=e.target.value;m(t)}})))},d=a(105),v=a.n(d),E=a(127),b=a(128),h=a(55),g=Object(b.a)({form:"edit-profile"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement("button",null,"save")),i.a.createElement("div",null,"Full name: ",i.a.createElement(E.a,{placeholder:"Full Name",name:"fullName",validate:[],component:h.a})),i.a.createElement("div",null,i.a.createElement("div",null,"Looking for a job:"),i.a.createElement(E.a,{name:"lookingForAJob",type:"checkbox",validate:[],component:h.a})),i.a.createElement("div",null,i.a.createElement("div",null,"About Me:"),i.a.createElement(E.a,{placeholder:"About Me",name:"aboutMe",validate:[],component:h.b})),i.a.createElement("div",null,i.a.createElement("div",null,"My professional skills:")," ",i.a.createElement(E.a,{placeholder:"My professional skills",name:"lookingForAJobDescription",validate:[],component:h.b})),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",e.profile.contacts&&Object.keys(e.profile.contacts).map((function(t){var a;(null===(a=e.profile)||void 0===a?void 0:a.contacts)&&e.profile.contacts[t];return i.a.createElement("div",{className:m.a.contacts},i.a.createElement("b",null,t,": ",i.a.createElement("div",null,i.a.createElement(E.a,{placeholder:t,name:"contacts."+t,validate:[],component:h.a}))))}))))})),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,"Full name: ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),i.a.createElement("div",null,"About Me: ",t.aboutMe),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",t.contacts&&Object.keys(t.contacts).map((function(e){var a=(null===t||void 0===t?void 0:t.contacts)?t.contacts[e]:"";return i.a.createElement(P,{key:e,contactTitle:e,contactValue:a})}))))},P=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:m.a.contacts},i.a.createElement("b",null,t),": ",a," ")},O=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1];if(!e.profile)return i.a.createElement(p.a,null);var l="";e.profile.photos&&(l=e.profile.photos.large);return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.profile},i.a.createElement("img",{src:l||v.a,alt:"profile",className:m.a.avatar}),e.isOwner&&i.a.createElement("input",{type:"file",onChange:function(t){t.target.files&&e.savePhoto(t.target.files[0])}}),i.a.createElement(f,{status:e.status,updateStatus:e.updateStatus}),n?i.a.createElement(g,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t),o(!1)},profile:e.profile}):i.a.createElement(k,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){o(!0)}})))},j=a(93),y=a(291),_=a.n(y),S=a(292),M=a.n(S),I=function(e){return i.a.createElement("div",{className:M.a.item},i.a.createElement("img",{alt:"post",src:"https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275824-stock-photo-business-man-avatar-in-suit.jpg"}),e.message,i.a.createElement("div",null,"like ".concat(e.likesCount)))},w=a(65),A=Object(w.a)(15),N=i.a.memo((function(e){console.log("render");var t=e.posts.map((function(e){return i.a.createElement(I,{key:e.id+e.message,id:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:_.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(C,{onSubmit:function(t){e.addPost(t.post)}}),i.a.createElement("div",{className:_.a.posts},t))})),C=Object(b.a)({form:"myPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(E.a,{name:"post",placeholder:"enter message",component:h.b,validate:[w.b,A]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),D=N,F=a(11),J=Object(F.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){return e(Object(j.a)(t))}}}))(D),B=function(e){return i.a.createElement("div",null,i.a.createElement(O,{profile:e.userProfile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,saveProfile:e.saveProfile,savePhoto:e.savePhoto}),i.a.createElement(J,null))},x=a(9),T=a(8),U=a(92),z=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=""+this.props.userId)||this.props.history.push("/login"),this.props.setMyUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(B,Object.assign({},this.props,{isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),a}(i.a.Component);t.default=Object(T.d)(Object(F.b)((function(e){return{userProfile:e.profilePage.userProfile,isAuth:e.auth.isAuth,userId:e.auth.userId,status:e.profilePage.status}}),{setMyUserProfile:j.f,getStatus:j.c,updateStatus:j.g,savePhoto:j.d,saveProfile:j.e}),x.f,U.b)(z)}}]);
//# sourceMappingURL=3.45f6169b.chunk.js.map