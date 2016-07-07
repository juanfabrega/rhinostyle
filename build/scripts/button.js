webpackJsonp([15],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(3),u=l(n),c=a(13),o=l(c),i=a(16),s=a(18),m=l(s),d=a(566),r={active:"[Optional] - Button is active",block:"[Optional] - Button is block level",className:"[Optional] - Include additional class name(s)",onClick:"[Required] - Include click function for Button",disabled:"[Optional] - Button is disabled",iconOnly:"[Optional] - Button has an icon but no text",size:"[Optional] - Button size -  [small | large]",type:"[Optional] - Button type -  [default | primary | secondary | default-outline | primary-outline | link]"},f={React:u["default"],ReactDOM:o["default"],Button:i.Button,Icon:i.Icon},E=function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Buttons"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Types"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'type="default | primary | secondary | default-outline | primary-outline | link | danger"')),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,null,"Default"),u["default"].createElement(i.Button,{type:"primary"},"Primary"),u["default"].createElement(i.Button,{type:"secondary"},"Secondary"),u["default"].createElement(i.Button,{type:"default-outline"},"Default Outline"),u["default"].createElement(i.Button,{type:"primary-outline"},"Primary Outline"),u["default"].createElement(i.Button,{type:"link"},"Link"),u["default"].createElement(i.Button,{type:"danger"},"Danger"))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Sizes"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Large Button"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'size="large"')),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{size:"large"},"Large"),u["default"].createElement(i.Button,{size:"large"},u["default"].createElement(i.Icon,{icon:"cog"})," Large"),u["default"].createElement(i.Button,{size:"large",iconOnly:!0},u["default"].createElement(i.Icon,{icon:"cog"})))),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Small Button"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'size="small"')),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{size:"small"},"Small"),u["default"].createElement(i.Button,{size:"small"},u["default"].createElement(i.Icon,{icon:"cog"})," Small"),u["default"].createElement(i.Button,{size:"small",iconOnly:!0},u["default"].createElement(i.Icon,{icon:"cog"}))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Modifiers"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),u["default"].createElement("p",{className:"site-copy"},"Include ",u["default"].createElement("code",null,"block")," property to create a block level button."),u["default"].createElement(i.Button,{block:!0},"Block Button")),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),u["default"].createElement("p",{className:"site-copy"},"Include ",u["default"].createElement("code",null,"iconOnly")," property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{iconOnly:!0},u["default"].createElement(i.Icon,{icon:"sms"})),u["default"].createElement(i.Button,{type:"primary",iconOnly:!0},u["default"].createElement(i.Icon,{icon:"email"})),u["default"].createElement(i.Button,{type:"secondary",iconOnly:!0},u["default"].createElement(i.Icon,{icon:"cog"})),u["default"].createElement(i.Button,{type:"default-outline",iconOnly:!0},u["default"].createElement(i.Icon,{icon:"clock"})),u["default"].createElement(i.Button,{type:"primary-outline",iconOnly:!0},u["default"].createElement(i.Icon,{icon:"pencil"}))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button States"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,null,"Default"),u["default"].createElement(i.Button,{active:!0},"Default Active"),u["default"].createElement(i.Button,{disabled:!0},"Default Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{type:"primary"},"Primary"),u["default"].createElement(i.Button,{type:"primary",active:!0},"Primary Active"),u["default"].createElement(i.Button,{type:"primary",disabled:!0},"Primary Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{type:"secondary"},"Secondary"),u["default"].createElement(i.Button,{type:"secondary",active:!0},"Secondary Active"),u["default"].createElement(i.Button,{type:"secondary",disabled:!0},"Secondary Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{type:"default-outline"},"Default Outline"),u["default"].createElement(i.Button,{type:"default-outline",active:!0},"Default Outline Active"),u["default"].createElement(i.Button,{type:"default-outline",disabled:!0},"Default Outline Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(i.Button,{type:"primary-outline"},"Primary Outline"),u["default"].createElement(i.Button,{type:"primary-outline",active:!0},"Primary Outline Active"),u["default"].createElement(i.Button,{type:"primary-outline",disabled:!0},"Primary Outline Disabled")))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Ellipsis"),u["default"].createElement("h5",{className:"site-miniheadline"},"Long Text Inside Buttons"),u["default"].createElement("p",null,"Wrap long button text in ",u["default"].createElement("code",null,"u-text-overflow")," utility class in order to allow ellipsis."),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(i.Button,{className:"u-m-b-sm"},u["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name")),u["default"].createElement("br",null),u["default"].createElement(i.Button,null,u["default"].createElement(i.Icon,{icon:"lock"})," ",u["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name and Icon")))),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Playground"),u["default"].createElement(m["default"],{docClass:i.Button,propDescriptionMap:r,codeText:d,scope:f,noRender:!1})))};o["default"].render(u["default"].createElement(E,null),document.getElementById("js-app"))},566:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buttons">\n        <div className="u-m-b">\n          <Button>Default</Button>\n          <Button type="default-outline">Default Outline</Button>\n          <Button type="primary">Primary</Button>\n          <Button type="secondary" iconOnly><Icon icon="cog" /></Button>\n        </div>\n        <div className="u-m-b">\n          <Button size="large">Large</Button>\n          <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>\n          <Button size="large" iconOnly><Icon icon="cog" /></Button>\n          <Button>Default</Button>\n          <Button><Icon icon="cog" />&nbsp;Default</Button>\n          <Button iconOnly><Icon icon="cog" /></Button>\n          <Button size="small">Small</Button>\n          <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>\n          <Button size="small" iconOnly><Icon icon="cog" /></Button>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});