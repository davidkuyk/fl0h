(this.webpackJsonpfl0h=this.webpackJsonpfl0h||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(20),s=a.n(c),r=(a(28),a(8)),o=a(21),i=a(7),d=a(14),l=a.n(d),j=a(1),b=function(e){var t=Object(n.useState)(e.task.description),a=Object(r.a)(t,2),c=(a[0],a[1],Object(n.useState)(new Date)),s=Object(r.a)(c,2),o=(s[0],s[1],Object(n.useState)("None")),i=Object(r.a)(o,2),d=(i[0],i[1],Object(n.useState)("today")),l=Object(r.a)(d,2);l[0],l[1];return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.task.description}),Object(j.jsx)("td",{children:e.distance}),Object(j.jsx)("td",{children:e.task.date.substring(0,10)}),Object(j.jsx)("td",{children:e.task.category}),Object(j.jsx)("td",{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:function(){var t,a;t=!0,a=e.task._id,e.editModeChange(t,a)},children:"edit"}),Object(j.jsx)("button",{onClick:function(){e.deleteTask(e.task._id)},children:"delete"})]})})]})},u=a(25),h=a.n(u),O=(a(50),a(51),function(e){var t=Object(n.useState)(e.task.description),a=Object(r.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(new Date(new Date(e.task.date).toDateString())),i=Object(r.a)(o,2),d=i[0],b=i[1],u=Object(n.useState)(e.task.category),O=Object(r.a)(u,2),x=O[0],f=O[1],g=Object(n.useState)("today"),v=Object(r.a)(g,2),m=(v[0],v[1]);return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:c,onChange:function(e){s(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-control",children:e.distance?e.distance:"today"})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{selected:d,onChange:function(e){return function(e){console.log(e);var t=new Date(e),a=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),n=new Date,c=new Date(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),s=Math.floor(a-c)/864e5;s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",b(a),m(s)}(e)}})})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:x,onChange:function(e){f(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn-success",onClick:function(t){return function(t){t.preventDefault();var a={description:c,date:d,category:x};l.a.post("/tasks/update/"+e.task._id,a).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response.request._response)})),window.location="/"}(t)},children:"save"}),Object(j.jsx)("button",{className:"btn-secondary",style:{marginLeft:8},onClick:function(){e.editModeChange(!1,null)},children:"cancel"})]})})]})}),x=function(e){var t=Object(n.useState)({status:!0,rowKey:null}),a=Object(r.a)(t,2),c=a[0],s=a[1],o=function(e,t){s({status:e,rowKey:t})},i=function(t){l.a.delete("/tasks/"+t).then((function(e){return console.log(e.data)})),e.setTasks({tasks:e.tasks.tasks.filter((function(e){return e._id!==t}))})};return Object(j.jsx)("div",{className:"tableWrapper",children:Object(j.jsx)("form",{class:"newTask",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"thead-dark",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Distance"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Category"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:e.tasks.tasks.map((function(e){var t=new Date(e.date),a=new Date(t.toDateString()),n=new Date,s=new Date(n.toDateString()),r=Math.floor(a-s)/864e5;return r=1==r?"1 day until":r>1?Math.ceil(r)+" days until":-1==r?"1 day ago":r<-1?Math.ceil(Math.abs(r))+" days ago":"today",c.status&&c.rowKey===e._id?Object(j.jsx)(O,{task:e,deleteTask:i,distance:r,editModeChange:o},e._id):Object(j.jsx)(b,{task:e,deleteTask:i,distance:r,editModeChange:o},e._id)}))})]})})})},f=function(){return Object(j.jsx)("div",{class:"water"})},g=function(){return Object(j.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(j.jsx)(o.b,{to:"/",className:"navbar-brand",children:"fl0h"}),Object(j.jsx)("div",{className:"collapse navbar-collapse",children:Object(j.jsx)("ul",{className:"navbar-nav mr-auto"})})]})},v=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(new Date),o=Object(r.a)(s,2),i=o[0],d=o[1],b=Object(n.useState)("None"),u=Object(r.a)(b,2),O=u[0],x=u[1],f=Object(n.useState)("today"),g=Object(r.a)(f,2),v=g[0],m=g[1];return Object(j.jsx)("div",{children:Object(j.jsx)("form",{class:"newTask",onSubmit:function(e){e.preventDefault();var t={description:a,date:i,category:O};console.log("task date on submit: "+t.date),l.a.post("/tasks/add",t).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response.request._response)})),window.location="/"},children:Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:a,onChange:function(e){c(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-control",children:v||"today"})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{selected:i,onChange:function(e){return function(e){var t=new Date(e),a=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),n=new Date,c=new Date(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),s=Math.floor(a-c)/864e5;s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",d(a),m(s)}(e)}})})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:O,onChange:function(e){x(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"submit",value:"add",className:"btn btn-primary"})})]})})})})})},m=a(51);var p=function(){var e=Object(n.useState)({tasks:[]}),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),d=Object(r.a)(s,2),b=d[0],u=d[1];return Object(n.useEffect)((function(){l.a.get("/tasks/").then((function(e){var t=m.orderBy(e.data,["date"],"asc");c({tasks:t})})).then((function(){setTimeout((function(){u(!1)}),2e3)})).catch((function(e){console.log(e)}))}),[]),b?Object(j.jsx)(f,{}):Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(g,{}),Object(j.jsx)(v,{}),Object(j.jsx)(i.a,{path:"/",exact:!0,render:function(){return Object(j.jsx)(x,{tasks:a,setTasks:c,component:x})}}),Object(j.jsx)(i.a,{path:"/edit/:id",component:O})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},28:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.59635479.chunk.js.map