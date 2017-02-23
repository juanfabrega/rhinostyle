webpackJsonp([1],{0:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var n=t(3),o=l(n),i=t(8),s=l(i),c=t(15),d=l(c),r=t(9),m=t(650),u={addon:"[Optional] - Display an add-on on the input, as a string - [left | right | both]",autoCapitalize:"[Optional] - Adjust the capitalization settings of an input - [none | sentences | words | characters]",autoComplete:"[Optional] - Adjust the completion settings on an input - [off | on]",clear:"[Optional] - Form control gets a clear value button",explanationMessage:"[Optional] - Explanation message to help user",initialValue:"[Optional] - Any initial value for the input",label:"[Optional] - A label for the input",naked:"[Optional] - Form control is stripped down in appearance",name:"[Optional] - An id for the label and the input, use if you want clicking the label to activate the input",onChange:"[Optional] - A callback function that is executed when the input value changes",placeholder:"[Optional] - Any placeholder text you want in the input",required:"[Optional] - Field is required and asterisk is added to label",type:"[Optional] - As a string, what type of input you are creating - [email | password | number | search | tel] - defaults to text",validationMessage:"[Optional] - Validation message for errors"},p={React:o.default,ReactDOM:s.default,Icon:r.Icon,Input:r.Input},h=t(667),x={label:"[Optional] - A label for the select",name:"[Optional] - An id for the label and the select, use if you want clicking the label to activate the select",options:"[Required] - Array of objects that contain the values and text for the options, with an optional selected key, { id: number, value: string }",required:"[Optional] - Field is required and asterisk is added to label",onSelect:"[Optional] - Function that returns the name of the Select and the value that was selected",selected:"[Optional] - String that pre-selects an option"},f={React:o.default,ReactDOM:s.default,Select:r.Select},b=[{id:0,value:"--"},{id:1,value:"Option One"},{id:2,value:"Option Two"},{id:3,value:"Option Three"},{id:4,value:"Option Four"}],E=t(671),C={abbrMaxCharacters:"[Optional] - Abbreviated max character count - only the count is displayed",explanationMessage:"[Optional] - Explanation message to help user",initialValue:"[Optional] - Any initial value for the textarea",label:"[Optional] - A label for the textarea",maxCharacters:"[Optional] - Set a maximum character limit in order to display character count",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea",onChange:"[Optional] - A callback function that is executed when the textarea value changes",placeholder:"[Optional] - Any placeholder text you want in the textarea",required:"[Optional] - Field is required and asterisk is added to label"},k={React:o.default,ReactDOM:s.default,Textarea:r.Textarea},R=t(656),N={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the Message Box",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea",maxHeight:"[Optional] - Controls the max-height (default: 20rem)",required:"[Optional] - Field is required and asterisk is added to label"},w={React:o.default,ReactDOM:s.default,MessageBox:r.MessageBox},g=t(637),v={inline:"[Optional] - Inline the checkboxes",isChecked:"[Optional] - Set initial checked state",name:"[Required] - An id, and label for the checkbox",onClick:"[Optional] - A function you want to trigger when the checkbox is toggled"},y={React:o.default,ReactDOM:s.default,Checkbox:r.Checkbox},O=t(664),I={inline:"[Optional] - Inline the radios",name:"[Optional] - The name, and the basis of the id for the radio",onChange:"[Optional] - A function you which to trigger when you change the selection",selectedValue:"[Optional] - The radio you want selected, when used in a group",value:"[Optional] - A value for the radio"},T={React:o.default,ReactDOM:s.default,RadioGroup:r.RadioGroup,Radio:r.Radio},A=t(665),M={className:"[Optional] - Any class name you would like to add to the switch",disabled:"[Optional] - Disable the switch",isChecked:"[Optional] - Set initial on/off state",name:"[Optional] - The name, and the basis of the id for the switch"},S={React:o.default,ReactDOM:s.default,RhinoSwitch:r.RhinoSwitch},F=function(){return o.default.createElement("div",null,o.default.createElement("h1",{className:"site-headline"},"Forms"),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Forms"),o.default.createElement("p",{className:"site-text-lead"},"Forms are assembled using our suite of custom form components. It is important to understand that form components have a ",o.default.createElement("code",null,"form__control")," class for consistent appearance. Form components are also wrapped in a ",o.default.createElement("code",null,"form__group")," class which provides vertical spacing. Finally, you may use the ",o.default.createElement("code",null,"form__section")," class to provide vertical spacing between sections of a form.")),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Form Example"),o.default.createElement("form",{className:"form"},o.default.createElement(r.Input,{name:"exampleInputEmail1",label:"Email Address",placeholder:"Email",type:"email",required:!0}),o.default.createElement(r.Input,{name:"exampleInputPassword1",label:"Password",placeholder:"Password",type:"password",required:!0}),o.default.createElement(r.Select,{name:"exampleSelect1",label:"Select",options:b,required:!0}),o.default.createElement(r.Textarea,{label:"Text Area",name:"exampleTextarea1",placeholder:"Enter some text",required:!0}),o.default.createElement(r.MessageBox,{label:"Message Box",placeholder:"Enter some text",name:"exampleMessageBoxarea1",required:!0}),o.default.createElement("div",{className:"form__group"},o.default.createElement("label",{htmlFor:"checkboxes",className:"u-block"},"Checkboxes"),o.default.createElement(r.Checkbox,{inline:!0,name:"exampleCheckbox1"},"Checkbox One"),o.default.createElement(r.Checkbox,{inline:!0,name:"exampleCheckbox2"},"Checkbox Two"),o.default.createElement(r.Checkbox,{inline:!0,name:"exampleCheckbox3"},"Checkbox Three")),o.default.createElement(r.RadioGroup,{inline:!0,name:"exampleRadio1",label:"Radios",selectedValue:"2"},o.default.createElement(r.Radio,{value:"1"},"Radio One"),o.default.createElement(r.Radio,{value:"2"},"Radio Two"),o.default.createElement(r.Radio,{value:"3"},"Radio Three")),o.default.createElement("div",{className:"form__group"},o.default.createElement("label",{htmlFor:"switcher",className:"u-block"},"Switcher"),o.default.createElement(r.RhinoSwitch,{name:"exampleSwitch1"})),o.default.createElement("div",{className:"u-text-right"},o.default.createElement(r.Button,{type:"primary"},"Submit Form")))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Form Utilities"),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Inline Form"),o.default.createElement("p",{className:"site-copy"},"Wrap elements you want inlined with ",o.default.createElement("code",null,"form__inline")," class."),o.default.createElement("form",{className:"form"},o.default.createElement("div",{className:"form__inline"},o.default.createElement(r.Input,{name:"exampleEmail2",label:"Email Address",placeholder:"Enter email",type:"email"}),o.default.createElement(r.Input,{name:"examplePassword2",label:"Password",placeholder:"Password",type:"password"}),o.default.createElement(r.Button,{type:"primary"},"Sign In"))))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Input"),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Common Input"),o.default.createElement(r.Input,{name:"exampleInputEmail31",label:"Email Address",type:"email",required:!0}),o.default.createElement(r.Input,{name:"exampleInputName31",label:"First Name",placeholder:"First Name",type:"text",initialValue:"Ian"}),o.default.createElement(r.Input,{name:"exampleInputPassword31",label:"Password",placeholder:"Password",type:"password"})),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Input Add-On"),o.default.createElement("div",{className:"site-copy"},o.default.createElement("p",null,"Use the ",o.default.createElement("code",null,"addon")," property on Inputs with add-ons. Pass the addons as renderable nodes.")),o.default.createElement(r.Input,{addon:"left",type:"text",placeholder:"Encrypted"},o.default.createElement(r.Icon,{icon:"lock"})),o.default.createElement(r.Input,{addon:"left",type:"text",placeholder:"Search"},o.default.createElement(r.Icon,{icon:"search"})),o.default.createElement(r.Input,{addon:"right",type:"text"},o.default.createElement("a",{href:"javascript:void(0)"},"Go For It!")),o.default.createElement(r.Input,{addon:"both",type:"text",placeholder:"Lorem ipsum dolor sit"},o.default.createElement("span",null,"Amount $"),o.default.createElement("span",null,".00"))),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Clear Input"),o.default.createElement("div",{className:"site-copy"},o.default.createElement("p",null,"Use the ",o.default.createElement("code",null,"clear")," property on Inputs to include a clear value button.")),o.default.createElement(r.Input,{name:"exampleInputText111",label:"Clear Input",type:"text",clear:!0})),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Naked Input"),o.default.createElement("div",{className:"site-copy"},o.default.createElement("p",null,"Use the ",o.default.createElement("code",null,"naked")," property on Inputs to strip it of background, border, height, and padding.")),o.default.createElement(r.Input,{name:"exampleInputText999",placeholder:"Naked Input",type:"text",naked:!0}))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Input Playground"),o.default.createElement(d.default,{docClass:r.Input,propDescriptionMap:u,codeText:m,scope:p,noRender:!1})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Text Area"),o.default.createElement(r.Textarea,{label:"Text Area",name:"exampleTextarea2",placeholder:"Enter some text"})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Text Area Playground"),o.default.createElement(d.default,{docClass:r.Textarea,propDescriptionMap:C,codeText:E,scope:k,noRender:!1})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Message Box "),o.default.createElement("p",{className:"site-copy"},"We are using a light-weight plugin, ",o.default.createElement("a",{href:"http://www.jacklmoore.com/autosize/",target:"_blank"},"Jack Moore's Autosize"),", with custom styling for the autogrow functionality."),o.default.createElement(r.MessageBox,{label:"Message Box",name:"exampleMessageBoxarea2",placeholder:"Enter some text"})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Message Box Playground"),o.default.createElement(d.default,{docClass:r.MessageBox,propDescriptionMap:N,codeText:R,scope:w,noRender:!1})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Checkbox"),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Rhinobox"),o.default.createElement("p",{className:"site-copy"},"Our custom checkbox element is called ",o.default.createElement("code",null,"rhinobox"),". By default, these are stacked."),o.default.createElement(r.Checkbox,{isChecked:!0,name:"exampleCheckbox11"},"Checkbox One"),o.default.createElement(r.Checkbox,{name:"exampleCheckbox12"},"Checkbox Two"),o.default.createElement(r.Checkbox,{name:"exampleCheckbox13"},"Checkbox Three")),o.default.createElement("div",null,o.default.createElement("h5",{className:"site-miniheadline"},"Inline Rhinobox"),o.default.createElement("p",{className:"site-copy"},"Add the ",o.default.createElement("code",null,"inline")," modifier to create inline checkboxes."),o.default.createElement(r.Checkbox,{inline:!0,name:"exampleCheckbox21"},"Checkbox One"),o.default.createElement(r.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox22"},"Checkbox Two"),o.default.createElement(r.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox23"},"Checkbox Three"))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Checkbox Playground"),o.default.createElement(d.default,{docClass:r.Checkbox,propDescriptionMap:v,codeText:g,scope:y,noRender:!1})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Radio"),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Rhinodio"),o.default.createElement("p",{className:"site-copy"},"Our custom radio element is called ",o.default.createElement("code",null,"rhinodio"),". By default, these are stacked."),o.default.createElement(r.RadioGroup,{name:"exampleRadio2",label:"Radios",selectedValue:"2"},o.default.createElement(r.Radio,{value:"1"},"Radio One"),o.default.createElement(r.Radio,{value:"2"},"Radio Two"),o.default.createElement(r.Radio,{value:"3"},"Radio Three"))),o.default.createElement("div",{className:"u-m-b-md"},o.default.createElement("h5",{className:"site-miniheadline"},"Inline Rhinodio"),o.default.createElement("p",{className:"site-copy"},"Add the ",o.default.createElement("code",null,"inline")," property to create inline radios."),o.default.createElement(r.RadioGroup,{inline:!0,name:"exampleRadio3",label:"Radios",selectedValue:"2"},o.default.createElement(r.Radio,{value:"1"},"Radio One"),o.default.createElement(r.Radio,{value:"2"},"Radio Two"),o.default.createElement(r.Radio,{value:"3"},"Radio Three")))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Radio Playground"),o.default.createElement(d.default,{docClass:r.Radio,propDescriptionMap:I,codeText:O,scope:T,noRender:!1})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Select"),o.default.createElement("div",null,o.default.createElement("h5",{className:"site-miniheadline"},"Rhinoselect"),o.default.createElement("p",{className:"site-copy"},"Our custom select element is called ",o.default.createElement("strong",null,"rhinoselect"),"."),o.default.createElement(r.Select,{name:"exampleSelect2",label:"Select",options:b}))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Select Playground"),o.default.createElement(d.default,{docClass:r.Select,propDescriptionMap:x,codeText:h,scope:f,noRender:!1})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Switcher"),o.default.createElement("h5",{className:"site-miniheadline"},"Rhinoswitcher"),o.default.createElement("p",{className:"site-copy"},"Our custom switcher element is called ",o.default.createElement("code",null,"rhinoswitcher"),". Disable the switcher using the ",o.default.createElement("code",null,"disabled")," property."),o.default.createElement(r.RhinoSwitch,{name:"rhinoswitch2",className:"u-m-r-sm",isChecked:!0}),o.default.createElement(r.RhinoSwitch,{name:"rhinoswitch3",isChecked:!0,disabled:!0})),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Switcher Playground"),o.default.createElement(d.default,{docClass:r.RhinoSwitch,propDescriptionMap:M,codeText:A,scope:S,noRender:!1})))};s.default.render(o.default.createElement(F,null),document.getElementById("js-app"))},637:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-checkbox">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Checkboxes</label>\n          <Checkbox name="exampleCheckbox31">Checkbox One</Checkbox>\n          <Checkbox name="exampleCheckbox32">Checkbox Two</Checkbox>\n          <Checkbox name="exampleCheckbox33">Checkbox Three</Checkbox>\n        </div>\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Checkboxes Inline</label>\n          <Checkbox inline name="exampleCheckbox311">Checkbox One</Checkbox>\n          <Checkbox inline name="exampleCheckbox321">Checkbox Two</Checkbox>\n          <Checkbox inline name="exampleCheckbox331">Checkbox Three</Checkbox>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},650:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-inputs">\n        <Input name="exampleInputFirstName31" label="First Name" placeholder="First Name" type="text" required />\n        <Input name="exampleInputLastName31" label="Last Name" placeholder="Last Name" type="text" required />\n        <Input name="exampleInputPassword31" placeholder="Password" type="password" />\n        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">\n          <span>Amount $</span>\n          <span>.00</span>\n        </Input>\n        <Input name="exampleInputText0202" label="Clear Input" type="text" clear />\n        <Input name="exampleInputText022" label="Autocomplete off" autoComplete="off" type="text" />\n        <Input name="exampleInputText022" label="Autocapitalize off" autoCapitalize="none" type="text" />\n        <Input name="exampleInputText002" placeholder="Naked Input" type="text" naked />\n        <Input name="exampleInputValidation" label="Validation Message" initialValue="bademail.com" type="email" validationMessage="This is not a valid email address." />\n        <Input name="exampleInputExplanation" label="Explanation Message" initialValue="Lorem ipsum dolor" type="text" explanationMessage="This is an explanation message to help user." />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},656:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-messageBox">\n        <MessageBox label="Bio" name="biography" rows={1} placeholder="I like messages!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},664:function(e,a){e.exports='class ComponentExample extends React.Component {\n  optionalCallbackFunction = (value) => {\n     console.log(\'Run optional callback function\', value);\n   };\n\n  render() {\n    return (\n      <div className="site-example-radio">\n        <RadioGroup name="exampleRadio4" label="Radios" onChange={this.optionalCallbackFunction} selectedValue="3">\n          <Radio value="1">Radio One</Radio>\n          <Radio value="2">Radio Two</Radio>\n          <Radio value="3">Radio Three</Radio>\n        </RadioGroup>\n        <RadioGroup inline name="exampleRadio44" label="Radios Inline" onChange={this.optionalCallbackFunction} selectedValue="3">\n          <Radio value="1">Radio One</Radio>\n          <Radio value="2">Radio Two</Radio>\n          <Radio value="3">Radio Three</Radio>\n        </RadioGroup>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},665:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-switch">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Switcher</label>\n          <RhinoSwitch name="exampleSwitch4" />\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},667:function(e,a){e.exports="var selectOpts = [\n  { id: 1, value: 'Option One' },\n  { id: 2, value: 'Option Two' },\n  { id: 3, value: 'Option Three' },\n  { id: 4, value: 'Option Four' },\n];\n\nclass ComponentExample extends React.Component {\n  handleSelect = (name, value) => {\n    const newState = {};\n\n    newState[name] = value;\n\n    console.log(newState);\n  }\n\n  render() {\n    return (\n      <div className=\"site-example-selects\">\n        <Select onSelect={this.handleSelect} selected={1} name=\"mySelect\" label=\"Choose One\" options={selectOpts} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},671:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-textareas">\n        <Textarea label="Text Area" name="exampleTextArea" rows={3} placeholder="I like pizza!" />\n        <Textarea label="Text Area with Explanation Message" name="exampleExplanationTextArea" rows={3} placeholder="Text area with explanation message" explanationMessage="This is an explanation message to help the user." />\n        <Textarea label="Text Area with Character Count" name="exampleCharacterCount" rows={3} placeholder="Text area with character count" maxCharacters={130} />\n        <Textarea label="Text Area with Character Count and Explanation" name="exampleExplanationPlusCharacterCount" rows={3} initialValue="Nulla ipsum metus, pellentesque eget pulvinar ac, cursus et enim. Nam laoreet mattis odio, vel efficitur nisi laoreet pellen.." placeholder="Text area with character count and explanation message" maxCharacters={130} explanationMessage="This is an explanation message to help the user." />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});