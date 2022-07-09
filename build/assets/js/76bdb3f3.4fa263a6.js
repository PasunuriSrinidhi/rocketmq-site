"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4083],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1201:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={},i="\u6279\u91cf\u6d88\u606f\u53d1\u9001",u={unversionedId:"\u751f\u4ea7\u8005/08message4",id:"\u751f\u4ea7\u8005/08message4",isDocsHomePage:!1,title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",description:"\u5728\u5bf9\u541e\u5410\u7387\u6709\u4e00\u5b9a\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0cApache RocketMQ\u53ef\u4ee5\u5c06\u4e00\u4e9b\u6d88\u606f\u805a\u6210\u4e00\u6279\u4ee5\u540e\u8fdb\u884c\u53d1\u9001\uff0c\u53ef\u4ee5\u589e\u52a0\u541e\u5410\u7387\uff0c\u5e76\u51cf\u5c11API\u548c\u7f51\u7edc\u8c03\u7528\u6b21\u6570\u3002",source:"@site/docs/02-\u751f\u4ea7\u8005/08message4.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/08message4",permalink:"/docs/\u751f\u4ea7\u8005/08message4",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/02-\u751f\u4ea7\u8005/08message4.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/07message3"},next:{title:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/09message5"}},p=[],l={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6279\u91cf\u6d88\u606f\u53d1\u9001"},"\u6279\u91cf\u6d88\u606f\u53d1\u9001"),(0,a.kt)("p",null,"\u5728\u5bf9\u541e\u5410\u7387\u6709\u4e00\u5b9a\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0cApache RocketMQ\u53ef\u4ee5\u5c06\u4e00\u4e9b\u6d88\u606f\u805a\u6210\u4e00\u6279\u4ee5\u540e\u8fdb\u884c\u53d1\u9001\uff0c\u53ef\u4ee5\u589e\u52a0\u541e\u5410\u7387\uff0c\u5e76\u51cf\u5c11API\u548c\u7f51\u7edc\u8c03\u7528\u6b21\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"batch",src:r(985).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class SimpleBatchProducer {\n\n    public static void main(String[] args) throws Exception {\n        DefaultMQProducer producer = new DefaultMQProducer("BatchProducerGroupName");\n        producer.start();\n\n        //If you just send messages of no more than 1MiB at a time, it is easy to use batch\n        //Messages of the same batch should have: same topic, same waitStoreMsgOK and no schedule support\n        String topic = "BatchTest";\n        List<Message> messages = new ArrayList<>();\n        messages.add(new Message(topic, "Tag", "OrderID001", "Hello world 0".getBytes()));\n        messages.add(new Message(topic, "Tag", "OrderID002", "Hello world 1".getBytes()));\n        messages.add(new Message(topic, "Tag", "OrderID003", "Hello world 2".getBytes()));\n\n        producer.send(messages);\n    }\n}\n')))}m.isMDXComponent=!0},985:function(e,t,r){t.Z=r.p+"assets/images/batch-241308ac9ed97b3a1fbf0e5e6417f74d.png"}}]);