webpackJsonp([1],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var l=n(3),d=a(l),r=n(15),u=a(r),c=n(21),s=n(27),o=a(s),m=n(550),i=n(551),f={React:d["default"],ReactDOM:u["default"],LoaderLine:c.LoaderLine},E={React:d["default"],ReactDOM:u["default"],LoaderPulse:c.LoaderPulse},p=function(){return d["default"].createElement("div",null,d["default"].createElement("h1",{className:"site-headline"},"Loaders"),d["default"].createElement("section",{className:"site-section"},d["default"].createElement("h3",{className:"site-subheadline"},"Loader Pulse"),d["default"].createElement(c.LoaderPulse,null),d["default"].createElement("br",null),d["default"].createElement(c.LoaderPulse,{type:"accent"}),d["default"].createElement("br",null),d["default"].createElement(c.LoaderPulse,{type:"secondary"})),d["default"].createElement("section",{className:"site-section"},d["default"].createElement("h3",{className:"site-subheadline"},"Playground"),d["default"].createElement(o["default"],{codeText:i,scope:E,noRender:!1})),d["default"].createElement("section",{className:"site-section"},d["default"].createElement("h3",{className:"site-subheadline"},"Loader Line"),d["default"].createElement(c.LoaderLine,null)),d["default"].createElement("section",null,d["default"].createElement("h3",{className:"site-subheadline"},"Playground"),d["default"].createElement(o["default"],{codeText:m,scope:f,noRender:!1})))};u["default"].render(d["default"].createElement(p,null),document.getElementById("js-app"))},550:function(e,t){e.exports="class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <LoaderLine />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},551:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <LoaderPulse type="secondary" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});