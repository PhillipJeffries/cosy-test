(this["webpackJsonpcosy-test"]=this["webpackJsonpcosy-test"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(7),r=n.n(i),s=n(2),a=n(9),o=n(3),d=n(6),u=function(e){return window.localStorage.setItem("picturesData",JSON.stringify(e))},l=function(){return JSON.parse(window.localStorage.getItem("picturesData")||"[]")};l().length||u([{id:"iv45",url:"https://cdn.hipwallpaper.com/i/86/35/bcxLCm.jpg",comment:"It was cool!"},{id:"i4563",url:"https://i.pinimg.com/originals/15/2b/ac/152bacf686d453c00fdac4f21cc44713.png",comment:"Such a tasty food!"},{id:"idf453",url:"https://wallup.net/wp-content/uploads/2019/09/184500-beavis-and-butthead-hv.png",comment:"You are asshole"},{id:"i45ee",url:"http://1.bp.blogspot.com/-ID9Z1kNVUAg/Tq1zu805LoI/AAAAAAAABDo/LHKPiAu281s/s1600/Screen+shot+2011-10-30+at+11.33.58+AM.png",comment:"Its sucks"},{id:"i3435g",url:"https://static.fusionmovies.to/images/movies/c-xLM3jDgNOq1sduBkKLqpUJMAiuPIPqDYZpjzV3sNotEyg0o6x5FlMTQGpdRv6D54yV4AmOTOtiucAY1H9PRbCqi3Zn2loGNOfL7B_ENgU.jpg?1",comment:"Do you like this job?"},{id:"i45fe",url:"https://yandex-images.clstorage.net/pFa5o1214/4a4f3bhMdM_/cIu4Q39g04VIR3b23dBmTXwpQjYsNIxLO7wLnLh1xHt3--VDwcoNuwSjtZEa9boBJjegjzFUWwifCP_4pPaHbKUbq0W48xEFCEe1tJsSJ4--KoA3KTVM3S5634nqIlMpZjnkjRrUEXMe6XmNUqqnkrL0t5q2E0tbhUY8pDEiV3-4Q_3EMvabhccW-3TWmqxB7mGGeX97XQMzolUAYvCUY2-l-Y9X1plyGCG0ihsjohK2dP_WMYHN1MuErO7-JFM6voj7wz6zlE2GmHt6mlzjh-LjRvb6MxCFuGhRQKx-Vuam6vIMlBpVuJ9ndwSbpK_Uufq22nyLQh5MC6EhMmsefraHe0S5MZSHydh7fNtdoYpvK043t75QQfAoWUGq-hduqS89Tpxdkj9Qrz7PVmrtmvFz81G5hY7eCQLv4D8vWLz5BHGPebbTTMrRtLDd3CXALKND9_FzF437J5zGL3zZJujjNk8R2BO2U255jB5h7l62t_zVu0NF0wZIYOz46B_xss_7irIy1odE0rF30hHhCy5oz3P8_ZXPcGieSWg6ES-mJPXAH9XRdRUh_UWR5CmYd73-2nRFidBIyaqheaneOLNGdAuwcRtNj568e9uYK8csqY-7s7VQiLyrlIPodVRv5Cx9j5gYVDbYbDOCXWko3L89vJ68xI9axgElZj7sUPu1BHYKefcVxgHasfxbEKvAJKkGunuykkW4bhMGo3GU7i6oM8dclJ33Uynxj11lIZg0tTNRvYwPXoPCLSAxp19_u8vxhvi3HUlMGLq1FRwqSazgwbb2tZDPOS-bz6_6EeRrK_kJl5Uc8ZCs9s6ZIG3Qd_p3GfCEzhIDAGnnsS_feT5GfIH1_lPEypkzclAabQvlIch1PjXfiHbt3kLqMhniaCc5RFCUl3_a4T6MkqQgln56Nx_7C4peAkEqqHmkGLRwBnzEMjoRDoHd9ryfWy0Aq6SFO_mw0Yi85dsAog",comment:"They are loock like we"},{id:"irert3",url:"https://i.ytimg.com/vi/atY-8hlN77U/maxresdefault.jpg",comment:"Check this out!"}]);var j={picturesData:l()},b={hidden:!0,index:1},m=Object(a.a)({galleryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_COMMENT":var n=t.comment,c=t.id,i=e.picturesData,r=i.findIndex((function(e){return e.id===c})),s=Object(d.a)(i);return s[r].comment=n,u(s),Object(o.a)(Object(o.a)({},e),{},{picturesData:s});case"ADD_PHOTO":return function(){var n=[{id:t.id,url:t.url,comment:t.comment}],c=[].concat(Object(d.a)(e.picturesData),n);return u(c),Object(o.a)(Object(o.a)({},e),{},{picturesData:c})}();case"DELETE_PHOTO":return function(){var n=t.id,c=e.picturesData,i=c.findIndex((function(e){return e.id===n})),r=[].concat(Object(d.a)(c.slice(0,i)),Object(d.a)(c.slice(i+1)));return u(r),Object(o.a)(Object(o.a)({},e),{},{picturesData:r})}();default:return e}},sliderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return"SHOW_SLIDER"===t.type?Object(o.a)(Object(o.a)({},e),{},{hidden:t.hidden,index:t.index}):e}}),h=(n(24),n(25),n(26),n(4)),p=n(1),O=function(e){var t=e.data,n=Object(c.useState)(""),i=Object(h.a)(n,2),r=i[0],a=i[1],o=t.comment,d=Object(s.b)();Object(c.useEffect)((function(){o&&a(o)}),[o]);return Object(p.jsxs)("form",{className:"comment-form",onSubmit:function(e){e.preventDefault(),d({type:"EDIT_COMMENT",comment:r,id:t.id})},children:[Object(p.jsx)("input",{onChange:function(e){a(e.target.value)},value:r,className:"comment"}),Object(p.jsx)("input",{type:"submit",hidden:!0})]})},f=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.galleryReducer.picturesData})),n=function(t){e({type:"SHOW_SLIDER",hidden:!1,index:+t.target.id+1})};return Object(p.jsx)("ul",{className:"gallery-wrapper",children:t.map((function(t,c){return Object(p.jsxs)("li",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"img-wrapper",children:[Object(p.jsx)("img",{id:c,onClick:n,alt:t.comment,src:t.url}),Object(p.jsx)("button",{className:"close-button",id:t.id,onClick:function(){return n=t.id,e({type:"DELETE_PHOTO",id:n});var n},children:Object(p.jsxs)("svg",{width:"30",height:"32",viewBox:"0 0 30 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("path",{d:"M2.43964 29.2319L27.9026 3.76902",stroke:"#A70000",strokeWidth:"4",strokeLinecap:"round"}),Object(p.jsx)("path",{d:"M2.26807 2.93963L27.731 28.4025",stroke:"#A70000",strokeWidth:"4",strokeLinecap:"round"})]})})]}),Object(p.jsx)(O,{data:t})]},t.id)}))})},x=(n(28),function(e){e.i;var t=Object(s.b)(),n=Object(s.c)((function(e){return e.sliderReducer})),i=n.hidden,r=n.index,a=Object(c.useState)(0),o=Object(h.a)(a,2),d=o[0],u=o[1];Object(c.useEffect)((function(){u(r)}),[r]);var l=Object(s.c)((function(e){return e.galleryReducer.picturesData}));return Object(p.jsx)("div",{className:"slider-wrapper",hidden:i,onClick:function(e){"slider-wrapper"===e.target.className&&t({type:"SHOW_SLIDER",hidden:!0})},children:Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsx)("button",{className:"slider-button prev-slide",onClick:function(){1!==d?u(d-1):1===d&&u(l.length)},children:Object(p.jsx)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M9 1L1 10L9 19",stroke:"#EEEEEE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(p.jsx)("button",{className:"slider-button next-slide",onClick:function(){d!==l.length?u(d+1):d===l.length&&u(1)},children:Object(p.jsx)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M1 1L9 10L1 19",stroke:"#EEEEEE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(p.jsx)("ul",{className:"slider-breadcrumbs-list",children:l.map((function(e,t){return Object(p.jsx)("li",{className:d===t+1?"slider-breadcrumbs-list-item slider-breadcrumbs-list-item_active":"slider-breadcrumbs-list-item",onClick:function(){return function(e){u(e)}(t+1)},children:Object(p.jsx)("img",{alt:e.comment,src:e.url})},e.id)}))}),l.map((function(e,t){return Object(p.jsxs)("div",{className:d===t+1?"slide":"hidden-slide",children:[Object(p.jsx)("img",{alt:e.comment,src:l[t].url}),Object(p.jsx)("div",{className:"slide-comment",children:e.comment})]},e.id)}))]})})}),g=(n(29),n(13)),v=n.n(g),w=function(){var e=Object(s.b)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(""),o=Object(h.a)(a,2),d=o[0],u=o[1];return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_PHOTO",url:i,comment:d,id:v()()}),r(""),u("")},className:"add-photo-form",children:[Object(p.jsxs)("div",{className:"input-wrapper",children:[Object(p.jsx)("input",{type:"text",placeholder:"enter url",value:i,onChange:function(e){r(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"enter comment",value:d,onChange:function(e){u(e.target.value)}})]}),Object(p.jsx)("input",{type:"submit",value:"enter"}),Object(p.jsx)("h4",{children:"press enter to add a new photo"})]})};var E=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(w,{}),Object(p.jsx)(f,{}),Object(p.jsx)(x,{})]})},k=Object(a.b)(m);r.a.render(Object(p.jsx)(s.a,{store:k,children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b10ee771.chunk.js.map