(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),a=c(4),n=c(5),d=c(7),l=c(6),r=c(1),i=c.n(r),j=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.removeSelectedGood=function(){e.setState({selectedGood:""})},e.addSelectedGood=function(t){e.setState({selectedGood:t})},e}return Object(n.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[""===this.state.selectedGood?Object(j.jsx)("h1",{className:"title",children:"No goods selected"}):Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeSelectedGood})]}),Object(j.jsx)("table",{className:"table",children:b.map((function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("tbody",{children:e.state.selectedGood!==t?Object(j.jsxs)("tr",{"data-cy":"Good",children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.addSelectedGood(t)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t):Object(j.jsxs)("tr",{"data-cy":"Good",className:"has-background-success-light",children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.removeSelectedGood,children:"-"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)},t)})}))})]})}}]),c}(i.a.Component);o.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2a92a6eb.chunk.js.map