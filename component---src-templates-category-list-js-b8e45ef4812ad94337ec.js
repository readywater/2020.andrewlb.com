(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8mYU":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("vOnD"),i=a("p3AD"),m=a("9eSz"),c=a.n(m),s=a("yZlL");var d=o.default.article.withConfig({displayName:"postSummary__Article",componentId:"hbeb1f-0"})([".date{width:100%;}"]),p=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props.node;return n.a.createElement(d,{key:t.fields.slug,style:{marginBottom:Object(i.a)(2)}},n.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignContent:"bottom",flexWrap:"wrap"}},n.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(i.a)(.25)}},n.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/"+t.frontmatter.category+t.fields.slug},t.frontmatter.title)),n.a.createElement("div",{className:"date"},n.a.createElement("small",null,t.frontmatter.date),n.a.createElement(s.Minutes,null,n.a.createElement("div",{className:"sizer"},n.a.createElement("small",null,100*Math.floor(t.fields.readingTime.words/100)," words")),n.a.createElement("div",{className:"min"},n.a.createElement("small",null,Math.floor(.8*t.fields.readingTime.minutes)," min")),n.a.createElement("div",{className:"word"},n.a.createElement("small",null,100*Math.floor(t.fields.readingTime.words/100)," words"))))),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},n.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/"+t.frontmatter.category+t.fields.slug},n.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title,style:{marginRight:Object(i.a)(.5),marginBottom:0,minWidth:50,maxWidth:300}})),n.a.createElement("section",null,n.a.createElement(l.Link,{style:{boxShadow:"none",color:"#000"},to:"/"+t.frontmatter.category+t.fields.slug},n.a.createElement("p",{style:{marginBottom:Object(i.a)(.25)},dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))),n.a.createElement("div",{style:(e={display:"flex"},e.display="none",e.justifyContent="flex-end",e.marginTop=Object(i.a)(.25),e.marginBottom=Object(i.a)(.25),e)},n.a.createElement("div",null,n.a.createElement("small",null,t.frontmatter.category.charAt(0).toUpperCase()+t.frontmatter.category.slice(1))),n.a.createElement("div",null,n.a.createElement("small",null,t.frontmatter.tags&&t.frontmatter.tags.length>0&&"tags: "+t.frontmatter.tags.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(", ")))),n.a.createElement("hr",null))},r}(n.a.Component)},GJEG:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var r=a("q1tI"),n=a.n(r),l=(a("Wbzz"),a("6Gk8")),o=a("Bl7J"),i=a("vrFN"),m=a("8mYU");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=this.props.pageContext.category,a=e.allMarkdownRemark,r=e.site.siteMetadata.title||null;return n.a.createElement(o.a,{location:this.props.location,title:r},n.a.createElement(i.a,{title:r}),n.a.createElement("div",{className:"right",id:"posts"},n.a.createElement("h1",{style:{textAlign:"center"}},t.charAt(0).toUpperCase()+t.slice(1)," Articles"),n.a.createElement("ul",null,a.edges.map((function(e){var t=e.node;return n.a.createElement(m.a,{node:t})}))),n.a.createElement("hr",null),n.a.createElement("div",{id:"background"},n.a.createElement(l.a,null))))},r}(n.a.Component),s="328551812";t.default=c}}]);
//# sourceMappingURL=component---src-templates-category-list-js-b8e45ef4812ad94337ec.js.map