"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[880],{3798:function(e,t,n){n.d(t,{Z:function(){return _}});var i=n(6252);const a=e=>((0,i.dD)("data-v-326b083d"),e=e(),(0,i.Cn)(),e),d={class:"mdui-m-t-5",id:"footer"},o={class:"mdui-p-a-5 mdui-typo mdui-container"},l={class:"mdui-col mdui-text"},s=a((()=>(0,i._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),c={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,i.Uk)("青龙 Tools"),m=a((()=>(0,i._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1)));function u(e,t,n,a,u,g){const v=(0,i.up)("st");return(0,i.wg)(),(0,i.iD)("footer",d,[(0,i._)("div",o,[(0,i._)("div",l,[(0,i._)("p",null,[s,(0,i._)("a",c,[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[r])),_:1})])]),m])])])}var g={name:"FooterCom"},v=n(3744);const p=(0,v.Z)(g,[["render",u],["__scopeId","data-v-326b083d"]]);var _=p},5388:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(6252);const a={class:"mdui-toolbar"},d=(0,i._)("a",{href:"/#/",class:"mdui-btn mdui-btn-icon"},[(0,i._)("i",{class:"mdui-icon material-icons"},"account_balance_wallet")],-1),o=(0,i._)("span",{class:"mdui-typo-title"},"青龙Tools",-1),l=(0,i._)("div",{class:"mdui-toolbar-spacer"},null,-1),s=(0,i._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,i._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),c=(0,i._)("i",{class:"mdui-icon material-icons"},"center_focus_strong",-1),r=[c],m=(0,i._)("i",{class:"mdui-icon material-icons"},"center_focus_weak",-1),u=[m],g=(0,i._)("i",{class:"mdui-icon material-icons"},"account_circle",-1),v=[g],p=(0,i._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),_=[p];function y(e,t,n,c,m,g){return(0,i.wg)(),(0,i.iD)("div",a,[d,o,l,s,(0,i._)("a",{"mdui-tooltip":"{content: '登录'}",onClick:t[0]||(t[0]=e=>this.Login()),id:"Login",class:"mdui-btn mdui-btn-icon"},r),(0,i._)("a",{"mdui-tooltip":"{content: '注册'}",onClick:t[1]||(t[1]=e=>this.Register()),id:"Register",class:"mdui-btn mdui-btn-icon"},u),(0,i._)("a",{"mdui-tooltip":"{content: '管理面板'}",onClick:t[2]||(t[2]=e=>this.GoAdmin()),id:"Admin",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},v),(0,i._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:t[3]||(t[3]=e=>this.LogOut()),id:"LogOut",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},_)])}var h=n(9669),x=n.n(h),I={name:"HeaderCom",methods:{CheckLogin(){let e=localStorage.getItem("Bearer");if(null!==e&&""!==e){let t={token:e};x().post("/v1/api/check/token",t).then((e=>{!0===e.data.data?(document.getElementById("Admin").style.display="inline",document.getElementById("Login").style.display="none",document.getElementById("Register").style.display="none",document.getElementById("LogOut").style.display="inline"):localStorage.clear()}))}},LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoAdmin(){window.open("/#/admin","_self"),location.reload()},Register(){window.open("/#/register","_self"),location.reload()},Login(){window.open("/#/login","_self"),location.reload()}},mounted(){this.CheckLogin()}},E=n(3744);const D=(0,E.Z)(I,[["render",y]]);var b=D},5880:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var i=n(6252);function a(e,t,n,a,d,o){const l=(0,i.up)("HeaderCom"),s=(0,i.up)("NoticeCom"),c=(0,i.up)("FooterCom");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i.Wm)(l)]),(0,i._)("div",null,[(0,i.Wm)(s)]),(0,i._)("div",null,[(0,i.Wm)(c)])],64)}var d=n(3577),o=n(9963);const l=e=>((0,i.dD)("data-v-9bcc7728"),e=e(),(0,i.Cn)(),e),s={id:"BodyCon"},c=l((()=>(0,i._)("div",{class:"box",id:"box_notice"},[(0,i._)("div",null,[(0,i._)("p",{style:{"padding-bottom":"10px"}},"网站公告"),(0,i._)("hr"),(0,i._)("div",{class:"notice_data",id:"notice_data"},[(0,i._)("strong",null,[(0,i._)("span",{style:{color:"#E53333","text-align":"center"}},"本工具仅用于学习和调试使用，禁止用于任何违法犯罪行为")]),(0,i._)("br")])])],-1))),r={class:"box",style:{"margin-top":"35px"}},m=l((()=>(0,i._)("p",{style:{"padding-bottom":"10px"}},"变量提交",-1))),u=l((()=>(0,i._)("hr",null,null,-1))),g={id:"envSelect"},v={style:{width:"100%"}},p={style:{"margin-top":"8px"}},_=(0,i.Uk)(" 服务器： "),y=["value"],h={style:{"margin-top":"8px"}},x=(0,i.Uk)(" 变量组： "),I=["value"],E=l((()=>(0,i._)("div",{style:{"margin-top":"8px","font-size":"16px"}},[(0,i.Uk)(" 剩余位置："),(0,i._)("span",{id:"num"},"0")],-1))),D={class:"envInput"},b={class:"mdui-textfield"},k={class:"mdui-textfield"},f=l((()=>(0,i._)("div",{style:{"text-align":"center","padding-top":"20px"}},[(0,i._)("button",{class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue-50",style:{width:"200px"},id:"LoginBtn"},"提  交")],-1))),w=l((()=>(0,i._)("div",{id:"SendOK",class:"mdui-dialog",style:{display:"none"}},[(0,i._)("div",{class:"mdui-dialog-title",id:"dialog-title"},"Success"),(0,i._)("div",{class:"mdui-dialog-content",id:"dialog-content"},"您已提交成功"),(0,i._)("div",{class:"mdui-dialog-actions"},[(0,i._)("button",{class:"mdui-btn mdui-ripple","mdui-dialog-close":""},"确认")])],-1)));function B(e,t,n,a,l,B){return(0,i.wg)(),(0,i.iD)("div",s,[c,(0,i._)("div",r,[(0,i._)("div",null,[m,u,(0,i._)("div",g,[(0,i._)("div",v,[(0,i._)("div",p,[_,(0,i._)("select",{class:"mdui-select",onChange:t[0]||(t[0]=e=>B.changeEnvData(e)),id:"server"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.InitIndexData["serverData"],(e=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e["PanelName"]},(0,d.zw)(e["PanelName"]),9,y)))),128))],32)]),(0,i._)("div",h,[x,(0,i._)("select",{class:"mdui-select",onChange:t[1]||(t[1]=e=>B.changeNum(e)),id:"env"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.EnvData,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e["name"]},(0,d.zw)(e["name"]),9,I)))),128))],32)]),E])]),(0,i._)("div",D,[(0,i._)("form",{onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>B.POSTEnvAdd&&B.POSTEnvAdd(...e)),["prevent"]))},[(0,i._)("div",b,[(0,i.wy)((0,i._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"Cookie","onUpdate:modelValue":t[2]||(t[2]=e=>l.EnvAdd.envData=e)},null,512),[[o.nr,l.EnvAdd.envData]])]),(0,i._)("div",k,[(0,i.wy)((0,i._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"备注（可空）","onUpdate:modelValue":t[3]||(t[3]=e=>l.EnvAdd.envRemarks=e)},null,512),[[o.nr,l.EnvAdd.envRemarks]])]),f],32)])])]),w])}var T=n(9669),C=n.n(T),A=n(4493),S={name:"NoticeCom",data(){return{InitIndexData:{},EnvData:[],EnvAdd:{serverID:0,envName:"",envData:"",envRemarks:""}}},methods:{GetIndexData(){C().get("/v1/api/index/data").then((e=>{this.InitIndexData=e.data.data,this.EnvData=this.InitIndexData["serverData"][0]["envData"],this.EnvAdd.serverID=this.InitIndexData["serverData"][0]["ID"],this.EnvAdd.envName=this.InitIndexData["serverData"][0]["envData"][0]["name"],document.getElementById("num").innerText=this.InitIndexData["serverData"][0]["envData"][0]["quantity"]}))},GetNotice(){C().get("/v1/api/set/setting?key=notice").then((e=>{document.getElementById("notice_data").innerHTML=e.data.data["value"]}))},changeEnvData(e){let t=e.target.selectedIndex;this.EnvData=this.InitIndexData["serverData"][t]["envData"],this.EnvAdd.serverID=this.InitIndexData["serverData"][t]["ID"],this.EnvAdd.envName=this.InitIndexData["serverData"][t]["envData"][0]["name"],document.getElementById("num").innerText=this.InitIndexData["serverData"][t]["envData"][0]["quantity"]},changeNum(e){let t=e.target.selectedIndex;document.getElementById("num").innerText=this.EnvData[t]["quantity"],this.EnvAdd.envName=this.EnvData[t]["name"]},POSTEnvAdd(){let e=new A.Z.Dialog("#SendOK");C().post("/v1/api/env/add",this.EnvAdd).then((t=>{switch(""!==t.data){case 2e3===t.data.code:document.getElementById("dialog-title").innerText="Success",document.getElementById("dialog-content").innerText="您已提交成功",e.toggle();break;case 5020===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="限额已满，禁止提交",e.toggle();break;case 5019===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="上传内容不符合规定, 请检查后再提交",e.toggle();break;case 5015===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="提交服务器或变量名不在白名单",e.toggle();break;case 5016===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="发生一点小意外，请重新提交",e.toggle();break;case 5024===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="禁止提交重复数据",e.toggle();break;case 5003===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="服务繁忙,请稍后重试",e.toggle();break;case 5002===t.data.code:""===t.data.data?(document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="服务繁忙,请稍后重试",e.toggle()):(document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText=JSON.parse(t.data.msg),e.toggle());break}})).catch((e=>{A.Z.snackbar({message:e,position:"right-top"})}))},changeStyle(){let e=document.querySelector("#BodyCon");e.style.minHeight=window.innerHeight-document.body.clientHeight+e.clientHeight+"px",A.Z.mutation()}},mounted(){this.GetIndexData(),this.GetNotice(),this.changeStyle()}},N=n(3744);const L=(0,N.Z)(S,[["render",B],["__scopeId","data-v-9bcc7728"]]);var H=L,Z=n(5388),O=n(3798),q={name:"IndexView",components:{HeaderCom:Z.Z,NoticeCom:H,FooterCom:O.Z}};const R=(0,N.Z)(q,[["render",a]]);var G=R}}]);
//# sourceMappingURL=880.4696c64f.js.map