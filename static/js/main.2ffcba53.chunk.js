(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(16),o=c.n(r),a=(c(30),"https://www.geducar.com/sites/default/files/geducar-logo-footer.png"),i="https://cdn.icon-icons.com/icons2/259/PNG/128/ic_arrow_back_128_28226.png",j=c(4),u="[ui] Open modal",l="[ui] Close modal",b="[users] Get Users",d="[users] Get Posts",O="[users] Get Comments",m=function(){return{type:u,payload:!0}},h=function(){return function(e){e(p())}},p=function(){return{type:l,payload:!1}},f=c(5),x=c(0);function g(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.ui})).modalOpen,c="";return c=t?"nav-show":"nav-hide",Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("nav",{className:"nav-container back-nav",children:[Object(x.jsx)("img",{className:"back-nav",src:"".concat(a)}),Object(x.jsx)(j.b,{to:"/geducar-julio-flores-test/",className:"back-nav",children:"Home"}),Object(x.jsx)(j.b,{to:"/geducar-julio-flores-test/users",className:"back-nav",children:"Users"}),Object(x.jsx)(j.b,{to:"/geducar-julio-flores-test/about",className:"back-nav",children:"About"})]}),Object(x.jsxs)("nav",{className:"nav-container-2 back-nav",children:[Object(x.jsx)("img",{className:"back-nav",src:"".concat(a)}),Object(x.jsx)("button",{className:"back-nav",onClick:function(c){e(t?h():function(e){e(m())})},children:Object(x.jsx)("img",{className:"back-nav",src:"".concat("https://icon-icons.com/icons2/906/PNG/48/bar-menu_icon-icons.com_70305.png")})})]}),Object(x.jsxs)("nav",{className:c,children:[Object(x.jsx)(j.b,{to:"/geducar-julio-flores-test/",children:"Home"}),Object(x.jsx)(j.b,{to:"/geducar-julio-flores-test/users",children:"Users"}),Object(x.jsx)(j.b,{to:"/geducar-julio-flores-test/sabout",children:"About"})]})]})}var v=function(e){setTimeout((function(){e(h())}),0)},N=function(){var e=Object(f.b)();return v(e),Object(x.jsxs)("section",{className:"welcome-container ",children:[Object(x.jsxs)("div",{className:"welcome-container__title animate__animated  animate__backInLeft",children:[Object(x.jsx)("p",{children:"Welcome to"}),Object(x.jsx)("p",{children:"Geducar React App"})]}),Object(x.jsx)("img",{src:"".concat("https://cdni.iconscout.com/illustration/premium/thumb/welcome-2120254-1784891.png")})]})},_=c(3),w=function(){var e=Object(f.b)();return v(e),Object(x.jsx)("section",{className:"about-container",children:Object(x.jsxs)("div",{className:"about-container__text",children:[Object(x.jsx)("h2",{children:"About"}),Object(x.jsx)("p",{children:" This is an application in react that connects to the API https://juliofs12.github.io/geducar-julio-flores-test/. "})]})})},y=function(e){var t=e.user,c=t.id,n=t.name,s=t.username,r=t.email,o=t.address,a=t.company,i=t.phone;return Object(x.jsx)("div",{className:"shadow-1",children:Object(x.jsxs)("div",{className:"card-user",children:[Object(x.jsx)("h3",{children:"USER ".concat(c)}),Object(x.jsx)("hr",{}),Object(x.jsx)("p",{children:"Name: ".concat(n)}),Object(x.jsx)("p",{children:"User Name: ".concat(s)}),Object(x.jsx)("p",{children:"Email: ".concat(r)}),Object(x.jsx)("p",{children:"Address: ".concat(o.street)}),Object(x.jsx)("p",{children:"Phone: ".concat(i)}),Object(x.jsx)("p",{children:"Company: ".concat(a.name)}),Object(x.jsx)(j.b,{className:"card-user__link",to:"/geducar-julio-flores-test/posts/".concat(c),children:"See Posts...! "})]})})},k=c(10),P="https://jsonplaceholder.typicode.com/",E=function(e,t,c){if("users"===e){var n="".concat(P).concat(e);return fetch(n)}if("posts"===e||"comments"===e){var s="".concat(P).concat(e,"?").concat(t,"=").concat(c);return fetch(s)}},I=c(14),C=c.n(I),S=function(e){return{type:b,payload:e}},U=function(){return Object(x.jsx)("section",{className:"wait-container",children:Object(x.jsx)("img",{src:"".concat("https://cdni.iconscout.com/illustration/premium/thumb/robot-couple-waiting-for-job-interview-2741552-2294377.png")})})},A=function(){return Object(x.jsxs)("div",{className:"all-users",children:[Object(x.jsx)(j.b,{to:"/",children:Object(x.jsx)("img",{style:{width:"40px"},src:"".concat(i)})}),Object(x.jsx)("img",{src:"".concat("https://cdn.icon-icons.com/icons2/2063/PNG/512/smartphone_smart_phone_mobile_profile_icon_124610.png")}),Object(x.jsx)("h2",{children:"All users from API"})]})},F=function(){var e=Object(f.b)();Object(n.useEffect)((function(){e((function(e){E("users").then((function(e){return e.json()})).then((function(t){var c=Object(k.a)(t);e(S(c))})).catch((function(e){return C.a.fire("Oops...","Server no working, please wait 5s!","error")}))}))}),[e]);var t=Object(f.c)((function(e){return e.users})),c=t.getting,s=t.users;return c?Object(x.jsx)(U,{}):(v(e),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A,{}),Object(x.jsx)("hr",{}),Object(x.jsx)("section",{className:"user-container",children:s.map((function(e,t){return Object(x.jsx)(y,{user:e},t)}))})]}))},G=function(e){return{type:d,payload:e}},T=function(e){var t=e.idUser;return Object(x.jsxs)("div",{className:"all-users",children:[Object(x.jsx)(j.b,{to:"/users",children:Object(x.jsx)("img",{style:{width:"40px"},src:"".concat(i)})}),Object(x.jsx)("img",{src:"".concat("https://cdn.icon-icons.com/icons2/1603/PNG/512/note-task-comment-message-edit-write_108613.png")}),Object(x.jsx)("h2",{children:"Posts of user ".concat(t)})]})},L=function(e){var t=e.post,c=t.id,n=t.title,s=t.body;return Object(x.jsx)("div",{className:"shadow-1",children:Object(x.jsxs)("div",{className:"card-posts",children:[Object(x.jsx)("h3",{children:"".concat(n)}),Object(x.jsx)("p",{children:"".concat(s)}),Object(x.jsx)(j.b,{className:"card-posts__link",to:"/geducar-julio-flores-test/comments/".concat(c),children:"Comments...! "})]})})},D=function(){var e=Object(f.b)(),t=Object(_.f)().postUserId;Object(n.useEffect)((function(){e(function(e){return function(t){E("posts","userId",e).then((function(e){return e.json()})).then((function(e){var c=Object(k.a)(e);t(G(c))})).catch((function(e){return C.a.fire("Oops...","Server no working, please wait 5s!","error")}))}}(t))}),[e]);var c=Object(f.c)((function(e){return e.posts})),s=c.getting,r=c.posts;return s?Object(x.jsx)(U,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T,{idUser:t}),Object(x.jsx)("hr",{}),Object(x.jsx)("section",{className:"posts-container",children:r.map((function(e,t){return Object(x.jsx)(L,{post:e},t)}))})]})},R=function(e){return{type:O,payload:e}},B=function(e){var t=e.comment,c=t.email,n=t.name,s=t.body;return Object(x.jsxs)("div",{className:"card-comments",children:[Object(x.jsx)("p",{children:"Email: ".concat(c)}),Object(x.jsx)("p",{children:"Name: ".concat(n)}),Object(x.jsx)("p",{children:s})]})},H=function(){var e=Object(f.b)(),t=Object(_.f)().commentsPostId;Object(n.useEffect)((function(){var c;e((c=t,function(e){E("comments","postId",c).then((function(e){return e.json()})).then((function(t){var c=Object(k.a)(t);e(R(c))})).catch((function(e){return C.a.fire("Oops...","Server no working, please wait 5s!","error")}))}))}),[e]);var c=Object(f.c)((function(e){return e.comments})),s=c.getting,r=c.comments;return s?Object(x.jsx)(U,{}):Object(x.jsx)("section",{className:"complete-container",children:Object(x.jsxs)("div",{className:"complete-container__card-complete",children:[Object(x.jsx)(j.b,{to:"/users",children:Object(x.jsx)("img",{style:{width:"40px"},src:"".concat(i)})}),Object(x.jsx)("h1",{children:"Comments of post ".concat(t)}),r.map((function(e,t){return Object(x.jsx)(B,{comment:e},t)}))]})})},J=function(){return Object(x.jsxs)("main",{className:"home-user",children:[Object(x.jsx)(g,{}),Object(x.jsx)("div",{children:Object(x.jsxs)(_.c,{children:[Object(x.jsx)(_.a,{exact:!0,path:"/geducar-julio-flores-test/",children:Object(x.jsx)(N,{})}),Object(x.jsx)(_.a,{exact:!0,path:"/geducar-julio-flores-test/users",children:Object(x.jsx)(F,{})}),Object(x.jsx)(_.a,{exact:!0,path:"/geducar-julio-flores-test/about",children:Object(x.jsx)(w,{})}),Object(x.jsx)(_.a,{exact:!0,path:"/geducar-julio-flores-test/posts/:postUserId",children:Object(x.jsx)(D,{})}),Object(x.jsx)(_.a,{exact:!0,path:"/geducar-julio-flores-test/comments/:commentsPostId",children:Object(x.jsx)(H,{})})]})})]})};var M=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(j.a,{children:Object(x.jsx)(J,{})})})},X=c(12),V=c(25),W=c(7),q={users:[],getting:!0},z={posts:[],getting:!0},K={comments:[],getting:!0},Q={modalOpen:!1},Y=Object(X.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(W.a)(Object(W.a)({},e),{},{users:Object(k.a)(t.payload),getting:!1});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(W.a)(Object(W.a)({},e),{},{posts:Object(k.a)(t.payload),getting:!1});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(W.a)(Object(W.a)({},e),{},{comments:Object(k.a)(t.payload),getting:!1});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(W.a)(Object(W.a)({},e),{},{modalOpen:!0});case l:return Object(W.a)(Object(W.a)({},e),{},{modalOpen:!1});default:return e}}}),Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,$=Object(X.e)(Y,Z(Object(X.a)(V.a))),ee=function(){return Object(x.jsx)(f.a,{store:$,children:Object(x.jsx)(M,{})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root")),te()}},[[41,1,2]]]);
//# sourceMappingURL=main.2ffcba53.chunk.js.map