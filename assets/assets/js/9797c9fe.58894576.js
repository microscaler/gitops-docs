"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[42243],{85391:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return r.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},951:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),i=(n(67294),n(3905));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,i.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}a.isMDXComponent=!0},11681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(85391),a=n(951);const p={title:"Authorization",hide_title:!0},s='Authorization <TierLabel tiers="Enterprise" />',l={unversionedId:"pipelines/authorization",id:"version-0.23.0/pipelines/authorization",title:"Authorization",description:"This section provides a recommended way to configure RBAC in the context of pipelines. It is oriented to the journey",source:"@site/versioned_docs/version-0.23.0/pipelines/authorization.mdx",sourceDirName:"pipelines",slug:"/pipelines/authorization",permalink:"/docs/0.23.0/pipelines/authorization",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/pipelines/authorization.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Authorization",hide_title:!0},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/0.23.0/pipelines/getting-started"},next:{title:"Promoting applications",permalink:"/docs/0.23.0/pipelines/promoting-applications"}},c={},u=[{value:"View pipelines",id:"view-pipelines",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorization-"},"Authorization ",(0,i.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)(a.ZP,{mdxType:"AlphaWarning"}),(0,i.kt)("p",null,"This section provides a recommended way to configure RBAC in the context of pipelines. It is oriented to the journey\nthat you expect your users to have."),(0,i.kt)("h2",{id:"view-pipelines"},"View pipelines"),(0,i.kt)("p",null,"In order to view pipelines, users would need to have read access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline")," resource and the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," resources."),(0,i.kt)("p",null,"An example of configuration to achieve this purpose could be seen below with ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline-reader")," role and ",(0,i.kt)("inlineCode",{parentName:"p"},"search-pipeline-reader"),"\nrole-binding to allow a group ",(0,i.kt)("inlineCode",{parentName:"p"},"search-developer")," to access pipeline resources within ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: pipeline-reader\nrules:\n  - apiGroups: [ "pipelines.weave.works" ]\n    resources: [ "pipelines" ]\n    verbs: [ "get", "list", "watch"]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list", "watch"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: search-pipeline-reader\n  namespace: search\nsubjects:\n  - kind: Group\n    name: search-developer\n    apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: pipeline-reader\n  apiGroup: rbac.authorization.k8s.io\n')))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);