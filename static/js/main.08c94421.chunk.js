(this.webpackJsonptlcj_music_temp=this.webpackJsonptlcj_music_temp||[]).push([[0],{46:function(e,t,c){},56:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),s=c(19),o=c.n(s),r=(c(46),c(11)),l=c.n(r),j=c(9),b=function(e){return Object(n.jsxs)("div",{className:"homePanel",children:[Object(n.jsxs)("div",{className:e.mobile?"homeNavMobile":"homeNav",children:[Object(n.jsx)(j.a,{to:"/music",children:Object(n.jsx)("span",{className:"panelItem",id:"musicLink",children:"Music"})}),Object(n.jsx)(j.a,{to:"/blog",children:Object(n.jsx)("span",{className:"panelItem",id:"blogLink",children:"Blog"})}),Object(n.jsx)(j.a,{to:"/about",children:Object(n.jsx)("span",{className:"panelItem",id:"aboutLink",children:"About"})}),Object(n.jsx)(j.a,{to:"socials",children:Object(n.jsx)("span",{className:"panelItem",id:"socialsLink",children:"Socials"})})]}),Object(n.jsx)("div",{className:"introText",style:{fontSize:e.mobile?"10pt":"12pt",lineHeight:e.mobile?"1.3":"1.6"},children:Object(n.jsxs)("p",{children:[Object(n.jsx)("h3",{children:"Prob insert some updates here"}),"Ut esse eu reprehenderit sunt amet Lorem enim do exercitation dolor dolore cupidatat. Tempor nulla ex fugiat duis"]})})]})},d=c(16),u=c(36),m=function(e){var t=e.fixed;return Object(n.jsxs)("div",{id:t?"footerFixed":"footer",children:["Made with ",Object(n.jsx)(d.a,{icon:u.a,style:{color:"red"}})," by ",Object(n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://tabbycat01.github.io/",children:"Gerald"})]})},h=function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/tlcj_music",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER_URL:"https://tlcj-backend.herokuapp.com"}));var e="https://tlcj-backend.herokuapp.com";return Object(n.jsxs)("div",{className:"appear",children:[Object(n.jsx)("img",{id:"brand",src:"https://tlcj-backend.herokuapp.com/static/images/sig-logo.jpg",alt:"signatureLogo"}),Object(n.jsx)(l.a,{minDeviceWidth:541,children:Object(n.jsx)(b,{mobile:!1})}),Object(n.jsx)(l.a,{maxDeviceWidth:540,children:Object(n.jsx)(b,{mobile:!0})}),Object(n.jsx)(m,{fixed:!0}),Object(n.jsx)("div",{className:"fadingBackgrounds",children:[1,2,3,4,5,6,7,8].map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"".concat(e,"/static/images/pic").concat(t,".jpg"),alt:"pic".concat(t),className:"f".concat(t)})})}))})]})},p=c(17),O=(c(56),c(37)),x=c.n(O),g=function(e){return Object(n.jsx)(x.a,{children:Object(n.jsxs)("nav",{children:[Object(n.jsx)(j.a,{to:"/",children:Object(n.jsx)("img",{id:"brandTopLeft",src:"https://tlcj-backend.herokuapp.com/static/images/sig-logo.jpg",alt:"signatureLogo"})}),Object(n.jsxs)("div",{className:e.mobile?"navbarMobile":"navbar",children:[Object(n.jsx)(j.a,{to:"/music",children:Object(n.jsx)("span",{className:e.mobile?"navbarMobileItem":"navbarItem",id:"musicLinkTop",children:"Music"})}),Object(n.jsx)(j.a,{to:"/blog",children:Object(n.jsx)("span",{className:e.mobile?"navbarMobileItem":"navbarItem",id:"blogLinkTop",children:"Blog"})}),Object(n.jsx)(j.a,{to:"/about",children:Object(n.jsx)("span",{className:e.mobile?"navbarMobileItem":"navbarItem",id:"aboutLinkTop",children:"About"})}),Object(n.jsx)(j.a,{to:"/socials",children:Object(n.jsx)("span",{className:e.mobile?"navbarMobileItem":"navbarItem",id:"socialsLinkTop",children:"Socials"})})]})]})})},v=(c.p,c(25)),f=(c(62),c(38)),k=c(39),N=c.n(k),S=function(e){var t=e.url,c=e.isSelected;return Object(n.jsx)(N.a,{width:"100%",url:t,playing:c,controls:!0})},T=function(e,t){return Object(n.jsx)(e.type,Object(v.a)(Object(v.a)({},e.props),t))},_=function(e){return"https://img.youtube.com/vi/".concat(e,"/default.jpg")},w=function(e){return e.map((function(e){var t,c=(t=e.props.url).substr("https://www.youtube.com/embed/".length,t.length);return Object(n.jsx)("img",{src:_(c)})}))},y=function(e){var t=e.clips;return Object(n.jsx)(f.Carousel,{renderItem:T,renderThumbs:w,children:t.map((function(e,t){return Object(n.jsx)(S,{url:"https://www.youtube.com/embed/".concat(e.id)},"".concat(e.type,"-").concat(t))}))})},C=(c(85),{background:"url(".concat("https://tlcj-backend.herokuapp.com","/static/images/pic2.jpg) no-repeat center center fixed"),WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover",backgroundSize:"cover",minWidth:"100%",minHeight:"100%",top:"0",left:"0",objectFit:"cover",position:"absolute"}),I=function(){var e=Object(i.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),o=Object(p.a)(s,2),r=o[0],j=o[1],b=Object(i.useState)([]),d=Object(p.a)(b,2),u=d[0],h=d[1],O=[];return Object(i.useEffect)((function(){fetch("".concat("https://tlcj-backend.herokuapp.com","/v1/api/music")).then((function(e){return e.json()})).then((function(e){e.pinned.map((function(e){var t=e[1].split("?v=")[1],c=e[4];O=O.concat({id:t,type:c})})),a(O),O=[],e.originals.map((function(e){O=O.concat({title:e[0],link:e[1]})})),j(O),O=[],e.covers.map((function(e){O=O.concat({title:e[0],link:e[1]})})),h(O)}))}),[]),Object(n.jsxs)("div",{style:C,children:[Object(n.jsx)(l.a,{minDeviceWidth:769,children:Object(n.jsx)(g,{mobile:!1})}),Object(n.jsx)(l.a,{maxDeviceWidth:768,children:Object(n.jsx)(g,{mobile:!0})}),Object(n.jsxs)("div",{className:"musicPageContent",children:[Object(n.jsx)("h1",{className:"reelTitle",children:"Pinned"}),Object(n.jsx)(y,{clips:c}),Object(n.jsxs)("div",{className:"colContainer",children:[Object(n.jsx)("h3",{className:"colTitle",children:"Originals"}),Object(n.jsx)("ul",{className:"songTitle",children:r.map((function(e,t){return Object(n.jsx)("li",{className:"indivTitle",children:Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})},t)}))})]}),Object(n.jsxs)("div",{className:"colContainer",children:[Object(n.jsx)("h3",{className:"colTitle",children:"Covers"}),Object(n.jsx)("ul",{className:"songTitle",children:u.map((function(e,t){return Object(n.jsx)("li",{className:"indivTitle",children:Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})},t)}))})]})]}),Object(n.jsx)(m,{})]})},L=function(e){var t=e.mobile,c=e.link,i=e.logo,a=e.text;return Object(n.jsx)("div",{className:t?"mobileSocialPanel":"socialPanel",children:Object(n.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)(d.a,{icon:i,style:{fontSize:"24pt"}}),Object(n.jsx)("span",{className:"socialsText",children:a})]})})},P=c(13),E={background:"url(".concat("https://tlcj-backend.herokuapp.com","/static/images/pic8.jpg) no-repeat center center fixed"),WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover",backgroundSize:"cover",minWidth:"100%",minHeight:"100%",top:"0",left:"0",objectFit:"cover",position:"absolute"},M=[["https://www.instagram.com/laychun_tan/?hl=en",P.b,"MY INSTAGRAM"],["https://www.instagram.com/laychuncovers/?hl=en",P.b,"COVERS INSTAGRAM"],["https://www.youtube.com/channel/UCICKCQ2i3eFkPXXW51p5PJg",P.d,"YOUTUBE"],["https://www.facebook.com/laychuntan/",P.a,"FACEBOOK"],["https://soundcloud.com/tan-lay-chun",P.c,"SOUNDCLOUD"]],B=function(e){return Object(n.jsxs)("div",{style:E,children:[Object(n.jsxs)(l.a,{minDeviceWidth:769,children:[Object(n.jsx)(g,{mobile:!1}),Object(n.jsx)("div",{className:"socialPanels",children:M.map((function(e){return Object(n.jsx)(L,{mobile:!1,link:e[0],logo:e[1],text:e[2]})}))})]}),Object(n.jsxs)(l.a,{maxDeviceWidth:768,children:[Object(n.jsx)(g,{mobile:!0}),Object(n.jsx)("div",{className:"mobileSocialPanels",children:M.map((function(e){return Object(n.jsx)(L,{mobile:!0,link:e[0],logo:e[1],text:e[2]})}))})]}),Object(n.jsx)(m,{})]})},W=c(3),D=(c(86),c(40)),z=c.n(D)()({basename:"/tlcj_music"});var A=function(){return Object(n.jsx)(W.b,{history:z,children:Object(n.jsxs)(W.c,{children:[Object(n.jsx)(W.a,{path:"/socials",children:Object(n.jsx)(B,{})}),Object(n.jsx)(W.a,{path:"/music",children:Object(n.jsx)(I,{})}),Object(n.jsx)(W.a,{exact:!0,path:"/",children:Object(n.jsx)(h,{})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),F()}},[[90,1,2]]]);
//# sourceMappingURL=main.08c94421.chunk.js.map