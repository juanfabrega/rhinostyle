webpackJsonp([21],{0:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n(3),s=l(a),c=n(7),o=l(c),d=n(14),u=l(d),r=n(9),i=n(642),m={className:"[Optional] - Include additional class name(s)",onClick:"[Required] - Include click function for Close"},f={React:s.default,ReactDOM:o.default,Close:r.Close},p=function(){return s.default.createElement("div",null,s.default.createElement("h1",{className:"site-headline"},"Close"),s.default.createElement("section",{className:"site-section"},s.default.createElement("h3",{className:"site-subheadline"},"Close"),s.default.createElement("p",{className:"site-text-lead"},"The Close component is used within numerous components - particularly in our feedback system.")),s.default.createElement("section",null,s.default.createElement("h3",{className:"site-subheadline"},"Playground"),s.default.createElement(u.default,{docClass:r.Close,propDescriptionMap:m,codeText:i,scope:f,noRender:!1})))};o.default.render(s.default.createElement(p,null),document.getElementById("js-app"))},642:function(e,t){e.exports="class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Close />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"}});