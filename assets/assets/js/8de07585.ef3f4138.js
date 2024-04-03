"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[66002],{91719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(88746);const i={title:"Introduction",hide_title:!0},o="Weave GitOps",s={unversionedId:"intro-weave-gitops",id:"version-0.24.0/intro-weave-gitops",title:"Introduction",description:"Weave GitOps is a powerful extension to Flux, a leading GitOps engine and",source:"@site/versioned_docs/version-0.24.0/intro-weave-gitops.mdx",sourceDirName:".",slug:"/intro-weave-gitops",permalink:"/docs/0.24.0/intro-weave-gitops",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.24.0/intro-weave-gitops.mdx",tags:[],version:"0.24.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",next:{title:"Weave GitOps OSS",permalink:"/docs/0.24.0/open-source/getting-started/install-OSS"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Features",id:"features",level:2},{value:"Weave GitOps Enterprise",id:"weave-gitops-enterprise",level:2},{value:"Why adopt GitOps?",id:"why-adopt-gitops",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"weave-gitops"},"Weave GitOps"),(0,n.kt)("p",null,"Weave GitOps is a powerful extension to ",(0,n.kt)("a",{parentName:"p",href:"https://fluxcd.io"},"Flux"),", a leading GitOps engine and\nCNCF project. Weave GitOps provides insights into your application deployments,\nand makes continuous delivery with GitOps easier to adopt and scale across your teams."),(0,n.kt)("p",null,"Its web UI surfaces key information to help application operators easily discover\nand resolve issues. The intuitive interface provides a guided experience to build\nunderstanding and simplify getting started for new users; they can easily discover\nthe relationship between Flux objects and navigate to deeper levels of information as required."),(0,n.kt)("p",null,"Weave GitOps is an open source project sponsored by ",(0,n.kt)("a",{parentName:"p",href:"https://weave.works"},"Weaveworks")," - the GitOps company,\nand original creators of ",(0,n.kt)("a",{parentName:"p",href:"https://fluxcd.io"},"Flux"),"."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This user guide provides content that will help you to install and get started with our free and paid offerings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Weave GitOps Open Source"),": a simple, open source developer platform for people who don't have Kubernetes expertise but who want cloud native applications. It includes the UI and many other features that take your team beyond a simple CI/CD system. Experience how easy it is to enable GitOps and run your apps in a cluster. ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.24.0/open-source/getting-started/install-OSS"},"Go here to install"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Weave GitOps Enterprise"),": an ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.24.0/enterprise/getting-started/intro-enterprise"},"enterprise version")," that adds automation and 100% verifiable trust to existing developer platforms, enabling faster and more frequent deployments with guardrails and golden paths for every app team. Note that Enterprise offers a more robust UI than what you'll find in our open source version. ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.24.0/enterprise/getting-started/install-enterprise"},"Go here to install"),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Want to learn more about how ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.24.0/enterprise/getting-started/intro-enterprise"},"Weave GitOps Enterprise")," can help your team?\nGet in touch with ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works")," to discuss your needs.")),(0,n.kt)("p",null,"To give Weave GitOps a test drive, we recommend checking out the Open Source version and its ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.24.0/open-source/getting-started/ui-OSS"},"UI"),", then deploying an application. Let's take a closer look at the features it offers you, all for free."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"OSS Weave GitOps has a number of awesome features to take your team beyond a simple CI/CD system."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc77\u200d\u2640\ufe0f Drill down into more detailed information on any given Flux resource."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0d Uncover relationships between resources and quickly navigate between them."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd14 Understand how workloads are reconciled through a directional graph."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd7d View Kubernetes events relating to a given object to understand issues and changes."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udeb7 Secure access to the dashboard through the ability to integrate with an OIDC provider (such as Dex)."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd17 Fully integrates with ",(0,n.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/"},"Flux")," as the GitOps engine to provide:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u267e\ufe0f Continuous Delivery through GitOps for apps and infrastructure"),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udde9 Support for GitHub, GitLab, Bitbucket, and even use s3-compatible buckets as a source; all major container registries; and all CI workflow providers."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd11 A secure, pull-based mechanism, operating with least amount of privileges, and adhering to Kubernetes security policies."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0c Compatible with any conformant ",(0,n.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/installation/#prerequisites"},"Kubernetes version")," and common ecosystem technologies such as Helm, Kustomize, RBAC, Prometheus, OPA, Kyverno, etc."),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfe2 Multitenancy, multiple git repositories, multiple clusters"),(0,n.kt)("li",{parentName:"ul"},"\u2757 Alerts and notifications")))),(0,n.kt)("h2",{id:"weave-gitops-enterprise"},"Weave GitOps Enterprise"),(0,n.kt)("p",null,"Need even more GitOps? ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.24.0/enterprise/getting-started/intro-enterprise"},"Weave GitOps Enterprise")," has all the features\nlisted above, plus many more."),(0,n.kt)("p",null,"WGEE provides ops teams with an easy way to assess the\nhealth of multiple clusters in a single place. It shows cluster information such as\nKubernetes version and number of nodes and provides details about the GitOps operations\non those clusters, such as Git repositories and recent commits. Additionally, it\naggregates Prometheus alerts to assist with troubleshooting."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26f5 ",(0,n.kt)("strong",{parentName:"li"},"Cluster Fleet Management")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd10 ",(0,n.kt)("strong",{parentName:"li"},"Trusted Application Delivery")),(0,n.kt)("li",{parentName:"ul"},"\u23ed\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Progressive Delivery")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc46 ",(0,n.kt)("strong",{parentName:"li"},"Self-Service Templates and Profiles")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc96 ",(0,n.kt)("strong",{parentName:"li"},"Health Status and Compliance Dashboards")),(0,n.kt)("li",{parentName:"ul"},"\ud83e\uddd1\u200d\ud83c\udfed\ud83d\udc69\u200d\ud83c\udfed ",(0,n.kt)("strong",{parentName:"li"},"Team Workspaces")),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udded ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes Anywhere")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd14 ",(0,n.kt)("strong",{parentName:"li"},"Critical 24/7 Support")),(0,n.kt)("li",{parentName:"ul"},"\u267e\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"CD Pipelines"))),(0,n.kt)("admonition",{title:"Want to learn more about how Weave GitOps Enterprise can help your team?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Get in touch with ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works")," to discuss your needs.")),(0,n.kt)("h2",{id:"why-adopt-gitops"},"Why adopt GitOps?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'"GitOps is the best thing since configuration as code. Git changed how we collaborate, but declarative configuration is the key to dealing with infrastructure at scale, and sets the stage for the next generation of management tools"')),(0,n.kt)("cite",null,"- Kelsey Hightower, Staff Developer Advocate, Google."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Adopting GitOps can bring a number of key benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Faster and more frequent deployments"),(0,n.kt)("li",{parentName:"ul"},"Easy recovery from failures"),(0,n.kt)("li",{parentName:"ul"},"Improved security and auditability")),(0,n.kt)("p",null,"To learn more about GitOps, check out these resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.weave.works/WebContent-EB-GitOps-for-Beginners.html"},"GitOps for absolute beginners")," - eBook from Weaveworks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.weave.works/technologies/gitops/"},"Guide to GitOps")," - from Weaveworks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opengitops.dev/"},"OpenGitOps")," - CNCF Sandbox project aiming to define a vendor-neutral, principle-led meaning of GitOps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gitops.tech/"},"gitops.tech")," - supported by Innoq")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);