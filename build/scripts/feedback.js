webpackJsonp([2],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(2),r=a(c),u=n(18),d=a(u),f=n(26),m=n(27),p=a(m),h=n(432),y=n(441),b={React:r["default"],ReactDOM:d["default"],Toast:f.Toast,Icon:f.Icon},E={React:r["default"],ReactDOM:d["default"],Callout:f.Callout},C=function(e){function t(){var e,n,a,s;o(this,t);for(var i=arguments.length,c=Array(i),r=0;i>r;r++)c[r]=arguments[r];return n=a=l(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.onClick=function(e){e.preventDefault(),f.NotificationActions.addNotification({body:"This is an alert in a toast notification",icon:"warning",type:"danger",onDismiss:function(){console.log("I run when the notification was dismissed")}})},s=n,l(a,s)}return s(t,e),i(t,[{key:"render",value:function(){return r["default"].createElement("div",null,r["default"].createElement("h1",{className:"site-headline"},"Feedback"),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"Callouts"),r["default"].createElement("div",{className:"row u-m-b-lg"},r["default"].createElement("div",{className:"col-sm-10"},r["default"].createElement("div",{className:"site-example-callouts"},r["default"].createElement(f.Callout,{type:"danger",head:"Callout Danger",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}),r["default"].createElement(f.Callout,{type:"default",head:"Callout Default",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}),r["default"].createElement(f.Callout,{type:"info",head:"Callout Info",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."})))),r["default"].createElement("h3",{className:"site-subheadline"},"Playground"),r["default"].createElement(p["default"],{codeText:h,scope:E,noRender:!1})),r["default"].createElement("section",null,r["default"].createElement("h3",{className:"site-subheadline"},"Toast Notifications"),r["default"].createElement("p",{className:"site-copy"},"To see a toast in action, ",r["default"].createElement("a",{href:"#",onClick:this.onClick},"click here"),"."),r["default"].createElement("div",{className:"site-example-toasts u-m-b-lg"},r["default"].createElement(f.Toast,{type:"default",body:"Default notification"}),r["default"].createElement(f.Toast,{type:"secondary",icon:"checkmark",body:"Default notification"}),r["default"].createElement(f.Toast,{type:"danger",body:"Danger notification"})),r["default"].createElement("h3",{className:"site-subheadline"},"Playground"),r["default"].createElement(p["default"],{codeText:y,scope:b,noRender:!1})))}}]),t}(r["default"].Component);C.displayName="Rhinostyle Feedback Examples",d["default"].render(r["default"].createElement(C,null),document.getElementById("js-app"))},432:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Callout head="Default Callout" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},441:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Toast type="secondary" icon="checkmark" body="Default notification" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});