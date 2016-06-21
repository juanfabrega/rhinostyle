webpackJsonp([9],{0:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=t(3),c=l(n),i=t(15),m=l(i),d=t(22),r=t(23),o=l(r),s=t(544),u={addon:"[Optional] - Display an add-on on the input, as a string - [left | right | both]",label:"[Optional] - A label for the input",name:"[Optional] - An id for the label and the input, use if you want clicking the label to activate the input",placeholder:"[Optional] - Any placeholder text you want in the input",type:"[Optional] - As a string, what type of input you are creating - [email | password] - defaults to text",value:"[Optional] - Any initial value for the input"},h={React:c["default"],ReactDOM:m["default"],Icon:d.Icon,Input:d.Input},p=[{value:"1",text:"Option One"},{value:"2",text:"Option Two"},{value:"3",text:"Option Three",selected:!0},{value:"4",text:"Option Four"}],f=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Forms"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Example"),c["default"].createElement("form",{className:"form"},c["default"].createElement(d.Input,{name:"exampleInputEmail1",label:"Email Address",placeholder:"Email",type:"email"}),c["default"].createElement(d.Input,{name:"exampleInputPassword1",label:"Password",placeholder:"Password",type:"password"}),c["default"].createElement(d.Select,{name:"exampleSelect1",label:"Select",options:p}),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:""},"Text Area ",c["default"].createElement("span",{className:"form__optional"},"(optional)")),c["default"].createElement("textarea",{className:"form__control",rows:"3",placeholder:"Enter some text"})),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:"",className:"u-block"},"Checkboxes"),c["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox1"},"Checkbox One"),c["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox2"},"Checkbox Two"),c["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox3"},"Checkbox Three")),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:"",className:"u-block"},"Radios"),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio",id:"exampleRadio1"}),c["default"].createElement("label",{htmlFor:"exampleRadio1"},"Radio One")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio",id:"exampleRadio2",checked:!0}),c["default"].createElement("label",{htmlFor:"exampleRadio2"},"Radio Two")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio",id:"exampleRadio3"}),c["default"].createElement("label",{htmlFor:"exampleRadio3"},"Radio Three"))),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:"",className:"u-block"},"Switcher"),c["default"].createElement("div",{className:"rhinoswitcher"},c["default"].createElement("input",{type:"checkbox",checked:!0,className:"rhinoswitcher__input",id:"exampleSwitcher1"}),c["default"].createElement("label",{className:"rhinoswitcher__label",htmlFor:"exampleSwitcher1"},c["default"].createElement("div",{className:"rhinoswitcher__inner"},c["default"].createElement("div",{className:"rhinoswitcher__on"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-checkmark"},c["default"].createElement("use",{xlinkHref:"#icon-checkmark"}))),c["default"].createElement("div",{className:"rhinoswitcher__off"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-close"},c["default"].createElement("use",{xlinkHref:"#icon-close"}))))))),c["default"].createElement("div",{className:"u-text-right"},c["default"].createElement(d.Button,{type:"secondary"},"Submit Form")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Modifiers"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Inline Form"),c["default"].createElement("p",{className:"site-copy"},"Add the ",c["default"].createElement("code",null,"form--inline")," modifier to ",c["default"].createElement("code",null,"form"),"."),c["default"].createElement("form",{className:"form form--inline"},c["default"].createElement(d.Input,{name:"exampleEmail2",label:"Email Address",placeholder:"Enter email",type:"email"}),c["default"].createElement(d.Input,{name:"examplePassword2",label:"Password",placeholder:"Password",type:"password"}),c["default"].createElement(d.Button,{type:"secondary"},"Sign In")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Input"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Basic Input"),c["default"].createElement("div",{className:"site-copy"},c["default"].createElement("p",null,"Basic form inputs. Use ",c["default"].createElement("code",null,"label, name, placeholder, type and value"),".")),c["default"].createElement(d.Input,{name:"exampleInputEmail31",label:"Email Address",type:"email"}),c["default"].createElement(d.Input,{name:"exampleInputName31",label:"First Name",placeholder:"First Name",type:"email",value:"Ian"}),c["default"].createElement(d.Input,{name:"exampleInputPassword31",placeholder:"Password",type:"password"})),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Input Add-On"),c["default"].createElement("div",{className:"site-copy"},c["default"].createElement("p",null,"Use the ",c["default"].createElement("code",null,"addon")," property on Inputs with add-ons. Pass the addons as renderable nodes."))),c["default"].createElement("form",{className:"form"},c["default"].createElement(d.Input,{addon:"left",type:"text",placeholder:"Encrypted"},c["default"].createElement(d.Icon,{icon:"lock"})),c["default"].createElement(d.Input,{addon:"right",type:"text"},c["default"].createElement("a",{href:"javascript:void(0)"},"Go For It!")),c["default"].createElement(d.Input,{addon:"both",type:"text",placeholder:"Lorem ipsum dolor sit"},c["default"].createElement("span",null,"Amount $"),c["default"].createElement("span",null,".00")))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(o["default"],{docClass:d.Input,propDescriptionMap:u,codeText:s,scope:h,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Checkbox"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinobox"),c["default"].createElement("p",{className:"site-copy"},"Our custom checkbox element is called ",c["default"].createElement("code",null,"rhinobox"),". By default, these are stacked."),c["default"].createElement(d.Checkbox,{isChecked:!0,name:"exampleCheckbox11"},"Checkbox One"),c["default"].createElement(d.Checkbox,{name:"exampleCheckbox12"},"Checkbox Two"),c["default"].createElement(d.Checkbox,{name:"exampleCheckbox13"},"Checkbox Three")),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinobox"),c["default"].createElement("p",{className:"site-copy"},"Add the ",c["default"].createElement("code",null,"inline")," modifier to create inline checkboxes."),c["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox21"},"Checkbox One"),c["default"].createElement(d.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox22"},"Checkbox Two"),c["default"].createElement(d.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox23"},"Checkbox Three"))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Radio"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinodio"),c["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",c["default"].createElement("code",null,"rhinodio"),". By default, these are stacked."),c["default"].createElement("div",{className:"rhinodio"},c["default"].createElement("input",{type:"radio",name:"exampleRadio1",id:"exampleRadio11"}),c["default"].createElement("label",{htmlFor:"exampleRadio11"},"Radio One")),c["default"].createElement("div",{className:"rhinodio"},c["default"].createElement("input",{type:"radio",name:"exampleRadio1",id:"exampleRadio12",checked:!0}),c["default"].createElement("label",{htmlFor:"exampleRadio12"},"Radio Two")),c["default"].createElement("div",{className:"rhinodio"},c["default"].createElement("input",{type:"radio",name:"exampleRadio1",id:"exampleRadio13"}),c["default"].createElement("label",{htmlFor:"exampleRadio13"},"Radio Three"))),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinodio"),c["default"].createElement("p",{className:"site-copy"},"Add the ",c["default"].createElement("code",null,"rhinodio--inline")," modifier to create inline radios."),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio2",id:"exampleRadio21"}),c["default"].createElement("label",{htmlFor:"exampleRadio21"},"Radio One")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio2",id:"exampleRadio22"}),c["default"].createElement("label",{htmlFor:"exampleRadio22"},"Radio Two")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio2",id:"exampleRadio23",checked:!0}),c["default"].createElement("label",{htmlFor:"exampleRadio23"},"Radio Three")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Select"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoselect"),c["default"].createElement("p",{className:"site-copy"},"Our custom select element is called ",c["default"].createElement("strong",null,"rhinoselect"),". Simply wrap a ",c["default"].createElement("code",null,"select")," element (containing the standard ",c["default"].createElement("code",null,"form__control")," className) in a container and give it the ",c["default"].createElement("code",null,"rhinoselect")," className."),c["default"].createElement(d.Select,{name:"exampleSelect2",label:"Select",options:p}))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Switcher"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoswitcher"),c["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",c["default"].createElement("code",null,"rhinoswitcher"),". Disable the switcher using the ",c["default"].createElement("code",null,"rhinoswitcher--disabled")," modifer className."),c["default"].createElement("div",{className:"rhinoswitcher"},c["default"].createElement("input",{type:"checkbox",checked:!0,className:"rhinoswitcher__input",id:"exampleSwitcher2"}),c["default"].createElement("label",{className:"rhinoswitcher__label",htmlFor:"exampleSwitcher2"},c["default"].createElement("div",{className:"rhinoswitcher__inner"},c["default"].createElement("div",{className:"rhinoswitcher__on"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-checkmark"},c["default"].createElement("use",{xlinkHref:"#icon-checkmark"}))),c["default"].createElement("div",{className:"rhinoswitcher__off"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-close"},c["default"].createElement("use",{xlinkHref:"#icon-close"})))))),c["default"].createElement("div",{className:"rhinoswitcher rhinoswitcher--disabled"},c["default"].createElement("input",{type:"checkbox",checked:!0,className:"rhinoswitcher__input",id:"exampleSwitcher2"}),c["default"].createElement("label",{className:"rhinoswitcher__label",htmlFor:"exampleSwitcher2"},c["default"].createElement("div",{className:"rhinoswitcher__inner"},c["default"].createElement("div",{className:"rhinoswitcher__on"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-checkmark"},c["default"].createElement("use",{xlinkHref:"#icon-checkmark"}))),c["default"].createElement("div",{className:"rhinoswitcher__off"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-close"},c["default"].createElement("use",{xlinkHref:"#icon-close"})))))))))};m["default"].render(c["default"].createElement(f,null),document.getElementById("js-app"))},544:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-inputs">\n        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="email" value="Ian" />\n        <Input name="exampleInputPassword31" placeholder="Password" type="password" />\n        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">\n          <span>Amount $</span>\n          <span>.00</span>\n        </Input>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});