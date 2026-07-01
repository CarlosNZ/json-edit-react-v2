import{r as l,j as a}from"./chakra-Dl1FrsFn.js";import{JsonEditor as u}from"./jsonEditReact-DGq_7zSG.js";import{u as k,N as f,k as x,H as S,Y as T,f as D,E as N,O as b,A as j,W as I,z as M,G as P,j as C,J as h,i as g}from"./index-vru3jBoH.js";import{S as E}from"./SearchBox-C87nOFG6.js";import"./vendor-DBypWwXm.js";import"./json-DWwgcHY5.js";import"./icons-CihU7ERl.js";const U={Intro:`# json-edit-react
  
  ## Custom Component library
  
  ### Components available:
  - Hyperlink
  - "Enhanced" link
  - DatePicker
  - DateObject
  - UNIX Timestamp
  - Undefined
  - Markdown
  - BigInt
  - BooleanToggle
  - NaN
  - Symbol
  - Image
  - ColorPicker

  Click [here](https://github.com/CarlosNZ/json-edit-react/blob/main/packages/components/README.md) for more info
  `,"Active Links":{Url:"https://carlosnz.github.io/json-edit-react/","Long URL":"https://www.google.com/maps/place/Sky+Tower/@-36.8465603,174.7609398,818m/data=!3m1!1e3!4m6!3m5!1s0x6d0d47f06d4bdc25:0x2d1b5c380ad9387!8m2!3d-36.848448!4d174.762191!16zL20vMDFuNXM2?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D","Enhanced Link":{text:"This link displays custom text — try editing me!",url:"https://github.com/CarlosNZ/json-edit-react/tree/main/packages/components"}},"Simple boolean toggle":!1,"Date & Time":{"Date Picker":new Date().toISOString(),"Date Object":new Date,"Show Time in Date?":!0,"Unix Timestamp (seconds)":Math.floor(Date.now()/1e3),"Unix Timestamp (ms)":Date.now(),"Show Unix as raw number?":!0},"Non-JSON types":{Undefined:void 0,"Not a Number":NaN,Symbol1:Symbol("First one"),Symbol2:Symbol("Second one"),BigInt:1234567890123456789012345678901234567890n},Markdown:"Uses [react-markdown](https://www.npmjs.com/package/react-markdown) to render **Markdown** *text content*. ",Images:{JPG:"https://film-grab.com/wp-content/uploads/2014/07/51.jpg",PNG:"https://github.com/CarlosNZ/json-edit-react/blob/main/image/logo192.png?raw=true",GIF:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnV0aHB0c2xiMHFmdGY3Z2NkenBkb3Rmd3hvdTlkaTlkNGYxOXFtOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9E7kUhnT9eDok/giphy.gif","Image properties":{maxWidth:200,maxHeight:100}},"Color Picker":"#ff69B4"},v=t=>{var o,n,i,m,r,c,p,d;const e=t;return[f({componentProps:{showTime:((o=e==null?void 0:e["Date & Time"])==null?void 0:o["Show Time in Date?"])??!1}}),x({componentProps:{showTime:((n=e==null?void 0:e["Date & Time"])==null?void 0:n["Show Time in Date?"])??!1,DatePicker:g}}),S({componentProps:{DatePicker:g,showTime:((i=e==null?void 0:e["Date & Time"])==null?void 0:i["Show Time in Date?"])??!1,displayAs:((m=e==null?void 0:e["Date & Time"])==null?void 0:m["Show Unix as raw number?"])??!0?"number":"date"}}),T({componentProps:{imageStyles:{maxHeight:(c=(r=e==null?void 0:e.Images)==null?void 0:r["Image properties"])==null?void 0:c.maxHeight,maxWidth:(d=(p=e==null?void 0:e.Images)==null?void 0:p["Image properties"])==null?void 0:d.maxWidth}}}),D(),N(),b(),j(),I(),M(),P(),C(),h({condition:({key:s})=>s==="Markdown"}),h({condition:({key:s})=>s==="Intro",showKey:!1,componentProps:{components:{a:({_:s,...w})=>a.jsx("a",{...w,target:"_blank",rel:"noopener noreferrer"})}}})]};function Z(){const[t,e]=l.useState(U),[o,n]=l.useState("");return a.jsxs("div",{style:{position:"relative"},children:[a.jsx(E,{value:o,onChange:n,placeholder:"Search"}),a.jsx(u,{data:t,setData:e,...k(),rootName:"components",collapse:3,customNodeDefinitions:v(t),searchText:o})]})}export{v as customNodeDefinitions,Z as default,U as initialData};
