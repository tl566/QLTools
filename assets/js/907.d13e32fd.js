"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[907],{2584:function(i,t,a){a.d(t,{Z:function(){return L}});var e=a(6252);const d={class:"mdui-drawer mdui-shadow-6",id:"main-drawer",style:{"box-sizing":"border-box"}},s={class:"mdui-list"},n=(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"desktop_mac",-1),o=(0,e._)("div",{class:"mdui-list-item-content"},"仪表盘",-1),l=[n,o],c=(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"playlist_play",-1),m=(0,e._)("div",{class:"mdui-list-item-content"},"变量管理",-1),r=[c,m],u=(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"apps",-1),p=(0,e._)("div",{class:"mdui-list-item-content"},"面板管理",-1),_=[u,p],h=(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"import_export",-1),g=(0,e._)("div",{class:"mdui-list-item-content"},"容器管理",-1),w=[h,g],b=(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"sms",-1),v=(0,e._)("div",{class:"mdui-list-item-content"},"推送管理",-1),f=[b,v],k=(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"settings",-1),y=(0,e._)("div",{class:"mdui-list-item-content"},"网站设置",-1),x=[k,y],U=(0,e._)("a",{class:"mdui-list-item","mdui-drawer-close":""},[(0,e._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"chevron_left"),(0,e._)("div",{class:"mdui-list-item-content"},"收起菜单")],-1);function D(i,t,a,n,o,c){return(0,e.wg)(),(0,e.iD)("div",d,[(0,e._)("div",s,[(0,e._)("a",{onClick:t[0]||(t[0]=i=>this.OpenURL("/#/admin/")),class:"mdui-list-item"},l),(0,e._)("a",{onClick:t[1]||(t[1]=i=>this.OpenURL("/#/admin/env/")),class:"mdui-list-item"},r),(0,e._)("a",{onClick:t[2]||(t[2]=i=>this.OpenURL("/#/admin/panel/")),class:"mdui-list-item"},_),(0,e._)("a",{onClick:t[3]||(t[3]=i=>this.OpenURL("/#/admin/transfer/")),class:"mdui-list-item"},w),(0,e._)("a",{onClick:t[4]||(t[4]=i=>this.OpenURL("/#/admin/message/")),class:"mdui-list-item"},f),(0,e._)("a",{onClick:t[5]||(t[5]=i=>this.OpenURL("/#/admin/settings/")),class:"mdui-list-item"},x),U])])}var A=a(4493),Z={name:"AdminBar",methods:{changeStyle(){window.innerWidth>=1e3&&document.getElementById("main-drawer").classList.add("mdui-drawer-open");let i=document.querySelector("#container");i.style.minHeight=window.innerHeight-document.body.clientHeight+i.clientHeight+"px",A.Z.mutation()},OpenURL(i){window.open(i,"_self"),location.reload()}},mounted(){this.changeStyle()}},C=a(3744);const I=(0,C.Z)(Z,[["render",D]]);var L=I},28:function(i,t,a){a.d(t,{Z:function(){return P}});var e=a(6252);const d=i=>((0,e.dD)("data-v-3aab8718"),i=i(),(0,e.Cn)(),i),s={class:"mdui-m-t-5"},n={class:"mdui-p-a-5 mdui-typo mdui-container"},o={class:"mdui-row-sm-3"},l={class:"mdui-col mdui-text"},c=d((()=>(0,e._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),m={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,e.Uk)("青龙 Tools"),u=d((()=>(0,e._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1))),p={class:"mdui-col mdui-text"},_=(0,e.Uk)("邮件联系: "),h={href:"mailto:nuanxinqing@gmail.com"},g=(0,e.Uk)("nuanxinqing@gmail.com"),w=(0,e.Uk)("电报联系: "),b={href:"https://t.me/Nuanxinqing"},v=(0,e.Uk)("@Nuanxinqing"),f={class:"mdui-col mdui-text"},k=(0,e.Uk)("电报频道: "),y={href:"https://t.me/qltool"},x=(0,e.Uk)("青龙Tools"),U=(0,e.Uk)("电报群组: "),D={href:"https://t.me/qltools"},A=(0,e.Uk)("青龙Tools吹水群");function Z(i,t,a,d,Z,C){const I=(0,e.up)("st");return(0,e.wg)(),(0,e.iD)("footer",s,[(0,e._)("div",n,[(0,e._)("div",o,[(0,e._)("div",l,[(0,e._)("p",null,[c,(0,e._)("a",m,[(0,e.Wm)(I,null,{default:(0,e.w5)((()=>[r])),_:1})])]),u]),(0,e._)("div",p,[(0,e._)("p",null,[_,(0,e._)("a",h,[(0,e.Wm)(I,null,{default:(0,e.w5)((()=>[g])),_:1})])]),(0,e._)("p",null,[w,(0,e._)("a",b,[(0,e.Wm)(I,null,{default:(0,e.w5)((()=>[v])),_:1})])])]),(0,e._)("div",f,[(0,e._)("p",null,[k,(0,e._)("a",y,[(0,e.Wm)(I,null,{default:(0,e.w5)((()=>[x])),_:1})])]),(0,e._)("p",null,[U,(0,e._)("a",D,[(0,e.Wm)(I,null,{default:(0,e.w5)((()=>[A])),_:1})])])])])])])}var C={name:"AdminFooter"},I=a(3744);const L=(0,I.Z)(C,[["render",Z],["__scopeId","data-v-3aab8718"]]);var P=L},2743:function(i,t,a){a.d(t,{Z:function(){return b}});var e=a(6252);const d={class:"mdui-appbar mdui-appbar-fixed mdui-color-indigo-800"},s={class:"mdui-toolbar"},n=(0,e._)("a",{"mdui-tooltip":"{content: '菜单'}","mdui-drawer":"{target: '#main-drawer'}",class:"mdui-btn mdui-btn-icon"},[(0,e._)("i",{class:"mdui-icon material-icons"},"menu")],-1),o=(0,e._)("a",{href:"javascript:;",class:"mdui-typo-headline"},"Tools",-1),l=(0,e._)("div",{class:"mdui-toolbar-spacer"},null,-1),c=(0,e._)("i",{class:"mdui-icon material-icons"},"home",-1),m=[c],r=(0,e._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,e._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),u=(0,e._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),p=[u];function _(i,t,a,c,u,_){return(0,e.wg)(),(0,e.iD)("header",d,[(0,e._)("div",s,[n,o,l,(0,e._)("a",{"mdui-tooltip":"{content: '前往首页'}",onClick:t[0]||(t[0]=(...i)=>_.GoIndex&&_.GoIndex(...i)),class:"mdui-btn mdui-btn-icon"},m),r,(0,e._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:t[1]||(t[1]=i=>this.LogOut()),href:"javascript:;",class:"mdui-btn mdui-btn-icon",id:"LogOut"},p)])])}var h={name:"AdminHeader",methods:{LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoIndex(){window.open("/#/","_self"),location.reload()}}},g=a(3744);const w=(0,g.Z)(h,[["render",_]]);var b=w},4907:function(i,t,a){a.r(t),a.d(t,{default:function(){return ii}});var e=a(6252);const d={class:"mdui-appbar-with-toolbar"};function s(i,t,a,s,n,o){const l=(0,e.up)("AdminHeader"),c=(0,e.up)("AdminBar"),m=(0,e.up)("AdminCom"),r=(0,e.up)("AdminFooter");return(0,e.wg)(),(0,e.iD)("div",d,[(0,e.Wm)(l),(0,e.Wm)(c),(0,e.Wm)(m),(0,e.Wm)(r)])}var n=a(2743),o=a(2584),l=a(28),c=a(3577),m=a(9963);const r={id:"container",class:"mdui-container mdui-p-t-1",style:{"margin-top":"10px"}},u={class:"mdui-card mt",style:{"border-radius":"15px"}},p=(0,e._)("div",{class:"mdui-card-primary"},[(0,e._)("div",{class:"mdui-card-primary-title"},"管理中心"),(0,e._)("div",{class:"mdui-card-primary-subtitle"},"Admin Center")],-1),_={class:"mdui-card-menu"},h=(0,e._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"settings",-1),g=(0,e.Uk)("账号设置 "),w=[h,g],b={class:"mdui-card-content mdui-typo"},v={class:"text"},f=(0,e.Uk)("欢迎回来, "),k=(0,e._)("p",{class:"text_s"},[(0,e.Uk)("Tip: 遇到问题可以前往"),(0,e._)("a",{href:"https://github.com/nuanxinqing123/QLTools"},"Github"),(0,e.Uk)("反馈问题哦")],-1),y={class:"mdui-float-right",style:{"margin-right":"15px","margin-top":"15px","margin-bottom":"15px"}},x=(0,e._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"update",-1),U=(0,e.Uk)("检查版本 "),D=[x,U],A={id:"pwd",class:"mdui-dialog",style:{top:"210px",display:"none"}},Z=(0,e._)("div",{class:"mdui-dialog-title"},"修改管理员密码",-1),C={class:"mdui-dialog-content mdui-typo",style:{height:"407px"}},I={class:"mdui-textfield"},L=(0,e._)("label",{class:"mdui-textfield-label"},"旧密码",-1),P={class:"mdui-textfield"},R=(0,e._)("label",{class:"mdui-textfield-label"},"修改密码",-1),G={class:"mdui-textfield"},q=(0,e._)("label",{class:"mdui-textfield-label"},"确认密码",-1),O=(0,e._)("div",{class:"mdui-dialog-actions"},[(0,e._)("button",{class:"mdui-btn mdui-color-green-700 mdui-text-color-white btn"},[(0,e._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"check"),(0,e.Uk)("确认修改 ")])],-1),S={class:"mdui-card mt",style:{"border-radius":"15px","margin-top":"15px"}},W=(0,e._)("div",{class:"mdui-card-primary"},[(0,e._)("div",{class:"mdui-card-primary-title"},"最近登录"),(0,e._)("div",{class:"mdui-card-primary-subtitle"},"Recent Login")],-1),T={class:"mdui-table-fluid"},H={class:"mdui-table"},B=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"登陆时间"),(0,e._)("th",null,"登录地址"),(0,e._)("th",null,"登录IP"),(0,e._)("th",null,"登录状态")])],-1),N={key:0,style:{color:"green"}},z={key:1,style:{color:"red"}},E=(0,e._)("div",{id:"version",class:"mdui-dialog",style:{top:"210px",display:"none"}},[(0,e._)("div",{class:"mdui-dialog-title"},"版本更新通知"),(0,e._)("div",{class:"mdui-dialog-content mdui-typo",style:{height:"407px"}},[(0,e._)("div",{id:"Notice"}),(0,e._)("div",{class:"mdui-dialog-actions"},[(0,e._)("a",{id:"github",href:"https://github.com/nuanxinqing123/QLTools/releases"},[(0,e._)("button",{class:"mdui-btn mdui-color-green-700 mdui-text-color-white btn"}," 更新版本 ")]),(0,e._)("button",{class:"mdui-btn mdui-color-blue-700 mdui-text-color-white btn","mdui-dialog-close":""}," 关闭通知 ")])])],-1);function V(i,t,a,d,s,n){const o=(0,e.up)("st");return(0,e.wg)(),(0,e.iD)("div",r,[(0,e._)("div",u,[p,(0,e._)("div",_,[(0,e._)("button",{onClick:t[0]||(t[0]=i=>n.OpenDialog()),"mdui-tooltip":"{content:'修改密码'}",class:"mdui-btn mdui-btn-dense mdui-btn-raised btn mdui-p-x-1 mdui-color-blue-grey mdui-text-color-white"},w)]),(0,e._)("div",b,[(0,e._)("p",v,[f,(0,e.Wm)(o,null,{default:(0,e.w5)((()=>[(0,e.Uk)((0,c.zw)(s.AdminInfo),1)])),_:1})]),k]),(0,e._)("div",y,[(0,e._)("button",{onClick:t[1]||(t[1]=(...i)=>n.GetUpdate&&n.GetUpdate(...i)),class:"mdui-btn mdui-btn-dense mdui-btn-raised btn mdui-p-x-1 mdui-color-green-700 mdui-text-color-white"},D)])]),(0,e._)("div",A,[Z,(0,e._)("div",C,[(0,e._)("form",{onSubmit:t[5]||(t[5]=(0,m.iM)(((...i)=>n.changeAdPwd&&n.changeAdPwd(...i)),["prevent"]))},[(0,e._)("div",I,[L,(0,e.wy)((0,e._)("input",{class:"mdui-textfield-input",type:"text",id:"old_password",placeholder:"必填","onUpdate:modelValue":t[2]||(t[2]=i=>s.RePwdData.old_password=i)},null,512),[[m.nr,s.RePwdData.old_password]])]),(0,e._)("div",P,[R,(0,e.wy)((0,e._)("input",{class:"mdui-textfield-input",type:"text",id:"password",placeholder:"必填","onUpdate:modelValue":t[3]||(t[3]=i=>s.RePwdData.password=i)},null,512),[[m.nr,s.RePwdData.password]])]),(0,e._)("div",G,[q,(0,e.wy)((0,e._)("input",{class:"mdui-textfield-input",type:"text",id:"re_password",placeholder:"必填","onUpdate:modelValue":t[4]||(t[4]=i=>s.RePwdData.re_password=i)},null,512),[[m.nr,s.RePwdData.re_password]])]),O],32)])]),(0,e._)("div",S,[W,(0,e._)("div",T,[(0,e._)("table",H,[B,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.IPData,(i=>((0,e.wg)(),(0,e.iD)("tr",{key:i},[(0,e._)("th",null,(0,c.zw)(i.login_time),1),(0,e._)("th",null,(0,c.zw)(i.ip_address),1),(0,e._)("th",null,(0,c.zw)(i.ip),1),!0===i.if_ok?((0,e.wg)(),(0,e.iD)("th",N,"成功")):((0,e.wg)(),(0,e.iD)("th",z,"失败"))])))),128))])])])]),E])}var j=a(4493),F=a(9669),M=a.n(F),Q={name:"AdminCom",data(){return{RePwdData:{old_password:"",password:"",re_password:""},IPData:[{login_time:"暂无记录",ip:"暂无记录",ip_address:"暂无记录",if_ok:!0}],AdminInfo:"Admin",UpdateSoft:{Update:!1,Notice:""}}},methods:{OpenDialog(){let i=new j.Z.Dialog("#pwd");i.toggle()},changeAdPwd(){M().post("/v2/api/admin/rep-wd",this.RePwdData).then((i=>{switch(""!==i.data){case 2e3===i.data.code:j.Z.snackbar({message:"密码修改成功",position:"right-top"}),setTimeout((()=>{localStorage.clear(),window.open("/","_self")}),2e3);break;case 5018===i.data.code:j.Z.snackbar({message:i.data.msg,position:"right-top"});break;case 5003===i.data.code:j.Z.snackbar({message:"服务繁忙",position:"right-top"});break;case 5002===i.data.code:""===i.data.data?j.Z.snackbar({message:"服务繁忙",position:"right-top"}):j.Z.snackbar({message:i.data.msg,position:"right-top"});break}})).catch((i=>{j.Z.snackbar({message:i,position:"right-top"})}))},GetIPData(){M().get("/v2/api/admin/ip/info").then((i=>{switch(""!==i.data){case 2e3===i.data.code:this.IPData=i.data.data;break}})).catch((i=>{j.Z.snackbar({message:i,position:"right-top"})}))},GetAdminInfo(){M().get("/v2/api/admin/info").then((i=>{switch(""!==i.data){case 2e3===i.data.code:this.AdminInfo=i.data.data;break}})).catch((i=>{j.Z.snackbar({message:i,position:"right-top"})}))},GetUpdate(){M().get("/v2/api/check/version").then((i=>{switch(""!==i.data){case 2e3===i.data.code:if(this.UpdateSoft=i.data.data,!0===this.UpdateSoft.Update){document.getElementById("Notice").innerHTML=this.UpdateSoft.Notice;let i=new j.Z.Dialog("#version");i.toggle()}else{document.getElementById("Notice").innerHTML="<ul><li>暂无更新</li></ul>",document.getElementById("github").style.display="none";let i=new j.Z.Dialog("#version");i.toggle()}break}})).catch((i=>{j.Z.snackbar({message:i,position:"right-top"})}))},GetUpdateAd(){M().get("/v2/api/check/version").then((i=>{switch(""!==i.data){case 2e3===i.data.code:this.UpdateSoft=i.data.data,!0===this.UpdateSoft.Update&&j.Z.snackbar({message:"有新版本可用",position:"right-top"});break}})).catch((i=>{j.Z.snackbar({message:i,position:"right-top"})}))}},mounted(){this.GetIPData(),this.GetAdminInfo(),this.GetUpdateAd()}},K=a(3744);const Y=(0,K.Z)(Q,[["render",V]]);var J=Y,X={name:"AdminView",components:{AdminHeader:n.Z,AdminBar:o.Z,AdminFooter:l.Z,AdminCom:J},mounted(){window.innerWidth>=1e3&&document.body.classList.add("mdui-drawer-body-left")}};const $=(0,K.Z)(X,[["render",s]]);var ii=$}}]);
//# sourceMappingURL=907.d13e32fd.js.map