(this.webpackJsonpfat=this.webpackJsonpfat||[]).push([[20],{1733:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var n=a(7),r=a(34),c=a(12),i=a(0),s=a(3),o=a(563),u=a(434),l=a(572),d=a(589),j=a(575),b=a(576),m=a(433),O=a(431),p=a(582),h=a(786),f=a.n(h),g=a(57),v=a(579),x=a(595),S=a(19),E=a(729),y=(a(30),a(86)),w=a(1161),T=a(359),I=a(29),_=JSON.parse(localStorage.getItem("user")),L=_?{isLoggedIn:!0,user:_}:{isLoggedIn:!1,user:null},C={},N=a(62),R=[],A=Object(y.combineReducers)({profilePosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case E.b:return[].concat(Object(N.a)(e),[r]);case E.i:return r;case E.k:return e.map((function(e){return e._id===r._id?Object(n.a)(Object(n.a)({},e),r):e}));case E.c:return e.filter((function(e){return e._id!==r._id}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case E.h:case E.g:return Object(n.a)(Object(n.a)({},e),{},{isLoggedIn:!1});case E.e:return Object(n.a)(Object(n.a)({},e),{},{isLoggedIn:!0,user:r.user});case E.d:case E.f:return Object(n.a)(Object(n.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E.j:return{message:n};case E.a:return{message:""};default:return e}}}),G=[T.a],D=(Object(y.createStore)(A,Object(w.composeWithDevTools)(y.applyMiddleware.apply(void 0,G))),a(101)),P=a(1),k=["className"];function W(){return Object(P.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["\u041a\u043e\u043f\u0438\u0440\u0430\u0439\u0442 \xa9 ",Object(P.jsx)(m.a,{color:"inherit",href:"http://localhost:3000/",children:"\u0424\u044d\u0442"})," ",(new Date).getFullYear(),"."]})}var F=Object(v.a)((function(e){return{root:{},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),U=function(e){var t=e.className,a=Object(c.a)(e,k),h=F(),v=Object(S.g)(),E=(e.location.state||{from:{pathname:"/"}}).from,y=(Object(I.c)((function(e){return e.auth})),Object(I.b)()),w=Object(i.useState)({email:"",password:""}),T=Object(r.a)(w,2),_=T[0],L=T[1];return Object(P.jsx)("div",Object(n.a)(Object(n.a)({},a),{},{className:Object(s.default)(h.root,t),children:Object(P.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(l.a,{}),Object(P.jsxs)("div",{className:h.paper,children:[Object(P.jsx)(o.a,{className:h.avatar,children:Object(P.jsx)(f.a,{})}),Object(P.jsx)(g.a,{component:"h1",variant:"h5",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(P.jsxs)(g.a,{align:"center",children:["\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0443: ",E.pathname,", \u0442\u0435\u0431\u0435 \u043d\u0430\u0434\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"]}),Object(P.jsxs)("form",{className:h.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),y(Object(D.b)(_.email,_.password)),L({email:"",password:""}),v.push("/")},children:[Object(P.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u042d\u043c\u0435\u0439\u043b",name:"email",autoComplete:"email",autoFocus:!0,value:_.email,onChange:function(e){return L(Object(n.a)(Object(n.a)({},_),{},{email:e.target.value}))}}),Object(P.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",value:_.password,onChange:function(e){return L(Object(n.a)(Object(n.a)({},_),{},{password:e.target.value}))}}),Object(P.jsx)(j.a,{control:Object(P.jsx)(b.a,{value:"remember",color:"primary"}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",disabled:!0}),Object(P.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:h.submit,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(P.jsxs)(O.a,{container:!0,children:[Object(P.jsx)(O.a,{item:!0,xs:!0,children:Object(P.jsx)(m.a,{href:"#",variant:"body2",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(m.a,{href:"/auth/register",variant:"body2",children:"\u041d\u0435\u0442\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})})]})]})]}),Object(P.jsx)(p.a,{mt:8,children:Object(P.jsx)(W,{})})]})}))}},729:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"j",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"i",(function(){return d})),a.d(t,"k",(function(){return j})),a.d(t,"c",(function(){return b}));var n="REGISTER_SUCCESS",r="REGISTER_FAIL",c="LOGIN_SUCCESS",i="LOGIN_FAIL",s="LOGOUT",o="SET_MESSAGE",u="CLEAR_MESSAGE",l="CREATE_POST",d="RETRIEVE_POSTS",j="UPDATE_POST",b="DELETE_POST"}}]);
//# sourceMappingURL=20.1750c8c6.chunk.js.map