"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[419],{20419:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7552),r=a(49823),o=a(90542),s=a(99546),l=a(29499),i=a(9937),c=a(99123),d=a(36715),h=a(1343),m=a(58507),w=a(5401),u=a(31409),p=a.n(u),f=a(68446),k=a(36422),b=a(75785),y=a(32984);const g=(0,b.n9)()((()=>({flexItem:{margin:5},content:{display:"flex",flexFlow:"column",gap:"5px"}}))),E=(0,f.observer)((function({onClose:e,model:t}){const{classes:a}=g(),[u,f]=(0,n.useState)(""),[b,E]=(0,n.useState)(),[S,C]=(0,n.useState)(!0),U=(0,s.getSession)(t),{selectedBookmarks:A}=t,R=0===A.length,L=0===A.length?t.allBookmarksModel:t.sharedBookmarksModel;return(0,n.useEffect)((()=>{(async()=>{try{if(!(0,s.isSessionWithShareURL)(U))throw new Error("No shareURL configured");C(!0);const e=(0,k.getSnapshot)(L),t=new URL(window.location.href),a=await(0,y.J)(e,U.shareURL,t.href),n=new URLSearchParams(t.search);n.set("bookmarks",`share-${a.json.sessionId}`),n.set("password",a.password),t.search=n.toString(),f(t.href),C(!1)}catch(e){E(e)}finally{C(!1)}})()}),[L,U]),n.createElement(r.Dialog,{open:!0,onClose:e,title:"Share bookmarks"},n.createElement(l.A,{className:a.content},n.createElement(i.A,{severity:"info"},R?n.createElement(n.Fragment,null,n.createElement("span",null,"All bookmarks will be shared."),n.createElement("br",null),n.createElement("span",null,"Use the checkboxes to select individual bookmarks to share.")):"Only selected bookmarks will be shared."),n.createElement(c.A,null,"Copy the URL below to share your bookmarks."),b?n.createElement(r.ErrorMessage,{error:b}):S?n.createElement(d.A,null,"Generating short URL..."):n.createElement(h.A,{label:"URL",value:u,slotProps:{input:{readOnly:!0}},variant:"filled",fullWidth:!0,onClick:e=>{e.target.select()}}),n.createElement(c.A,null,'The URL should be pasted into the "Import from share link" field in the "Import" form found in the "Bookmarked regions" drawer.')),n.createElement(m.A,null,n.createElement(w.A,{className:a.flexItem,"data-testid":"dialogShare",variant:"contained",color:"primary",disabled:S,startIcon:n.createElement(o.PM,null),onClick:async()=>{p()(u),U.notify("Copied to clipboard","success"),e()}},"Copy share link")))}))},32984:(e,t,a)=>{a.d(t,{J:()=>l,Z:()=>i});var n=a(84495);const r=async(e,t)=>(await Promise.all([a.e(7753),a.e(9831),a.e(5156)]).then(a.t.bind(a,29831,23))).encrypt(e,t).toString(),o=async(e,t)=>{const n=await Promise.all([a.e(7753),a.e(9831),a.e(5156)]).then(a.t.bind(a,29831,23)),r=await Promise.all([a.e(7753),a.e(6235)]).then(a.t.bind(a,12598,23));return n.decrypt(e,t).toString(r)};function s(e){try{return JSON.parse(e).message}catch(t){return e}}async function l(e,t,a){const o=await(0,n.eW)(JSON.stringify(e)),l=window.btoa([...window.crypto.getRandomValues(new Uint8Array(10))].map((e=>String.fromCharCode(e))).join("")).replaceAll(/[+/]/g,"").slice(0,5);const i=await r(o,l),c=new FormData;c.append("session",i),c.append("dateShared",`${Date.now()}`),c.append("referer",a);const d=await fetch(`${t}share`,{method:"POST",mode:"cors",body:c});if(!d.ok){const e=await d.text();throw new Error(s(e))}return{json:await d.json(),encryptedSession:i,password:l}}async function i(e,t,a){const n=t.split("share-")[1],r=`${e}?sessionId=${encodeURIComponent(n)}`,l=await fetch(r);if(!l.ok)throw new Error(s(await l.text()));const i=await l.json();return o(i.session,a)}}}]);
//# sourceMappingURL=419.57dad782.chunk.js.map