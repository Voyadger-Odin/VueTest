(function(){"use strict";var t={4994:function(t,o,e){var n=e(9242),s=e(3396);const i={class:"app"},l=(0,s._)("h1",null,"Страница с постами",-1),r=(0,s._)("br",null,null,-1),a=(0,s._)("code",null,"print('Hello world', 1234567890)",-1),u=(0,s._)("br",null,null,-1),p=(0,s._)("br",null,null,-1),d=(0,s.Uk)(" Добавить пост "),c=(0,s._)("br",null,null,-1),f=(0,s._)("br",null,null,-1),m=(0,s._)("br",null,null,-1),v={key:1};function h(t,o,e,n,h,g){const y=(0,s.up)("my-button"),b=(0,s.up)("post-form"),w=(0,s.up)("my-dialog"),_=(0,s.up)("post-list");return(0,s.wg)(),(0,s.iD)("div",i,[l,r,a,u,p,(0,s.Wm)(y,{onClick:g.showDialog},{default:(0,s.w5)((()=>[d])),_:1},8,["onClick"]),c,f,m,(0,s.Wm)(w,{show:h.dialogVisible,"onUpdate:show":o[0]||(o[0]=t=>h.dialogVisible=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{onCreate:g.createPost},null,8,["onCreate"])])),_:1},8,["show"]),h.isPostsLoading?((0,s.wg)(),(0,s.iD)("div",v,"Загрузка")):((0,s.wg)(),(0,s.j4)(_,{key:0,posts:h.posts,onRemove:g.removePost},null,8,["posts","onRemove"]))])}e(7658);const g=t=>((0,s.dD)("data-v-24c0fea5"),t=t(),(0,s.Cn)(),t),y=g((()=>(0,s._)("h4",null,"Создание поста",-1))),b=(0,s.Uk)(" Создать ");function w(t,o,e,i,l,r){const a=(0,s.up)("my-input"),u=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:o[2]||(o[2]=(0,n.iM)((()=>{}),["prevent"]))},[y,(0,s.Wm)(a,{modelValue:l.post.title,"onUpdate:modelValue":o[0]||(o[0]=t=>l.post.title=t),placeholder:"Название поста",style:{"margin-top":"5px"}},null,8,["modelValue"]),(0,s.Wm)(a,{modelValue:l.post.body,"onUpdate:modelValue":o[1]||(o[1]=t=>l.post.body=t),placeholder:"Описание",style:{"margin-top":"5px"}},null,8,["modelValue"]),(0,s.Wm)(u,{onClick:r.createPost,style:{"align-self":"flex-end","margin-top":"5px"}},{default:(0,s.w5)((()=>[b])),_:1},8,["onClick"])],32)}const _=["value"];function k(t,o,e,n,i,l){return(0,s.wg)(),(0,s.iD)("input",{onInput:o[0]||(o[0]=(...t)=>l.updateInput&&l.updateInput(...t)),value:e.modelValue,class:"input",type:"text"},null,40,_)}var D={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}},P=e(89);const V=(0,P.Z)(D,[["render",k],["__scopeId","data-v-7e9ea922"]]);var C=V,I={components:{MyInput:C},data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const O=(0,P.Z)(I,[["render",w],["__scopeId","data-v-24c0fea5"]]);var j=O;const x=(0,s._)("h4",null,"Список постов",-1),W={key:0},U={key:1},Z=(0,s._)("span",null,"Список постов пуст",-1),M=[Z];function $(t,o,e,n,i,l){const r=(0,s.up)("post-item");return(0,s.wg)(),(0,s.iD)("div",null,[x,e.posts.length>0?((0,s.wg)(),(0,s.iD)("div",W,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.posts,(o=>((0,s.wg)(),(0,s.j4)(r,{class:"post",post:o,key:o.id,onRemove:e=>t.$emit("remove",o)},null,8,["post","onRemove"])))),128))])):((0,s.wg)(),(0,s.iD)("div",U,M))])}var L=e(7139);const R=t=>((0,s.dD)("data-v-471af3ee"),t=t(),(0,s.Cn)(),t),q={class:"post"},z=R((()=>(0,s._)("strong",null,"Название: ",-1))),B=R((()=>(0,s._)("strong",null,"Описание: ",-1))),E={class:"post_btns"},F=(0,s.Uk)("Удалить");function H(t,o,e,n,i,l){const r=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",q,[(0,s._)("div",null,[(0,s._)("div",null,[z,(0,s.Uk)((0,L.zw)(e.post.title),1)]),(0,s._)("div",null,[B,(0,s.Uk)((0,L.zw)(e.post.body),1)])]),(0,s._)("div",E,[(0,s.Wm)(r,{onClick:o[0]||(o[0]=o=>t.$emit("remove",e.post))},{default:(0,s.w5)((()=>[F])),_:1})])])}var S={props:{post:{type:Object,required:!0}}};const T=(0,P.Z)(S,[["render",H],["__scopeId","data-v-471af3ee"]]);var A=T,K={components:{PostItem:A},props:{posts:{type:Array,required:!0}}};const N=(0,P.Z)(K,[["render",$]]);var Y=N;function G(t,o,e,i,l,r){return e.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:o[1]||(o[1]=(0,n.iM)(((...t)=>r.hideDialog&&r.hideDialog(...t)),["stop"]))},[(0,s._)("div",{onClick:o[0]||(o[0]=(0,n.iM)((()=>{}),["stop"])),class:"dialog_content"},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var J={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const Q=(0,P.Z)(J,[["render",G],["__scopeId","data-v-2d54e8f8"]]);var X=Q;const tt={class:"btn"};function ot(t,o,e,n,i,l){return(0,s.wg)(),(0,s.iD)("button",tt,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var et={name:"my-button"};const nt=(0,P.Z)(et,[["render",ot],["__scopeId","data-v-226a0cae"]]);var st=nt,it=e(4161),lt={components:{MyButton:st,MyDialog:X,PostForm:j,PostList:Y},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((o=>o.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await it.Z.get("https://jsonplaceholder.typicode.com/posts?_limit=10");this.posts=t.data}catch(t){alert("Ошибка")}finally{this.isPostsLoading=!1}}},mounted(){this.fetchPosts()}};const rt=(0,P.Z)(lt,[["render",h]]);var at=rt,ut=[st,C,X];const pt=(0,n.ri)(at);ut.forEach((t=>{pt.component(t.name,t)})),pt.mount("#app")}},o={};function e(n){var s=o[n];if(void 0!==s)return s.exports;var i=o[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,s,i){if(!n){var l=1/0;for(p=0;p<t.length;p++){n=t[p][0],s=t[p][1],i=t[p][2];for(var r=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[a])}))?n.splice(a--,1):(r=!1,i<l&&(l=i));if(r){t.splice(p--,1);var u=s();void 0!==u&&(o=u)}}return o}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[n,s,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var s,i,l=n[0],r=n[1],a=n[2],u=0;if(l.some((function(o){return 0!==t[o]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(a)var p=a(e)}for(o&&o(n);u<l.length;u++)i=l[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(p)},n=self["webpackChunktest"]=self["webpackChunktest"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4994)}));n=e.O(n)})();
//# sourceMappingURL=app.5f967478.js.map