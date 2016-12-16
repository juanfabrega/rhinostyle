webpackJsonp([2],{0:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var l=t(3),o=a(l),r=t(8),d=a(r),m=t(12),u=t(15),p=a(u),i=t(616),c=t(620),s=t(617),w=t(618),D=t(619),b={activeKey:"[Optional] - The id of the currently selected DropdownMenuItem",block:"[Optional] - Block level dropdown",className:"[Optional] - Include additional class name(s)",disableScroll:"[Optional] - Disabled default dropdown menu scrolling. Does not apply when filter is used.",hideCaret:"[Optional] - Hide Dropdown caret",icon:"[Optional] - Name of icon",label:"[Optional] - Text in dropdown when closed",lockLabel:"[Optional] - Do not change label text when selecting item",position:"[Optional] -  Position of Dropdown - [right | top | top-right]",size:"[Optional] - Size of Dropdown - [small | large]",onSelect:"[Optional] - Callback when a DropdownMenuItem is selected",type:"[Optional] - Type of Dropdown -  [default | input | primary | secondary | outline-default | outline-primary | outline-reversed | link]",wide:"[Optional] - Sets a min-width on dropdown menu to ensure a great width"},I={activeKey:"[Optional] - The id of the currently selected DropdownMenuItem",block:"[Optional] - Block level dropdown",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Name of icon",label:"[Optional] - Text in dropdown when closed",position:"[Optional] -  Position of Dropdown - [right | top | top-right]",size:"[Optional] - Size of Dropdown - [small | large]",onSelect:"[Optional] - Callback when a DropdownMenuItem is selected",wide:"[Optional] - Sets a min-width on dropdown menu to ensure a great width"},M={className:"[Optional] - Include additional class name(s)",label:"[Required] - Label for header"},f={active:"[Optional] - Active state",avatar:"[Optional] - Path to avatar image",blankWindow:"[Optional] - Open URL in blank browser window",className:"[Optional] - Include additional class name(s)",disabled:"[Optional] - Disabled state",icon:"[Optional] - Name of icon",id:"[Optional] - Identifies the selected item in Dropdown when you want to use as a Dropdown Select",label:"[Optional] - Label for item",labelDesc:"[Optional] - Description for label",labelIcon:"[Optional] - Places icon inside of the label. Only use along with labelDesc.",onClick:"[Opational] - Click function",route:"[Optional] - React-router route to use for item",url:"[Optional] - URL for item"},h={toggleDropdown:"[Optional] - Clicking will close the dropdown"},E={React:o["default"],ReactDOM:d["default"],Button:m.Button,Dropdown:m.Dropdown,DropdownFilter:m.DropdownFilter,DropdownMenuDivider:m.DropdownMenuDivider,DropdownMenuHeader:m.DropdownMenuHeader,DropdownMenuItem:m.DropdownMenuItem,DropdownMenuItemWild:m.DropdownMenuItemWild,DropdownMenuScroll:m.DropdownMenuScroll,DropdownMultiSelect:m.DropdownMultiSelect,Icon:m.Icon},y=function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Dropdowns"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdowns"),o["default"].createElement("p",{className:"site-text-lead"},"We have two main dropdown components: ",o["default"].createElement("span",{className:"u-text-accent"},"Dropdown")," and ",o["default"].createElement("span",{className:"u-text-accent"},"DropdownMultiSelect"),".")),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown Types"),o["default"].createElement("p",{className:"site-copy"},"Types are the same as the Button component with one exception - Dropdowns include an ",o["default"].createElement("code",null,"input")," type so that they mimic form controls."),o["default"].createElement("div",{className:"site-example-dropdowns"},o["default"].createElement(m.Dropdown,{label:"Default"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}),o["default"].createElement("div",{className:"dropdown__menu__container"},o["default"].createElement(m.Button,{block:!0,type:"outline-primary",size:"small"},"Log Out"))),o["default"].createElement(m.Dropdown,{label:"Input",type:"input"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Primary",type:"primary"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Secondary",type:"secondary"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Outline Default",type:"outline-default"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Outline Primary",type:"outline-primary"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Link",type:"link"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"link",icon:"search"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement("br",null),o["default"].createElement("br",null),o["default"].createElement(m.Dropdown,{type:"default",icon:"search"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"primary",icon:"lock"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"secondary",icon:"cog"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"outline-default",icon:"search"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"outline-primary",icon:"lock"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Link with Color Utility",type:"link",className:"u-text-body"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Block"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,"block")," property to create 100% width, block level dropdown."),o["default"].createElement(m.Dropdown,{label:"Dropdown Block",type:"default",icon:"cog",block:!0},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Right"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,'position="right"')," property."),o["default"].createElement(m.Dropdown,{label:"Dropdown Right",type:"default",position:"right"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Top"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,'position="top"')," property."),o["default"].createElement(m.Dropdown,{label:"Dropdown Top",type:"default",position:"top"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Top & Right"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,'position="top-right"')," property."),o["default"].createElement(m.Dropdown,{label:"Dropdown Top Right",type:"default",position:"top-right"},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Wide"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,"wide")," property. This gives the dropdown menu a larger min-width value. Handy when you want to include an input filter."),o["default"].createElement(m.Dropdown,{label:"Dropdown Wide",type:"default",wide:!0},o["default"].createElement(m.DropdownMenuHeader,{label:"Menu Header"}),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown"),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,"Dropdown")," component to create a dropdown with selectable menu items. Selected menu items are reflected in the dropdown button's text when an ",o["default"].createElement("code",null,"id")," is used in ",o["default"].createElement("code",null,"DropdownMenuItem"),". To prevent this, use the ",o["default"].createElement("code",null,"lockLabel")," property."),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,'type="input"')," if you want dropdown to appear like a form input."),o["default"].createElement(p["default"],{docClass:m.Dropdown,propDescriptionMap:b,codeText:i,scope:E,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown MultiSelect"),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,"DropdownMultiSelect")," component to create a multi-select list of ",o["default"].createElement("code",null,"DropdownMenuItem(s)"),'. This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as "pills" below the dropdown.'),o["default"].createElement(p["default"],{docClass:m.DropdownMultiSelect,propDescriptionMap:I,codeText:c,scope:E,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"DropdownMenuHeader"),o["default"].createElement(p["default"],{docClass:m.DropdownMenuHeader,propDescriptionMap:M,codeText:s,scope:E,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"DropdownMenuItem"),o["default"].createElement(p["default"],{docClass:m.DropdownMenuItem,propDescriptionMap:f,codeText:w,scope:E,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"DropdownMenuItemWild"),o["default"].createElement(p["default"],{docClass:m.DropdownMenuItemWild,propDescriptionMap:h,codeText:D,scope:E,noRender:!1})))};d["default"].render(o["default"].createElement(y,null),document.getElementById("js-app"))},616:function(e,n){e.exports='class ComponentExample extends React.Component {\n  optionalCallbackFunction = (index) => {\n    console.log(\'Run optional callback function\', index);\n  };\n\n  render() {\n    return (\n    <div className="site-example-dropdowns">\n      <Dropdown label="Dropdown" wide>\n        <DropdownMenuHeader label="Menu Header" />\n        <DropdownMenuItem label="Custom Click Item" labelDesc="Click me and I will fire an alert." onClick={() => alert(\'clicked!\')} />\n        <DropdownMenuItem label="Url Blank Window Item" labelDesc="Click me and I will take you to a site that opens in a new browser window." url="http://www.rhinogram.com" blankWindow />\n        <DropdownMenuItem label="Url Item" labelDesc="Click me and I will take you to a new site in the same browser window." url="http://www.rhinogram.com" />\n        <DropdownMenuDivider />\n        <DropdownMenuItem label="Separated Item" />\n        <DropdownMenuDivider />\n        <div className="dropdown__menu__container"><Button block type="outline-primary" size="small">Button</Button></div>\n      </Dropdown>\n      <Dropdown label="Dropdown Select" type="outline-primary" onSelect={this.optionalCallbackFunction}>\n        <DropdownMenuHeader label="Menu Header" />\n        <DropdownMenuItem id={1} label="Item" />\n        <DropdownMenuItem id={2} label="Another item" />\n        <DropdownMenuItem id={3} label="A third item" />\n        <DropdownMenuDivider />\n        <DropdownMenuItem id={4} label="A fourth item" />\n        <div className="dropdown__menu__container"><Button block type="outline-primary" size="small">Button</Button></div>\n      </Dropdown>\n      <Dropdown wide label="Dropdown Select with Filter" type="outline-primary">\n        <DropdownFilter placeholder="Filter Contact">\n          <DropdownMenuItem id={1} label="Item" />\n          <DropdownMenuItem id={2} label="Another item" />\n          <DropdownMenuItem id={3} label="A third item" />\n          <DropdownMenuItem id={4} label="A fourth item" />\n          <DropdownMenuItem id={5} label="A fifth item" />\n          <DropdownMenuItem id={6} label="A sixth item" />\n          <DropdownMenuItem id={7} label="A seventh item" />\n          <DropdownMenuItem id={8} label="An eighth item" />\n        </DropdownFilter>\n      </Dropdown>\n      <Dropdown wide label="Dropdown Select with Filter & Avatar" type="outline-primary">\n        <DropdownFilter placeholder="Filter Member">\n          <DropdownMenuItem id={1} label="Ben Bruning With Really Long Name" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ben Bruning", type: "member"}} />\n          <DropdownMenuItem id={2} label="Blake Guilloud" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Blake Guilloud", type: "member"}} />\n          <DropdownMenuItem id={3} label="Craig Anthony" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Craig Anthony", type: "member"}} />\n          <DropdownMenuItem id={4} label="Ian Greulich" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ian Greulich", type: "member"}} />\n          <DropdownMenuItem id={5} label="Keaton Foster" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Keaton Foster", type: "member"}} />\n          <DropdownMenuItem id={6} label="Lauren Farr" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Lauren Farr", type: "member"}} />\n          <DropdownMenuItem id={7} label="Max Krause" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Max Krause", type: "member"}} />\n          <DropdownMenuItem id={8} label="Paul Drake" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Drake", type: "member"}} />\n          <DropdownMenuItem id={9} label="Paul Griffin" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Griffin", type: "member"}} />\n          <DropdownMenuItem id={10} label="Rob Whelan" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Rob Whelan", type: "member"}} />\n          <DropdownMenuItem id={11} label="Terry Kennair" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Terry Kennair", type: "member"}} />\n        </DropdownFilter>\n      </Dropdown>\n      <Dropdown wide label="Dropdown Select with Filter & Icon" type="outline-primary">\n        <DropdownFilter placeholder="Filter Icon">\n          <DropdownMenuItem id={1} label="Item One" icon="cog" />\n          <DropdownMenuItem id={2} label="Item Two" icon="warning" />\n          <DropdownMenuItem id={3} label="Item Three" icon="pencil" />\n          <DropdownMenuItem id={4} label="Item Four" icon="search" />\n        </DropdownFilter>\n      </Dropdown>\n      <Dropdown label="Search to add a contact" block type="link" className="u-p-l-0" hideCaret icon="add">\n        <DropdownFilter placeholder="Search contacts">\n          <DropdownMenuItemWild toggleDropdown>\n            <Button type="link" className="u-flex u-p-l-0"><Icon icon="add" />&nbsp;Create new contact</Button>\n          </DropdownMenuItemWild>\n          <DropdownMenuItem id={1} label="Ben Bruning With Really Long Name" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ben Bruning", type: "member"}} />\n          <DropdownMenuItem id={2} label="Blake Guilloud" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Blake Guilloud", type: "member"}} />\n          <DropdownMenuItem id={3} label="Craig Anthony" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Craig Anthony", type: "member"}} />\n          <DropdownMenuItem id={4} label="Ian Greulich" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ian Greulich", type: "member"}} />\n          <DropdownMenuItem id={5} label="Keaton Foster" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Keaton Foster", type: "member"}} />\n          <DropdownMenuItem id={6} label="Lauren Farr" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Lauren Farr", type: "member"}} />\n          <DropdownMenuItem id={7} label="Max Krause" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Max Krause", type: "member"}} />\n          <DropdownMenuItem id={8} label="Paul Drake" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Drake", type: "member"}} />\n          <DropdownMenuItem id={9} label="Paul Griffin" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Griffin", type: "member"}} />\n          <DropdownMenuItem id={10} label="Rob Whelan" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Rob Whelan", type: "member"}} />\n          <DropdownMenuItem id={11} label="Terry Kennair" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Terry Kennair", type: "member"}} />\n        </DropdownFilter>\n      </Dropdown>\n      <Dropdown label="Dropdown with Wild Content" wide>\n        <DropdownMenuItemWild>\n          <p>DropdownMenuItemWild with a paragraph and image.</p>\n          <img className="u-img-fluid" src="//source.unsplash.com/category/people/200x200"/>\n        </DropdownMenuItemWild>\n        <DropdownMenuItemWild toggleDropdown>\n          <p>DropdownMenuItemWild with a paragraph and button. Clicking this will toggle the dropdown menu to close.</p>\n          <Button block type="outline-primary" size="small" onClick={() => alert(\'clicked!\')}>Button Up In Here</Button>\n        </DropdownMenuItemWild>\n      </Dropdown>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},617:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <DropdownMenuHeader label="Dropdown Menu Header" />\n      <DropdownMenuHeader label="Dropdown Menu Header" className="u-text-primary" />\n      <DropdownMenuHeader label="Dropdown Menu Header" className="u-text-danger" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},618:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <DropdownMenuItem label="Custom click Item" onClick={() => alert(\'clicked!\')} />\n      <DropdownMenuItem label="Url Blank Window Item" url={\'http://www.rhinogram.com\'} blankWindow />\n      <DropdownMenuItem label="Url Item" url={\'http://www.rhinogram.com\'} />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Active Item" active />\n      <DropdownMenuItem label="Disabled Item" disabled />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Ian Avatar" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ian Greulich", type: "member"}} />\n      <DropdownMenuItem label="Paul Avatar" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Drake", type: "member"}} />\n      <DropdownMenuItem label="Rob Avatar" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Rob Whelan", type: "member"}} />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Ian Avatar" labelDesc="Programming Master" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ian Greulich", type: "member"}} />\n      <DropdownMenuItem label="Paul Avatar" labelDesc="Designer Extraordinaire" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Drake", type: "member"}} />\n      <DropdownMenuItem label="Ben Avatar" labelDesc="The Grinder" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ben Bruning", type: "member"}} />\n      <DropdownMenuDivider />\n      <DropdownMenuItem icon="sms" label="Icon Item" />\n      <DropdownMenuItem icon="email" label="Icon Item" />\n      <DropdownMenuItem icon="lock" label="Icon Item" />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Dropdown Menu Item One" labelDesc="Label description for for dropdown menu item." />\n      <DropdownMenuItem label="Dropdown Menu Item Two" labelDesc="Label description for for dropdown menu item." />\n      <DropdownMenuItem label="Dropdown Menu Item Three" labelDesc="Label description for for dropdown menu item." active />\n      <DropdownMenuItem label="Dropdown Menu Item Four" labelDesc="Label description for for dropdown menu item." />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Dropdown Menu Item One" labelDesc="Label description for for dropdown menu item." labelIcon="sms" />\n      <DropdownMenuItem label="Dropdown Menu Item Two" labelDesc="Label description for for dropdown menu item." labelIcon="logo-twitter" />\n      <DropdownMenuItem label="Dropdown Menu Item Three" labelDesc="Label description for for dropdown menu item." labelIcon="logo-circle-facebook" active />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},619:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <p>This component allows you to add anything you want to a dropdown. Use the <code>toggleDropdown</code> property if you want the dropdown to close after DropdownMenuItemWild is clicked.</p>\n      <DropdownMenuItemWild>Put whatever you want in here!</DropdownMenuItemWild>\n      <DropdownMenuItemWild><img className="u-img-fluid" src="//source.unsplash.com/category/people/200x200"/></DropdownMenuItemWild>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},620:function(e,n){e.exports='class ComponentExample extends React.Component {\n  optionalCallbackFunction = (action, index, keys) => {\n    console.log(\'Run optional callback function\', action, index, keys);\n  };\n\n  render() {\n    return (\n    <div>\n      <DropdownMultiSelect block placeholder="Select these people..." type="primary" onSelect={this.optionalCallbackFunction}>\n        <DropdownMenuItem id={1} label="Ben Bruning With Really Long Name" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ben Bruning", type: "member"}} />\n        <DropdownMenuItem id={2} label="Blake Guilloud" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Blake Guilloud", type: "member"}} />\n        <DropdownMenuItem id={3} label="Craig Anthony" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Craig Anthony", type: "member"}} />\n        <DropdownMenuItem id={4} label="Ian Greulich" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Ian Greulich", type: "member"}} />\n        <DropdownMenuItem id={5} label="Keaton Foster" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Keaton Foster", type: "member"}} />\n        <DropdownMenuItem id={6} label="Lauren Farr" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Lauren Farr", type: "member"}} />\n        <DropdownMenuItem id={7} label="Max Krause" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Max Krause", type: "member"}} />\n        <DropdownMenuItem id={8} label="Paul Drake" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Drake", type: "member"}} />\n        <DropdownMenuItem id={9} label="Paul Griffin" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Paul Griffin", type: "member"}} />\n        <DropdownMenuItem id={10} label="Rob Whelan" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Rob Whelan", type: "member"}} />\n        <DropdownMenuItem id={11} label="Terry Kennair" avatar={{image: "//source.unsplash.com/category/people/200x200", name: "Terry Kennair", type: "member"}} />\n        <DropdownMenuItem id={12} icon="sms" label="Icon Item" />\n        <DropdownMenuItem id={13} icon="email" label="Icon Item" />\n        <DropdownMenuItem id={14} icon="lock" label="Icon Item" />\n      </DropdownMultiSelect>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});