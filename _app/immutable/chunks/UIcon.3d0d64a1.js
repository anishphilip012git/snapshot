import{w as k,b as A}from"./paths.dc4da41b.js";import{S as E,i as N,s as w,k as J,l as T,m as I,h as u,n as d,b as C,J as f}from"./index.81f7329e.js";const h="@riadh-adrani-theme",R=e=>{localStorage.setItem(h,JSON.stringify(e))},m=k(!1),p=e=>m.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return R(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),L=()=>{const e=localStorage.getItem(h);e?p(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?p(!0):p(!1)},v=e=>`${A}/logos/${e}`,s=(e,t)=>t?{dark:v(t),light:v(e)}:v(e),U={AWS:s("aws.svg"),GCP:s("gcp.svg"),FIREBASE:s("firebase.svg"),JENKINS:s("jenkins.svg"),ANSIBLE:s("ansible.svg"),Bootstrap:s("bootstrap.svg"),PHP:s("php.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi.svg"),SQLALCHEMY:s("SQLAlchemy.svg"),Flask:s("flask.svg"),SPRING:s("spring.svg"),HIBERNATE:s("hibernate.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetees.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),ACTIVE_DIRECTORY:s("ad.jpg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),SBU:s("sbu.svg"),DTU:s("dtu.png"),OXANE:s("oxane.jpeg"),SAMSUNG:s("samsung.svg"),CSI:s("csi.png"),APPSOLUTE:s("appsolute.png"),Git:s("git.svg"),Terraform:s("Terraform.svg")};let S;m.subscribe(e=>S=e);const D=e=>typeof e=="string"?e:S?e.dark:e.light;globalThis&&globalThis.__awaiter;function j(e){let t,a;return{c(){t=J("i"),this.h()},l(n){t=T(n,"I",{class:!0}),I(t).forEach(u),this.h()},h(){d(t,"class",a=`${e[0]} ${e[1]}`)},m(n,g){C(n,t,g)},p(n,[g]){g&3&&a!==(a=`${n[0]} ${n[1]}`)&&d(t,"class",a)},i:f,o:f,d(n){n&&u(t)}}}function x(e,t,a){let{icon:n=void 0}=t,{classes:g=""}=t;return e.$$set=o=>{"icon"in o&&a(0,n=o.icon),"classes"in o&&a(1,g=o.classes)},[n,g]}class M extends E{constructor(t){super(),N(this,t,x,j,w,{icon:0,classes:1})}}export{U as A,M as U,p as a,D as g,L as o,m as t};
