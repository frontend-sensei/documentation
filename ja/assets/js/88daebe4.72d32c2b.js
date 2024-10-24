"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8736],{1928:(e,n,s)=>{s.d(n,{Ay:()=>a,RM:()=>o});var i=s(6070),t=s(1100),r=(s(758),s(6783)),d=s(7765);const c=e=>{let{ticket:n}=e;const s=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:(0,d.T)({id:"shared.wip.title"})}),(0,i.jsx)("p",{children:(0,d.T)({id:"shared.wip.subtitle"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.feedback.base"}),(0,i.jsx)(r.A,{to:s,children:(0,d.T)({id:"shared.wip.var.feedback.link"})})]}),(0,i.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.material.base"}),(0,i.jsx)(r.A,{to:"https://t.me/feature_sliced",children:(0,d.T)({id:"shared.wip.var.material.link"})})]}),(0,i.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.contribute.base"}),(0,i.jsx)(r.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,d.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},o=[];function l(e){const n={admonition:"admonition",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,i.jsx)(c,{ticket:e.ticket})})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9862:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var i=s(6070),t=s(1100),r=s(1928);const d={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},c="\u30c7\u30bb\u30b0\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",o={id:"guides/issues/desegmented",title:"\u30c7\u30bb\u30b0\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",description:"\u72b6\u6cc1",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/desegmented",permalink:"/ja/docs/guides/issues/desegmented",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",tags:[],version:"current",lastUpdatedAt:1729756577e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"SvelteKit\u3068\u306e\u4f75\u7528",permalink:"/ja/docs/guides/tech/with-sveltekit"},next:{title:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",permalink:"/ja/docs/guides/issues/routes"}},l={},a=[...r.RM,{value:"\u72b6\u6cc1",id:"situation",level:2},{value:"\u554f\u984c",id:"problem",level:2},{value:"\u7121\u8996\u3059\u308b\u5834\u5408",id:"if-you-ignore-it",level:2},{value:"\u89e3\u6c7a\u7b56",id:"solution",level:2},{value:"\u53c2\u7167",id:"see-also",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u30c7\u30bb\u30b0\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",children:"\u30c7\u30bb\u30b0\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"})}),"\n",(0,i.jsx)(r.Ay,{ticket:"148"}),"\n",(0,i.jsx)(n.h2,{id:"situation",children:"\u72b6\u6cc1"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u7279\u5b9a\u306e\u30c9\u30e1\u30a4\u30f3\u306b\u95a2\u9023\u3059\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u904e\u5ea6\u306b\u30c7\u30bb\u30b0\u30e1\u30f3\u30c8\u5316\u3055\u308c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306b\u6563\u3089\u3070\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u251c\u2500\u2500 components/\n|    \u251c\u2500\u2500 DeliveryCard\n|    \u251c\u2500\u2500 DeliveryChoice\n|    \u251c\u2500\u2500 RegionSelect\n|    \u251c\u2500\u2500 UserAvatar\n\u251c\u2500\u2500 actions/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 epics/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 constants/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 helpers/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 entities/\n|    \u251c\u2500\u2500 delivery/\n|    |      \u251c\u2500\u2500 getters.js\n|    |      \u251c\u2500\u2500 selectors.js\n|    \u251c\u2500\u2500 region/\n|    \u251c\u2500\u2500 user/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"problem",children:"\u554f\u984c"}),"\n",(0,i.jsxs)(n.p,{children:["\u554f\u984c\u306f\u3001",(0,i.jsx)(n.strong,{children:"\u9ad8\u3044\u51dd\u96c6\u6027"}),"\u306e\u539f\u5247\u306e\u9055\u53cd\u3068\u3001",(0,i.jsx)(n.strong,{children:"\u5909\u66f4\u306e\u8ef8"}),"\u306e\u904e\u5ea6\u306a\u62e1\u5f35\u3068\u3057\u3066\u73fe\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"if-you-ignore-it",children:"\u7121\u8996\u3059\u308b\u5834\u5408"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f8b\u3048\u3070\u3001\u914d\u9054\u306b\u95a2\u3059\u308b\u30ed\u30b8\u30c3\u30af\u306b\u89e6\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30ed\u30b8\u30c3\u30af\u304c\u8907\u6570\u306e\u7b87\u6240\u306b\u5206\u6563\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u8003\u616e\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u305a\u3001\u30b3\u30fc\u30c9\u5185\u3067\u8907\u6570\u306e\u7b87\u6240\u306b\u89e6\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u3053\u308c\u306b\u3088\u308a\u3001",(0,i.jsx)(n.strong,{children:"\u5909\u66f4\u306e\u8ef8"}),"\u304c\u904e\u5ea6\u306b\u5f15\u304d\u4f38\u3070\u3055\u308c\u308b"]}),"\n",(0,i.jsxs)(n.li,{children:["\u30e6\u30fc\u30b6\u30fc\u306b\u95a2\u3059\u308b\u30ed\u30b8\u30c3\u30af\u3092\u8abf\u3079\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001",(0,i.jsx)(n.strong,{children:"actions\u3001epics\u3001constants\u3001entities\u3001components"}),"\u306e\u8a73\u7d30\u3092\u8abf\u3079\u308b\u305f\u3081\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3092\u5de1\u56de\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6697\u9ed9\u95a2\u4fc2\u3068\u62e1\u5927\u3059\u308b\u30c9\u30e1\u30a4\u30f3\u306e\u5236\u5fa1\u4e0d\u80fd","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u3001\u8996\u91ce\u304c\u72ed\u304f\u306a\u308a\u3001\u300c\u5b9a\u6570\u306e\u305f\u3081\u306e\u5b9a\u6570\u300d\u3092\u4f5c\u6210\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a72\u5f53\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u3054\u3061\u3083\u3054\u3061\u3083\u3055\u305b\u3066\u3057\u307e\u3046\u3053\u3068\u306b\u6c17\u3065\u304b\u306a\u3044\u3053\u3068\u304c\u3088\u304f\u3042\u308b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"solution",children:"\u89e3\u6c7a\u7b56"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u30c9\u30e1\u30a4\u30f3/\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u95a2\u9023\u3059\u308b\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8fd1\u304f\u306b\u914d\u7f6e\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u306f\u7279\u5b9a\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8abf\u3079\u308b\u969b\u306b\u3001\u305d\u306e\u3059\u3079\u3066\u306e\u69cb\u6210\u8981\u7d20\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306b\u6563\u3089\u3070\u3089\u305a\u3001\u8fd1\u304f\u306b\u914d\u7f6e\u3055\u308c\u308b\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3068\u30e2\u30b8\u30e5\u30fc\u30eb\u9593\u306e\u95a2\u4fc2\u306e\u767a\u898b\u3057\u3084\u3059\u3055\u3068\u660e\u78ba\u3055\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"- \u251c\u2500\u2500 components/\n- |    \u251c\u2500\u2500 DeliveryCard\n- |    \u251c\u2500\u2500 DeliveryChoice\n- |    \u251c\u2500\u2500 RegionSelect\n- |    \u251c\u2500\u2500 UserAvatar\n- \u251c\u2500\u2500 actions/\n- |    \u251c\u2500\u2500 delivery.js\n- |    \u251c\u2500\u2500 region.js\n- |    \u251c\u2500\u2500 user.js\n- \u251c\u2500\u2500 epics/{...}\n- \u251c\u2500\u2500 constants/{...}\n- \u251c\u2500\u2500 helpers/{...}\n  \u251c\u2500\u2500 entities/\n  |    \u251c\u2500\u2500 delivery/\n+ |    |      \u251c\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251c\u2500\u2500 card.js\n+ |    |      |   \u251c\u2500\u2500 choice.js\n+ |    |      \u251c\u2500\u2500 model/\n+ |    |      |   \u251c\u2500\u2500 actions.js\n+ |    |      |   \u251c\u2500\u2500 constants.js\n+ |    |      |   \u251c\u2500\u2500 epics.js\n+ |    |      |   \u251c\u2500\u2500 getters.js\n+ |    |      |   \u251c\u2500\u2500 selectors.js\n+ |    |      \u251c\u2500\u2500 lib/ # ~ helpers\n  |    \u251c\u2500\u2500 region/\n  |    \u251c\u2500\u2500 user/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"\u53c2\u7167"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(\u8a18\u4e8b) Cohesion and Coupling: the difference"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1100:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(758);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);