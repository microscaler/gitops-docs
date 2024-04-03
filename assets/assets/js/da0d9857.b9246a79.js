"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[91674],{41545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Securing access to the dashboard"},i=void 0,s={unversionedId:"configuration/securing-access-to-the-dashboard",id:"version-0.17.0/configuration/securing-access-to-the-dashboard",title:"Securing access to the dashboard",description:"Dashboard Login",source:"@site/versioned_docs/version-0.17.0/configuration/securing-access-to-the-dashboard.mdx",sourceDirName:"configuration",slug:"/configuration/securing-access-to-the-dashboard",permalink:"/docs/0.17.0/configuration/securing-access-to-the-dashboard",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.17.0/configuration/securing-access-to-the-dashboard.mdx",tags:[],version:"0.17.0",frontMatter:{title:"Securing access to the dashboard"},sidebar:"docs",previous:{title:"Recommended RBAC Configuration",permalink:"/docs/0.17.0/configuration/recommended-rbac-configuration"},next:{title:"Service Account permissions",permalink:"/docs/0.17.0/configuration/service-account-permissions"}},l={},c=[{value:"Dashboard Login",id:"dashboard-login",level:2},{value:"Login via an OIDC provider",id:"login-via-an-oidc-provider",level:2},{value:"Background",id:"background",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Login via a cluster user account",id:"login-via-a-cluster-user-account",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dashboard-login"},"Dashboard Login"),(0,a.kt)("p",null,"There are 2 supported methods for logging in to the dashboard:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login via an OIDC provider"),(0,a.kt)("li",{parentName:"ul"},"Login via a cluster user account")),(0,a.kt)("p",null,"The recommended method is to integrate with an OIDC provider, as this will let you control permissions for existing users and groups that have already been configured to use OIDC. However, it is also possible to use a cluster user account to login, if an OIDC provider is not available to use. Both methods work with standard Kubernetes RBAC."),(0,a.kt)("h2",{id:"login-via-an-oidc-provider"},"Login via an OIDC provider"),(0,a.kt)("p",null,"You may decide to give your engineering teams access to the dashboard, in order to view and manage their workloads. In this case, you will want to secure access to the dashboard and restrict who can interact with it. Weave GitOps integrates with your OIDC provider and uses standard Kubernetes RBAC to give you fine-grained control of the permissions for the dashboard users."),(0,a.kt)("h4",{id:"background"},"Background"),(0,a.kt)("p",null,"OIDC extends the OAuth2 authorization protocol by including an additional field (ID Token) that contains information (claims) about a user's identity. After a user successfully authenticates with the OIDC provider, this information is used by Weave GitOps to impersonate the user in any calls to the Kubernetes API. This allows cluster administrators to use RBAC rules to control access to the cluster and also the dashboard."),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"In order to login via your OIDC provider, you need to create a Kubernetes secret to store the OIDC configuration. This configuration consists of the following parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"issuerURL")),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the issuer, typically the discovery URL without a path"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clientID")),(0,a.kt)("td",{parentName:"tr",align:null},"The client ID that has been setup for Weave GitOps in the issuer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clientSecret")),(0,a.kt)("td",{parentName:"tr",align:null},"The client secret that has been setup for Weave GitOps in the issuer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"redirectURL")),(0,a.kt)("td",{parentName:"tr",align:null},"The redirect URL that has been setup for Weave GitOps in the issuer, typically the dashboard URL followed by ",(0,a.kt)("inlineCode",{parentName:"td"},"/oauth2/callback ")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tokenDuration")),(0,a.kt)("td",{parentName:"tr",align:null},"The time duration that the ID Token will remain valid, after successful authentication"),(0,a.kt)("td",{parentName:"tr",align:null},'"1h0m0s"')))),(0,a.kt)("p",null,"Ensure that your OIDC provider has been setup with a client ID/secret and the redirect URL of the dashboard."),(0,a.kt)("p",null,"Create a secret named ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc-auth")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace with these parameters set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic oidc-auth \\\n  --namespace flux-system \\\n  --from-literal=issuerURL=<oidc-issuer-url> \\\n  --from-literal=clientID=<client-id> \\\n  --from-literal=clientSecret=<client-secret> \\\n  --from-literal=redirectURL=<redirect-url> \\\n  --from-literal=tokenDuration=<token-duration>\n")),(0,a.kt)("p",null,"Once the HTTP server starts unauthenticated users will have to click the 'login with OIDC provider' to log in or use the cluster account (if configured). Upon successful authentication, the users' identity will be impersonated in any calls made to the Kubernetes API, as part of any action they take in the dashboard. By default the Helm chart will configure RBAC correctly but it is recommended to read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.17.0/configuration/service-account-permissions"},"service account")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.17.0/configuration/user-permissions"},"user")," permissions pages to understand which actions are needed for Weave GitOps to function correctly."),(0,a.kt)("h2",{id:"login-via-a-cluster-user-account"},"Login via a cluster user account"),(0,a.kt)("p",null,"Before you login via the cluster user account, you need to generate a bcrypt hash for your chosen password and store it as a secret in Kubernetes. There are several different ways to generate a bcrypt hash, this guide uses ",(0,a.kt)("inlineCode",{parentName:"p"},"gitops get bcrypt-hash")," from our CLI:"),(0,a.kt)("p",null,"Generate the password by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'PASSWORD="<your password>"\necho -n $PASSWORD | gitops get bcrypt-hash\n$2a$10$OS5NJmPNEb13UgTOSKnMxOWlmS7mlxX77hv4yAiISvZ71Dc7IuN3q\n')),(0,a.kt)("p",null,"Now create a Kubernetes secret to store your chosen username and the password hash:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic cluster-user-auth \\\n  --namespace flux-system \\\n  --from-literal=username=admin \\\n  --from-literal=password='$2a$10$OS5NJmPNEb13UTOSKngMxOWlmS7mlxX77hv4yAiISvZ71Dc7IuN3q'\n")),(0,a.kt)("p",null,"You should now be able to login via the cluster user account using your chosen username and password. Follow the instructions in the next section in order to configure RBAC correctly."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);