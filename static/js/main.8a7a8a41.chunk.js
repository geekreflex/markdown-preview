(this["webpackJsonpmarkdown-preview"]=this["webpackJsonpmarkdown-preview"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"data":{"light":{"id":"T_001","name":"Light","colors":{"primary":"#ffffff","secondary":"#f6f8fa","fade":"#ddd","border":"#e1e4e8","text":"#333","textbg":"#ddd","background":"#000","link":{"text":"00213d","opacity":1},"icon":{"color1":"#555","color2":"#181818","color3":"#ddd"}},"font":"Lato"},"dark":{"id":"T_007","name":"Dark","colors":{"primary":"#090c10","secondary":"#161b22","fade":"#0d1117","border":"#30363d","text":"#ddd","textbg":"#292d3e","background":"#0d47a1","link":{"text":"#0366d6","active":"cyan","visited":"#lightblue","opacity":0.8},"icon":{"color1":"#999","color2":"#fff","color3":"#888"}},"font":"Ubuntu"}}}')},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var o,r,c,i,s,a,d,l,u,b,h,f,j,p=t(0),m=t.n(p),x=t(11),g=t.n(x),O=t(5),v=t(3),w=t(2),k=t(1),y=w.c.header(o||(o=Object(v.a)(["\n  width: 100%;\n  background: ",";\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.border})),S=w.c.div(r||(r=Object(v.a)(["\n  display: flex;\n  padding: 0 20px;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n"]))),F=function(){return Object(k.jsx)(y,{className:"hdMain",children:Object(k.jsxs)(S,{className:"hdWrap",children:[Object(k.jsx)("div",{className:"hdLeft",children:"left stuffs"}),Object(k.jsx)("div",{className:"hdRight",children:"right stuffs"})]})})},N=t(4),z=w.c.div(c||(c=Object(v.a)([""]))),L=w.c.div(i||(i=Object(v.a)(["\n  display: flex;\n  font-size: 12px;\n  & div {\n    margin-left: 10px;\n  }\n"]))),C=function(){var e=Object(N.c)((function(e){return e.mark.editor})),n=e.selLen,t=e.cursorPos;return Object(k.jsx)(z,{children:t&&Object(k.jsxs)(L,{children:[Object(k.jsxs)("div",{children:["Ln ",Object(k.jsxs)("span",{children:[t.line+1||0,","]})]}),Object(k.jsxs)("div",{children:["Col ",Object(k.jsx)("span",{children:t.ch+1||0})]}),n>0&&Object(k.jsxs)("div",{children:["(",n," Selected)"]})]})})},M=w.c.div(s||(s=Object(v.a)([""]))),E=w.c.div(a||(a=Object(v.a)(["\n  display: flex;\n  font-size: 12px;\n  & div {\n    margin-right: 10px;\n  }\n"]))),T=function(){var e=Object(N.c)((function(e){return e.mark.markdown})),n=e.replace(/\s/g,"").length,t=e.trim().split(/\s+/).length;return Object(k.jsx)(M,{children:e&&Object(k.jsxs)(E,{children:[Object(k.jsxs)("div",{children:["Characters ",Object(k.jsx)("span",{children:n})]}),Object(k.jsxs)("div",{children:["Words ",Object(k.jsx)("span",{children:t})]})]})})},H=w.c.footer(d||(d=Object(v.a)(["\n  width: 100%;\n  background: ",";\n  border-top: 1px solid ",";\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.border})),P=w.c.div(l||(l=Object(v.a)(["\n  display: flex;\n  padding: 0 20px;\n  justify-content: space-between;\n  align-items: center;\n  height: 20px;\n"]))),W=function(){return Object(k.jsx)(H,{children:Object(k.jsxs)(P,{children:[Object(k.jsx)(T,{}),Object(k.jsx)(C,{})]})})},I=(t(39),t(40),t(41),t(42),function(e,n){window.localStorage.setItem(e,JSON.stringify(n))}),R=function(e){var n=window.localStorage.getItem(e);if(n)return JSON.parse(n)},J=t(13),q=Object(J.b)({name:"mark",initialState:{editor:{theme:null,len:0,cursorPos:{}},markdown:"",dispSet:!1},reducers:{getMarkdownFromStorage:function(e){var n=localStorage.getItem("markdown")?JSON.parse(localStorage.getItem("markdown")):null;n&&(e.markdown=n)},editorCursorPos:function(e,n){e.editor.cursorPos=n.payload},editorSelLen:function(e,n){e.editor.selLen=n.payload},displaySettings:function(e){e.dispSet=!e.dispSet}},extraReducers:{}}),D=q.actions,_=D.editorCursorPos,B=D.editorSelLen,V=D.displaySettings,X=D.getMarkdownFromStorage,Y=q.reducer,A=t(9),K=w.c.div(u||(u=Object(v.a)(["\n  position: absolute;\n  right: 30px;\n  top: 20px;\n  z-index: 1000;\n  color: ",";\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.icon.color1}),(function(e){return e.theme.colors.icon.color2}),(function(e){return e.theme.colors.icon.color3})),U=function(e){e.pane;return Object(k.jsx)(K,{onClick:function(){},children:Object(k.jsx)(A.b,{})})},G=t(22),Q=w.c.div(b||(b=Object(v.a)(["\n  position: relative;\n  height: 100%;\n  width: calc(50% - 5px);\n  min-width: 100px;\n  overflow-y: auto;\n"]))),Z=w.c.div(h||(h=Object(v.a)(["\n  height: 100%;\n  .code-mirror-editor {\n    height: 100% !important;\n  }\n"]))),$=function(e){var n=e.markdown,t=e.setMarkdown,o=e.editorPane,r=Object(N.b)(),c=R("theme")||"eclipse";return Object(k.jsxs)(Q,{ref:o,children:[Object(k.jsx)(U,{pane:o}),Object(k.jsx)(Z,{className:"editor-pane-inner",children:Object(k.jsx)(G.Controlled,{className:"code-mirror-editor",onBeforeChange:function(e,n,o){t(o),console.log(e)},onKeyDown:function(){r(X())},cursor:{line:5,ch:10},selection:{ranges:[{anchor:{ch:7,line:15},head:{ch:7,line:15}}],focus:!0},onCursor:function(e,n){var t=e.getCursor(),o={line:t.line,ch:t.ch};r(_(o))},onSelection:function(e,n){var t=e.getSelection(),o=t.length;console.log(t),r(B(o))},value:n,options:{lineWrapping:!0,mode:"markdown",lineNumbers:!0,theme:"Dark"===c.name?"material-palenight":"eclipse"}})})]})},ee=t(23),ne=t.n(ee),te=w.c.div(f||(f=Object(v.a)(["\n  position: relative;\n  height: 100%;\n  width: calc(50% - 5px);\n  min-width: 100px;\n  background: ",";\n"])),(function(e){return e.theme.colors.primary})),oe=w.c.div(j||(j=Object(v.a)(["\n  overflow-y: auto;\n  padding: 0 20px;\n  height: 100%;\n  & img {\n    margin: 0;\n    border: 0;\n  }\n\n  & p {\n    margin: 1em 0;\n  }\n\n  & a {\n    color: ",";\n  }\n\n  & a:visited {\n    color: ",";\n    background-color: transparent;\n  }\n\n  & a:active {\n    color: ",";\n    background-color: transparent;\n  }\n\n  & a:hover {\n    text-decoration: none;\n  }\n\n  & p img {\n    border: 0;\n    margin: 0;\n  }\n\n  & h1,\n  & h2,\n  & h3,\n  & h4,\n  & h5,\n  & h6 {\n    color: ",';\n    background-color: transparent;\n    margin: 1em 0;\n    font-weight: normal;\n  }\n\n  & h1 {\n    font-size: 180%;\n  }\n\n  & h2 {\n    font-size: 160%;\n  }\n\n  & h3 {\n    font-size: 140%;\n  }\n\n  & h4 {\n    font-size: 110%;\n  }\n\n  & h5 {\n    font-size: 105%;\n  }\n\n  & h6 {\n    font-size: 100%;\n  }\n\n  & dt {\n    font-style: italic;\n  }\n\n  & dd {\n    margin-bottom: 1.5em;\n  }\n\n  & li {\n    line-height: 1.5em;\n  }\n\n  & code {\n    padding: 0.1em;\n    font-size: 14px;\n    font-family: "Menlo", monospace;\n    background-color: ',";\n    border: 1px solid ",';\n  }\n\n  & pre {\n    font-family: "Menlo", monospace;\n    background-color: ',";\n    padding: 0.5em;\n    line-height: 1.25em;\n    // border: 1px solid #efefef;\n    // border-bottom: 1px solid #ddd;\n  }\n\n  & pre code {\n    background-color: transparent;\n    border-width: 0;\n    white-space: pre-wrap;\n  }\n\n  & blockquote {\n    padding-left: 20px;\n    border-left: 5px solid ",";\n  }\n\n  & table {\n    border-collapse: collapse;\n    border: 1px solid #efefef;\n    border-bottom: 1px solid #ddd;\n    -webkit-box-shadow: 0 1px 3px 0 #eee;\n    -moz-box-shadow: 0 1px 3px 0 #eee;\n    -ms-box-shadow: 0 1px 3px 0 #eee;\n    box-shadow: 0 1px 3px 0 #eee;\n  }\n\n  & td,\n  & th {\n    border: 1px solid #ddd;\n    padding: 0.5em;\n  }\n\n  & th {\n    background-color: transparent;\n  }\n"])),(function(e){return e.theme.colors.link.text}),(function(e){return e.theme.colors.link.visited}),(function(e){return e.theme.colors.link.active}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.textbg}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.textbg})),re=function(e){var n=e.markdown,t=e.previewPane,o=ne()(n);return Object(k.jsxs)(te,{className:"pane preview preview-pane",ref:t,children:[Object(k.jsx)(U,{pane:t}),Object(k.jsx)(oe,{dangerouslySetInnerHTML:{__html:o}})]})};var ce,ie,se,ae,de,le,ue,be,he,fe,je,pe,me,xe,ge=function(e){var n=Object(N.b)(),t="markdown",o=Object(p.useState)((function(){var n=localStorage.getItem(t);return null!=n?JSON.parse(n):"function"===typeof e?e():e})),r=Object(O.a)(o,2),c=r[0],i=r[1];return Object(p.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c)),n(X())}),[t,c]),[c,i]},Oe=w.c.div(ce||(ce=Object(v.a)(["\n  width: 50px;\n  background: ",";\n  height: 100%;\n"])),(function(e){return e.theme.colors.fade})),ve=w.c.div(ie||(ie=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  padding: 20px 0;\n\n  .icon {\n    font-size: 25px;\n    cursor: pointer;\n    padding: 5px;\n    color: ",";\n  }\n  .icon:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.icon.color1}),(function(e){return e.theme.colors.icon.color2})),we=function(){var e=Object(N.b)(),n=Object(p.useState)(!1),t=Object(O.a)(n,2),o=t[0],r=t[1];return Object(k.jsx)(Oe,{children:Object(k.jsxs)(ve,{children:[Object(k.jsx)("div",{className:"",children:Object(k.jsx)("div",{className:"icon",onClick:function(){var e=document.documentElement;o?(r(!1),document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()):(r(!0),e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())},children:Object(k.jsx)(A.a,{})})}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("div",{className:"icon",onClick:function(){e(V())},children:Object(k.jsx)(A.c,{})})})]})})},ke=Object(w.b)(se||(se=Object(v.a)(["\n * {\n  box-sizing: border-box;\n  }\n\n  body,html {\n    overflow: hidden;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    font-family: ",";\n    transition: all 0.50s linear;\n    margin: 0;\n    line-height: 1.67;\n\n  }\n\n  .CodeMirror {\n    height: 100% !important;\n    // overflow-y: auto;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.font})),ye=Object(w.b)(ae||(ae=Object(v.a)(["\n::-webkit-scrollbar {\n  height: 16px;\n  overflow: visible;\n  width: 16px;\n}\n\n::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: ",";\n  background-clip: padding-box;\n  border: solid transparent;\n  border-width: 1px 1px 1px 6px;\n  min-height: 28px;\n  padding: 100px 0 0;\n  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),\n    inset 0 -1px 0 rgba(0, 0, 0, 0.07);\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),\n    inset 0 -1px 0 rgba(0, 0, 0, 0.07);\n}\n\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  background-clip: padding-box;\n  border: solid transparent;\n  border-width: 0 0 0 4px;\n}\n\n"])),(function(e){return e.theme.colors.secondary})),Se=w.c.div(de||(de=Object(v.a)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: calc(100vh - 60px);\n  justify-content: space-between;\n  box-sizing: border-box;\n"]))),Fe=w.c.div(le||(le=Object(v.a)(["\n  width: 10px !important;\n  height: 100%;\n  background: ",";\n  cursor: col-resize;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-shadow: inset 0 0 2px #000000;\n"])),(function(e){return e.theme.colors.secondary})),Ne=function(e){var n=e.themeName,t=ge(""),o=Object(O.a)(t,2),r=o[0],c=o[1],i=Object(p.useRef)(null),s=Object(p.useRef)(null),a=Object(p.useRef)(null);return Object(p.useEffect)((function(){!function(e,n,t,o){var r;function c(c){var i={x:c.clientX-r.e.clientX,y:c.clientY-r.e.clientY};"H"===n&&(i.y=Math.min(Math.max(i.y,-r.elem1Width),r.elem2Width),e.style.left=r.offsetLeft+i.x+"px",t.style.width=r.elem1Width+i.x+"px",o.style.width=r.elem2Width-i.x+"px"),"V"===n&&(i.y=Math.min(Math.max(i.y,-r.elem1Height),r.elem2Height),e.style.top=r.offsetTop+i.y+"px",t.style.height=r.elem1Height+i.y+"px",o.style.height=r.elem2Height-i.y+"px")}e.onmousedown=function(n){r={e:n,offsetLeft:e.offsetLeft,offsetTop:e.offsetTop,elem1Width:t.offsetWidth,elem1Height:t.offsetHeight,elem2Width:o.offsetWidth,elem2Height:o.offsetHeight},document.onmousemove=c,document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}}(a.current,"H",i.current,s.current),window.addEventListener("resize",(function(){i.current.style.width="50%",s.current.style.width="50%"}))}),[]),Object(k.jsxs)(Se,{children:[Object(k.jsx)(ye,{}),Object(k.jsx)(we,{}),Object(k.jsx)($,{editorPane:i,markdown:r,setMarkdown:c,themeName:n}),Object(k.jsx)(Fe,{ref:a}),Object(k.jsx)(re,{previewPane:s,markdown:r})]})},ze=t(24),Le=t.n(ze),Ce=t(8),Me=t.n(Ce),Ee=function(){var e=R("all-themes"),n=Object(p.useState)(e.data.light),t=Object(O.a)(n,2),o=t[0],r=t[1],c=Object(p.useState)(!1),i=Object(O.a)(c,2),s=i[0],a=i[1];return Object(p.useEffect)((function(){var n=R("theme");r(n||e.data.light),a(!0)}),[]),{theme:o,themeLoaded:s,setMode:function(e){I("theme",e),r(e)},getFonts:function(){return Me.a.values(Me.a.mapValues(e.data,"font"))}}},Te=(t(46),t(12)),He=t(7),Pe=w.c.button(ue||(ue=Object(v.a)(["\n  cursor: pointer;\n  padding: 10px 20px;\n  margin-right: 5px;\n"]))),We=w.c.div(be||(be=Object(v.a)(["\n  display: flex;\n"]))),Ie=w.c.div(he||(he=Object(v.a)([""]))),Re=w.c.div(fe||(fe=Object(v.a)(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  padding: 10px 0;\n"])),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),Je=function(e){var n=R("all-themes"),t=Object(p.useState)(n.data),o=Object(O.a)(t,2),r=o[0],c=o[1],i=Object(p.useState)([]),s=Object(O.a)(i,2),a=s[0],d=s[1],l=Ee().setMode,u=function(n){l(n),e.setter(n)};Object(p.useEffect)((function(){d(Me.a.keys(r))}),[r]),Object(p.useEffect)((function(){e.newTheme&&b(e.newTheme)}),[e.newTheme]);var b=function(e){var n=Me.a.keys(e)[0],t=Object(He.a)(Object(He.a)({},r),{},Object(Te.a)({},n,e[n]));c(t)},h=function(e){return Object(k.jsx)(Pe,{onClick:function(){return u(e.theme)},children:e.theme.name})};return Object(k.jsx)(Ie,{children:Object(k.jsxs)(Re,{children:[Object(k.jsx)("h3",{children:"Themes"}),Object(k.jsx)(We,{children:a.length>0&&a.map((function(e){return Object(k.jsx)(h,{theme:r[e]},r[e].id)}))})]})})},qe=w.c.div(je||(je=Object(v.a)(["\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  padding: 20px;\n  width: 500px;\n"])),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),De=function(e){var n=e.setter;return Object(k.jsxs)(qe,{children:[Object(k.jsx)("h2",{children:"Appearance"}),Object(k.jsx)(Je,{setter:n})]})},_e=w.c.div(pe||(pe=Object(v.a)(["\n  background: ",";\n  position: fixed;\n  bottom: 20px;\n  left: 200px;\n  z-index: 1000;\n  border: 1px solid ",";\n  border-radius: 6px;\n  padding: 10px 0;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n"])),(function(e){return e.theme.colors.fade}),(function(e){return e.theme.colors.border})),Be=w.c.div(me||(me=Object(v.a)(["\n  h1 {\n    margin-left: 20px;\n  }\n"]))),Ve=function(e){var n=e.setter,t=Object(N.c)((function(e){return e.mark.dispSet}));return Object(k.jsx)(_e,{style:{display:t?"":"none"},children:Object(k.jsxs)(Be,{children:[Object(k.jsx)("h1",{children:"Settings"}),Object(k.jsx)(De,{setter:n})]})})},Xe=w.c.div(xe||(xe=Object(v.a)([""])));var Ye=function(){var e=Ee(),n=e.theme,t=e.themeLoaded,o=e.getFonts,r=Object(p.useState)(n),c=Object(O.a)(r,2),i=c[0],s=c[1];return Object(p.useEffect)((function(){s(n)}),[t,n]),Object(p.useEffect)((function(){Le.a.load({google:{families:o()}})}),[]),Object(k.jsx)(k.Fragment,{children:t&&Object(k.jsxs)(w.a,{theme:i,children:[Object(k.jsx)(ke,{}),Object(k.jsxs)(Xe,{style:{fontFamily:i.font},children:[Object(k.jsx)(Ve,{setter:s}),Object(k.jsx)(F,{}),Object(k.jsx)(Ne,{themeName:n}),Object(k.jsx)(W,{})]})]})})},Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))},Ke=Object(J.a)({reducer:{mark:Y},devTools:!0}),Ue=t(25);Ke.dispatch(X());var Ge=function(){return I("all-themes",Ue),Object(k.jsx)(Ye,{})};g.a.render(Object(k.jsx)(m.a.StrictMode,{children:Object(k.jsx)(N.a,{store:Ke,children:Object(k.jsx)(Ge,{})})}),document.getElementById("root")),Ae()}},[[47,1,2]]]);
//# sourceMappingURL=main.8a7a8a41.chunk.js.map