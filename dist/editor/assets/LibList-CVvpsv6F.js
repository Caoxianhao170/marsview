import{a as v,u as C,j as t,P as I,m as P}from"./index-CSGxKpEX.js";import{g as k}from"./lib-DsIng7Bf.js";import{s as e}from"./index.module-DFRKY25f.js";import{C as z}from"./CodeOutlined-BXSJ_ia_.js";import{U}from"./UserOutlined-DhlEoHIV.js";const d=window.antd.Button,b=window.antd.Input,E=window.antd.Skeleton,R=window.antd.Space,B=window.antd.Pagination,O=window.React.useEffect,a=window.React.useState,D=()=>{const[u,p]=a([]),[h,n]=a(!1),[g,r]=a(1),[m,T]=a(10),[f,x]=a(0),{userInfo:w,isUpdateList:j}=v(s=>({userInfo:s.userInfo,isUpdateList:s.isUpdateList})),S=C();O(()=>{i(1,"")},[j]);const i=async(s,o)=>{try{n(!0);const{list:l,total:N}=await k({pageNum:s,pageSize:m,keyword:o});p(l),x(N),n(!1)}catch{n(!1)}},y=s=>{r(1),i(1,s)},L=s=>{r(s),i(s)},c=(s,o)=>{s==="edit"?S(`/lib/${o}`):P.info("暂未开放")};return t.jsxs("div",{className:e.libWrap,children:[t.jsx("div",{className:e.search,children:t.jsx(b.Search,{placeholder:"输入组件名称或标识",allowClear:!0,enterButton:"Search",style:{width:500},size:"large",onSearch:y})}),t.jsx(E,{loading:h,active:!0,paragraph:{rows:3},children:u.map(s=>t.jsxs("div",{className:e.item,children:[t.jsxs("div",{className:e.itemInfo,children:[t.jsx("h2",{children:s.name}),t.jsx("p",{className:e.remark,children:s.description}),t.jsxs("p",{children:[t.jsx(U,{style:{fontSize:14,marginRight:5}}),s.sso_name," ",s.created_at]})]}),t.jsx(R,{children:w.userId===s.user_id?t.jsx(d,{type:"primary",icon:t.jsx(z,{}),onClick:()=>c("edit",s.id),children:"开发"}):t.jsx(d,{type:"primary",icon:t.jsx(I,{}),onClick:()=>c("install",s.id),children:"安装"})})]},s.id))}),t.jsx(B,{style:{textAlign:"right",marginTop:16},total:f,current:g,pageSize:12,showTotal:s=>`总共 ${s} 条`,onChange:L})]})};export{D as default};
