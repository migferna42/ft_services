(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3/ef":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("TSYQ"),i=r.n(o),u=r("Csm0");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return s(this,t),f(this,d(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.dataSource;return a.a.createElement("li",{className:"card-item-wrapper"},a.a.createElement("a",{className:"card-item",href:"datasources/edit/".concat(e.id)},a.a.createElement("div",{className:"card-item-header"},a.a.createElement("div",{className:"card-item-type"},e.type)),a.a.createElement("div",{className:"card-item-body"},a.a.createElement("figure",{className:"card-item-figure"},a.a.createElement("img",{src:e.typeLogoUrl,alt:e.name})),a.a.createElement("div",{className:"card-item-details"},a.a.createElement("div",{className:"card-item-name","aria-label":u.selectors.pages.DataSources.dataSources(e.name)},e.name,e.isDefault&&a.a.createElement("span",{className:"btn btn-secondary btn-small card-item-label"},"default")),a.a.createElement("div",{className:"card-item-sub-name"},e.url)))))}}])&&l(r.prototype,n),o&&l(r,o),t}(n.PureComponent),y=r("Wu7z");function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return b(this,t),v(this,S(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.dataSources,r=e.layoutMode,n=i()({"card-section":!0,"card-list-layout-grid":r===y.a.Grid,"card-list-layout-list":r===y.a.List});return a.a.createElement("section",{className:n},a.a.createElement("ol",{className:"card-list"},t.map((function(e,t){return a.a.createElement(m,{dataSource:e,key:"".concat(e.id,"-").concat(t)})}))))}}])&&h(r.prototype,n),o&&h(r,o),t}(n.PureComponent);t.a=O},"5BCB":function(e,t,r){"use strict";var n=r("ZFWI"),a=r("NXk7"),o=r("WnbS"),i=r("3SGO"),u=r("HUMP"),c=r("okuo"),s=r("Vw/f"),l=r("FFN/"),f=r("Obii");function d(e){var t=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter((function(e){return e})),r={},n={},a=[m({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize & explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),m({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize & explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),m({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize & explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),m({id:"grafana-servicenow-datasource",description:"ServiceNow integration & data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),m({id:"grafana-datadog-datasource",description:"DataDog integration & data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),m({id:"grafana-newrelic-datasource",description:"New Relic integration & data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),m({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration & data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"})],o=!0,i=!1,u=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value;r[l.id]=l}}catch(e){i=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}var d=!0,y=!1,g=void 0;try{for(var b,h=function(){var e=b.value;if(a.find((function(t){return t.id===e.id}))&&(e.category="enterprise"),e.info.links){var o=!0,i=!1,u=void 0;try{for(var c,s=e.info.links[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){c.value.name="Learn more"}}catch(e){i=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}}(t.find((function(t){return t.id===e.category}))||r.other).plugins.push(e),n[e.id]=e},v=e[Symbol.iterator]();!(d=(b=v.next()).done);d=!0)h()}catch(e){y=!0,g=e}finally{try{d||null==v.return||v.return()}finally{if(y)throw g}}var S=!0,w=!1,O=void 0;try{for(var j,x=t[Symbol.iterator]();!(S=(j=x.next()).done);S=!0){var k=j.value;if("cloud"===k.id&&k.plugins.push({id:"gcloud",name:"Grafana Cloud",type:f.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===k.id){var E=!0,D=!1,P=void 0;try{for(var _,T=a[Symbol.iterator]();!(E=(_=T.next()).done);E=!0){var N=_.value;n[N.id]||k.plugins.push(N)}}catch(e){D=!0,P=e}finally{try{E||null==T.return||T.return()}finally{if(D)throw P}}}p(k.plugins)}}catch(e){w=!0,O=e}finally{try{S||null==x.return||x.return()}finally{if(w)throw O}}return t}function p(e){var t={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};e.sort((function(e,r){var n=t[e.id]||0,a=t[r.id]||0;return n>a?-1:n<a?1:e.name>r.name?-1:1}))}function m(e){return{id:e.id,name:e.name,type:f.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/grafana/plugins/"+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var y=r("frIo");function g(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){g(o,n,a,i,u,"next",e)}function u(e){g(o,n,a,i,u,"throw",e)}i(void 0)}))}}r.d(t,"c",(function(){return h})),r.d(t,"g",(function(){return v})),r.d(t,"f",(function(){return S})),r.d(t,"d",(function(){return w})),r.d(t,"a",(function(){return O})),r.d(t,"e",(function(){return j})),r.d(t,"h",(function(){return x})),r.d(t,"b",(function(){return k}));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loadDataSource:w,getDataSource:y.a,getDataSourceMeta:y.b,importDataSourcePlugin:s.b};return(function(){var r=b(regeneratorRuntime.mark((function r(n,a){var o,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!isNaN(e)){r.next=3;break}return n(Object(l.g)(new Error("Invalid ID"))),r.abrupt("return");case 3:return r.prev=3,r.next=6,n(t.loadDataSource(e));case 6:if(!a().dataSourceSettings.plugin){r.next=8;break}return r.abrupt("return");case 8:return o=t.getDataSource(a().dataSources,e),i=t.getDataSourceMeta(a().dataSources,o.type),r.next=12,t.importDataSourcePlugin(i);case 12:u=r.sent,n(Object(l.h)(u)),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(3),console.log("Failed to import plugin module",r.t0),n(Object(l.g)(r.t0));case 20:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e,t){return r.apply(this,arguments)}}())},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getDatasourceSrv:o.a,getBackendSrv:a.c};return(function(){var r=b(regeneratorRuntime.mark((function r(n,a){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getDatasourceSrv().get(e);case 2:if((o=r.sent).testDatasource){r.next=5;break}return r.abrupt("return");case 5:n(Object(l.o)()),t.getBackendSrv().withNoBackendCache(b(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.testDatasource();case 3:t=e.sent,n(Object(l.p)(t)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),r="",r=e.t0.statusText?"HTTP Error "+e.t0.statusText:e.t0.message,n(Object(l.n)({message:r}));case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())};function S(){return function(){var e=b(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.c)().get("/api/datasources");case 2:r=e.sent,t(Object(l.e)(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function w(e){return function(){var t=b(regeneratorRuntime.mark((function t(r){var n,o,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().get("/api/datasources/".concat(e));case 2:return n=t.sent,t.next=5,Object(c.a)(n.type);case 5:return o=t.sent,t.next=8,Object(s.b)(o);case 8:f=t.sent,r(Object(l.a)(n)),r(Object(l.b)(o)),r(Object(i.d)(Object(u.a)(n,f)));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function O(e){return function(){var t=b(regeneratorRuntime.mark((function t(r,n){var o,u,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(S());case 2:return o=n().dataSources.dataSources,u={name:e.name,type:e.id,access:"proxy",isDefault:0===o.length},E(o,u.name)&&(u.name=D(o,u.name)),t.next=7,Object(a.c)().post("/api/datasources",u);case 7:c=t.sent,r(Object(i.c)({path:"/datasources/edit/".concat(c.id)}));case 9:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}function j(){return function(){var e=b(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.c)()),e.next=3,Object(a.c)().get("/api/plugins",{enabled:1,type:"datasource"});case 3:r=e.sent,n=d(r),t(Object(l.d)({plugins:r,categories:n}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=b(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().put("/api/datasources/".concat(e.id),e);case 2:return t.next=4,P();case 4:return t.abrupt("return",r(w(e.id)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function k(){return function(){var e=b(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r().dataSources.dataSource,e.next=3,Object(a.c)().delete("/api/datasources/".concat(n.id));case 3:return e.next=5,P();case 5:t(Object(i.c)({path:"/datasources"}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}function E(e,t){return e.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()})).length>0}function D(e,t){for(;E(e,t);)t=_(t)?"".concat(N(t)).concat((r=T(t),isNaN(r)?1:r+1)):"".concat(t,"-1");var r;return t}function P(){return Object(a.c)().get("/api/frontend/settings").then((function(e){n.b.datasources=e.datasources,n.b.defaultDatasource=e.defaultDatasource,Object(o.a)().init()}))}function _(e){return e.endsWith("-",e.length-1)}function T(e){return parseInt(e.slice(-1),10)}function N(e){return e.slice(0,e.length-1)}},"6jYb":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("q1tI"),a=r.n(n),o=r("EKT6"),i=r("kDLi");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}var r,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.searchQuery,r=e.linkButton,n=e.setSearchQuery,u=e.target,c={href:r.href};return u&&(c.target=u),a.a.createElement("div",{className:"page-action-bar"},a.a.createElement("div",{className:"gf-form gf-form--grow"},a.a.createElement(o.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:t,onChange:n,placeholder:"Search by name or type"})),a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement(i.LinkButton,c,r.title))}}])&&s(r.prototype,n),u&&s(r,u),t}(n.PureComponent)},HUMP:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}));var n=r("Obii"),a=r("ZFWI");function o(e,t){var r=t.meta,n={img:r.info.logos.large,id:"datasource-"+e.id,subTitle:"Type: ".concat(r.name),url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-".concat(e.id),text:"Settings",url:"datasources/edit/".concat(e.id,"/")}]};if(t.configPages){var o=!0,i=!1,u=void 0;try{for(var c,s=t.configPages[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value;n.children.push({active:!1,text:l.title,icon:l.icon,url:"datasources/edit/".concat(e.id,"/?page=").concat(l.id),id:"datasource-page-".concat(l.id)})}}catch(e){i=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}}return r.includes&&void 0!==r.includes.find((function(e){return"dashboard"===e.type}))&&n.children.push({active:!1,icon:"apps",id:"datasource-dashboards-".concat(e.id),text:"Dashboards",url:"datasources/edit/".concat(e.id,"/dashboards")}),a.b.licenseInfo.hasLicense&&(n.children.push({active:!1,icon:"lock",id:"datasource-permissions-".concat(e.id),text:"Permissions",url:"datasources/edit/".concat(e.id,"/permissions")}),a.b.featureToggles.datasourceInsights&&n.children.push({active:!1,icon:"info-circle",id:"datasource-insights-".concat(e.id),text:"Insights",url:"datasources/edit/".concat(e.id,"/insights")})),n}function i(e){var t,r=o({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:""},{meta:{id:"1",type:n.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a=!0,i=!1,u=void 0;try{for(var c,s=r.children[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;if(l.id.indexOf(e)>0){l.active=!0,t=l;break}}}catch(e){i=!0,u=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw u}}return{main:r,node:t}}},frIo:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"g",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"e",(function(){return s}));var n=function(e){var t=new RegExp(e.searchQuery,"i");return e.dataSources.filter((function(e){return t.test(e.name)||t.test(e.database)}))},a=function(e){var t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter((function(e){return t.test(e.name)}))},o=function(e,t){return e.dataSource.id===parseInt(t,10)?e.dataSource:{}},i=function(e,t){return e.dataSourceMeta.id===t?e.dataSourceMeta:{}},u=function(e){return e.searchQuery},c=function(e){return e.layoutMode},s=function(e){return e.dataSourcesCount}},rouV:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"DataSourcesListPage",(function(){return j}));var n=r("q1tI"),a=r.n(n),o=r("/MKj"),i=r("0cfB"),u=r("ZGyg"),c=r("6jYb"),s=r("QQVG"),l=r("3/ef"),f=r("5BCB"),d=r("lzJ5"),p=r("frIo"),m=r("FFN/");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O={title:"There are no data sources defined yet",buttonIcon:"database",buttonLink:"datasources/new",buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"},j=function(e){function t(){return b(this,t),v(this,S(t).apply(this,arguments))}var r,n,o,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.fetchDataSources()}},{key:"fetchDataSources",value:(i=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadDataSources();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})),f=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=i.apply(e,t);function o(e){g(a,r,n,o,u,"next",e)}function u(e){g(a,r,n,o,u,"throw",e)}o(void 0)}))},function(){return f.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.dataSources,r=e.dataSourcesCount,n=e.navModel,o=e.layoutMode,i=e.searchQuery,f=e.setDataSourcesSearchQuery,d=e.hasFetched;return a.a.createElement(u.a,{navModel:n},a.a.createElement(u.a.Contents,{isLoading:!d},a.a.createElement(a.a.Fragment,null,d&&0===r&&a.a.createElement(s.a,O),d&&r>0&&[a.a.createElement(c.a,{searchQuery:i,setSearchQuery:function(e){return f(e)},linkButton:{href:"datasources/new",title:"Add data source"},key:"action-bar"}),a.a.createElement(l.a,{dataSources:t,layoutMode:o,key:"list"})])))}}])&&h(r.prototype,n),o&&h(r,o),t}(n.PureComponent);var x={loadDataSources:f.f,setDataSourcesSearchQuery:m.l,setDataSourcesLayoutMode:m.k};t.default=Object(i.hot)(e)(Object(o.connect)((function(e){return{navModel:Object(d.a)(e.navIndex,"datasources"),dataSources:Object(p.d)(e.dataSources),layoutMode:Object(p.f)(e.dataSources),dataSourcesCount:Object(p.e)(e.dataSources),searchQuery:Object(p.g)(e.dataSources),hasFetched:e.dataSources.hasFetched}}),x)(j))}.call(this,r("3UD+")(e))}}]);
//# sourceMappingURL=DataSourcesListPage.510c06d6c9b7e2665b19.js.map