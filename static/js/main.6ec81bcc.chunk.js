!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var a=t();for(var r in a)("object"===typeof exports?exports:e)[r]=a[r]}}(this,(function(){return(this["webpackJsonpreact-material-ui-step-loader"]=this["webpackJsonpreact-material-ui-step-loader"]||[]).push([[0],{32:function(e,t,a){e.exports=a(43)},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(20),l=a.n(o),i=(a(37),a(17)),c=a(56),s=a(58),u=a(60),m=a(28),d=a.n(m),f=a(27),b=a.n(f),g=a(26),p=a.n(g),h=a(25),E=a.n(h);function y(e){var t=e.steps,a=e.color,r=e.height,o=e.variant,l=e.currentStep,i=e.currentProgress,m=e.errors,f=e.skips;return n.a.createElement("div",null,n.a.createElement(c.a,{style:{width:"80%",margin:"auto"},container:!0,spacing:1},t.map((function(e,t){return n.a.createElement(c.a,{key:e.label,container:!0,item:!0,xs:12,spacing:1,direction:"row",justify:"flex-start",alignItems:"center"},n.a.createElement(c.a,{xs:!0,item:!0},n.a.createElement(s.a,{variant:"subtitle2",style:{fontWeight:l>=t?"bold":"normal",color:m.includes(t)?"red":null,fontStyle:l>t?"oblique":"normal"}},m.includes(t)&&e.labelError?e.labelError:f.includes(t)&&e.labelSkip?e.labelSkip:l>t&&e.labelAfter?e.labelAfter:e.label)),n.a.createElement(c.a,{xs:!0,item:!0},n.a.createElement(u.a,{style:{height:r,borderRadius:"square"===o?0:"rounded"===o?5:15},variant:l===t&&-1===i?"indeterminate":"determinate",value:l>t?100:l===t&&i>-1?i:0,color:e.color?e.color:a})),n.a.createElement(c.a,{item:!0},m.includes(t)?n.a.createElement(E.a,{color:"secondary"}):f.includes(t)?n.a.createElement(p.a,{style:{color:"orange"}}):l>t?n.a.createElement(b.a,{style:{color:"green"}}):n.a.createElement(d.a,{style:{color:l===t?"black":"grey"}})))}))))}y.defaultProps={color:"primary",height:2,currentProgress:-1,errors:[],skips:[]};var v=a(59),k=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)([]),c=Object(i.a)(l,2),u=c[0],m=c[1],d=Object(r.useState)(0),f=Object(i.a)(d,2),b=f[0],g=f[1];return Object(r.useEffect)((function(){var e=[10,5,4,1,8],t=setTimeout((function(){var t=b+e[a];t>=100?(g(0),o(a+1),1===a&&m([1])):g(t)}),20);return function(){clearTimeout(t)}}),[b,a]),n.a.createElement("div",{style:{width:"40%",height:"100%",margin:"auto",textAlign:"center"}},n.a.createElement(s.a,{variant:"overline",style:{fontSize:"2em",marginBottom:20}},"StepLoader Demo"),n.a.createElement("hr",null),n.a.createElement(v.a,{style:{backgroundColor:"#fafdff",width:"80%",margin:"auto",marginBottom:20,marginTop:20}},n.a.createElement(y,{steps:[{label:"Authenticating",labelAfter:"Authenticated"},{label:"Checking updates",labelAfter:"Updated",labelError:"No update found"},{label:"Formatting message",labelAfter:"Message formatted"},{label:"Posting message",labelAfter:"Message posted"},{label:"Verifying",labelAfter:"Verified"}],currentStep:a,currentProgress:3!==a?b:-1,errors:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]])}));
//# sourceMappingURL=main.6ec81bcc.chunk.js.map