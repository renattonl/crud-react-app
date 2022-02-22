var F=Object.defineProperty,S=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))w.call(t,s)&&y(e,s,t[s]);if(N)for(var s of N(t))A.call(t,s)&&y(e,s,t[s]);return e},u=(e,t)=>S(e,D(t));import{j as C,r as c,R as P,a as R}from"./vendor.a8b033c0.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}};j();const r=C.exports.jsx,d=C.exports.jsxs,v=C.exports.Fragment;function T(e){const t=()=>t,s=c.exports.createContext({state:e,update:t});function a(l){const[o,n]=c.exports.useState(e);return r(s.Provider,i({value:{state:o,update:n}},l))}return[s,a]}const $=e=>{const[t,s]=c.exports.useState(e);return{formData:t,setFormData:s,onChange:o=>{s(n=>u(i({},n),{[o.target.name]:o.target.value}))},resetForm:()=>s(i({},e))}},p=()=>{const e=(o,n)=>{var b;const m={accept:"application/json","Content-Type":"application/json"},g=new AbortController;return n.signal=g.signal,n.method=n.method||"GET",n.headers=n.headers?i(i({},m),n.headers):m,n.body=(b=JSON.stringify(n.body))!=null?b:!1,n.body||delete n.body,setTimeout(()=>g.abort(),1e4),fetch(o,n).then(h=>h.ok?h.json():{error:!0,status:h.status||500,message:h.statusText||"Hubo un problema"}).catch(h=>({error:!0,status:500,message:h.message}))};return{get:(o,n={})=>e(o,n),post:(o,n={})=>(n.method="POST",e(o,n)),put:(o,n={})=>(n.method="PUT",e(o,n)),delete:(o,n={})=>(n.method="DELETE",e(o,n))}},q=()=>{const[e,t]=c.exports.useState({loading:!1,res:null,error:null});return{handleSubmit:a=>{t({loading:!0,res:null,error:null});const l=a.id?p().put:p().post;let o="https://apiclientes.usatocix.store//clientes";return a.id&&(o=`https://apiclientes.usatocix.store//clientes/${a.id}`),l(o,{body:a}).then(n=>(n.error?t({loading:!1,res:null,error:n.error}):t({loading:!1,res:n,error:null}),t(m=>u(i({},m),{loading:!1})),n))},data:e}},O=()=>{const e={nombres:"",apellidos:"",fecha_nacimiento:""},{state:t}=c.exports.useContext(f),{formData:s,setFormData:a,onChange:l,resetForm:o}=$(e),{data:n,handleSubmit:m}=q(),{update:g}=c.exports.useContext(f),b=async x=>{x.preventDefault(),(await m(s)).id&&(g(E=>u(i({},E),{refreshClientes:Date.now()})),o())},h=t.formCliente;return c.exports.useEffect(()=>{a(x=>i(i({},x),h))},[h]),d("form",{onSubmit:b,className:"my-4",children:[d("div",{className:"field",children:[r("label",{className:"label",children:"Nombres"}),r("div",{className:"control",children:r("input",{className:"input",type:"text",placeholder:"Nombres",name:"nombres",value:s.nombres,onChange:l,required:!0})})]}),d("div",{className:"field",children:[r("label",{className:"label",children:"Apellidos"}),r("div",{className:"control",children:r("input",{className:"input",type:"text",placeholder:"Apellidos",name:"apellidos",value:s.apellidos,onChange:l,required:!0})})]}),d("div",{className:"field",children:[r("label",{className:"label",children:"Fecha Nacimiento"}),r("div",{className:"control",children:r("input",{className:"input",type:"date",placeholder:"Seleccione una fecha",name:"fecha_nacimiento",value:s.fecha_nacimiento,onChange:l,required:!0})})]}),d("div",{className:"field is-grouped",children:[r("div",{className:"control",children:r("button",{className:"button is-link",type:"submit",disabled:n.loading,children:n.loading?"Enviando..":"Enviar"})}),r("div",{className:"control",children:r("button",{className:"button is-link is-light",type:"button",onClick:o,children:"Cancelar"})})]})]})},k=()=>{const{state:e}=c.exports.useContext(f),[t,s]=c.exports.useState({loading:!1,promedio:0,error:null}),a=async()=>{s(l=>u(i({},l),{loading:!0})),p().get("https://apiclientes.usatocix.store//clientes/promedio/edades").then(l=>{var o;console.log(l),l.error?s({loading:!1,promedio:0,error:l}):s({loading:!1,promedio:(o=l.promedio)!=null?o:0,error:null})}),s(l=>u(i({},l),{loading:!1}))};return c.exports.useEffect(()=>{a()},[e.refreshClientes]),u(i({},t),{fetchRequest:a})},H=()=>{const{promedio:e,loading:t,error:s}=k();return d(v,{children:[!t&&!s&&d("h1",{className:"has-text-centered is-size-4",children:["Promedio de Edad: ",e.toFixed(2)]}),!t&&s&&r("span",{children:"Hubo un problema al cargar el promedio"})]})},L=()=>{const[e,t]=c.exports.useState({loading:!1,rows:[],error:null}),s=async()=>{t(a=>u(i({},a),{loading:!0})),p().get("https://apiclientes.usatocix.store//clientes").then(a=>{a.error?t({loading:!1,rows:[],error:a}):t({loading:!1,rows:a!=null?a:[],error:null})}),t(a=>u(i({},a),{loading:!1}))};return u(i({},e),{fetchRequest:s})},_=()=>{const[e,t]=c.exports.useState({loading:!1,res:null,error:null});return{handleDelete:a=>(t({loading:!0,res:null,error:null}),p().delete(`https://apiclientes.usatocix.store//clientes/${a}`).then(l=>(l.error?t({loading:!1,res:null,error:l.error}):t({loading:!1,res:l,error:null}),t(o=>u(i({},o),{loading:!1})),l))),data:e}},M=({cliente:e})=>{const{data:t,handleDelete:s}=_(),{update:a}=c.exports.useContext(f);return d(v,{children:[r("button",{className:"button mr-3 is-warning is-small",title:"Editar",onClick:()=>{a(n=>u(i({},n),{formCliente:i({},e)}))},children:"Editar"}),r("button",{className:"button is-danger is-small",title:"Eliminar",onClick:async()=>{confirm(`Realmente desea eliminar al cliente: ${e.nombres}`)&&((await s(e.id)).error?alert("Hubo un problema al eliminar el cliente"):a(m=>u(i({},m),{refreshClientes:Date.now()})))},disabled:t.loading,children:t.loading?"Eliminando...":"Eliminar"})]})},z=({cliente:e})=>d("tr",{children:[r("td",{children:e.id}),d("td",{children:[e.nombres," ",e.apellidos]}),r("td",{children:e.fecha_nacimiento}),r("td",{children:e.edad}),r("td",{children:e.createdAt}),r("td",{children:e.updatedAt}),r("td",{children:r(M,{cliente:e})})]}),I=()=>{const{loading:e,rows:t,error:s,fetchRequest:a}=L(),{state:l}=c.exports.useContext(f),o=l.refreshClientes;return c.exports.useEffect(()=>{a()},[o]),r("div",{className:"table-container my-4",children:d("table",{className:"table is-bordered is-fullwidth",children:[r("thead",{children:d("tr",{children:[r("th",{children:"N"}),r("th",{children:"Cliente"}),r("th",{children:"Fecha Nacimiento"}),r("th",{children:"Edad"}),r("th",{children:"Creado"}),r("th",{children:"Actualizado"}),r("th",{children:"Acciones"})]})}),d("tbody",{children:[e&&r("tr",{children:r("td",{colSpan:10,className:"p-5 has-text-centered",children:"Cargando datos..."})}),!e&&s&&r("tr",{children:r("td",{colSpan:10,className:"p-5 has-text-centered",children:"Hubo un problema al cargar los datos"})}),!e&&!s&&!t.length&&r("tr",{children:r("td",{colSpan:10,className:"p-5 has-text-centered",children:"No hay clientes registrados"})}),!e&&t.map(n=>r(z,{cliente:n},n.id))]})]})})};const[B,U]=T({refreshClientes:0,formCliente:{}}),f=B;function G(){return r(U,{children:d("div",{className:"container",children:[r("h1",{className:"is-size-3",children:"App Clientes"}),r(O,{}),r(H,{}),r(I,{})]})})}P.render(r(R.StrictMode,{children:r(G,{})}),document.getElementById("root"));