webpackJsonp([17],{0:function(e,l,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n=a(3),c=t(n),d=a(6),r=t(d),u=a(8),i=a(15),b=t(i),m=a(629),s={className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Icon name",label:"[Required] - Label text",type:"[Optional] - Label type -  [default | primary | secondary | accent]"},o={React:c.default,ReactDOM:r.default,Label:u.Label,UtilityInlineGrid:u.UtilityInlineGrid},f=function(){return c.default.createElement("div",null,c.default.createElement("h1",{className:"site-headline"},"Labels"),c.default.createElement("section",{className:"site-section"},c.default.createElement("h3",{className:"site-subheadline"},"Label Types"),c.default.createElement("div",{className:"u-m-b"},c.default.createElement(u.UtilityInlineGrid,null,c.default.createElement(u.Label,{label:"DEFAULT"}),c.default.createElement(u.Label,{type:"secondary",label:"SECONDARY"}),c.default.createElement(u.Label,{type:"accent",label:"ACCENT"}),c.default.createElement(u.Label,{type:"danger",label:"DANGER"}),c.default.createElement(u.Label,{label:"DEFAULT",icon:"cog"}))),c.default.createElement("div",{className:"u-m-b"},c.default.createElement(u.UtilityInlineGrid,null,c.default.createElement(u.Label,{label:"Default"}),c.default.createElement(u.Label,{type:"secondary",label:"Secondary"}),c.default.createElement(u.Label,{type:"accent",label:"Accent"}),c.default.createElement(u.Label,{type:"danger",label:"Danger"}),c.default.createElement(u.Label,{label:"Default",icon:"cog"}))),c.default.createElement(u.UtilityInlineGrid,null,c.default.createElement(u.Label,{label:"default"}),c.default.createElement(u.Label,{type:"secondary",label:"secondary"}),c.default.createElement(u.Label,{type:"accent",label:"accent"}),c.default.createElement(u.Label,{type:"danger",label:"danger"}),c.default.createElement(u.Label,{label:"default",icon:"cog"}))),c.default.createElement("section",null,c.default.createElement("h3",{className:"site-subheadline"},"Playground"),c.default.createElement(b.default,{docClass:u.Label,propDescriptionMap:s,codeText:m,scope:o,noRender:!1})))};r.default.render(c.default.createElement(f,null),document.getElementById("js-app"))},629:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <UtilityInlineGrid>\n        <Label label="ben bruning" />\n        <Label type="secondary" label="craig anthony" />\n      </UtilityInlineGrid>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});