"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[52578],{85391:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(88746);a(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},30045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(85391);const i={title:"Profiles",hide_title:!0},o='Profiles <TierLabel tiers="Enterprise" />',s={unversionedId:"cluster-management/profiles",id:"version-0.23.0/cluster-management/profiles",title:"Profiles",description:"The following instructions require you to make minor changes to the content of your own hosted Helm repository.",source:"@site/versioned_docs/version-0.23.0/cluster-management/profiles.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/profiles",permalink:"/docs/0.23.0/cluster-management/profiles",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/cluster-management/profiles.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Profiles",hide_title:!0},sidebar:"docs",previous:{title:"Deleting a Cluster",permalink:"/docs/0.23.0/cluster-management/deleting-a-cluster"},next:{title:"Add Applications",permalink:"/docs/0.23.0/cluster-management/add-applications"}},p={},c=[{value:"1. Annotate a Helm chart to make it available for installation",id:"1-annotate-a-helm-chart-to-make-it-available-for-installation",level:3},{value:"(Optional) Using a helm chart from a remote public/private repository",id:"optional-using-a-helm-chart-from-a-remote-publicprivate-repository",level:4},{value:"2. Select which profiles you want installed when creating a cluster",id:"2-select-which-profiles-you-want-installed-when-creating-a-cluster",level:3}],m={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profiles-"},"Profiles ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("admonition",{title:"BEFORE YOU START",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following instructions require you to make minor changes to the content of your own hosted Helm repository.")),(0,r.kt)("p",null,"When provisioning new clusters it is often useful to install selected software packages to them as part of their bootstrap process. Weave GitOps Enterprise enables this by installing standard Helm charts to the newly provisioned clusters. This feature lowers the ongoing operational overhead and allows for the clusters to be immediately usable after being provisioned. To set this up you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Annotate a Helm chart to make it available for installation"),(0,r.kt)("li",{parentName:"ol"},"Select which profiles you want installed when creating a cluster")),(0,r.kt)("h3",{id:"1-annotate-a-helm-chart-to-make-it-available-for-installation"},"1. Annotate a Helm chart to make it available for installation"),(0,r.kt)("p",null,"In order for a chart to become available for installation, it needs to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"weave.works/profile")," annotation. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Chart.yaml"',title:'"Chart.yaml"'},'annotations:\n  weave.works/profile: observability-profile\napiVersion: v1\nappVersion: 1.0.0\ndescription: Observability Helm chart for Kubernetes\nhome: https://github.com/weaveworks/observability-profile\nkubeVersion: ">=1.19.0-0"\nname: observability\nsources:\n  - https://github.com/weaveworks/observability-profile\nversion: 1.0.0\n')),(0,r.kt)("p",null,"The annotation value is not important and can be left blank i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". Helm charts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"weave.works/profile")," annotation are called ",(0,r.kt)("em",{parentName:"p"},"Profiles"),"."),(0,r.kt)("p",null,"Annotations can also be used to determine the order in which profiles will be installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"annotations:\n  weave.works/profile: observability-profile\n  weave.works/layer: layer-0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"annotations:\n  weave.works/profile: podinfo-profile\n  weave.works/layer: layer-1\n")),(0,r.kt)("p",null,"The profiles will be sorted lexicographically by their layer and those at a higher layer will only be installed after lower layers have been successfully installed and started."),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"observability-profile")," will be installed prior to ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-profile"),". In the corresponding HelmReleases, the dependencies can be observed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  labels:\n    weave.works/applied-layer: layer-0\n  name: cluster-name-observability\n  namespace: wego-system\n...\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  labels:\n    weave.works/applied-layer: layer-1\n  name: cluster-name-podinfo\n  namespace: wego-system\nspec:\n...\n  dependsOn:\n  - name: cluster-name-observability\n...\n")),(0,r.kt)("h4",{id:"optional-using-a-helm-chart-from-a-remote-publicprivate-repository"},"(Optional) Using a helm chart from a remote public/private repository"),(0,r.kt)("p",null,"The helm releases with the profiles can be added in a remote repository which can be referenced using a HelmRepository resource.The repository can be either public or private, although extra steps are required to use the private repo."),(0,r.kt)("p",null,"In this example a public repo and branch is referenced directly where the helm releases are"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="HelmRepository.yaml"',title:'"HelmRepository.yaml"'},"apiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: HelmRepository\nmetadata:\n  name: weaveworks-charts\n  namespace: flux-system\nspec:\n  interval: 1m\n  url: https://weaveworks.github.io/weave-gitops-profile-examples/\n")),(0,r.kt)("p",null,"To be able to use private repositories with restricted access, a secret can be used and synced to the target leaf cluster using ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.23.0/secrets/bootstraping-secrets"},"SecretSync"),". "),(0,r.kt)("p",null,"The secret is referenced in the SecretSync as ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.secretRef")," and the labels of the target leaf cluster are added for the syncer to match clusters against those labels using  ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.clusterSelector.matchLabels"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="SecretSync.yaml"',title:'"SecretSync.yaml"'},"apiVersion: capi.weave.works/v1alpha1\nkind: SecretSync\nmetadata:\n  name: my-dev-secret-syncer\n  namespace: flux-system\nspec:\n  clusterSelector:\n    matchLabels:\n      weave.works/capi: bootstrap\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  targetNamespace: flux-system\n")),(0,r.kt)("p",null,"Once the SecretSync and Secret are available, the secret can be directly referenced in the HelmRepsitory object directly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="PrivateHelmRepository.yaml"',title:'"PrivateHelmRepository.yaml"'},"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weaveworks-charts\n  namespace: flux-system\nspec:\n  interval: 60m\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  url: https://charts.dev.wkp.weave.works/releases/charts-v3\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"note"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepoSecret"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SecretSync"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster")," should all be in the same namespace."),(0,r.kt)("h3",{id:"2-select-which-profiles-you-want-installed-when-creating-a-cluster"},"2. Select which profiles you want installed when creating a cluster"),(0,r.kt)("p",null,"Currently WGE inspects the current namespace that it is deployed in (in the management cluster) for a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")," object named ",(0,r.kt)("inlineCode",{parentName:"p"},"weaveworks-charts"),". This Kubernetes object should be pointing to a Helm chart repository that includes the profiles that are available for installation."),(0,r.kt)("p",null,"When creating a cluster from the UI using a CAPI template, these profiles should be available for selection in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profiles")," section of the template. For example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profiles Selection",src:a(75064).Z,width:"2138",height:"398"})),(0,r.kt)("p",null,"As shown above, some profiles will be optional whereas some profiles will be required. This is determined when the template is authored and allows for operation teams to control which Helm packages should be installed on new clusters by default."),(0,r.kt)("p",null,"To allow editing of the yaml values for required profiles, the ",(0,r.kt)("inlineCode",{parentName:"p"},"editable")," flag can be added in the annotation describing the required profile in the template. For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: connect-a-cluster-with-policies\n  namespace: default\n  annotations:\n    capi.weave.works/profile-0: \'{"name": "weave-policy-agent", "editable": true, "version": "0.2.8", "values": "accountId: weaveworks\\nclusterId: ${CLUSTER_NAME}" }\'\n')))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/profile-selection-3ce8ebaeefc4815b9ac5b66e93f1a6fe.png"}}]);