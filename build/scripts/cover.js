webpackJsonp([2],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),c=a(i),d=n(10),u=a(d),m=n(12),v=n(16),C=a(v),f=n(604),p=n(607),h=n(605),N=n(606),y={icon:"[Optional] - Attaches an Icon to the Cover Header",iconClassName:"[Optional] - Adds a class to the Cover Header icon",title:"[Optional] - Cover Title -  String to represent the Cover Header"},E={size:"[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body"},g={React:c["default"],ReactDOM:u["default"],Button:m.Button,Input:m.Input,CoverSystem:m.CoverSystem,CoverHeader:m.CoverHeader,CoverBody:m.CoverBody,CoverFooter:m.CoverFooter,Icon:m.Icon},b=function(e){function t(){var e,n,a,s;r(this,t);for(var l=arguments.length,i=Array(l),d=0;d<l;d++)i[d]=arguments[d];return n=a=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={firstName:"",lastName:""},a.onClick=function(){m.CoverSystem.addCover(a.renderContent())},a.handleChange=function(e,t){var n={};n[e]=t,a.setState(n)},a.closeCover=function(){m.CoverSystem.removeCover()},a.saveChanges=function(){var e={};a.state.firstName||(e.firstName="FirstName is required!"),a.state.lastName||(e.lastName="LastName is required!");var t=Object.keys(e).length;t>0?m.CoverSystem.refreshCover(a.renderContent(e)):a.closeCover()},a.renderContent=function(e){var t=e||{};return c["default"].createElement("div",{className:"cover"},c["default"].createElement(m.CoverHeader,{title:"This is a sample Cover"}),c["default"].createElement(m.CoverBody,null,c["default"].createElement("div",{className:"form"},c["default"].createElement("div",{className:"form__group"},c["default"].createElement(m.Input,{label:"First Name",name:"firstName",initialValue:a.state.firstName,validationMessage:t.firstName,required:!0,onChange:a.handleChange})),c["default"].createElement("div",null,c["default"].createElement(m.Input,{label:"Last Name",name:"lastName",initialValue:a.state.lastName,validationMessage:t.lastName,required:!0,onChange:a.handleChange})))),c["default"].createElement(m.CoverFooter,null,c["default"].createElement("div",{className:"u-text-right"},c["default"].createElement(m.Button,{type:"default",onClick:a.closeCover},"Close")," ",c["default"].createElement(m.Button,{type:"secondary",onClick:a.saveChanges},"Save Changes"))))},s=n,o(a,s)}return s(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Covers"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Cover Example"),c["default"].createElement("p",{className:"site-copy"},"You can inject a cover by calling ",c["default"].createElement("code",null,"CoverSystem.addCover(cover)"),", where ",c["default"].createElement("code",null,"cover")," can be ",c["default"].createElement("code",null,'div className="cover"')," containing ",c["default"].createElement("code",null,"CoverHeader"),", ",c["default"].createElement("code",null,"CoverBody"),", ",c["default"].createElement("code",null,"CoverFooter"),"."),c["default"].createElement(C["default"],{docClass:m.CoverContainer["default"],codeText:f,scope:g,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"CoverHeader"),c["default"].createElement(C["default"],{docClass:m.CoverHeader,propDescriptionMap:y,codeText:p,scope:g,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"CoverBody"),c["default"].createElement(C["default"],{docClass:m.CoverBody,propDescriptionMap:E,codeText:h,scope:g,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"CoverFooter"),c["default"].createElement(C["default"],{docClass:m.CoverFooter,codeText:N,scope:g,noRender:!1})))}}]),t}(c["default"].Component);u["default"].render(c["default"].createElement(b,null),document.getElementById("js-app"))},604:function(e,t){e.exports='class ComponentExample extends React.Component {\n  state = {\n    firstName: \'\',\n    lastName: \'\',\n  }\n\n  onClick = (event) => {\n    event.preventDefault();\n    CoverSystem.addCover(this.renderContent());\n  };\n\n  closeCover = () => {\n    CoverSystem.removeCover();\n  }\n\n  handleChange = (name, value) => {\n    const newState = {};\n\n    newState[name] = value;\n    this.setState(newState);\n  }\n\n  saveChanges = () => {\n    const errors = {};\n\n    if (!this.state.firstName) {\n      errors.firstName = \'FirstName is required!\';\n    }\n\n    if (!this.state.lastName) {\n      errors.lastName = \'LastName is required!\';\n    }\n\n    const errorCount  = Object.keys(errors).length\n\n    if (errorCount > 0) {\n      CoverSystem.refreshCover(this.renderContent(errors));\n    } else {\n      alert(\'Changes were saved!\');\n      this.closeCover();\n    }\n  }\n\n  renderContent = (errors) => {\n    const errorList = errors || {};\n\n    return (\n      <div className="cover">\n        <CoverHeader icon="pencil" title="This is a sample Cover" />\n        <CoverBody>\n          <div className="form">\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div>\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n          </div>\n        </CoverBody>\n        <CoverFooter>\n          <div className="u-text-right">\n            <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n          </div>\n        </CoverFooter>\n      </div>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Launch Cover</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},605:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverBody>\n        <div className="form">\n          <div className="form__group">\n            <Input label="First Name" name="firstName" initialValue="First Name" validationMessage="" required />\n          </div>\n          <div>\n            <Input label="Last Name" name="lastName" initialValue="" validationMessage="LastName is required!" required />\n          </div>\n        </div>\n      </CoverBody>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},606:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverFooter>\n        <div className="u-text-right">\n          <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n          <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n        </div>\n      </CoverFooter>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},607:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverHeader icon="cog" title="This is a sample CoverHeader" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});