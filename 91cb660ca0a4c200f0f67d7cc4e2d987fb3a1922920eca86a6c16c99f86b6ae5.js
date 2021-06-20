function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a=!1;const s=new Set;function i(t,e){a&&s.delete(e),e.parentNode!==t&&t.appendChild(e)}function u(t,e,n){a&&s.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function l(t){a?s.add(t):t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return Array.from(t.childNodes)}function y(t,e,n,o){for(;t.length>0;){const o=t.shift();if(o.nodeName===e){let t=0;const e=[];for(;t<o.attributes.length;){const r=o.attributes[t++];n[r.name]||e.push(r.name)}for(let t=0;t<e.length;t++)o.removeAttribute(e[t]);return o}l(o)}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):f(e)}function $(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return $(t," ")}function k(t,e){t.value=null==e?"":e}let v;function w(t){v=t}const E=[],x=[],_=[],A=[],F=Promise.resolve();let N=!1;function P(t){_.push(t)}let j=!1;const z=new Set;function C(){if(!j){j=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];w(e),O(e.$$)}for(w(null),E.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];z.has(e)||(z.add(e),e())}_.length=0}while(E.length);for(;A.length;)A.pop()();N=!1,j=!1,z.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const S=new Set;function T(t,e){-1===t.$$.dirty[0]&&(E.push(t),N||(N=!0,F.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(c,u,i,f,d,h,p=[-1]){const m=v;w(c);const y=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:u.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let $=!1;if(y.ctx=i?i(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),$&&T(c,t)),e})):[],y.update(),$=!0,o(y.before_update),y.fragment=!!f&&f(y.ctx),u.target){if(u.hydrate){a=!0;const t=g(u.target);y.fragment&&y.fragment.l(t),t.forEach(l)}else y.fragment&&y.fragment.c();u.intro&&(b=c.$$.fragment)&&b.i&&(S.delete(b),b.i(undefined)),function(t,n,c,a){const{fragment:s,on_mount:u,on_destroy:i,after_update:l}=t.$$;s&&s.m(n,c),a||P((()=>{const n=u.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(P)}(c,u.target,u.anchor,u.customElement),function(){a=!1;for(const t of s)t.parentNode.removeChild(t);s.clear()}(),C()}var b;w(m)}class q{async getQAPairsFromFFCContent(t,e){let n;n=void 0===e?t:await(await fetch(e)).json();const o=[];for(const t of Object.keys(n.decks)){console.log(Object.keys(n.decks));for(const e of Object.keys(n.decks[t].cards)){const r={q:n.decks[t].cards[e].q,a:n.decks[t].cards[e].a};o.push(r)}}return o}getMarkdownFromQAPairs(t){let e="";for(const n of t)e=`${e}\n### ${n.q}  \n${n.a}  \n\n`;return e}getQAPairsFromMarkDown(t){return[]}}function M(e){let n,r,c,a,s,w,v,E,_,x,A,N,P,j,F;return{c(){n=f("p"),r=d('Enter a link to an ffc deck file here - e.g. "https://raw.githubusercontent.com/fancy-flashcard/deck-collection/main/wirtschaftsinformatik/Finanzbuchhaltung.json"'),c=h(),a=f("p"),s=h(),w=f("input"),v=h(),E=f("button"),_=d("Send"),x=h(),A=f("p"),N=h(),P=f("textarea"),this.h()},l(t){n=y(t,"P",{});var e=g(n);r=$(e,'Enter a link to an ffc deck file here - e.g. "https://raw.githubusercontent.com/fancy-flashcard/deck-collection/main/wirtschaftsinformatik/Finanzbuchhaltung.json"'),e.forEach(l),c=b(t),a=y(t,"P",{}),g(a).forEach(l),s=b(t),w=y(t,"INPUT",{type:!0,name:!0,id:!0,autofocus:!0,class:!0}),v=b(t),E=y(t,"BUTTON",{});var o=g(E);_=$(o,"Send"),o.forEach(l),x=b(t),A=y(t,"P",{}),g(A).forEach(l),N=b(t),P=y(t,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),g(P).forEach(l),this.h()},h(){p(w,"type","text"),p(w,"name",""),p(w,"id",""),w.autofocus=!0,p(w,"class","svelte-zgaoyh"),p(P,"name",""),p(P,"id",""),p(P,"cols","30"),p(P,"rows","10"),p(P,"class","svelte-zgaoyh")},m(t,o){u(t,n,o),i(n,r),u(t,c,o),u(t,a,o),u(t,s,o),u(t,w,o),k(w,e[0]),u(t,v,o),u(t,E,o),i(E,_),u(t,x,o),u(t,A,o),u(t,N,o),u(t,P,o),k(P,e[1]),w.focus(),j||(F=[m(w,"input",e[3]),m(w,"keyup",e[4]),m(E,"click",e[5]),m(P,"input",e[6])],j=!0)},p(t,[e]){1&e&&w.value!==t[0]&&k(w,t[0]),2&e&&k(P,t[1])},i:t,o:t,d(t){t&&l(n),t&&l(c),t&&l(a),t&&l(s),t&&l(w),t&&l(v),t&&l(E),t&&l(x),t&&l(A),t&&l(N),t&&l(P),j=!1,o(F)}}}function B(t,e,n){let o="",r="";async function c(t){const e=new q,o=await e.getQAPairsFromFFCContent(void 0,t);n(1,r=e.getMarkdownFromQAPairs(o)),console.log(r)}return[o,r,c,function(){o=this.value,n(0,o)},t=>"Enter"===t.key&&c(o),()=>c(o),function(){r=this.value,n(1,r)}]}new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(1),n.on_destroy=n.fragment=null,n.ctx=[])}(this),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){var e;super(),document.getElementById("svelte-zgaoyh-style")||((e=f("style")).id="svelte-zgaoyh-style",e.textContent="input.svelte-zgaoyh{min-width:100%\n  }textarea.svelte-zgaoyh{min-width:100%;min-height:80%\n  }",i(document.head,e)),Q(this,t,B,M,c,{})}}({target:document.body,props:{}});