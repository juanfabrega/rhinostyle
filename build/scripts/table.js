webpackJsonp([10],{0:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=l(3),d=a(n),u=l(12),r=a(u),c=l(10),m=l(15),f=a(m),E=l(663),s={bordered:"[Optional] - Create bordered table",className:"[Optional] - Include additional class name(s)",condensed:"[Optional] - Create condensed table",hover:"[Optional] - Create hover table",striped:"[Optional] - Create striped table"},o={React:d.default,ReactDOM:r.default,Button:c.Button,Table:c.Table},i=function(){return d.default.createElement("div",null,d.default.createElement("h1",{className:"site-headline"},"Tables"),d.default.createElement("section",{className:"site-section"},d.default.createElement("h3",{className:"site-subheadline"},"Table Types"),d.default.createElement("div",{className:"site-example-tables"},d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("p",{className:"site-copy"},"Our basic table. Does not require any additional properties.")),d.default.createElement(c.Table,null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"#"),d.default.createElement("th",null,"First Name"),d.default.createElement("th",null,"Last Name"),d.default.createElement("th",null,"Username"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",null,d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")))))),d.default.createElement("section",{className:"site-section"},d.default.createElement("h3",{className:"site-subheadline"},"Table Modifiers"),d.default.createElement("div",{className:"site-example-tables"},d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("h5",{className:"site-miniheadline"},"Bordered Table"),d.default.createElement("p",{className:"site-copy"},"Add ",d.default.createElement("code",null,"bordered")," property to create a bordered table.")),d.default.createElement(c.Table,{bordered:!0},d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"#"),d.default.createElement("th",null,"First Name"),d.default.createElement("th",null,"Last Name"),d.default.createElement("th",null,"Username"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",null,d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")))),d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("h5",{className:"site-miniheadline"},"Condensed Table"),d.default.createElement("p",{className:"site-copy"},"Add ",d.default.createElement("code",null,"condensed")," property to create a table with condensed spacing.")),d.default.createElement(c.Table,{condensed:!0},d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"#"),d.default.createElement("th",null,"First Name"),d.default.createElement("th",null,"Last Name"),d.default.createElement("th",null,"Username"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",null,d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")))),d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("h5",{className:"site-miniheadline"},"Hover Table"),d.default.createElement("p",{className:"site-copy"},"Add ",d.default.createElement("code",null,"hover")," property to create a table with hover state.")),d.default.createElement(c.Table,{hover:!0},d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"#"),d.default.createElement("th",null,"First Name"),d.default.createElement("th",null,"Last Name"),d.default.createElement("th",null,"Username"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",null,d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")))),d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("h5",{className:"site-miniheadline"},"Striped Table"),d.default.createElement("p",{className:"site-copy"},"Add ",d.default.createElement("code",null,"striped")," property to create a striped table.")),d.default.createElement(c.Table,{striped:!0},d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null,"#"),d.default.createElement("th",null,"First Name"),d.default.createElement("th",null,"Last Name"),d.default.createElement("th",null,"Username"))),d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",null,d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")))))),d.default.createElement("section",{className:"site-section"},d.default.createElement("h3",{className:"site-subheadline"},"Table Row & Table Data Modifiers"),d.default.createElement("div",{className:"site-example-tables"},d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("h5",{className:"site-miniheadline"},"Table Data"),d.default.createElement("p",{className:"site-copy"},"To change the background color, add ",d.default.createElement("code",null,".table__data--active | .table__data--danger | .table__data--success | .table__data--warning")," className to the ",d.default.createElement("code",null,"<td>")," element.")),d.default.createElement(c.Table,null,d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",{className:"table__data--active"},"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",{className:"table__data--danger"},"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",null,d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",{className:"table__data--success"},"Foster"),d.default.createElement("td",null,"@foster")),d.default.createElement("tr",null,d.default.createElement("td",null,"4"),d.default.createElement("td",null,"Craig"),d.default.createElement("td",null,"Anthony"),d.default.createElement("td",{className:"table__data--warning"},"@anthony")),d.default.createElement("tr",null,d.default.createElement("td",null,"5"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")),d.default.createElement("tr",null,d.default.createElement("td",null,"6"),d.default.createElement("td",null,"Paul"),d.default.createElement("td",null,"Griffin"),d.default.createElement("td",null,"@griffin")),d.default.createElement("tr",null,d.default.createElement("td",null,"7"),d.default.createElement("td",null,"Terry"),d.default.createElement("td",null,"Kennair"),d.default.createElement("td",null,"@kennair")))),d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("h5",{className:"site-miniheadline"},"Table Row"),d.default.createElement("p",{className:"site-copy"},"To change the background color, add ",d.default.createElement("code",null,".table__row--active | .table__row--danger | .table__row--success | .table__row--warning")," className to the ",d.default.createElement("code",null,"<tr>")," element.")),d.default.createElement(c.Table,null,d.default.createElement("tbody",null,d.default.createElement("tr",{className:"table__row--active"},d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,"@bruning")),d.default.createElement("tr",null,d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,"@guilloud")),d.default.createElement("tr",{className:"table__row--danger"},d.default.createElement("td",null,"3"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")),d.default.createElement("tr",null,d.default.createElement("td",null,"4"),d.default.createElement("td",null,"Craig"),d.default.createElement("td",null,"Anthony"),d.default.createElement("td",null,"@anthony")),d.default.createElement("tr",{className:"table__row--success"},d.default.createElement("td",null,"5"),d.default.createElement("td",null,"Keaton"),d.default.createElement("td",null,"Foster"),d.default.createElement("td",null,"@foster")),d.default.createElement("tr",null,d.default.createElement("td",null,"6"),d.default.createElement("td",null,"Paul"),d.default.createElement("td",null,"Griffin"),d.default.createElement("td",null,"@griffin")),d.default.createElement("tr",{className:"table__row--warning"},d.default.createElement("td",null,"7"),d.default.createElement("td",null,"Terry"),d.default.createElement("td",null,"Kennair"),d.default.createElement("td",null,"@kennair")))),d.default.createElement("div",{className:"u-m-b-md"},d.default.createElement("p",{className:"site-copy"},"To change the vertical alignment add ",d.default.createElement("code",null,".table__row--valign-middle")," className to the ",d.default.createElement("code",null,"<tr>")," element. By default, table rows and data are vertically aligned to the top.")),d.default.createElement(c.Table,null,d.default.createElement("tbody",null,d.default.createElement("tr",{className:"table__row--valign-middle"},d.default.createElement("td",null,"1"),d.default.createElement("td",null,"Ben"),d.default.createElement("td",null,"Bruning"),d.default.createElement("td",null,d.default.createElement(c.Button,null,"Delete"))),d.default.createElement("tr",{className:"table__row--valign-middle"},d.default.createElement("td",null,"2"),d.default.createElement("td",null,"Blake"),d.default.createElement("td",null,"Guilloud"),d.default.createElement("td",null,d.default.createElement(c.Button,null,"Delete"))))))),d.default.createElement("section",null,d.default.createElement("h3",{className:"site-subheadline"},"Playground"),d.default.createElement(f.default,{docClass:c.Table,propDescriptionMap:s,codeText:E,scope:o,noRender:!1})))};r.default.render(d.default.createElement(i,null),document.getElementById("js-app"))},663:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-tables">\n        <Table bordered>\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1</td>\n              <td>Ben</td>\n              <td>Bruning</td>\n              <td>@bruning</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>Blake</td>\n              <td>Guilloud</td>\n              <td>@guilloud</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>Keaton</td>\n              <td>Foster</td>\n              <td>@foster</td>\n            </tr>\n          </tbody>\n        </Table>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});