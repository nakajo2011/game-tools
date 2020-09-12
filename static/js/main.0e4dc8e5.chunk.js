(this["webpackJsonpgame-tools"]=this["webpackJsonpgame-tools"]||[]).push([[0],{68:function(e,a,t){e.exports=t(80)},73:function(e,a,t){},74:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(73),t(74),t(120)),i=t(121),d=t(122),s=t(118),u=t(111),m=t(119),p=t(31),f=t(126),h=t(114),g=t(115),b=t(116),v=t(117),E=t(123),k=t(40),x=t(4),y=t(125),j=t(47),O=t(48),w=t(49),S=t(11),C=t(37);var N,A=function(e,a,t){for(var n=function(e,a){return Array.from(Array(a-e+1).keys()).map((function(a){return a+e}))}(e,a),r=[],c=0;c<t;c++)r=r.concat(n);return{deck:function(e){for(var a=Array.from(e),t=a.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=a[t];a[t]=a[n],a[n]=r}return a}(r),hand:[],trash:[],color:""}},F=function(){var e=A(1,10,1);return e.color="#ffffff",e}(),P=Object(C.b)({name:"cardsState",initialState:F,reducers:{generate:function(e,a){var t=a.payload,n=A(t.min,t.max,t.deckSet);e.deck=n.deck,e.hand=n.hand,e.trash=n.trash},draw:function(e,a){var t=e.deck,n=e.hand;if(t.length>0){var r=t.pop()||0;n.push(r)}e.deck=t,e.hand=n},trash:function(e,a){var t=a.payload;e.hand=e.hand.filter((function(e){return e!==t})),e.trash.push(t)},revert:function(e,a){var t=a.payload;e.trash=e.trash.filter((function(e){return e!==t})),e.hand.push(t)},setColor:function(e,a){var t=a.payload;e.color=t}}}),R=P.actions,B=(R.generate,R.draw,R.trash,R.revert,P),_=Object(u.a)((function(e){return{fieldset:{width:"100%",display:"inline-block",marginBottom:e.spacing(2)}}})),z={400:"#f0f0f0",600:"#fcfcfc",bg:"#666666"},G=(N={},Object(k.a)(N,"red",j.a[100]),Object(k.a)(N,"orange",O.a[100]),Object(k.a)(N,"green",w.a[100]),Object(k.a)(N,"white","#ffffff"),N);function M(){var e=Object(S.b)(),a=_(),t=r.a.useState("white"),n=Object(p.a)(t,2),c=n[0],l=n[1],o=function(e,a){return Object(x.a)({root:{backgroundColor:e.bg,color:e[400],"&$checked":{color:e[600]}},checked:{}})((function(e){return r.a.createElement(y.a,Object.assign({color:"default",checked:c===a,value:a},e))}))},i=function(a){l(a.target.value),function(a){e(B.actions.setColor(G[a]))}(a.target.value)},d=o(z,"white"),s=o(w.a,"green"),u=o(j.a,"red"),m=o(O.a,"orange");return r.a.createElement(f.a,{component:"div",className:a.fieldset},r.a.createElement(h.a,null,"\u30ab\u30fc\u30c9\u306e\u8272 "),r.a.createElement(d,{onChange:i,name:"radio-button-white",inputProps:{"aria-label":"W"}}),r.a.createElement(u,{onChange:i,name:"radio-button-red",inputProps:{"aria-label":"A"}}),r.a.createElement(m,{onChange:i,name:"radio-button-orange",inputProps:{"aria-label":"B"}}),r.a.createElement(s,{onChange:i,name:"radio-button-green",inputProps:{"aria-label":"C"}}))}var W=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{width:"40%"},fieldset:{borderRadius:"10px",border:"1px solid",padding:"8px",width:"100%"},divider:{margin:e.spacing(2)}}}));function J(){var e=W();function a(a){var t=a.type,c=a.label,l=a.num,o=Object(n.useState)(l),i=Object(p.a)(o,2),d=i[0],s=i[1];return[d,r.a.createElement(E.a,{id:"standard-number-max",className:e.input,label:c,type:t,size:"small",value:d,onChange:function(e){return s(Number(e.target.value))}})]}var t=a({type:"number",label:"min",num:1}),c=Object(p.a)(t,2),l=c[0],o=c[1],i=a({type:"number",label:"max",num:10}),d=Object(p.a)(i,2),s=d[0],u=d[1],m=a({type:"number",label:"Set",num:1}),k=Object(p.a)(m,2),x=k[0],y=k[1],j=Object(S.b)();return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(f.a,{component:"fieldset",className:e.fieldset},r.a.createElement(h.a,{component:"legend"},"\u30c7\u30c3\u30ad\u30bb\u30c3\u30c6\u30a3\u30f3\u30b0"),o,r.a.createElement(g.a,null,"\u304b\u3089"),u,r.a.createElement(g.a,null,"\u307e\u3067\u306e\u30ab\u30fc\u30c9\u3092"),y,r.a.createElement(g.a,null,"\u30bb\u30c3\u30c8\u6301\u3064\u30c7\u30c3\u30ad\u3092\u4f5c\u6210"),r.a.createElement(b.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var e={min:l,max:s,deckSet:x};j(B.actions.generate(e))}()}},"\u4f5c\u6210"),r.a.createElement(v.a,{variant:"middle",className:e.divider}),r.a.createElement(M,null)))}var $=t(124),I=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{width:"40%"},fieldset:{borderRadius:"10px",border:"1px solid",padding:"8px",width:"100%"}}}));function L(){var e=I(),a=Object(S.c)((function(e){return e.cardsState}));return r.a.createElement(f.a,{component:"fieldset",className:e.fieldset},r.a.createElement(h.a,{component:"legend"},"\u30c7\u30c3\u30ad\u60c5\u5831"),r.a.createElement($.a,null,"\u6b8b\u308a\u306e\u30ab\u30fc\u30c9 ",a.deck.length,"\u679a"),r.a.createElement($.a,null,"\u624b\u672d\u30ab\u30fc\u30c9 ",a.hand.length,"\u679a"),r.a.createElement($.a,null,"\u6368\u3066\u672d\u30ab\u30fc\u30c9 ",a.trash.length,"\u679a"))}function T(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(L,null))}var V=t(82);function q(e){var a,t=Object(S.c)((function(e){return e.cardsState.color})),n=(a=t,Object(u.a)((function(e){return{paper:{padding:e.spacing(2),marginLeft:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block",background:a},deckPaper:{position:"absolute",padding:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block",background:a}}}))());return r.a.createElement(V.a,Object.assign({className:e.deck?n.deckPaper:n.paper,elevation:2},e))}var D=Object(u.a)((function(e){return{paper:{position:"absolute",padding:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block"},cardSheet:{position:"relative",height:e.spacing(32)}}}));function H(){var e=Object(S.b)(),a=Object(S.c)((function(e){return e.cardsState.deck})),t=D();return r.a.createElement(s.a,{fixed:!0,className:t.cardSheet},function(e,a){for(var t=100,n=[],c=0;c<e-1;c++){var l={top:t+"px",left:"68px"},o=r.a.createElement(q,{deck:!0,style:l,elevation:2,key:"deck_"+c});n.push(o),t-=4}return r.a.createElement("div",null,n)}(a.length),function(){if(a.length>0)return r.a.createElement(q,{deck:!0,style:{top:(t=a.length,100-4*(t-1)+"px"),left:"68px"},onClick:function(){return e(B.actions.draw())},key:"deck_"+(a.length-1)});var t}())}var K=t(45),Q=Object(u.a)((function(e){return{handSheet:{display:"inline-block",height:e.spacing(32)}}}));function U(){var e,a=Object(S.b)(),t=Object(S.c)((function(e){return e.cardsState.hand})),n=Q(),c=[],l=Object(K.a)(t);try{var o=function(){var t=e.value;c.push(r.a.createElement(q,{key:"hand_"+t,onClick:function(){return e=t,a(B.actions.trash(e));var e}},r.a.createElement($.a,{fontSize:32},t)))};for(l.s();!(e=l.n()).done;)o()}catch(i){l.e(i)}finally{l.f()}return r.a.createElement(s.a,{fixed:!0,className:n.handSheet},c)}var X=Object(u.a)((function(e){return{handSheet:{display:"inline-block",height:e.spacing(32)}}}));function Y(){var e,a=Object(S.b)(),t=Object(S.c)((function(e){return e.cardsState.trash})),n=X(),c=[],l=Object(K.a)(t);try{var o=function(){var t=e.value;c.push(r.a.createElement(q,{key:"hand_"+t,onClick:function(){return e=t,a(B.actions.revert(e));var e}},r.a.createElement($.a,{fontSize:32},t)))};for(l.s();!(e=l.n()).done;)o()}catch(i){l.e(i)}finally{l.f()}return r.a.createElement(s.a,{fixed:!0,className:n.handSheet},c)}var Z=Object(u.a)((function(e){return{root:{flexGrow:1,height:"100%"},paper:{position:"absolute",padding:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block"},container:{margin:e.spacing(1),padding:e.spacing(1),backgroundColor:e.palette.primary.light},deckField:{borderRadius:"10px",border:"2px solid",borderColor:e.palette.grey.A100},trashField:{borderRadius:"10px",border:"2px solid",borderColor:e.palette.secondary.light},handField:{borderRadius:"10px",border:"2px solid",borderColor:e.palette.primary.light,height:"40%"}}}));function ee(){var e=Z();return r.a.createElement(s.a,{fixed:!0,className:e.root},r.a.createElement(m.a,{container:!0,spacing:1},r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(s.a,{component:"fieldset",className:e.deckField},r.a.createElement(g.a,{component:"legend"},"\u5c71\u672d\u30d5\u30a3\u30fc\u30eb\u30c9"),r.a.createElement(H,null))),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(s.a,{component:"fieldset",className:e.trashField},r.a.createElement(g.a,{component:"legend"},"\u6368\u3066\u672d\u30d5\u30a3\u30fc\u30eb\u30c9"),r.a.createElement(Y,null)))),r.a.createElement("div",{style:{padding:"8px 0 0 0"}}),r.a.createElement(s.a,{component:"fieldset",className:e.handField},r.a.createElement(g.a,{component:"legend"},"\u624b\u672d\u30d5\u30a3\u30fc\u30eb\u30c9"),r.a.createElement(U,null)))}var ae=Object(u.a)((function(e){return{offset:e.mixins.toolbar,root:{flexGrow:1,height:"100vh"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var te=function(){var e=ae();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{position:"fixed",color:"primary"},r.a.createElement(i.a,null,r.a.createElement(d.a,{variant:"h4",color:"inherit"},"Game Tools"))),r.a.createElement("div",{className:e.offset}),r.a.createElement(s.a,{fixed:!0,className:e.root},r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,spacing:1},r.a.createElement(m.a,{item:!0,xs:9},r.a.createElement(ee,null)),r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(s.a,{color:"secondary"},r.a.createElement(T,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=t(16),re=Object(ne.c)({cardsState:B.reducer}),ce=Object(C.a)({reducer:re});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,{store:ce},r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.0e4dc8e5.chunk.js.map