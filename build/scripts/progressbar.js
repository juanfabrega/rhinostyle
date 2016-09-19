webpackJsonp([12],{0:function(e,a,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var t=r(3),l=s(t),n=r(10),o=s(n),c=r(12),m=r(16),u=s(m),p=r(625),d={className:"[Optional] - Include additional class name(s)",progress:"[Optional] - The initial 'fill' of the ProgressBar",showLabel:"[Optional] - Show the progress in % on the ProgressBar",type:"[Optional] - Type of ProgressBar, as a string -  [default | primary | secondary | temperature]"},i={React:l["default"],ReactDOM:o["default"],ProgressBar:c.ProgressBar},f=function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Progress Bars"),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"ProgressBar Types"),l["default"].createElement("p",{className:"site-copy"},l["default"].createElement("code",null,'type="default | primary | secondary | temperature"')),l["default"].createElement(c.ProgressBar,{progress:20,className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:40,type:"primary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:60,type:"secondary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:80,type:"temperature",className:"u-m-b"})),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"ProgressBar Labels"),l["default"].createElement("p",{className:"site-copy"},"Include ",l["default"].createElement("code",null,"showLabel")," property to create progress bar label."),l["default"].createElement(c.ProgressBar,{progress:60,showLabel:!0,type:"primary"})),l["default"].createElement("section",null,l["default"].createElement("h3",{className:"site-subheadline"},"Playground"),l["default"].createElement(u["default"],{docClass:c.ProgressBar,propDescriptionMap:d,codeText:p,scope:i,noRender:!1})))};o["default"].render(l["default"].createElement(f,null),document.getElementById("js-app"))},625:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      \t<ProgressBar progress={30} className="u-m-b" />\n        <ProgressBar progress={60} showLabel type="primary" className="u-m-b" />\n        <ProgressBar progress={90} showLabel type="temperature" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});