(this.webpackJsonpadministrador_de_pacientes=this.webpackJsonpadministrador_de_pacientes||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=a(2),m=a(8),i=a(5),s=a(3),u=function(e){var t=e.setCitas,a={nombre:"","due\xf1o":"",fecha:"",hora:"",sintomas:"",id:""},r=Object(n.useState)(!1),c=Object(o.a)(r,2),u=c[0],p=c[1],E=Object(n.useState)(a),d=Object(o.a)(E,2),h=d[0],f=d[1],b=h.nombre,g=h.due\u00f1o,v=h.fecha,O=h.hora,j=h.sintomas,y=[b,g,v,O,j],C=function(e){var t=e.target;f(Object(s.a)(Object(s.a)({},h),{},Object(i.a)({},t.name,t.value)))};return l.a.createElement("div",{className:"crear-cita"},l.a.createElement("h2",null,"crear cita"),u&&l.a.createElement("div",{className:"warning"},l.a.createElement("p",null,"todos los campos son obligatorios")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=y.some((function(e){return e.length<=1}));console.log(n),!0===n?p(!0):(p(!1),t((function(e){return[].concat(Object(m.a)(e),[Object(s.a)(Object(s.a)({},h),{},{id:(new Date).getTime()})])})),f(a))}},l.a.createElement("p",null,"nombre mascota"),l.a.createElement("input",{type:"text",placeholder:"Argos",name:"nombre",value:b,onChange:C}),l.a.createElement("p",null,"nombre due\xf1o"),l.a.createElement("input",{type:"text",placeholder:"Manuel",name:"due\xf1o",value:g,onChange:C}),l.a.createElement("p",null,"fecha"),l.a.createElement("input",{type:"date",name:"fecha",value:v,onChange:C}),l.a.createElement("p",null,"hora"),l.a.createElement("input",{type:"time",name:"hora",value:O,onChange:C}),l.a.createElement("p",null,"s\xedntomas"),l.a.createElement("input",{type:"text",placeholder:"diarrea, vomito...",name:"sintomas",value:j,onChange:C}),l.a.createElement("button",{type:"submit"}," agregar cita ")))},p=function(e){var t=e.citas,a=e.setCitas;return l.a.createElement("div",{className:"mostrar-cita"},l.a.createElement("h2",null,"citas"),0===t.length?l.a.createElement("p",null,"no hay citas"):t.map((function(e){var n=e.nombre,r=e.due\u00f1o,c=e.fecha,o=e.hora,m=e.sintomas,i=e.id;return l.a.createElement("div",{className:"cita",key:i},l.a.createElement("p",null,l.a.createElement("span",null,"mascota: "),n),l.a.createElement("p",null,l.a.createElement("span",null,"due\xf1o: "),r),l.a.createElement("p",null,l.a.createElement("span",null,"fecha: "),c),l.a.createElement("p",null,l.a.createElement("span",null,"hora: "),o),l.a.createElement("p",null,l.a.createElement("span",null,"sintomas: "),m),l.a.createElement("button",{onClick:function(){return function(e){a(t.filter((function(t){return t.id!==e})))}(i)}},"eliminar"))})))},E=function(){var e=JSON.parse(localStorage.getItem("citas"))||[],t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("citas",JSON.stringify(r))}),[r]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"administrador de pacientes"),l.a.createElement("div",{className:"administracion"},l.a.createElement(u,{setCitas:c}),l.a.createElement(p,{citas:r,setCitas:c})))};a(14);c.a.render(l.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d6d3c438.chunk.js.map