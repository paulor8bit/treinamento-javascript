(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lista-gastos"],{"13d5":function(t,e,n){"use strict";var r=n("23e7"),a=n("d58f").left,o=n("a640"),i=n("ae40"),u=o("reduce"),c=i("reduce",{1:0});r({target:"Array",proto:!0,forced:!u||!c},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5203:function(t,e,n){},6813:function(t,e,n){},a2ab:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"months-navigation"},t._l(t.groupedMonths,(function(e,r){return n("div",{key:r,staticClass:"month-link",class:{active:e.month===t.activeMonth.month},on:{click:function(n){return t.setActiveMonth(e)}}},[n("div",{staticClass:"month-label"},[t._v(t._s(e.month))]),n("div",{directives:[{name:"money-format",rawName:"v-money-format",value:e.total,expression:"month.total"}],staticClass:"value-label"})])})),0),n("div",{staticClass:"container-group"},[n("div",{staticClass:"container"},[t.activeMonth.data&&!t.activeMonth.data.length?n("div",[t._v(" Você não cadastrou nenhum neste mês ")]):t._l(t.activeMonth.data,(function(t,e){return n("expense-list-item",{key:e,attrs:{data:t}})}))],2)])])},a=[],o=(n("d81d"),n("13d5"),n("b64b"),n("c1df")),i=n.n(o),u=n("e831"),c=n.n(u),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expense-list-item row"},[n("div",{staticClass:"col-10"},[n("div",{staticClass:"description"},[n("span",[t._v(t._s(t.data.description))]),t.data.receipt?n("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(e){return t.openReceipt()}}},[n("i",{staticClass:"fa fa-paperclip"}),t._v(" Ver comprovante "),n("i",{staticClass:"fa fa-external-link-alt"})]):t._e()]),n("small",{directives:[{name:"date-format",rawName:"v-date-format",value:t.data.createdAt,expression:"data.createdAt"}]})]),n("div",{directives:[{name:"money-format",rawName:"v-money-format",value:t.data.value,expression:"data.value"}],staticClass:"col-2"})])},f=[],l={props:{data:{type:Object,required:!0}},methods:{openReceipt:function(){window.open(this.data.receipt,"_blank")}}},h=l,v=(n("b3d1"),n("2877")),p=Object(v["a"])(h,s,f,!1,null,"ea4eb888",null),d=p.exports,_={name:"ExpensesList",components:{ExpenseListItem:d},data:function(){return{expenses:[],activeMonth:{}}},created:function(){this.getData()},mounted:function(){this.setActiveMonth()},computed:{groupedMonths:function(){var t=[],e=function(){t.push({data:[],total:0,month:i()().format("MM/YYYY")})};if(this.expenses.length){var n=c()(this.expenses,(function(t){return i()(t.createdAt).format("MM/YYYY")})),r=Object.keys(n).sort((function(t,e){var n="MM/YYYY HH";return i()("".concat(t," 01"),n).isBefore(i()("".concat(e," 01"),n))?-1:1}));t=r.map((function(t){return{month:t,data:n[t],total:n[t].map((function(t){return+t.value})).reduce((function(t,e){return t+e}),0)}}));var a=i()(t[t.length-1].month,"MM/YYYY");a.isSame(i()(),"month")||e()}else e();return t}},methods:{getData:function(){var t=this,e=this.$firebase.database().ref("/".concat(window.uid));e.on("value",(function(e){var n=e.val();t.expenses=Object.keys(n).map((function(t){return n[t]}))}))},setActiveMonth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activeMonth=t||this.groupedMonths[this.groupedMonths.length-1]}}},y=_,b=(n("daf5"),Object(v["a"])(y,r,a,!1,null,"27002bc4",null));e["default"]=b.exports},b3d1:function(t,e,n){"use strict";var r=n("6813"),a=n.n(r);a.a},d58f:function(t,e,n){var r=n("1c0b"),a=n("7b0b"),o=n("44ad"),i=n("50c4"),u=function(t){return function(e,n,u,c){r(n);var s=a(e),f=o(s),l=i(s.length),h=t?l-1:0,v=t?-1:1;if(u<2)while(1){if(h in f){c=f[h],h+=v;break}if(h+=v,t?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:l>h;h+=v)h in f&&(c=n(c,f[h],h,s));return c}};t.exports={left:u(!1),right:u(!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,o=n("1dde"),i=n("ae40"),u=o("map"),c=i("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},daf5:function(t,e,n){"use strict";var r=n("5203"),a=n.n(r);a.a},e831:function(t,e,n){(function(t,n){var r=200,a="Expected a function",o="__lodash_hash_undefined__",i=1,u=2,c=1/0,s=9007199254740991,f="[object Arguments]",l="[object Array]",h="[object Boolean]",v="[object Date]",p="[object Error]",d="[object Function]",_="[object GeneratorFunction]",y="[object Map]",b="[object Number]",g="[object Object]",m="[object Promise]",w="[object RegExp]",j="[object Set]",A="[object String]",O="[object Symbol]",M="[object WeakMap]",k="[object ArrayBuffer]",x="[object DataView]",C="[object Float32Array]",Y="[object Float64Array]",E="[object Int8Array]",$="[object Int16Array]",S="[object Int32Array]",F="[object Uint8Array]",I="[object Uint8ClampedArray]",L="[object Uint16Array]",R="[object Uint32Array]",T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,D=/^\w*$/,P=/^\./,U=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,z=/[\\^$.*+?()[\]{}|]/g,B=/\\(\\)?/g,N=/^\[object .+?Constructor\]$/,V=/^(?:0|[1-9]\d*)$/,H={};H[C]=H[Y]=H[E]=H[$]=H[S]=H[F]=H[I]=H[L]=H[R]=!0,H[f]=H[l]=H[k]=H[h]=H[x]=H[v]=H[p]=H[d]=H[y]=H[b]=H[g]=H[w]=H[j]=H[A]=H[M]=!1;var J="object"==typeof t&&t&&t.Object===Object&&t,W="object"==typeof self&&self&&self.Object===Object&&self,q=J||W||Function("return this")(),G=e&&!e.nodeType&&e,K=G&&"object"==typeof n&&n&&!n.nodeType&&n,Q=K&&K.exports===G,X=Q&&J.process,Z=function(){try{return X&&X.binding("util")}catch(t){}}(),tt=Z&&Z.isTypedArray;function et(t,e,n,r){var a=-1,o=t?t.length:0;while(++a<o){var i=t[a];e(r,i,n(i),t)}return r}function nt(t,e){var n=-1,r=t?t.length:0;while(++n<r)if(e(t[n],n,t))return!0;return!1}function rt(t){return function(e){return null==e?void 0:e[t]}}function at(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function ot(t){return function(e){return t(e)}}function it(t,e){return null==t?void 0:t[e]}function ut(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function ct(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function st(t,e){return function(n){return t(e(n))}}function ft(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var lt=Array.prototype,ht=Function.prototype,vt=Object.prototype,pt=q["__core-js_shared__"],dt=function(){var t=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_t=ht.toString,yt=vt.hasOwnProperty,bt=vt.toString,gt=RegExp("^"+_t.call(yt).replace(z,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mt=q.Symbol,wt=q.Uint8Array,jt=vt.propertyIsEnumerable,At=lt.splice,Ot=st(Object.keys,Object),Mt=ze(q,"DataView"),kt=ze(q,"Map"),xt=ze(q,"Promise"),Ct=ze(q,"Set"),Yt=ze(q,"WeakMap"),Et=ze(Object,"create"),$t=Ze(Mt),St=Ze(kt),Ft=Ze(xt),It=Ze(Ct),Lt=Ze(Yt),Rt=mt?mt.prototype:void 0,Tt=Rt?Rt.valueOf:void 0,Dt=Rt?Rt.toString:void 0;function Pt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Ut(){this.__data__=Et?Et(null):{}}function zt(t){return this.has(t)&&delete this.__data__[t]}function Bt(t){var e=this.__data__;if(Et){var n=e[t];return n===o?void 0:n}return yt.call(e,t)?e[t]:void 0}function Nt(t){var e=this.__data__;return Et?void 0!==e[t]:yt.call(e,t)}function Vt(t,e){var n=this.__data__;return n[t]=Et&&void 0===e?o:e,this}function Ht(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Jt(){this.__data__=[]}function Wt(t){var e=this.__data__,n=ve(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():At.call(e,n,1),!0}function qt(t){var e=this.__data__,n=ve(e,t);return n<0?void 0:e[n][1]}function Gt(t){return ve(this.__data__,t)>-1}function Kt(t,e){var n=this.__data__,r=ve(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function Qt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Xt(){this.__data__={hash:new Pt,map:new(kt||Ht),string:new Pt}}function Zt(t){return Pe(this,t)["delete"](t)}function te(t){return Pe(this,t).get(t)}function ee(t){return Pe(this,t).has(t)}function ne(t,e){return Pe(this,t).set(t,e),this}function re(t){var e=-1,n=t?t.length:0;this.__data__=new Qt;while(++e<n)this.add(t[e])}function ae(t){return this.__data__.set(t,o),this}function oe(t){return this.__data__.has(t)}function ie(t){this.__data__=new Ht(t)}function ue(){this.__data__=new Ht}function ce(t){return this.__data__["delete"](t)}function se(t){return this.__data__.get(t)}function fe(t){return this.__data__.has(t)}function le(t,e){var n=this.__data__;if(n instanceof Ht){var a=n.__data__;if(!kt||a.length<r-1)return a.push([t,e]),this;n=this.__data__=new Qt(a)}return n.set(t,e),this}function he(t,e){var n=an(t)||rn(t)?at(t.length,String):[],r=n.length,a=!!r;for(var o in t)!e&&!yt.call(t,o)||a&&("length"==o||Ve(o,r))||n.push(o);return n}function ve(t,e){var n=t.length;while(n--)if(nn(t[n][0],e))return n;return-1}function pe(t,e,n,r){return de(t,(function(t,a,o){e(r,t,n(t),o)})),r}Pt.prototype.clear=Ut,Pt.prototype["delete"]=zt,Pt.prototype.get=Bt,Pt.prototype.has=Nt,Pt.prototype.set=Vt,Ht.prototype.clear=Jt,Ht.prototype["delete"]=Wt,Ht.prototype.get=qt,Ht.prototype.has=Gt,Ht.prototype.set=Kt,Qt.prototype.clear=Xt,Qt.prototype["delete"]=Zt,Qt.prototype.get=te,Qt.prototype.has=ee,Qt.prototype.set=ne,re.prototype.add=re.prototype.push=ae,re.prototype.has=oe,ie.prototype.clear=ue,ie.prototype["delete"]=ce,ie.prototype.get=se,ie.prototype.has=fe,ie.prototype.set=le;var de=Ie(ye),_e=Le();function ye(t,e){return t&&_e(t,e,yn)}function be(t,e){e=He(e,t)?[e]:Se(e);var n=0,r=e.length;while(null!=t&&n<r)t=t[Xe(e[n++])];return n&&n==r?t:void 0}function ge(t){return bt.call(t)}function me(t,e){return null!=t&&e in Object(t)}function we(t,e,n,r,a){return t===e||(null==t||null==e||!fn(t)&&!ln(e)?t!==t&&e!==e:je(t,e,we,n,r,a))}function je(t,e,n,r,a,o){var i=an(t),c=an(e),s=l,h=l;i||(s=Be(t),s=s==f?g:s),c||(h=Be(e),h=h==f?g:h);var v=s==g&&!ut(t),p=h==g&&!ut(e),d=s==h;if(d&&!v)return o||(o=new ie),i||vn(t)?Re(t,e,n,r,a,o):Te(t,e,s,n,r,a,o);if(!(a&u)){var _=v&&yt.call(t,"__wrapped__"),y=p&&yt.call(e,"__wrapped__");if(_||y){var b=_?t.value():t,m=y?e.value():e;return o||(o=new ie),n(b,m,r,a,o)}}return!!d&&(o||(o=new ie),De(t,e,n,r,a,o))}function Ae(t,e,n,r){var a=n.length,o=a,c=!r;if(null==t)return!o;t=Object(t);while(a--){var s=n[a];if(c&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}while(++a<o){s=n[a];var f=s[0],l=t[f],h=s[1];if(c&&s[2]){if(void 0===l&&!(f in t))return!1}else{var v=new ie;if(r)var p=r(l,h,f,t,e,v);if(!(void 0===p?we(h,l,r,i|u,v):p))return!1}}return!0}function Oe(t){if(!fn(t)||We(t))return!1;var e=cn(t)||ut(t)?gt:N;return e.test(Ze(t))}function Me(t){return ln(t)&&sn(t.length)&&!!H[bt.call(t)]}function ke(t){return"function"==typeof t?t:null==t?bn:"object"==typeof t?an(t)?Ye(t[0],t[1]):Ce(t):gn(t)}function xe(t){if(!qe(t))return Ot(t);var e=[];for(var n in Object(t))yt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ce(t){var e=Ue(t);return 1==e.length&&e[0][2]?Ke(e[0][0],e[0][1]):function(n){return n===t||Ae(n,t,e)}}function Ye(t,e){return He(t)&&Ge(e)?Ke(Xe(t),e):function(n){var r=dn(n,t);return void 0===r&&r===e?_n(n,t):we(e,r,void 0,i|u)}}function Ee(t){return function(e){return be(e,t)}}function $e(t){if("string"==typeof t)return t;if(hn(t))return Dt?Dt.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}function Se(t){return an(t)?t:Qe(t)}function Fe(t,e){return function(n,r){var a=an(n)?et:pe,o=e?e():{};return a(n,t,ke(r,2),o)}}function Ie(t,e){return function(n,r){if(null==n)return n;if(!on(n))return t(n,r);var a=n.length,o=e?a:-1,i=Object(n);while(e?o--:++o<a)if(!1===r(i[o],o,i))break;return n}}function Le(t){return function(e,n,r){var a=-1,o=Object(e),i=r(e),u=i.length;while(u--){var c=i[t?u:++a];if(!1===n(o[c],c,o))break}return e}}function Re(t,e,n,r,a,o){var c=a&u,s=t.length,f=e.length;if(s!=f&&!(c&&f>s))return!1;var l=o.get(t);if(l&&o.get(e))return l==e;var h=-1,v=!0,p=a&i?new re:void 0;o.set(t,e),o.set(e,t);while(++h<s){var d=t[h],_=e[h];if(r)var y=c?r(_,d,h,e,t,o):r(d,_,h,t,e,o);if(void 0!==y){if(y)continue;v=!1;break}if(p){if(!nt(e,(function(t,e){if(!p.has(e)&&(d===t||n(d,t,r,a,o)))return p.add(e)}))){v=!1;break}}else if(d!==_&&!n(d,_,r,a,o)){v=!1;break}}return o["delete"](t),o["delete"](e),v}function Te(t,e,n,r,a,o,c){switch(n){case x:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case k:return!(t.byteLength!=e.byteLength||!r(new wt(t),new wt(e)));case h:case v:case b:return nn(+t,+e);case p:return t.name==e.name&&t.message==e.message;case w:case A:return t==e+"";case y:var s=ct;case j:var f=o&u;if(s||(s=ft),t.size!=e.size&&!f)return!1;var l=c.get(t);if(l)return l==e;o|=i,c.set(t,e);var d=Re(s(t),s(e),r,a,o,c);return c["delete"](t),d;case O:if(Tt)return Tt.call(t)==Tt.call(e)}return!1}function De(t,e,n,r,a,o){var i=a&u,c=yn(t),s=c.length,f=yn(e),l=f.length;if(s!=l&&!i)return!1;var h=s;while(h--){var v=c[h];if(!(i?v in e:yt.call(e,v)))return!1}var p=o.get(t);if(p&&o.get(e))return p==e;var d=!0;o.set(t,e),o.set(e,t);var _=i;while(++h<s){v=c[h];var y=t[v],b=e[v];if(r)var g=i?r(b,y,v,e,t,o):r(y,b,v,t,e,o);if(!(void 0===g?y===b||n(y,b,r,a,o):g)){d=!1;break}_||(_="constructor"==v)}if(d&&!_){var m=t.constructor,w=e.constructor;m==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof m&&m instanceof m&&"function"==typeof w&&w instanceof w||(d=!1)}return o["delete"](t),o["delete"](e),d}function Pe(t,e){var n=t.__data__;return Je(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ue(t){var e=yn(t),n=e.length;while(n--){var r=e[n],a=t[r];e[n]=[r,a,Ge(a)]}return e}function ze(t,e){var n=it(t,e);return Oe(n)?n:void 0}var Be=ge;function Ne(t,e,n){e=He(e,t)?[e]:Se(e);var r,a=-1,o=e.length;while(++a<o){var i=Xe(e[a]);if(!(r=null!=t&&n(t,i)))break;t=t[i]}if(r)return r;o=t?t.length:0;return!!o&&sn(o)&&Ve(i,o)&&(an(t)||rn(t))}function Ve(t,e){return e=null==e?s:e,!!e&&("number"==typeof t||V.test(t))&&t>-1&&t%1==0&&t<e}function He(t,e){if(an(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!hn(t))||(D.test(t)||!T.test(t)||null!=e&&t in Object(e))}function Je(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function We(t){return!!dt&&dt in t}function qe(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||vt;return t===n}function Ge(t){return t===t&&!fn(t)}function Ke(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(Mt&&Be(new Mt(new ArrayBuffer(1)))!=x||kt&&Be(new kt)!=y||xt&&Be(xt.resolve())!=m||Ct&&Be(new Ct)!=j||Yt&&Be(new Yt)!=M)&&(Be=function(t){var e=bt.call(t),n=e==g?t.constructor:void 0,r=n?Ze(n):void 0;if(r)switch(r){case $t:return x;case St:return y;case Ft:return m;case It:return j;case Lt:return M}return e});var Qe=en((function(t){t=pn(t);var e=[];return P.test(t)&&e.push(""),t.replace(U,(function(t,n,r,a){e.push(r?a.replace(B,"$1"):n||t)})),e}));function Xe(t){if("string"==typeof t||hn(t))return t;var e=t+"";return"0"==e&&1/t==-c?"-0":e}function Ze(t){if(null!=t){try{return _t.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var tn=Fe((function(t,e,n){yt.call(t,n)?t[n].push(e):t[n]=[e]}));function en(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(a);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i),i};return n.cache=new(en.Cache||Qt),n}function nn(t,e){return t===e||t!==t&&e!==e}function rn(t){return un(t)&&yt.call(t,"callee")&&(!jt.call(t,"callee")||bt.call(t)==f)}en.Cache=Qt;var an=Array.isArray;function on(t){return null!=t&&sn(t.length)&&!cn(t)}function un(t){return ln(t)&&on(t)}function cn(t){var e=fn(t)?bt.call(t):"";return e==d||e==_}function sn(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}function fn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ln(t){return!!t&&"object"==typeof t}function hn(t){return"symbol"==typeof t||ln(t)&&bt.call(t)==O}var vn=tt?ot(tt):Me;function pn(t){return null==t?"":$e(t)}function dn(t,e,n){var r=null==t?void 0:be(t,e);return void 0===r?n:r}function _n(t,e){return null!=t&&Ne(t,e,me)}function yn(t){return on(t)?he(t):xe(t)}function bn(t){return t}function gn(t){return He(t)?rt(Xe(t)):Ee(t)}n.exports=tn}).call(this,n("c8ba"),n("62e4")(t))}}]);
//# sourceMappingURL=lista-gastos.4a0fab8f.js.map