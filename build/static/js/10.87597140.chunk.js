(this.webpackJsonpfat=this.webpackJsonpfat||[]).push([[10],{1686:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ce}));var n=a(18),c=a(0),s=a(3),i=a(647),r=(a(92),a(71)),o=a(183),l=a(6),j=a(11),d=a(426),b=a(571),u=a(439),O=a(358),h=a(415),m=a(418),f=a(542),p=a.n(f),x=a(24),v=a(34),g=a.n(v),N=a(5),y=a(419),w=a(420),I=a(539),S=a(421),T=a(55),C=(a(63),a(27)),k=a(1),U=["active","conversation","className"],E=Object(i.a)((function(e){return{active:{boxShadow:"inset 4px 0px 0px ".concat(e.palette.primary.main),backgroundColor:N.a.grey[50]},avatar:{height:40,width:40},details:{marginLeft:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"flex-end"},unread:{marginTop:2,padding:2,height:18,minWidth:18}}})),G=function(e){var t=e.active,a=e.conversation,c=e.className,i=Object(j.a)(e,U),r=E(),o=Object(C.c)((function(e){return e.auth._id})),d={};return d=a.firstUser.uid===o?Object(l.a)({},a.secondUser):Object(l.a)({},a.firstUser),Object(k.jsxs)(y.a,Object(l.a)(Object(l.a)({},i),{},{button:!0,className:Object(s.default)(Object(n.a)({},r.active,t),c),component:x.b,to:"/chat/".concat(a.conversationId),children:[Object(k.jsx)(w.a,{children:Object(k.jsx)(I.a,{alt:"\u0410\u0432\u0430",className:r.avatar,src:d.profilePicture})}),Object(k.jsx)(S.a,{primary:d.name,primaryTypographyProps:{noWrap:!0,variant:"h6"},secondary:"ID \u0434\u0438\u0430\u043b\u043e\u0433\u0430: ".concat(a.conversationId),secondaryTypographyProps:{noWrap:!0,variant:"body1"}}),Object(k.jsx)("div",{className:r.details,children:Object(k.jsx)(T.a,{noWrap:!0,variant:"body2"})})]}))},R=["conversations","className"],D=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.white},searchInput:{flexGrow:1}}})),_=function(e){var t=e.conversations,a=e.className,n=Object(j.a)(e,R),c=D(),i=Object(r.a)().match.params.id;return Object(k.jsxs)("div",Object(l.a)(Object(l.a)({},n),{},{className:Object(s.default)(c.root,a),children:[Object(k.jsxs)(d.a,{children:[Object(k.jsx)(b.a,{className:c.searchInput,disableUnderline:!0,placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0434\u0438\u0430\u043b\u043e\u0433"}),Object(k.jsx)(u.a,{title:"\u041f\u043e\u0438\u0441\u043a",children:Object(k.jsx)(O.a,{edge:"end",children:Object(k.jsx)(p.a,{})})})]}),Object(k.jsx)(h.a,{}),Object(k.jsx)(m.a,{disablePadding:!0,children:t.map((function(e,a){return Object(k.jsx)(G,{active:e.id===i,conversation:e,divider:a<t.length-1},e.id)}))})]}))},L=a(33),P=a(538),A=a(90),B=a(544),W=a(545),M=a(436),$=a(1466),V=a.n($),H=a(1467),J=a.n(H),X=a(799),q=a.n(X),z=a(1468),F=a.n(z),K=a(703),Q=a.n(K),Y=(a(384),["conversation","className"]),Z=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.white},backButton:{marginRight:e.spacing(2),"@media (min-width: 864px)":{display:"none"}},user:{flexShrink:0,flexGrow:1},activity:{display:"flex",alignItems:"center"},statusBullet:{marginRight:e.spacing(1)},search:Object(n.a)({height:42,padding:e.spacing(0,2),display:"flex",alignItems:"center",flexBasis:300,marginLeft:"auto"},e.breakpoints.down("sm"),{flex:"1 1 auto"}),searchIcon:{marginRight:e.spacing(2),color:e.palette.icon},searchInput:{flexGrow:1}}})),ee=function(e){var t=e.conversation,a=e.className,n=Object(j.a)(e,Y),i=Z(),r=Object(c.useRef)(null),o=Object(c.useState)(!1),h=Object(L.a)(o,2),m=h[0],f=h[1],v=Object(C.c)((function(e){return e.auth._id})),g={};return g=t.firstUser.uid===v?Object(l.a)({},t.secondUser):Object(l.a)({},t.firstUser),Object(k.jsxs)(d.a,Object(l.a)(Object(l.a)({},n),{},{className:Object(s.default)(i.root,a),children:[Object(k.jsx)(u.a,{title:"\u041d\u0430\u0437\u0430\u0434",children:Object(k.jsx)(O.a,{className:i.backButton,component:x.b,edge:"start",to:"/chat",children:Object(k.jsx)(V.a,{})})}),Object(k.jsxs)("div",{className:i.user,children:[Object(k.jsx)(T.a,{variant:"h6",children:g.name}),Object(k.jsxs)(T.a,{variant:"body2",children:["ID \u0434\u0438\u0430\u043b\u043e\u0433\u0430: ",t.conversationId]})]}),Object(k.jsxs)(P.a,{mdDown:!0,children:[Object(k.jsxs)(A.a,{className:i.search,elevation:1,children:[Object(k.jsx)(p.a,{className:i.searchIcon}),Object(k.jsx)(b.a,{className:i.searchInput,disableUnderline:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0434\u0438\u0430\u043b\u043e\u0433\u0443"})]}),Object(k.jsx)(u.a,{title:"\u0411\u043e\u043b\u044c\u0448\u0435",children:Object(k.jsx)(O.a,{onClick:function(){f(!0)},ref:r,children:Object(k.jsx)(Q.a,{})})}),Object(k.jsxs)(B.a,{anchorEl:r.current,keepMounted:!0,onClose:function(){f(!1)},open:m,children:[Object(k.jsxs)(W.a,{children:[Object(k.jsx)(M.a,{children:Object(k.jsx)(J.a,{})}),Object(k.jsx)(S.a,{primary:"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})]}),Object(k.jsxs)(W.a,{children:[Object(k.jsx)(M.a,{children:Object(k.jsx)(q.a,{})}),Object(k.jsx)(S.a,{primary:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})]}),Object(k.jsxs)(W.a,{children:[Object(k.jsx)(M.a,{children:Object(k.jsx)(F.a,{})}),Object(k.jsx)(S.a,{primary:"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"})]})]})]})]}))},te=a(140),ae=a.n(te),ne=a(416),ce=["message","className"],se=Object(i.a)((function(e){return{root:{marginBottom:e.spacing(2)},authUser:{display:"flex",justifyContent:"flex-end","& $body":{background:N.a.blueGrey[100]}},inner:{display:"flex",maxWidth:500},avatar:{marginRight:e.spacing(2)},body:{backgroundColor:N.a.grey[200],color:e.palette.text.primary,borderRadius:e.shape.borderRadius,padding:e.spacing(1,1.5)},content:{marginTop:e.spacing(.3)},image:{marginTop:e.spacing(2),height:"auto",width:380,maxWidth:"100%"},footer:{marginTop:e.spacing(1),display:"flex",justifyContent:"flex-end"}}})),ie=function(e){var t=e.message,a=e.className,c=Object(j.a)(e,ce),i=se(),r=Object(C.c)((function(e){return e.auth._id})),o=function(e,t){return e===t};return Object(k.jsx)("div",Object(l.a)(Object(l.a)({},c),{},{className:Object(s.default)(i.root,Object(n.a)({},i.authUser,o(t.sender.uid,r)),a),children:Object(k.jsxs)("div",{className:i.inner,children:[Object(k.jsx)(I.a,{className:i.avatar,component:x.b,src:t.sender.profilePicture,to:"/profile/".concat(t.sender.uid,"/wall")}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:i.body,children:[Object(k.jsx)(T.a,{variant:"body2",color:"secondary",children:Object(k.jsx)(ne.a,{color:"inherit",component:x.b,to:"/profile/".concat(t.sender.uid,"/wall"),variant:"h6",children:(o(t.sender.uid,r),t.sender.name)})}),Object(k.jsx)("div",{className:i.content,children:"image"===t.contentType?Object(k.jsx)("img",{alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:i.image,src:t.content}):Object(k.jsx)(T.a,{color:"inherit",variant:"subtitle1",children:t.content})})]}),Object(k.jsx)("div",{className:i.footer,children:Object(k.jsx)(T.a,{className:i.time,variant:"body2",children:g()(t.date).fromNow()})})]})]})}))},re=["messages","className"],oe=Object(i.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",maxHeight:"100%"},inner:{padding:e.spacing(2)}}})),le=function(e){var t=e.messages,a=e.className,n=Object(j.a)(e,re),c=oe();return Object(k.jsx)("div",Object(l.a)(Object(l.a)({},n),{},{className:Object(s.default)(c.root,a),children:Object(k.jsx)(ae.a,{children:Object(k.jsx)("div",{className:c.inner,children:t.map((function(e){return Object(k.jsx)(ie,{message:e},e.id)}))})})}))},je=a(203),de=a.n(je),be=a(1679),ue=a(29),Oe=a.n(ue),he=a(15),me=a(9),fe=["className","authUser","conversation"],pe=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.white,display:"flex",alignItems:"center",padding:e.spacing(1,2)},paper:{flexGrow:1,marginLeft:e.spacing(2),padding:e.spacing(.5,2)},input:{width:"100%"},divider:{width:1,height:24},fileInput:{display:"none"},form:{width:"100%"}}})),xe=function(e){var t,a=e.className,n=e.authUser,i=e.conversation,r=Object(j.a)(e,fe),o=pe();t=i.cId?i.cId:Object(be.a)();var d=Object(c.useState)({conversationId:t,content:""}),m=Object(L.a)(d,2),f=m[0],p=m[1],x=Object(C.b)();return Object(k.jsx)("form",{className:o.form,noValidate:!0,onSubmit:function(e){e.persist();var t=Object(l.a)(Object(l.a)({},f),{},{date:new Date});x(function(e){return function(t,a){var n=a().auth._id,c=a().auth.name,s=a().auth.profilePicture;Oe.a.post("".concat(he.c,"/messages"),Object(l.a)(Object(l.a)({},e),{},{sender:{uid:n,name:c,profilePicture:s}}),Object(he.a)()).then((function(e){t({type:"ADD_MESSAGE",conversation:e})})).catch((function(e){var t;console.log(e.response),me.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:me.b.POSITION.BOTTOM_RIGHT})}))}}(t)),p({content:""})},children:Object(k.jsxs)("div",Object(l.a)(Object(l.a)({},r),{},{className:Object(s.default)(o.root,a),children:[Object(k.jsx)(I.a,{alt:"Person",src:n.profilePicture}),Object(k.jsx)(A.a,{className:o.paper,elevation:1,children:Object(k.jsx)(b.a,{className:o.input,disableUnderline:!0,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c...",value:f.content,onChange:function(e){return p(Object(l.a)(Object(l.a)({},f),{},{content:e.target.value}))}})}),Object(k.jsx)(u.a,{title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",type:"submit",children:Object(k.jsx)(O.a,{color:"primary",children:Object(k.jsx)(de.a,{})})}),Object(k.jsx)(h.a,{className:o.divider})]}))})},ve=["conversation","authUser","messages","className"],ge=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:e.palette.white}}})),Ne=function(e){var t=e.conversation,a=e.authUser,n=e.messages,c=e.className,i=Object(j.a)(e,ve),r=ge();return Object(k.jsxs)("div",Object(l.a)(Object(l.a)({},i),{},{className:Object(s.default)(r.root,c),children:[Object(k.jsx)(ee,{conversation:t}),Object(k.jsx)(h.a,{}),Object(k.jsx)(le,{messages:n}),Object(k.jsx)(h.a,{}),Object(k.jsx)(xe,{conversation:t,authUser:a})]}))},ye=["className"],we=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center"},inner:{textAlign:"center"},image:{maxWidth:400},title:{margin:e.spacing(4,0,1,0)}}})),Ie=function(e){var t=e.className,a=Object(j.a)(e,ye),n=we();return Object(k.jsx)("div",Object(l.a)(Object(l.a)({},a),{},{className:Object(s.default)(n.root,t),children:Object(k.jsx)("div",{className:n.inner,children:Object(k.jsx)(T.a,{variant:"subtitle1",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433 \u0441\u043b\u0435\u0432\u0430, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443"})})}))},Se=a(933),Te=Object(i.a)((function(e){return{root:{height:"100%",display:"flex","@media (max-width: 863px)":{"& $conversationList, & $conversationDetails":{flexBasis:"100%",width:"100%",maxWidth:"none",flexShrink:"0",transform:"translateX(0)"}}},openConversion:{"@media (max-width: 863px)":{"& $conversationList, & $conversationDetails":{transform:"translateX(-100%)"}}},conversationList:{width:300,flexBasis:300,flexShrink:0,"@media (min-width: 864px)":{borderRight:"1px solid ".concat(e.palette.divider)}},conversationDetails:{flexGrow:1},conversationPlaceholder:{flexGrow:1}}})),Ce=function(e){var t,a=e.history,i=Te(),l=Object(r.a)(),j=Object(C.b)(),d=Object(C.c)((function(e){return e.auth}));Object(c.useEffect)((function(){j(Object(Se.b)(d._id))}),[j]);var b=Object(C.c)((function(e){return e.conversationsList}));Object(c.useEffect)((function(){var e;j((e=l.match.params.id,function(t){Oe.a.get("".concat(he.c,"/messages/").concat(e),Object(he.a)()).then((function(e){t({type:"CLEAR_MESSAGES"}),t({type:"GET_MESSAGES",messagesList:e})})).catch((function(e){console.log(e)}))}))}),[j,l.match.params.id]);var u,O,h=Object(C.c)((function(e){return e.messagesList})),m=Object(C.c)((function(e){return e}));return console.log(m),Object(C.c)((function(e){return e.auth}))._id||a.push("/"),l.match.params.id&&(u=b.find((function(e){return e.conversationId===l.match.params.id})),O=h.filter((function(e){return e.conversationId===l.match.params.id}))),Object(k.jsxs)(o.a,{className:Object(s.default)((t={},Object(n.a)(t,i.root,!0),Object(n.a)(t,i.openConversion,u),t)),title:"\u0427\u0430\u0442\u044b",children:[Object(k.jsx)(_,{className:i.conversationList,conversations:b}),u&&O?Object(k.jsx)(Ne,{className:i.conversationDetails,conversation:u,messages:O,authUser:d}):Object(k.jsx)(Ie,{className:i.conversationPlaceholder})]})}},933:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(6),c=a(29),s=a.n(c),i=a(15),r=a(9),o=function(e){return function(t){s.a.get("".concat(i.c,"/conversations/").concat(e),Object(i.a)()).then((function(e){t({type:"CLEAR_CONVERSATIONS"}),t({type:"GET_CONVERSATIONS",conversationsList:e})})).catch((function(e){console.log(e)}))}},l=function(e){return function(t){s.a.post("".concat(i.c,"/conversations"),Object(n.a)({},e),Object(i.a)()).then((function(e){t({type:"ADD_CONVERSATION",conversation:e})})).catch((function(e){var t;console.log(e.response),r.b.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:r.b.POSITION.BOTTOM_RIGHT})}))}}}}]);
//# sourceMappingURL=10.87597140.chunk.js.map