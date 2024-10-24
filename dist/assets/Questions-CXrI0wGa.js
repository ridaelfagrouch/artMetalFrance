import{R as a,j as e,k as o}from"./vendor-E4lFJGVr.js";const l=a.memo(({question:s,isActive:t,onClick:r})=>e.jsxs("div",{className:"accordion-item",children:[e.jsxs("button",{className:`accordion-button ${t?"active":""}`,onClick:r,children:[e.jsx("span",{className:"accordion-title",children:s.title}),e.jsx("span",{className:`accordion-icon ${t?"open":""}`,children:"▼"})]}),e.jsx("div",{className:`accordion-content ${t?"show":""}`,style:{height:t?"auto":"0"},children:e.jsx("p",{children:s.content})})]})),u=({questions:s})=>{const[t,r]=o.useState(0),c=o.useCallback(n=>{r(i=>i===n?-1:n)},[]);return e.jsx("div",{className:"question-accordion",children:s.map((n,i)=>e.jsx(l,{question:n,isActive:t===i,onClick:()=>c(i)},n.title))})},d=a.memo(u),p=()=>{const s=[{title:"Quelle est l'expertise de Art Metal France en serrurerie générale ?",content:"Art Metal France offre une vaste gamme de services en serrurerie générale, incluant l'installation, la réparation et la maintenance de serrures, portes blindées, et systèmes de sécurité pour résidences et commerces."},{title:"Comment Art Metal France personnalisent-ils les projets de métallerie et ferronnerie ?",content:"Nous réalisons des créations sur mesure en métallerie et ferronnerie, en adaptant nos designs et matériaux pour répondre aux besoins spécifiques de chaque client, qu'il s'agisse de portails, de balustrades ou de décorations."},{title:"Quels systèmes de motorisation et contrôle d'accès Art Metal France propose-t-il ?",content:"Nous proposons des solutions avancées en motorisation de portails, portes de garage et systèmes de contrôle d'accès, alliant technologie de pointe et facilité d'utilisation pour une sécurité optimale."},{title:"Quels matériaux sont utilisés pour les menuiseries extérieures RGE de Art Metal France ?",content:"Nous privilégions des matériaux durables et certifiés RGE pour nos menuiseries extérieures, tels que le bois, l'aluminium et le PVC, garantissant une isolation thermique et phonique de qualité."},{title:"Quels sont les avantages des menuiseries extérieures RGE proposées par Art Metal France ?",content:"Nos menuiseries extérieures RGE offrent une éco-efficacité optimale, permettant des économies d'énergie significatives, une qualité certifiée et une innovation durable pour un confort et une durabilité accrus."}];return e.jsx("section",{className:"questions-section bg-gray-100",children:e.jsxs("div",{className:"questions-wrapper",children:[e.jsxs("div",{className:"container-Title",children:[e.jsx("h2",{children:"Questions"}),e.jsx("div",{className:"enderline"})]}),e.jsx("div",{className:"questionsBody",children:e.jsx(d,{questions:s})})]})})};export{p as default};
