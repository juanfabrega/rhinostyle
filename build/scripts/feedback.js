webpackJsonp([6],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(15),c=n(o),u=a(3),d=n(u),f=a(8),m=n(f),p=a(9),h=a(626),y={className:"[Optional] - Include additional class name(s)",onDismiss:"[Optional] - Include dismiss function",size:"[Optional] - Alert size -  [small]",title:"[Required] - Alert title text",titleIcon:"[Optional] - Alert title icon",type:"[Optional] - Alert type, as a string -  [danger | default | info | success | warning | outline-danger | outline-default | outline-info | outline-success | outline-warning ]"},E=a(666),g={body:"[Required] - Toast body text",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Include icon name",onDismiss:"[Required] - Include dismiss function",type:"[Optional] - Toast type, as a string -  [danger | default | success]"},b=a(662),x={body:"[Required] - SystemAlert body text",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Include icon name",onDismiss:"[Required] - Include dismiss function",type:"[Optional] - SystemAlert type, as a string -  [danger | default | info | success]",url:"[Optional] - SystemAlert url, as a string",urlText:'[Optional] - SystemAlert urlText, as a string - defaults to "More Information"'},A={React:d.default,ReactDOM:m.default,Alert:p.Alert,Button:p.Button,Checkbox:p.Checkbox,Icon:p.Icon},T={React:d.default,ReactDOM:m.default,Toast:p.Toast,Icon:p.Icon},k={React:d.default,ReactDOM:m.default,SystemAlert:p.SystemAlert,Icon:p.Icon},w=function(e){function t(){var e,a,n,i;l(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.onClick=function(e){e.preventDefault(),p.NotificationActions.addNotification({body:"This is an alert in a toast notification",icon:"warning",type:"danger",onDismiss:function(){console.log("I run when the notification was dismissed")}})},i=a,s(n,i)}return i(t,e),r(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("h1",{className:"site-headline"},"Feedback"),d.default.createElement("section",{className:"site-section"},d.default.createElement("h3",{className:"site-subheadline"},"Feedback"),d.default.createElement("p",{className:"site-text-lead"},"Numberous components make up our feedback system: Alert, SystemAlert, and Toast.")),d.default.createElement("section",{className:"site-section"},d.default.createElement("h3",{className:"site-subheadline"},"Alert"),d.default.createElement("div",{className:"u-m-b-lg"},d.default.createElement("div",{className:"site-example-alerts"},d.default.createElement(p.Alert,{title:"This is a danger alert!",titleIcon:"star",type:"danger",onDismiss:function(){return alert("dismissed!")}},"This is a danger alert for dangerous stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a defualt  alert!",titleIcon:"star",onDismiss:function(){return alert("dismissed!")}},"This is a default alert for defualt stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a info alert!",titleIcon:"star",type:"info",onDismiss:function(){return alert("dismissed!")}},"This is a info alert for info stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a success alert!",titleIcon:"star",type:"success",onDismiss:function(){return alert("dismissed!")}},"This is a success alert for success stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a warning alert!",titleIcon:"star",type:"warning",onDismiss:function(){return alert("dismissed!")}},"This is a warning alert for warning stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a outline danger alert!",titleIcon:"star",type:"outline-danger",onDismiss:function(){return alert("dismissed!")}},"This is a danger alert for dangerous stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a outline defualt  alert!",titleIcon:"star",type:"outline-default",onDismiss:function(){return alert("dismissed!")}},"This is a default alert for defualt stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a outline info alert!",titleIcon:"star",type:"outline-info",onDismiss:function(){return alert("dismissed!")}},"This is a info alert for info stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a outline success alert!",titleIcon:"star",type:"outline-success",onDismiss:function(){return alert("dismissed!")}},"This is a success alert for success stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a outline warning alert!",titleIcon:"star",type:"outline-warning",onDismiss:function(){return alert("dismissed!")}},"This is a warning alert for warning stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a small outline warning alert!",titleIcon:"star",type:"outline-warning",size:"small",onDismiss:function(){return alert("dismissed!")}},"This is a warning alert for warning stuff. ",d.default.createElement("a",{href:""},"text link")," | ",d.default.createElement("a",{href:""},"text link")),d.default.createElement(p.Alert,{title:"This is a small info alert!",titleIcon:"star",type:"info",size:"small",onDismiss:function(){return alert("dismissed!")}}))),d.default.createElement("h3",{className:"site-subheadline"},"Alert Playground"),d.default.createElement(c.default,{docClass:p.Alert,propDescriptionMap:y,codeText:h,scope:A,noRender:!1})),d.default.createElement("section",{className:"site-section"},d.default.createElement("h3",{className:"site-subheadline"},"SystemAlert"),d.default.createElement("div",{className:"u-m-b-lg"},d.default.createElement("div",{className:"site-example-systemalerts"},d.default.createElement(p.SystemAlert,{type:"danger",body:"Danger System Alert"}),d.default.createElement(p.SystemAlert,{type:"default",body:"Default System Alert"}),d.default.createElement(p.SystemAlert,{type:"info",body:"Info System Alert"}),d.default.createElement(p.SystemAlert,{type:"success",body:"Success System Alert"}))),d.default.createElement("h3",{className:"site-subheadline"},"SystemAlert Playground"),d.default.createElement(c.default,{docClass:p.SystemAlert,propDescriptionMap:x,codeText:b,scope:k,noRender:!1})),d.default.createElement("section",null,d.default.createElement("h3",{className:"site-subheadline"},"Toast"),d.default.createElement("p",{className:"site-copy"},"To see a toast in action, ",d.default.createElement("a",{href:"#",onClick:this.onClick},"click here"),"."),d.default.createElement("div",{className:"site-example-toasts u-m-b-lg"},d.default.createElement(p.Toast,{type:"default",body:"Default toast notification"}),d.default.createElement(p.Toast,{type:"success",icon:"checkmark",body:"Success toast notification"}),d.default.createElement(p.Toast,{type:"danger",body:"Danger toast notification"})),d.default.createElement("h3",{className:"site-subheadline"},"Toast Playground"),d.default.createElement(c.default,{docClass:p.Toast,propDescriptionMap:g,codeText:E,scope:T,noRender:!1})))}}]),t}(d.default.Component);w.displayName="Rhinostyle Feedback Examples",m.default.render(d.default.createElement(w,null),document.getElementById("js-app"))},626:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <div className="site-example-alerts">\n          <Alert title="This is a default alert!">This is a default alert for random stuff. <a href="">text link</a> | <a href="">text link</a></Alert>\n          \n          <Alert title="This is a default alert with a title icon!" titleIcon="star">Donec eu erat sit amet arcu consectetur tincidunt nec eu quam. Mauris eros tortor, venenatis in lorem vel, fringilla suscipit erat. Integer velit arcu, pulvinar eu bibendum et, eleifend eu neque</Alert>\n          \n          <Alert title="This is a default alert with a title icon and it\'s dismissible!" titleIcon="lock" onDismiss={() => alert(\'dismissed!\')}>This is a default alert for random stuff.</Alert>\n          \n          <Alert title="This is a default alert with a title icon, it\'s dismissible, and it has no children!" titleIcon="lock" onDismiss={() => alert(\'dismissed!\')} />\n          \n          <Alert onDismiss={() => alert(\'dismissed!\')}>This is a default alert without a title and is dismissible.</Alert>\n\n          <Alert onDismiss={() => alert(\'dismissed!\')}><Icon icon="cog" bump="up"/> This is a default alert without a title and is dismissible.</Alert>\n\n          <Alert title="Warning" titleIcon="warning" type="outline-warning">\n            Phasellus eu accumsan diam. Donec sed aliquet quam congue ac. <a href="javascript:void(0)" className="u-text-muted">congue aliquet arcu</a> blandit euismod enim turpis rutrum, dignissim ligula.<br /> <span className="u-text-normal"><Checkbox inline name="exampleCheckbox666" className="u-m-b-0">Checkbox</Checkbox></span>\n          </Alert>\n\n          <Alert title="Warning" titleIcon="warning" type="outline-warning" size="small">\n            Phasellus eu accumsan diam. Donec sed aliquet quam congue ac. <a href="javascript:void(0)" className="u-text-muted">congue aliquet arcu</a> blandit euismod enim turpis rutrum, dignissim ligula.<br /> <span className="u-text-normal"><Checkbox inline name="exampleCheckbox66666" className="u-m-b-0">Checkbox</Checkbox></span>\n          </Alert>\n\n        </div>\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);'},662:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <div className="site-example-systemalerts">\n          <SystemAlert type="danger" icon="warning" body="Scheduled Maintenance Notification: Sunday August 15, 8:00 AM–10:00 EST." url="http://www.google.com" urlText="Learn more" />\n          <SystemAlert body="Your are currently in offline mode." />\n        </div>\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);\n'},666:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Toast type="success" icon="checkmark" body="Success toast notification" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});