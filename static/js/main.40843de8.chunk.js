(this["webpackJsonpcosy-test"]=this["webpackJsonpcosy-test"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(4),r=c.n(n),i=c(2),o=c(6),l=c(3),a={picturesData:[{url:"/assets/bb/2.jpg",comment:"It was cool!"},{url:"/assets/bb/3.jpg",comment:"Such a tasty food!"},{url:"/assets/bb/4.jpg",comment:"You are asshole"},{url:"/assets/bb/5.jpg",comment:"Its sucks"},{url:"/assets/bb/6.jpg",comment:"Do you like this job?"},{url:"/assets/bb/7.jpg",comment:"They are loock like we"},{url:"/assets/bb/8.jpg",comment:"Check this out!"}]},d={hidden:!0,index:1},u=Object(o.a)({galleryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;return"EDIT_COMMENT"===t.type?(console.log("editComment"),Object(l.a)({},e)):e},sliderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return"SHOW_SLIDER"===t.type?(console.log("showslider"),Object(l.a)(Object(l.a)({},e),{},{hidden:t.hidden,index:t.index})):e}}),b=(c(20),c(21),c(22),c(5)),j=(c(23),c(1)),m=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return console.log(e),e.galleryReducer.picturesData})),c=(Object(i.c)((function(e){return console.log(e.sliderReducer),e.sliderReducer})),Object(s.useState)(!1)),n=Object(b.a)(c,2),r=(n[0],n[1],function(t){console.log(t.target),e({type:"SHOW_SLIDER",hidden:!1,index:+t.target.id+1})}),o=function(e){e.target.classList.contains("big")&&(e.target.classList.remove("big"),e.target.classList.add("small"))};return Object(j.jsx)("ul",{className:"gallery-wrapper",children:t.map((function(e,t){return Object(j.jsxs)("li",{className:"card-wrapper",children:[Object(j.jsx)("div",{className:"img-wrapper",onClick:o,children:Object(j.jsx)("img",{id:t,onClick:r,alt:e.comment,src:"".concat("/cosy-test").concat(e.url)})}),Object(j.jsx)("input",{value:e.comment,className:"comment",onClick:function(e){return console.log(e.target)}})]})}))})},h=(c(25),function(e){e.i;var t=Object(i.b)(),c=Object(i.c)((function(e){return console.log(e.sliderReducer),e.sliderReducer})),n=c.hidden,r=c.index,o=Object(s.useState)(0),l=Object(b.a)(o,2),a=l[0],d=l[1];Object(s.useEffect)((function(){d(r)}),[r]);var u=Object(i.c)((function(e){return console.log(e),e.galleryReducer.picturesData}));return Object(j.jsx)("div",{className:"slider-wrapper",hidden:n,onClick:function(e){"slider-wrapper"===e.target.className&&t({type:"SHOW_SLIDER",hidden:!0})},children:Object(j.jsxs)("div",{className:"slider",children:[Object(j.jsx)("button",{className:"slider-button prev-slide",onClick:function(){1!==a?d(a-1):1===a&&d(u.length)},children:Object(j.jsx)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M9 1L1 10L9 19",stroke:"#EEEEEE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(j.jsx)("button",{className:"slider-button next-slide",onClick:function(){a!==u.length?d(a+1):a===u.length&&d(1)},children:Object(j.jsx)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M1 1L9 10L1 19",stroke:"#EEEEEE",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"})})}),Object(j.jsx)("ul",{className:"slider-breadcrumbs-list",children:u.map((function(e,t){return Object(j.jsx)("li",{className:a===t+1?"slider-breadcrumbs-list-item slider-breadcrumbs-list-item_active":"slider-breadcrumbs-list-item",onClick:function(){return function(e){d(e)}(t+1)},children:Object(j.jsx)("img",{src:"".concat("/cosy-test").concat(e.url)})},t+1)}))}),u.map((function(e,t){return Object(j.jsxs)("div",{className:a===t+1?"slide":"hidden-slide",children:[Object(j.jsx)("img",{src:"".concat("/cosy-test").concat(u[t].url)}),Object(j.jsx)("div",{className:"slide-comment",children:e.comment})]},t+1)}))]})})});console.log(document.location.href);var g=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsx)(h,{})]})},O=Object(o.b)(u);r.a.render(Object(j.jsx)(i.a,{store:O,children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.40843de8.chunk.js.map