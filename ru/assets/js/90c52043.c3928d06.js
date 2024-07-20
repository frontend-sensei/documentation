"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5425],{922:(e,n,s)=>{s.d(n,{Ay:()=>a,RM:()=>d});var i=s(6070),t=s(7468),r=(s(758),s(1190)),o=s(9950);const c=e=>{let{ticket:n}=e;const s=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:(0,o.T)({id:"shared.wip.title"})}),(0,i.jsx)("p",{children:(0,o.T)({id:"shared.wip.subtitle"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,o.T)({id:"shared.wip.var.feedback.base"}),(0,i.jsx)(r.A,{to:s,children:(0,o.T)({id:"shared.wip.var.feedback.link"})})]}),(0,i.jsxs)("li",{children:[(0,o.T)({id:"shared.wip.var.material.base"}),(0,i.jsx)(r.A,{to:"https://t.me/feature_sliced",children:(0,o.T)({id:"shared.wip.var.material.link"})})]}),(0,i.jsxs)("li",{children:[(0,o.T)({id:"shared.wip.var.contribute.base"}),(0,i.jsx)(r.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,o.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},d=[];function l(e){const n={admonition:"admonition",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,i.jsx)(c,{ticket:e.ticket})})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9153:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=s(6070),t=s(7468),r=s(922);const o={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},c="\u0414\u0435\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",d={id:"guides/issues/desegmented",title:"\u0414\u0435\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",description:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/desegmented",permalink:"/ru/docs/guides/issues/desegmented",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",tags:[],version:"current",lastUpdatedAt:1721436168e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 React Query",permalink:"/ru/docs/guides/tech/with-react-query"},next:{title:"\u0420\u043e\u0443\u0442\u0438\u043d\u0433",permalink:"/ru/docs/guides/issues/routes"}},l={},a=[...r.RM,{value:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f",id:"situation",level:2},{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"problem",level:2},{value:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",id:"if-you-ignore-it",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"solution",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u0434\u0435\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",children:"\u0414\u0435\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"}),"\n",(0,i.jsx)(r.Ay,{ticket:"148"}),"\n",(0,i.jsx)(n.h2,{id:"situation",children:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f"}),"\n",(0,i.jsx)(n.p,{children:"\u041e\u0447\u0435\u043d\u044c \u0447\u0430\u0441\u0442\u043e \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043c\u043e\u0434\u0443\u043b\u0438, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0435\u0441\u044f \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u0434\u043e\u043c\u0435\u043d\u0443 \u0438\u0437 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0434\u0435\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0438 \u0440\u0430\u0441\u043a\u0438\u0434\u0430\u043d\u044b \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u251c\u2500\u2500 components/\n|    \u251c\u2500\u2500 DeliveryCard\n|    \u251c\u2500\u2500 DeliveryChoice\n|    \u251c\u2500\u2500 RegionSelect\n|    \u251c\u2500\u2500 UserAvatar\n\u251c\u2500\u2500 actions/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 epics/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 constants/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 helpers/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 entities/\n|    \u251c\u2500\u2500 delivery/\n|    |      \u251c\u2500\u2500 getters.js\n|    |      \u251c\u2500\u2500 selectors.js\n|    \u251c\u2500\u2500 region/\n|    \u251c\u2500\u2500 user/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"problem",children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0432 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430 ",(0,i.jsx)(n.strong,{children:"High Cohesion"})," \u0438 \u0438\u0437\u043b\u0438\u0448\u043d\u0435\u0433\u043e \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u044f ",(0,i.jsx)(n.strong,{children:"\u043e\u0441\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"})]}),"\n",(0,i.jsx)(n.h2,{id:"if-you-ignore-it",children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 - \u043d\u0430\u043c \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432 \u0433\u043e\u043b\u043e\u0432\u0435, \u0447\u0442\u043e \u043e\u043d\u0430 \u043b\u0435\u0436\u0438\u0442 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0438 \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044c \u0432 \u043a\u043e\u0434\u0435 \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0441\u0442 - \u0447\u0442\u043e \u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442 \u043d\u0430\u0448\u0443 ",(0,i.jsx)(n.strong,{children:"\u041e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u0415\u0441\u043b\u0438 \u043d\u0430\u043c \u043d\u0430\u0434\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e, \u043d\u0430\u043c \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0439\u0442\u0438\u0441\u044c \u043f\u043e \u0432\u0441\u0435\u043c\u0443-\u0432\u0441\u0435\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0443, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0432 \u0434\u0435\u0442\u0430\u043b\u044f\u0445 ",(0,i.jsx)(n.strong,{children:"actions, epics, constants, entities, components"})," - \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e \u043b\u0435\u0436\u0430\u043b\u043e \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435"]}),"\n",(0,i.jsxs)(n.li,{children:["\u041d\u0435\u044f\u0432\u043d\u044b\u0435 \u0441\u0432\u044f\u0437\u0438 \u0438 \u043d\u0435\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0442\u0443\u0449\u0435\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'\u041f\u0440\u0438 \u0442\u0430\u043a\u043e\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0435 \u043e\u0447\u0435\u043d\u044c \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u043c\u044b\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0433\u043b\u0430\u0437 \u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u043a\u0430\u043a \u043c\u044b "\u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0440\u0430\u0434\u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442", \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0441\u0432\u0430\u043b\u043a\u0443 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"solution",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0420\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0435\u0441\u044f \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u0434\u043e\u043c\u0435\u043d\u0443/\u044e\u0437\u043a\u0435\u0439\u0441\u0443 - \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0440\u044f\u0434\u043e\u043c"}),"\n",(0,i.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f - \u0432\u0441\u0435 \u0435\u0433\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 \u043b\u0435\u0436\u0430\u043b\u0438 \u0440\u044f\u0434\u043e\u043c, \u0430 \u043d\u0435 \u0431\u044b\u043b\u0438 \u0440\u0430\u0441\u043a\u0438\u0434\u0430\u043d\u044b \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u042d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 discoverability \u0438 \u044f\u0432\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u043e\u0432\u043e\u0439 \u0431\u0430\u0437\u044b \u0438 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"- \u251c\u2500\u2500 components/\n- |    \u251c\u2500\u2500 DeliveryCard\n- |    \u251c\u2500\u2500 DeliveryChoice\n- |    \u251c\u2500\u2500 RegionSelect\n- |    \u251c\u2500\u2500 UserAvatar\n- \u251c\u2500\u2500 actions/\n- |    \u251c\u2500\u2500 delivery.js\n- |    \u251c\u2500\u2500 region.js\n- |    \u251c\u2500\u2500 user.js\n- \u251c\u2500\u2500 epics/{...}\n- \u251c\u2500\u2500 constants/{...}\n- \u251c\u2500\u2500 helpers/{...}\n  \u251c\u2500\u2500 entities/\n  |    \u251c\u2500\u2500 delivery/\n+ |    |      \u251c\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251c\u2500\u2500 card.js\n+ |    |      |   \u251c\u2500\u2500 choice.js\n+ |    |      \u251c\u2500\u2500 model/\n+ |    |      |   \u251c\u2500\u2500 actions.js\n+ |    |      |   \u251c\u2500\u2500 constants.js\n+ |    |      |   \u251c\u2500\u2500 epics.js\n+ |    |      |   \u251c\u2500\u2500 getters.js\n+ |    |      |   \u251c\u2500\u2500 selectors.js\n+ |    |      \u251c\u2500\u2500 lib/ # ~ helpers\n  |    \u251c\u2500\u2500 region/\n  |    \u251c\u2500\u2500 user/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) \u041f\u0440\u043e Low Coupling \u0438 High Cohesion \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) Low Coupling \u0438 High Cohesion. \u0417\u0430\u043a\u043e\u043d \u0414\u0435\u043c\u0435\u0442\u0440\u044b"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7468:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(758);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);