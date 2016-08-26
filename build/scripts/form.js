<<<<<<< HEAD
webpackJsonp([1],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(3),o=l(n),i=a(11),c=l(i),s=a(12),d=a(16),r=l(d),m=a(633),u={addon:"[Optional] - Display an add-on on the input, as a string - [left | right | both]",clear:"[Optional] - Form control gets a clear value button",label:"[Optional] - A label for the input",naked:"[Optional] - Form control is stripped down in appearance",name:"[Optional] - An id for the label and the input, use if you want clicking the label to activate the input",placeholder:"[Optional] - Any placeholder text you want in the input",type:"[Optional] - As a string, what type of input you are creating - [email | password | number | search] - defaults to text",required:"[Optional] - Field is required and asterisk is added to label",initialValue:"[Optional] - Any initial value for the input"},p={React:o["default"],ReactDOM:c["default"],Icon:s.Icon,Input:s.Input},h=a(646),f={label:"[Optional] - A label for the select",name:"[Optional] - An id for the label and the select, use if you want clicking the label to activate the select",options:"[Required] - Array of objects that contain the values and text for the options, with an optional selected key, {value:string, text:string, selected:bool}",required:"[Optional] - Field is required and asterisk is added to label"},x={React:o["default"],ReactDOM:c["default"],Select:s.Select},E=[{value:"1",text:"Option One"},{value:"2",text:"Option Two"},{value:"3",text:"Option Three",selected:!0},{value:"4",text:"Option Four"}],b=a(650),N={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea",required:"[Optional] - Field is required and asterisk is added to label"},R={React:o["default"],ReactDOM:c["default"],Textarea:s.Textarea},k=a(638),C={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea",required:"[Optional] - Field is required and asterisk is added to label",onResize:"- Callback function to the imported Autosize library"},y={React:o["default"],ReactDOM:c["default"],MessageBox:s.MessageBox},w=a(626),v={inline:"[Optional] - Inline the checkboxes",isChecked:"[Optional] - Set initial checked state",name:"[Required] - An id, and label for the checkbox",onClick:"[Optional] - A function you want to trigger when the checkbox is toggled"},O={React:o["default"],ReactDOM:c["default"],Checkbox:s.Checkbox},g=a(643),I={inline:"[Optional] - Inline the radios",name:"[Optional] - The name, and the basis of the id for the radio",onChange:"[Optional] - A function you which to trigger when you change the selection",selectedValue:"[Optional] - The radio you want selected, when used in a group",value:"[Optional] - A value for the radio"},T={React:o["default"],ReactDOM:c["default"],RadioGroup:s.RadioGroup,Radio:s.Radio},A=a(644),M={className:"[Optional] - Any class name you would like to add to the switch",disabled:"[Optional] - Disable the switch",isChecked:"[Optional] - Set initial on/off state",name:"[Optional] - The name, and the basis of the id for the switch"},S={React:o["default"],ReactDOM:c["default"],RhinoSwitch:s.RhinoSwitch},F=function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Forms"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Forms"),o["default"].createElement("p",{className:"site-text-lead"},"Forms are assembled using our suite of custom form components. It is important to understand that form components have a ",o["default"].createElement("code",null,"form__control")," class for consistent appearance. Form components are also wrapped in a ",o["default"].createElement("code",null,"form__group")," class which provides vertical spacing. Finally, you may use the ",o["default"].createElement("code",null,"form__section")," class to provide vertical spacing between sections of a form.")),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Form Example"),o["default"].createElement("form",{className:"form"},o["default"].createElement(s.Input,{name:"exampleInputEmail1",label:"Email Address",placeholder:"Email",type:"email",required:!0}),o["default"].createElement(s.Input,{name:"exampleInputPassword1",label:"Password",placeholder:"Password",type:"password",required:!0}),o["default"].createElement(s.Select,{name:"exampleSelect1",label:"Select",options:E,required:!0}),o["default"].createElement(s.Textarea,{label:"Text Area",name:"exampleTextarea1",placeholder:"Enter some text",required:!0}),o["default"].createElement(s.MessageBox,{label:"Message Box",name:"exampleTextarea2",placeholder:"Enter some text",required:!0}),o["default"].createElement("div",{className:"form__group"},o["default"].createElement("label",{htmlFor:"",className:"u-block"},"Checkboxes"),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox1"},"Checkbox One"),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox2"},"Checkbox Two"),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox3"},"Checkbox Three")),o["default"].createElement(s.RadioGroup,{inline:!0,name:"exampleRadio1",label:"Radios",selectedValue:"2"},o["default"].createElement(s.Radio,{value:"1"},"Radio One"),o["default"].createElement(s.Radio,{value:"2"},"Radio Two"),o["default"].createElement(s.Radio,{value:"3"},"Radio Three")),o["default"].createElement("div",{className:"form__group"},o["default"].createElement("label",{htmlFor:"",className:"u-block"},"Switcher"),o["default"].createElement(s.RhinoSwitch,{name:"exampleSwitch1"})),o["default"].createElement("div",{className:"u-text-right"},o["default"].createElement(s.Button,{type:"primary"},"Submit Form")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Form Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Form"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"form--inline")," modifier to ",o["default"].createElement("code",null,"form"),"."),o["default"].createElement("form",{className:"form form--inline"},o["default"].createElement(s.Input,{name:"exampleEmail2",label:"Email Address",placeholder:"Enter email",type:"email"}),o["default"].createElement(s.Input,{name:"examplePassword2",label:"Password",placeholder:"Password",type:"password"}),o["default"].createElement(s.Button,{type:"primary"},"Sign In")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Input"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Common Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Properties include ",o["default"].createElement("code",null,"initialValue, label, name, placeholder, required, and type"),".")),o["default"].createElement(s.Input,{name:"exampleInputEmail31",label:"Email Address",type:"email",required:!0}),o["default"].createElement(s.Input,{name:"exampleInputName31",label:"First Name",placeholder:"First Name",type:"text",initialValue:"Ian"}),o["default"].createElement(s.Input,{name:"exampleInputPassword31",label:"Password",placeholder:"Password",type:"password"})),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Input Add-On"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"addon")," property on Inputs with add-ons. Pass the addons as renderable nodes.")),o["default"].createElement(s.Input,{addon:"left",type:"text",placeholder:"Encrypted"},o["default"].createElement(s.Icon,{icon:"lock"})),o["default"].createElement(s.Input,{addon:"left",type:"text",placeholder:"Search"},o["default"].createElement(s.Icon,{icon:"search"})),o["default"].createElement(s.Input,{addon:"right",type:"text"},o["default"].createElement("a",{href:"javascript:void(0)"},"Go For It!")),o["default"].createElement(s.Input,{addon:"both",type:"text",placeholder:"Lorem ipsum dolor sit"},o["default"].createElement("span",null,"Amount $"),o["default"].createElement("span",null,".00"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Clear Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"clear")," property on Inputs to include a clear value button.")),o["default"].createElement(s.Input,{name:"exampleInputText111",label:"Clear Input",type:"text",clear:!0})),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Naked Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"naked")," property on Inputs to strip it of background, border, height, and padding.")),o["default"].createElement(s.Input,{name:"exampleInputText999",placeholder:"Naked Input",type:"text",naked:!0}))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Input Playground"),o["default"].createElement(r["default"],{docClass:s.Input,propDescriptionMap:u,codeText:m,scope:p,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Text Area"),o["default"].createElement(s.Textarea,{label:"Text Area",name:"exampleTextarea2",placeholder:"Enter some text"})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Text Area Playground"),o["default"].createElement(r["default"],{docClass:s.Textarea,propDescriptionMap:N,codeText:b,scope:R,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Message Box "),o["default"].createElement("p",{className:"site-copy"},"We are using a light-weight plugin, ",o["default"].createElement("a",{href:"http://www.jacklmoore.com/autosize/",target:"_blank"},"Jack Moore's Autosize"),", with custom styling for the autogrow functionality."),o["default"].createElement(s.MessageBox,{label:"Message Box",name:"exampleTextarea2",placeholder:"Enter some text"})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Message Box Playground"),o["default"].createElement(r["default"],{docClass:s.MessageBox,propDescriptionMap:C,codeText:k,scope:y,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Checkbox"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinobox"),o["default"].createElement("p",{className:"site-copy"},"Our custom checkbox element is called ",o["default"].createElement("code",null,"rhinobox"),". By default, these are stacked."),o["default"].createElement(s.Checkbox,{isChecked:!0,name:"exampleCheckbox11"},"Checkbox One"),o["default"].createElement(s.Checkbox,{name:"exampleCheckbox12"},"Checkbox Two"),o["default"].createElement(s.Checkbox,{name:"exampleCheckbox13"},"Checkbox Three")),o["default"].createElement("div",null,o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinobox"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"inline")," modifier to create inline checkboxes."),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox21"},"Checkbox One"),o["default"].createElement(s.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox22"},"Checkbox Two"),o["default"].createElement(s.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox23"},"Checkbox Three"))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Checkbox Playground"),o["default"].createElement(r["default"],{docClass:s.Checkbox,propDescriptionMap:v,codeText:w,scope:O,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Radio"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinodio"),o["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",o["default"].createElement("code",null,"rhinodio"),". By default, these are stacked."),o["default"].createElement(s.RadioGroup,{name:"exampleRadio2",label:"Radios",selectedValue:"2"},o["default"].createElement(s.Radio,{value:"1"},"Radio One"),o["default"].createElement(s.Radio,{value:"2"},"Radio Two"),o["default"].createElement(s.Radio,{value:"3"},"Radio Three"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinodio"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"inline")," property to create inline radios."),o["default"].createElement(s.RadioGroup,{inline:!0,name:"exampleRadio3",label:"Radios",selectedValue:"2"},o["default"].createElement(s.Radio,{value:"1"},"Radio One"),o["default"].createElement(s.Radio,{value:"2"},"Radio Two"),o["default"].createElement(s.Radio,{value:"3"},"Radio Three")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Radio Playground"),o["default"].createElement(r["default"],{docClass:s.Radio,propDescriptionMap:I,codeText:g,scope:T,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Select"),o["default"].createElement("div",null,o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoselect"),o["default"].createElement("p",{className:"site-copy"},"Our custom select element is called ",o["default"].createElement("strong",null,"rhinoselect"),"."),o["default"].createElement(s.Select,{name:"exampleSelect2",label:"Select",options:E}))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Select Playground"),o["default"].createElement(r["default"],{docClass:s.Select,propDescriptionMap:f,codeText:h,scope:x,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Switcher"),o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoswitcher"),o["default"].createElement("p",{className:"site-copy"},"Our custom switcher element is called ",o["default"].createElement("code",null,"rhinoswitcher"),". Disable the switcher using the ",o["default"].createElement("code",null,"disabled")," property."),o["default"].createElement(s.RhinoSwitch,{name:"rhinoswitch2",className:"u-m-r-sm",isChecked:!0}),o["default"].createElement(s.RhinoSwitch,{name:"rhinoswitch3",isChecked:!0,disabled:!0})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Switcher Playground"),o["default"].createElement(r["default"],{docClass:s.RhinoSwitch,propDescriptionMap:M,codeText:A,scope:S,noRender:!1})))};c["default"].render(o["default"].createElement(F,null),document.getElementById("js-app"))},626:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-checkbox">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Checkboxes</label>\n          <Checkbox inline name="exampleCheckbox31">Checkbox One</Checkbox>\n          <Checkbox inline name="exampleCheckbox32">Checkbox Two</Checkbox>\n          <Checkbox inline name="exampleCheckbox33">Checkbox Three</Checkbox>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},633:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-inputs">\n        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="text" required />\n        <Input name="exampleInputName31" label="Last Name" placeholder="Last Name" type="text" />\n        <Input name="exampleInputPassword31" placeholder="Password" type="password" />\n        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">\n          <span>Amount $</span>\n          <span>.00</span>\n        </Input>\n        <Input name="exampleInputText0202" label="Clear Input" type="text" clear />\n        <Input name="exampleInputText002" placeholder="Naked Input" type="text" naked />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},638:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-messageBox">\n        <MessageBox label="Bio" name="biography" rows={1} placeholder="I like messages!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},643:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-radio">\n        <RadioGroup inline name="exampleRadio4" label="Radios" selectedValue="3">\n          <Radio value="1">Radio One</Radio>\n          <Radio value="2">Radio Two</Radio>\n          <Radio value="3">Radio Three</Radio>\n        </RadioGroup>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},644:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-switch">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Switcher</label>\n          <RhinoSwitch name="exampleSwitch4" />\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},646:function(e,t){e.exports="var selectOpts = [\n  { value: '1', text: 'Option One' }, \n  { value: '2', text: 'Option Two' }, \n  { value: '3', text: 'Option Three', selected: true }, \n  { value: '4', text: 'Option Four' },\n];\n\nclass ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className=\"site-example-selects\">\n        <Select name=\"mySelect\" label=\"Choose One\" options={selectOpts} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},650:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-textareas">\n        <Textarea label="Bio" name="biography" rows={5} placeholder="I like pizza!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
=======
webpackJsonp([1],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(3),o=l(n),c=a(11),i=l(c),d=a(12),s=a(16),r=l(s),m=a(606),u={addon:"[Optional] - Display an add-on on the input, as a string - [left | right | both]",clear:"[Optional] - Form control gets a clear value button",label:"[Optional] - A label for the input",naked:"[Optional] - Form control is stripped down in appearance",name:"[Optional] - An id for the label and the input, use if you want clicking the label to activate the input",placeholder:"[Optional] - Any placeholder text you want in the input",type:"[Optional] - As a string, what type of input you are creating - [email | password | number | search] - defaults to text",required:"[Optional] - Field is required and asterisk is added to label",initialValue:"[Optional] - Any initial value for the input"},p={React:o["default"],ReactDOM:i["default"],Icon:d.Icon,Input:d.Input},h=a(618),f={label:"[Optional] - A label for the select",name:"[Optional] - An id for the label and the select, use if you want clicking the label to activate the select",options:"[Required] - Array of objects that contain the values and text for the options, with an optional selected key, {value:string, text:string, selected:bool}",required:"[Optional] - Field is required and asterisk is added to label"},x={React:o["default"],ReactDOM:i["default"],Select:d.Select},E=[{value:"1",text:"Option One"},{value:"2",text:"Option Two"},{value:"3",text:"Option Three",selected:!0},{value:"4",text:"Option Four"}],b=a(622),N={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea",required:"[Optional] - Field is required and asterisk is added to label"},R={React:o["default"],ReactDOM:i["default"],Textarea:d.Textarea},k=a(599),C={inline:"[Optional] - Inline the checkboxes",isChecked:"[Optional] - Set initial checked state",name:"[Required] - An id, and label for the checkbox",onClick:"[Optional] - A function you want to trigger when the checkbox is toggled"},y={React:o["default"],ReactDOM:i["default"],Checkbox:d.Checkbox},v=a(615),w={inline:"[Optional] - Inline the radios",name:"[Optional] - The name, and the basis of the id for the radio",onChange:"[Optional] - A function you which to trigger when you change the selection",selectedValue:"[Optional] - The radio you want selected, when used in a group",value:"[Optional] - A value for the radio"},O={React:o["default"],ReactDOM:i["default"],RadioGroup:d.RadioGroup,Radio:d.Radio},I=a(616),T={className:"[Optional] - Any class name you would like to add to the switch",disabled:"[Optional] - Disable the switch",isChecked:"[Optional] - Set initial on/off state",name:"[Optional] - The name, and the basis of the id for the switch"},g={React:o["default"],ReactDOM:i["default"],RhinoSwitch:d.RhinoSwitch},S=function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Forms"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Forms"),o["default"].createElement("p",{className:"site-text-lead"},"Forms are assembled using our suite of custom form components. It is important to understand that form components have a ",o["default"].createElement("code",null,"form__control")," class for consistent appearance. Form components are also wrapped in a ",o["default"].createElement("code",null,"form__group")," class which provides vertical spacing. Finally, you may use the ",o["default"].createElement("code",null,"form__section")," class to provide vertical spacing between sections of a form.")),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Form Example"),o["default"].createElement("form",{className:"form"},o["default"].createElement(d.Input,{name:"exampleInputEmail1",label:"Email Address",placeholder:"Email",type:"email",required:!0}),o["default"].createElement(d.Input,{name:"exampleInputPassword1",label:"Password",placeholder:"Password",type:"password",required:!0}),o["default"].createElement(d.Select,{name:"exampleSelect1",label:"Select",options:E,required:!0}),o["default"].createElement(d.Textarea,{label:"Text Area",name:"exampleTextarea1",placeholder:"Enter some text",required:!0}),o["default"].createElement("div",{className:"form__group"},o["default"].createElement("label",{htmlFor:"",className:"u-block"},"Checkboxes"),o["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox1"},"Checkbox One"),o["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox2"},"Checkbox Two"),o["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox3"},"Checkbox Three")),o["default"].createElement(d.RadioGroup,{inline:!0,name:"exampleRadio1",label:"Radios",selectedValue:"2"},o["default"].createElement(d.Radio,{value:"1"},"Radio One"),o["default"].createElement(d.Radio,{value:"2"},"Radio Two"),o["default"].createElement(d.Radio,{value:"3"},"Radio Three")),o["default"].createElement("div",{className:"form__group"},o["default"].createElement("label",{htmlFor:"",className:"u-block"},"Switcher"),o["default"].createElement(d.RhinoSwitch,{name:"exampleSwitch1"})),o["default"].createElement("div",{className:"u-text-right"},o["default"].createElement(d.Button,{type:"primary"},"Submit Form")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Form Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Form"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"form--inline")," modifier to ",o["default"].createElement("code",null,"form"),"."),o["default"].createElement("form",{className:"form form--inline"},o["default"].createElement(d.Input,{name:"exampleEmail2",label:"Email Address",placeholder:"Enter email",type:"email"}),o["default"].createElement(d.Input,{name:"examplePassword2",label:"Password",placeholder:"Password",type:"password"}),o["default"].createElement(d.Button,{type:"primary"},"Sign In")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Input"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Common Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Properties include ",o["default"].createElement("code",null,"initialValue, label, name, placeholder, required, and type"),".")),o["default"].createElement(d.Input,{name:"exampleInputEmail31",label:"Email Address",type:"email",required:!0}),o["default"].createElement(d.Input,{name:"exampleInputName31",label:"First Name",placeholder:"First Name",type:"text",initialValue:"Ian"}),o["default"].createElement(d.Input,{name:"exampleInputPassword31",label:"Password",placeholder:"Password",type:"password"})),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Input Add-On"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"addon")," property on Inputs with add-ons. Pass the addons as renderable nodes.")),o["default"].createElement(d.Input,{addon:"left",type:"text",placeholder:"Encrypted"},o["default"].createElement(d.Icon,{icon:"lock"})),o["default"].createElement(d.Input,{addon:"left",type:"text",placeholder:"Search"},o["default"].createElement(d.Icon,{icon:"search"})),o["default"].createElement(d.Input,{addon:"right",type:"text"},o["default"].createElement("a",{href:"javascript:void(0)"},"Go For It!")),o["default"].createElement(d.Input,{addon:"both",type:"text",placeholder:"Lorem ipsum dolor sit"},o["default"].createElement("span",null,"Amount $"),o["default"].createElement("span",null,".00"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Clear Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"clear")," property on Inputs to include a clear value button.")),o["default"].createElement(d.Input,{name:"exampleInputText111",label:"Clear Input",type:"text",clear:!0})),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Naked Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"naked")," property on Inputs to strip it of background, border, height, and padding.")),o["default"].createElement(d.Input,{name:"exampleInputText999",placeholder:"Naked Input",type:"text",naked:!0}))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Input Playground"),o["default"].createElement(r["default"],{docClass:d.Input,propDescriptionMap:u,codeText:m,scope:p,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Text Area"),o["default"].createElement(d.Textarea,{label:"Text Area",name:"exampleTextarea2",placeholder:"Enter some text"})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Text Area Playground"),o["default"].createElement(r["default"],{docClass:d.Textarea,propDescriptionMap:N,codeText:b,scope:R,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Checkbox"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinobox"),o["default"].createElement("p",{className:"site-copy"},"Our custom checkbox element is called ",o["default"].createElement("code",null,"rhinobox"),". By default, these are stacked."),o["default"].createElement(d.Checkbox,{isChecked:!0,name:"exampleCheckbox11"},"Checkbox One"),o["default"].createElement(d.Checkbox,{name:"exampleCheckbox12"},"Checkbox Two"),o["default"].createElement(d.Checkbox,{name:"exampleCheckbox13"},"Checkbox Three")),o["default"].createElement("div",null,o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinobox"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"inline")," modifier to create inline checkboxes."),o["default"].createElement(d.Checkbox,{inline:!0,name:"exampleCheckbox21"},"Checkbox One"),o["default"].createElement(d.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox22"},"Checkbox Two"),o["default"].createElement(d.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox23"},"Checkbox Three"))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Checkbox Playground"),o["default"].createElement(r["default"],{docClass:d.Checkbox,propDescriptionMap:C,codeText:k,scope:y,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Radio"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinodio"),o["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",o["default"].createElement("code",null,"rhinodio"),". By default, these are stacked."),o["default"].createElement(d.RadioGroup,{name:"exampleRadio2",label:"Radios",selectedValue:"2"},o["default"].createElement(d.Radio,{value:"1"},"Radio One"),o["default"].createElement(d.Radio,{value:"2"},"Radio Two"),o["default"].createElement(d.Radio,{value:"3"},"Radio Three"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinodio"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"inline")," property to create inline radios."),o["default"].createElement(d.RadioGroup,{inline:!0,name:"exampleRadio3",label:"Radios",selectedValue:"2"},o["default"].createElement(d.Radio,{value:"1"},"Radio One"),o["default"].createElement(d.Radio,{value:"2"},"Radio Two"),o["default"].createElement(d.Radio,{value:"3"},"Radio Three")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Radio Playground"),o["default"].createElement(r["default"],{docClass:d.Radio,propDescriptionMap:w,codeText:v,scope:O,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Select"),o["default"].createElement("div",null,o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoselect"),o["default"].createElement("p",{className:"site-copy"},"Our custom select element is called ",o["default"].createElement("strong",null,"rhinoselect"),"."),o["default"].createElement(d.Select,{name:"exampleSelect2",label:"Select",options:E}))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Select Playground"),o["default"].createElement(r["default"],{docClass:d.Select,propDescriptionMap:f,codeText:h,scope:x,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Switcher"),o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoswitcher"),o["default"].createElement("p",{className:"site-copy"},"Our custom switcher element is called ",o["default"].createElement("code",null,"rhinoswitcher"),". Disable the switcher using the ",o["default"].createElement("code",null,"disabled")," property."),o["default"].createElement(d.RhinoSwitch,{name:"rhinoswitch2",className:"u-m-r-sm",isChecked:!0}),o["default"].createElement(d.RhinoSwitch,{name:"rhinoswitch3",isChecked:!0,disabled:!0})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Switcher Playground"),o["default"].createElement(r["default"],{docClass:d.RhinoSwitch,propDescriptionMap:T,codeText:I,scope:g,noRender:!1})))};i["default"].render(o["default"].createElement(S,null),document.getElementById("js-app"))},599:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-checkbox">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Checkboxes</label>\n          <Checkbox inline name="exampleCheckbox31">Checkbox One</Checkbox>\n          <Checkbox inline name="exampleCheckbox32">Checkbox Two</Checkbox>\n          <Checkbox inline name="exampleCheckbox33">Checkbox Three</Checkbox>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},606:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-inputs">\n        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="text" required />\n        <Input name="exampleInputName31" label="Last Name" placeholder="Last Name" type="text" />\n        <Input name="exampleInputPassword31" placeholder="Password" type="password" />\n        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">\n          <span>Amount $</span>\n          <span>.00</span>\n        </Input>\n        <Input name="exampleInputText0202" label="Clear Input" type="text" clear />\n        <Input name="exampleInputText002" placeholder="Naked Input" type="text" naked />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},615:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-radio">\n        <RadioGroup inline name="exampleRadio4" label="Radios" selectedValue="3">\n          <Radio value="1">Radio One</Radio>\n          <Radio value="2">Radio Two</Radio>\n          <Radio value="3">Radio Three</Radio>\n        </RadioGroup>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},616:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-switch">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Switcher</label>\n          <RhinoSwitch name="exampleSwitch4" />\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},618:function(e,t){e.exports="var selectOpts = [\n  { value: '1', text: 'Option One' }, \n  { value: '2', text: 'Option Two' }, \n  { value: '3', text: 'Option Three', selected: true }, \n  { value: '4', text: 'Option Four' },\n];\n\nclass ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className=\"site-example-selects\">\n        <Select name=\"mySelect\" label=\"Choose One\" options={selectOpts} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},622:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-textareas">\n        <Textarea label="Bio" name="biography" rows={5} placeholder="I like pizza!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
>>>>>>> e5bf1425c5a1ae2865d3d62676459c29f4a386c1
