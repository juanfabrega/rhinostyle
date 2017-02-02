webpackJsonp([22],{0:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=t(15),m=n(l),r=t(3),i=n(r),s=t(10),c=n(s),d=t(8),u=t(632),o={className:"[Optional] - Include additional class name(s)",image:"[Optional] - Include source to image",name:"[Optional] - Name of Avatar, as a string",size:"[Optional] - Size of Avatar, as a string - [small | large]",type:"[Optional] - Type of Avatar, as a string -  [default | member]"},p={React:i.default,ReactDOM:c.default,Avatar:d.Avatar,Icon:d.Icon,UtilityInlineGrid:d.UtilityInlineGrid},f=function(){return i.default.createElement("div",null,i.default.createElement("h1",{className:"site-headline"},"Avatars"),i.default.createElement("section",{className:"site-section"},i.default.createElement("h3",{className:"site-subheadline"},"Avatar Types"),i.default.createElement("div",{className:"u-m-b-md"},i.default.createElement("h5",{className:"site-miniheadline"},"Default Avatar"),i.default.createElement("p",{className:"site-copy"},i.default.createElement("code",null,'type="default"')),i.default.createElement(d.UtilityInlineGrid,null,i.default.createElement(d.Avatar,{image:"//source.unsplash.com/category/people/200x200",name:"Ben Bruning"}),i.default.createElement(d.Avatar,{name:"Ben Bruning"}),i.default.createElement(d.Avatar,null))),i.default.createElement("div",{className:"u-m-b-md"},i.default.createElement("h5",{className:"site-miniheadline"},"Member Avatar"),i.default.createElement("p",{className:"site-copy"},i.default.createElement("code",null,'type="member"')),i.default.createElement(d.UtilityInlineGrid,null,i.default.createElement(d.Avatar,{image:"//source.unsplash.com/category/people/200x200",name:"Ben Bruning",type:"member"}),i.default.createElement(d.Avatar,{name:"Ben Bruning",type:"member"}),i.default.createElement(d.Avatar,{type:"member"})))),i.default.createElement("section",{className:"site-section"},i.default.createElement("h3",{className:"site-subheadline"},"Avatar Sizes"),i.default.createElement("div",{className:"u-m-b-md"},i.default.createElement("h5",{className:"site-miniheadline"},"Large Avatar"),i.default.createElement("p",{className:"site-copy"},i.default.createElement("code",null,'size="large"')),i.default.createElement(d.UtilityInlineGrid,null,i.default.createElement(d.Avatar,{image:"//bit.ly/1UfJ6KF",name:"Craig Anthony",size:"large",type:"member"}),i.default.createElement(d.Avatar,{name:"Craig Anthony",size:"large",type:"member"}),i.default.createElement(d.Avatar,{type:"member",size:"large"}))),i.default.createElement("div",null,i.default.createElement("h5",{className:"site-miniheadline"},"Small Avatar"),i.default.createElement("p",{className:"site-copy"},i.default.createElement("code",null,'size="small"')),i.default.createElement(d.UtilityInlineGrid,null,i.default.createElement(d.Avatar,{image:"//bit.ly/1UfJ6KF",name:"Craig Anthony",size:"small",type:"member"}),i.default.createElement(d.Avatar,{name:"Craig Anthony",size:"small",type:"member"}),i.default.createElement(d.Avatar,{type:"member",size:"small"})))),i.default.createElement("section",null,i.default.createElement("h3",{className:"site-subheadline"},"Playground"),i.default.createElement(m.default,{docClass:d.Avatar,propDescriptionMap:o,codeText:u,scope:p,noRender:!1})))};c.default.render(i.default.createElement(f,null),document.getElementById("js-app"))},632:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <UtilityInlineGrid>\n          <Avatar image="//source.unsplash.com/category/people/200x200" name="Ben Bruning" size="large" type="member" />\n          <Avatar image="//brokenimage.jpg" name="Ben Bruning" size="large" type="member" />\n          <Avatar name="Ben Bruning" size="large" type="member" />\n          <Avatar size="large" type="member" />\n        </UtilityInlineGrid>\n        <div className="u-m-t">\n          <UtilityInlineGrid>\n            <Avatar image="//bit.ly/1UfJ6KF" name="Craig Anthony" />\n            <Avatar image="//badimage.jpg" name="Craig Anthony" />\n            <Avatar name="Craig Anthony" />\n            <Avatar />\n          </UtilityInlineGrid>\n        </div>\n        <div className="u-m-t">\n          <UtilityInlineGrid>\n            <Avatar image="//source.unsplash.com/category/people/200x200" name="Ian Greulich" size="small" type="member" />\n            <Avatar image="//badimage.jpg" name="Ian Greulich" size="small" type="member" />\n            <Avatar name="Ian Greulich" size="small" type="member" />\n            <Avatar size="small" type="member" />\n          </UtilityInlineGrid>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});