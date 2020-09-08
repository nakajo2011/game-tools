(this["webpackJsonpgame-tools"]=this["webpackJsonpgame-tools"]||[]).push([[0],{60:function(e,a,t){e.exports=t(72)},65:function(e,a,t){},66:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),i=(t(65),t(66),t(108)),o=t(109),s=t(110),d=t(106),u=t(101),m=t(107),p=t(37),h=t(115),f=t(104),g=t(105),b=t(113),v=t(111),E=t(12),x=t(34);var y=function(e,a,t){for(var n=function(e,a){return Array.from(Array(a-e+1).keys()).map((function(a){return a+e}))}(e,a),r=[],c=0;c<t;c++)r=r.concat(n);return{deck:function(e){for(var a=Array.from(e),t=a.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=a[t];a[t]=a[n],a[n]=r}return a}(r),hand:[],trash:[]}},k=Object(x.b)({name:"cardsState",initialState:y(1,10,1),reducers:{generate:function(e,a){var t=a.payload,n=y(t.min,t.max,t.deckSet);e.deck=n.deck,e.hand=n.hand,e.trash=n.trash},draw:function(e,a){var t=e.deck,n=e.hand;if(t.length>0){var r=t.pop()||0;n.push(r)}e.deck=t,e.hand=n},trash:function(e,a){var t=a.payload;e.hand=e.hand.filter((function(e){return e!==t})),e.trash.push(t)},revert:function(e,a){var t=a.payload;e.trash=e.trash.filter((function(e){return e!==t})),e.hand.push(t)}}}),j=k.actions,O=(j.generate,j.draw,j.trash,j.revert,k),w=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{width:"40%"},fieldset:{borderRadius:"10px",border:"1px solid",padding:"8px",width:"100%"}}}));function S(){var e=w();function a(a){var t=a.type,c=a.label,l=a.num,i=Object(n.useState)(l),o=Object(p.a)(i,2),s=o[0],d=o[1];return[s,r.a.createElement(v.a,{id:"standard-number-max",className:e.input,label:c,type:t,size:"small",value:s,onChange:function(e){return d(Number(e.target.value))}})]}var t=a({type:"number",label:"min",num:1}),c=Object(p.a)(t,2),l=c[0],i=c[1],o=a({type:"number",label:"max",num:10}),s=Object(p.a)(o,2),d=s[0],u=s[1],m=a({type:"number",label:"Set",num:1}),x=Object(p.a)(m,2),y=x[0],k=x[1],j=Object(E.b)();return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(h.a,{component:"fieldset",className:e.fieldset},r.a.createElement(f.a,{component:"legend"},"\u30c7\u30c3\u30ad\u30bb\u30c3\u30c6\u30a3\u30f3\u30b0"),i,r.a.createElement(g.a,null,"\u304b\u3089"),u,r.a.createElement(g.a,null,"\u307e\u3067\u306e\u30ab\u30fc\u30c9\u3092"),k,r.a.createElement(g.a,null,"\u30bb\u30c3\u30c8\u6301\u3064\u30c7\u30c3\u30ad\u3092\u4f5c\u6210"),r.a.createElement(b.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var e={min:l,max:d,deckSet:y};console.log(),j(O.actions.generate(e))}()}},"\u4f5c\u6210")))}var N=t(112),C=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{width:"40%"},fieldset:{borderRadius:"10px",border:"1px solid",padding:"8px",width:"100%"}}}));function A(){var e=C(),a=Object(E.c)((function(e){return e.cardsState}));return r.a.createElement(h.a,{component:"fieldset",className:e.fieldset},r.a.createElement(f.a,{component:"legend"},"\u30c7\u30c3\u30ad\u60c5\u5831"),r.a.createElement(N.a,null,"\u6b8b\u308a\u306e\u30ab\u30fc\u30c9 ",a.deck.length,"\u679a"),r.a.createElement(N.a,null,"\u624b\u672d\u30ab\u30fc\u30c9 ",a.hand.length,"\u679a"),r.a.createElement(N.a,null,"\u6368\u3066\u672d\u30ab\u30fc\u30c9 ",a.trash.length,"\u679a"))}function F(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(A,null))}var R=t(74),_=Object(u.a)((function(e){return{paper:{position:"absolute",padding:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block"},cardSheet:{position:"relative",height:e.spacing(32)}}}));function z(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.cardsState.deck})),t=_();return r.a.createElement(d.a,{fixed:!0,className:t.cardSheet},function(e,a){for(var t=100,n=[],c=0;c<e-1;c++){var l={top:t+"px",left:"68px"},i=r.a.createElement(R.a,{className:a.paper,style:l,elevation:2,key:"deck_"+c});n.push(i),t-=4}return r.a.createElement("div",null,n)}(a.length,t),function(){if(a.length>0)return r.a.createElement(R.a,{className:t.paper,style:{top:(n=a.length,100-4*(n-1)+"px"),left:"68px"},elevation:2,onClick:function(){return e(O.actions.draw())},key:"deck_"+(a.length-1)});var n}())}var G=t(41),M=Object(u.a)((function(e){return{paper:{padding:e.spacing(2),marginLeft:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block"},handSheet:{display:"inline-block",height:e.spacing(32)}}}));function B(){var e,a=Object(E.b)(),t=Object(E.c)((function(e){return e.cardsState.hand})),n=M(),c=[],l=Object(G.a)(t);try{var i=function(){var t=e.value;c.push(r.a.createElement(R.a,{className:n.paper,elevation:2,key:"hand_"+t,onClick:function(){return e=t,a(O.actions.trash(e));var e}},r.a.createElement(N.a,{fontSize:32},t)))};for(l.s();!(e=l.n()).done;)i()}catch(o){l.e(o)}finally{l.f()}return r.a.createElement(d.a,{fixed:!0,className:n.handSheet},c)}var J=Object(u.a)((function(e){return{paper:{padding:e.spacing(2),marginLeft:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block"},handSheet:{display:"inline-block",height:e.spacing(32)}}}));function L(){var e,a=Object(E.b)(),t=Object(E.c)((function(e){return e.cardsState.trash})),n=J(),c=[],l=Object(G.a)(t);try{var i=function(){var t=e.value;c.push(r.a.createElement(R.a,{className:n.paper,elevation:2,key:"hand_"+t,onClick:function(){return e=t,a(O.actions.revert(e));var e}},r.a.createElement(N.a,{fontSize:32},t)))};for(l.s();!(e=l.n()).done;)i()}catch(o){l.e(o)}finally{l.f()}return r.a.createElement(d.a,{fixed:!0,className:n.handSheet},c)}var W=Object(u.a)((function(e){return{root:{flexGrow:1,height:"100%"},paper:{position:"absolute",padding:e.spacing(2),textAlign:"center",width:e.spacing(8),height:e.spacing(8),display:"inline-block"},container:{margin:e.spacing(1),padding:e.spacing(1),backgroundColor:e.palette.primary.light},deckField:{borderRadius:"10px",border:"2px solid",borderColor:e.palette.grey.A100},trashField:{borderRadius:"10px",border:"2px solid",borderColor:e.palette.secondary.light},handField:{borderRadius:"10px",border:"2px solid",borderColor:e.palette.primary.light,height:"40%"}}}));function I(){var e=W();return r.a.createElement(d.a,{fixed:!0,className:e.root},r.a.createElement(m.a,{container:!0,spacing:1},r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(d.a,{component:"fieldset",className:e.deckField},r.a.createElement(g.a,{component:"legend"},"\u5c71\u672d\u30d5\u30a3\u30fc\u30eb\u30c9"),r.a.createElement(z,null))),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(d.a,{component:"fieldset",className:e.trashField},r.a.createElement(g.a,{component:"legend"},"\u6368\u3066\u672d\u30d5\u30a3\u30fc\u30eb\u30c9"),r.a.createElement(L,null)))),r.a.createElement("div",{style:{padding:"8px 0 0 0"}}),r.a.createElement(d.a,{component:"fieldset",className:e.handField},r.a.createElement(g.a,{component:"legend"},"\u624b\u672d\u30d5\u30a3\u30fc\u30eb\u30c9"),r.a.createElement(B,null)))}var T=Object(u.a)((function(e){return{offset:e.mixins.toolbar,root:{flexGrow:1,height:"100vh"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var V=function(){var e=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{position:"fixed",color:"primary"},r.a.createElement(o.a,null,r.a.createElement(s.a,{variant:"h4",color:"inherit"},"Game Tools"))),r.a.createElement("div",{className:e.offset}),r.a.createElement(d.a,{fixed:!0,className:e.root},r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,spacing:1},r.a.createElement(m.a,{item:!0,xs:9},r.a.createElement(I,null)),r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(d.a,{color:"secondary"},r.a.createElement(F,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=t(15),q=Object($.c)({cardsState:O.reducer}),D=Object(x.a)({reducer:q});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:D},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.8589f15d.chunk.js.map