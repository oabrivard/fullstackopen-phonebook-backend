(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(20),t(4)),l=t(2),i=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},d=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handlePersonChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"delete"))},m=function(e){var n=e.persons,t=e.newFilter,a=e.deletePerson;return r.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(s,{key:e.id,person:e,deletePerson:function(){return a(e.id)}})})))},f=t(3),h=t.n(f),v="/api/persons",b=function(){return h.a.get(v).then((function(e){return e.data}))},p=function(e){return h.a.post(v,e).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(v,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return h.a.delete("".concat(v,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.notification;return null===n?null:r.a.createElement("div",{className:"notification ".concat(n.type)},n.message)},C=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)([]),s=Object(l.a)(u,2),f=s[0],h=s[1],v=Object(a.useState)(""),C=Object(l.a)(v,2),j=C[0],O=C[1],y=Object(a.useState)(""),P=Object(l.a)(y,2),k=P[0],N=P[1],S=Object(a.useState)(null),F=Object(l.a)(S,2),L=F[0],T=F[1];Object(a.useEffect)((function(){b().then((function(e){h(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{notification:L}),r.a.createElement(i,{newFilter:t,handleFilterChange:function(e){o(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(d,{addPerson:function(e){e.preventDefault();var n=f.find((function(e){return e.name.toLowerCase()===j.toLowerCase()}));if(n){if(!window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?")))return;var t=Object(c.a)(Object(c.a)({},n),{},{number:k});E(n.id,t).then((function(e){h(f.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){var t,a,r,o=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.error)||"an error occured on the server";T({type:"error",message:o}),setTimeout((function(){T(null)}),5e3),404===(null===e||void 0===e||null===(r=e.response)||void 0===r?void 0:r.status)&&h(f.filter((function(e){return e.id!==n.id})))}))}else{p({name:j,number:k}).then((function(e){T({type:"success",message:"Added '".concat(e.name,"'")}),setTimeout((function(){T(null)}),5e3),h(f.concat(e))}))}O(""),N("")},newName:j,handlePersonChange:function(e){O(e.target.value)},newNumber:k,handleNumberChange:function(e){N(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{persons:f,newFilter:t,deletePerson:function(e){var n=f.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&w(e).then((function(n){console.log(n),h(f.filter((function(n){return n.id!==e})))})).catch((function(t){T({type:"error",message:"the person '".concat(n.name,"' was already deleted from server")}),setTimeout((function(){T(null)}),5e3),h(f.filter((function(n){return n.id!==e})))}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b4b037dc.chunk.js.map