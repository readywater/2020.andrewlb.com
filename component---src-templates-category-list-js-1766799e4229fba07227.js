(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{"8mYU":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("p3AD"),i=a("9eSz"),c=a.n(i),s=a("yZlL");var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.node;return n.a.createElement("article",{key:e.fields.slug,style:{marginBottom:Object(o.a)(2)}},n.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignContent:"bottom"}},n.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(o.a)(.25)}},n.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/"+e.frontmatter.category+e.fields.slug},e.frontmatter.title)),n.a.createElement("div",null,n.a.createElement("small",null,e.frontmatter.date))),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:Object(o.a)(.25)}},n.a.createElement("div",null,n.a.createElement("small",null,"Posted in"," ",e.frontmatter.category.charAt(0).toUpperCase()+e.frontmatter.category.slice(1))," ",n.a.createElement("small",null,e.frontmatter.tags&&e.frontmatter.tags.length>0&&"with tags "+e.frontmatter.tags.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(", "))),n.a.createElement(s.Minutes,null,n.a.createElement("div",{className:"sizer"},n.a.createElement("small",null,100*Math.floor(e.fields.readingTime.words/100)," words")),n.a.createElement("div",{className:"min"},n.a.createElement("small",null,Math.floor(.8*e.fields.readingTime.minutes)," min")),n.a.createElement("div",{className:"word"},n.a.createElement("small",null,100*Math.floor(e.fields.readingTime.words/100)," words")))),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},n.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/"+e.frontmatter.category+e.fields.slug},n.a.createElement(c.a,{fluid:e.frontmatter.image.childImageSharp.fluid,alt:e.frontmatter.title,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,maxWidth:300}})),n.a.createElement("section",null,n.a.createElement(l.Link,{style:{boxShadow:"none",color:"#000"},to:"/"+e.frontmatter.category+e.fields.slug},n.a.createElement("p",{style:{marginBottom:Object(o.a)(.25)},dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}})))))},r}(n.a.Component)},GJEG:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=(a("Wbzz"),a("6Gk8")),o=a("Bl7J"),i=a("vrFN"),c=(a("cGrN"),a("p3AD"),a("9eSz"),a("yZlL"),a("Bi3C")),s=a.n(c),m=a("RXBc"),d=a("8mYU");var p=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=this.props.pageContext.category,a=e.allMarkdownRemark,r=e.site.siteMetadata.title||null;return n.a.createElement(o.a,{location:this.props.location,title:r},n.a.createElement(i.a,{title:r}),n.a.createElement(m.RespNav,null,n.a.createElement("li",null,n.a.createElement(s.a,{offset:"100",href:"#newsletter"},"Newsletter")),n.a.createElement("li",null,n.a.createElement(s.a,{offset:"100",href:"#background"},"About")),n.a.createElement("li",null,n.a.createElement(s.a,{offset:"100",href:"#posts"},"Posts"))),n.a.createElement("div",{className:"right",id:"posts"},n.a.createElement("h1",null,t.charAt(0).toUpperCase()+t.slice(1)," Articles"),n.a.createElement("ul",null,a.edges.map((function(e){var t=e.node;return n.a.createElement(d.a,{node:t})}))),n.a.createElement("hr",null),n.a.createElement("div",{id:"background"},n.a.createElement(l.a,null))))},r}(n.a.Component),u="3925735709";t.default=p},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"RespLayout",(function(){return E})),a.d(t,"RespNav",(function(){return h})),a.d(t,"pageQuery",(function(){return y}));var r=a("q1tI"),n=a.n(r),l=(a("Wbzz"),a("vOnD")),o=a("KoAb"),i=a("Bl7J"),c=a("vrFN"),s=a("cGrN"),m=a("p3AD"),d=(a("9eSz"),a("yZlL")),p=a("Bi3C"),u=a.n(p),f=a("8mYU");var E=l.default.div.withConfig({displayName:"pages__RespLayout",componentId:"sc-1b9c9rg-0"})(["display:flex;flex-wrap:wrap;flex-direction:row-reverse column-reverse;.left{width:40%;@media (max-width:700px){width:100%;}}.right{width:55%;@media (max-width:700px){width:100%;}}"]),h=Object(l.default)(d.Nav).withConfig({displayName:"pages__RespNav",componentId:"sc-1b9c9rg-1"})(["@media (min-width:700px){display:none;}"]),g=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return n.a.createElement(i.a,{location:this.props.location,title:t},n.a.createElement(c.a,{title:t}),n.a.createElement(h,null,n.a.createElement("li",null,n.a.createElement(u.a,{offset:"100",href:"#newsletter"},"Newsletter")),n.a.createElement("li",null,n.a.createElement(u.a,{offset:"100",href:"#background"},"About")),n.a.createElement("li",null,n.a.createElement(u.a,{offset:"100",href:"#posts"},"Posts"))),n.a.createElement(E,null,n.a.createElement("div",{className:"left",style:{marginRight:Object(m.a)(1)}},n.a.createElement("div",{id:"newsletter"},n.a.createElement(s.a,null)),n.a.createElement("hr",null),n.a.createElement("div",{id:"background"},n.a.createElement(o.b,null))),n.a.createElement("div",{className:"right",id:"posts"},a.map((function(e){var t=e.node;t.frontmatter.title||t.fields.slug;return n.a.createElement(f.a,{node:t})})))))},r}(n.a.Component);t.default=g;var y="3509000853"}}]);
//# sourceMappingURL=component---src-templates-category-list-js-1766799e4229fba07227.js.map