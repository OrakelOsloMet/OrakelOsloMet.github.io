(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{23:function(e,t,n){e.exports={brandText:"navbar_brandText__3JYZf",brandImage:"navbar_brandImage__1cdba",defaultLinkText:"navbar_defaultLinkText__Duc5y",authenticatedBrandText:"navbar_authenticatedBrandText__3JKet",authenticatedLinkText:"navbar_authenticatedLinkText__3kvOi",invisibleOnMobile:"navbar_invisibleOnMobile__H03rF"}},55:function(e,t,n){e.exports={adminPage:"adminPage_adminPage__1C4rP"}},59:function(e,t,n){e.exports=n(97)},87:function(e,t,n){e.exports=n.p+"static/media/hellothere.be0ec76a.mp3"},89:function(e,t,n){},95:function(e,t,n){e.exports=n.p+"static/media/oslometsvart.3b9b0cc3.png"},96:function(e,t,n){e.exports=n.p+"static/media/oslomethvit.2c306d99.png"},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),u=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,i,l,E,s=n(27),d=n(8),m=n(10),f=n(53);!function(e){e.AUTH_START="AUTH_START",e.AUTH_SUCCESS="AUTH_SUCCESS",e.AUTH_FAIL="AUTH_FAIL",e.AUTH_LOGOUT="AUTH_LOGOUT",e.CLEAR_ERROR="CLEAR_ERROR"}(o||(o={})),function(e){e.FETCH_QUEUE_START="FETCH_QUEUE_START",e.FETCH_QUEUE_SUCCESS="FETCH_QUEUE_SUCCESS",e.FETCH_QUEUE_FAIL="FETCH_QUEUE_FAIL",e.ADD_TO_QUEUE_START="ADD_TO_QUEUE_START",e.ADD_TO_QUEUE_SUCCESS="ADD_TO_QUEUE_SUCCESS",e.ADD_TO_QUEUE_FAIL="ADD_TO_QUEUE_FAIL",e.DELETE_FROM_QUEUE_START="DELETE_FROM_QUEUE_START",e.DELETE_FROM_QUEUE_SUCCESS="DELETE_FROM_QUEUE_SUCCESS",e.DELETE_FROM_QUEUE_FAIL="DELETE_FROM_QUEUE_FAIL",e.DONE_IN_QUEUE_START="DONE_IN_QUEUE_START",e.DONE_IN_QUEUE_SUCCESS="DONE_IN_QUEUE_SUCCESS",e.DONE_IN_QUEUE_FAIL="DONE_IN_QUEUE_FAIL"}(i||(i={})),function(e){e.FETCH_SUBJECTS_START="FETCH_SUBJECTS_START",e.FETCH_SUBJECTS_SUCCESS="FETCH_SUBJECTS_SUCCESS",e.FETCH_SUBJECTS_FAIL="FETCH_SUBJECTS_FAIL",e.ADD_SUBJECT_START="ADD_SUBJECT_START",e.ADD_SUBJECT_SUCCESS="ADD_SUBJECT_SUCCESS",e.ADD_SUBJECT_FAIL="ADD_SUBJECT_FAIL",e.EDIT_SUBJECT_START="EDIT_SUBJECT_START",e.EDIT_SUBJECT_SUCCESS="EDIT_SUBJECT_SUCCESS",e.EDIT_SUBJECT_FAIL="EDIT_SUBJECT_FAIL",e.DELETE_SUBJECT_START="DELETE_SUBJECT_START",e.DELETE_SUBJECT_SUCCESS="DELETE_SUBJECT_SUCCESS",e.DELETE_SUBJECT_FAIL="DELETE_SUBJECT_FAIL"}(l||(l={})),function(e){e.FETCH_PLACEMENTS_START="FETCH_PLACEMENTS_START",e.FETCH_PLACEMENTS_SUCCESS="FETCH_PLACEMENTS_SUCCESS",e.FETCH_PLACEMENTS_FAIL="FETCH_PLACEMENTS_FAIL",e.ADD_PLACEMENT_START="ADD_PLACEMENT_START",e.ADD_PLACEMENT_SUCCESS="ADD_PLACEMENT_SUCCESS",e.ADD_PLACEMENT_FAIL="ADD_PLACEMENT_FAIL",e.EDIT_PLACEMENT_START="EDIT_PLACEMENT_START",e.EDIT_PLACEMENT_SUCCESS="EDIT_PLACEMENT_SUCCESS",e.EDIT_PLACEMENT_FAIL="EDIT_PLACEMENT_FAIL",e.DELETE_PLACEMENT_START="DELETE_PLACEMENT_START",e.DELETE_PLACEMENT_SUCCESS="DELETE_PLACEMENT_SUCCESS",e.DELETE_PLACEMENT_FAIL="DELETE_PLACEMENT_FAIL"}(E||(E={}));var T,S,_=n(4),C=n(15),b=function(e,t){return Object(C.a)(Object(C.a)({},e),t)},p=function(e){for(var t=Object(C.a)({},e),n=0,r=Object.entries(t);n<r.length;n++){var a=Object(_.a)(r[n],2),c=a[0],u=a[1];"string"==typeof u&&("true"!==u&&"false"!==u||(t[c]="true"==u),isNaN(Number(u))||(t[c]=parseFloat(u)))}return t},g={user:null,error:null,loading:!1},h=function(e,t){return b(e,{error:null,loading:!0})},A=function(e,t){return b(e,{user:t.user,error:null,loading:!1})},U=function(e,t){return b(e,{error:t.error,loading:!1})},v=function(e,t){return b(e,{user:null})},D=function(e,t){return b(e,{error:null})},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.AUTH_START:return h(e);case o.AUTH_SUCCESS:return A(e,t);case o.AUTH_FAIL:return U(e,t);case o.AUTH_LOGOUT:return v(e);case o.CLEAR_ERROR:return D(e);default:return e}},O={queueData:[],error:null,loading:!1},k=function(e,t){return b(e,{error:null,loading:!0})},N=function(e,t){return b(e,{error:t.error,loading:!1})},y=function(e,t){return b(e,{queueData:t.queueData,error:null,loading:!1})},j=function(e,t){return b(e,{error:null,loading:!1})},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.FETCH_QUEUE_START:case i.ADD_TO_QUEUE_START:case i.DELETE_FROM_QUEUE_START:case i.DONE_IN_QUEUE_START:return k(e);case i.FETCH_QUEUE_FAIL:case i.ADD_TO_QUEUE_FAIL:case i.DELETE_FROM_QUEUE_FAIL:case i.DONE_IN_QUEUE_FAIL:return N(e,t);case i.FETCH_QUEUE_SUCCESS:return y(e,t);case i.ADD_TO_QUEUE_SUCCESS:case i.DELETE_FROM_QUEUE_SUCCESS:case i.DONE_IN_QUEUE_SUCCESS:return j(e);default:return e}},I={allSubjectData:[],currentSubjectData:[],error:null,loading:!1},R=function(e,t){return b(e,{error:null,loading:!0})},w=function(e,t){return b(e,{error:t.error,loading:!1})},M=function(e,t){return t.allSubjectData?b(e,{allSubjectData:t.allSubjectData,error:null,loading:!1}):b(e,{currentSubjectData:t.currentSubjectData,error:null,loading:!1})},B=function(e,t){return b(e,{error:null,loading:!1})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.FETCH_SUBJECTS_START:case l.ADD_SUBJECT_START:case l.DELETE_SUBJECT_START:return R(e);case l.FETCH_SUBJECTS_FAIL:case l.ADD_SUBJECT_FAIL:case l.DELETE_SUBJECT_FAIL:return w(e,t);case l.FETCH_SUBJECTS_SUCCESS:return M(e,t);case l.ADD_SUBJECT_SUCCESS:case l.DELETE_SUBJECT_SUCCESS:return B(e);default:return e}},H={placementData:[],error:null,loading:!1},J=function(e,t){return b(e,{error:null,loading:!0})},P=function(e,t){return b(e,{error:t.error,loading:!1})},Q=function(e,t){return b(e,{placementData:t.placementData,error:null,loading:!1})},q=function(e,t){return b(e,{error:null,loading:!1})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.FETCH_PLACEMENTS_START:case E.ADD_PLACEMENT_START:case E.DELETE_PLACEMENT_START:return J(e);case E.FETCH_PLACEMENTS_FAIL:case E.ADD_PLACEMENT_FAIL:case E.DELETE_PLACEMENT_FAIL:return P(e,t);case E.FETCH_PLACEMENTS_SUCCESS:return Q(e,t);case E.ADD_PLACEMENT_SUCCESS:case E.DELETE_PLACEMENT_SUCCESS:return q(e);default:return e}},G=Object(d.c)({auth:L,queue:F,subjects:x,placements:V}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,K=n(5),Y=n(37),W=n.n(Y),z="https://orakelqueueservice.herokuapp.com/api/",Z="/Orakel_Queue_Client/";!function(e){e.SELECT="select",e.TEXT="text",e.VALIDATED_TEXT="validated_text",e.RADIO="radio"}(T||(T={})),function(e){e.SPRING="Spring",e.AUTUMN="Autumn"}(S||(S={}));var $,ee=W.a.create({baseURL:z}),te=W.a.create({baseURL:z,responseType:"blob"}),ne=function(e){return{type:o.AUTH_SUCCESS,user:e}},re=function(){return localStorage.removeItem("user"),{type:o.AUTH_LOGOUT}},ae=function(){return function(e){var t=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;t&&t.token?ee.post("auth/isTokenValid",t.token).then((function(n){!0===n.data?e(ne(t)):e(re())})):e(re())}},ce=function(e,t){return function(n){return n({type:o.AUTH_START}),ee.post("auth/signin",{username:e,password:t}).then((function(e){if(e.data.token)return localStorage.setItem("user",JSON.stringify(e.data)),n(ne(e.data)),!0})).catch((function(e){return n(function(e){return{type:o.AUTH_FAIL,error:e}}(e.response.data.message)),!1}))}},ue=function(){return{type:o.CLEAR_ERROR}},oe=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}},ie=function(){return function(e){e({type:i.FETCH_QUEUE_START}),ee.get("queue/").then((function(t){var n;e((n=t.data,{type:i.FETCH_QUEUE_SUCCESS,queueData:n}))})).catch((function(t){e(function(e){return{type:i.FETCH_QUEUE_FAIL,error:e}}(t.response))}))}},le=function(e){return function(t){t({type:i.ADD_TO_QUEUE_START}),ee.post("queue/",e).then((function(){t({type:i.ADD_TO_QUEUE_SUCCESS}),t(ie())})).catch((function(e){t(function(e){return{type:i.ADD_TO_QUEUE_FAIL,error:e}}(e.response.data))}))}},Ee=function(e){return function(t){t({type:i.DELETE_FROM_QUEUE_START}),ee.delete("queue/"+e,{headers:oe()}).then((function(){t({type:i.DELETE_FROM_QUEUE_SUCCESS}),t(ie())})).catch((function(e){t(function(e){return{type:i.DELETE_FROM_QUEUE_FAIL,error:e}}(e.response))}))}},se=function(e){return function(t){t({type:i.DONE_IN_QUEUE_START}),ee.post("queue/confirmdone/"+e,null,{headers:oe()}).then((function(){t({type:i.DONE_IN_QUEUE_SUCCESS}),t(ie())})).catch((function(e){t(function(e){return{type:i.DONE_IN_QUEUE_FAIL,error:e}}(e.response))}))}},de=function(){return{type:l.FETCH_SUBJECTS_START}},me=function(e){return{type:l.FETCH_SUBJECTS_SUCCESS,allSubjectData:e}},fe=function(e){return{type:l.FETCH_SUBJECTS_SUCCESS,currentSubjectData:e}},Te=function(e){return{type:l.FETCH_SUBJECTS_FAIL,error:e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){t(de());var n=e?"subjects/":"subjects/current/";ee.get(n).then((function(n){t(e?me(n.data):fe(n.data))})).catch((function(e){t(Te(e.response))}))}},_e=function(){return{type:l.ADD_SUBJECT_START}},Ce=function(){return{type:l.ADD_SUBJECT_SUCCESS}},be=function(e){return{type:l.ADD_SUBJECT_FAIL,error:e}},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){n(_e()),(t?ee.put("subjects/edit/"+e.id,e,{headers:oe()}):ee.post("subjects/",e,{headers:oe()})).then((function(){n(Ce()),n(Se(!0))})).catch((function(e){n(be(e.response))}))}},ge=function(e){return function(t){t({type:l.DELETE_SUBJECT_START}),ee.delete("subjects/delete/"+e,{headers:oe()}).then((function(){t({type:l.DELETE_SUBJECT_SUCCESS}),t(Se(!0))})).catch((function(e){t(function(e){return{type:l.DELETE_SUBJECT_FAIL,error:e}}(e.response))}))}},he=n(31),Ae=function(e){return a.a.createElement("button",{type:"submit",disabled:e.disabled,className:"btn btn-primary ".concat(e.className),onClick:e.onClick},e.children)},Ue=function(e){return a.a.createElement("button",{disabled:e.disabled,className:"btn btn-success ".concat(e.className),onClick:e.onClick},e.children)},ve=function(e){return a.a.createElement("button",{disabled:e.disabled,className:"btn btn-danger ".concat(e.className),onClick:e.onClick},e.children)},De=function(e,t){switch(e.type){case T.VALIDATED_TEXT:return t({required:e.validation.errorMessage,minLength:{value:e.validation.minLength,message:e.validation.errorMessage}});default:return t}},Le=function(e,t){for(var n=!1,r=0,a=Object.entries(e);r<a.length;r++){a[r][0]===t.name&&(n=!0)}return n},Oe=Object(r.forwardRef)((function(e,t){var n="form-control ml-1 mr-1 mt-3 mb-3 ";e.error&&(n+="is-invalid ");return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",Object.assign({ref:t,className:n,onChange:function(t){e.onChange&&e.onChange(t)},key:e.inputConfig.key},e.inputConfig)))})),ke=Object(r.forwardRef)((function(e,t){var n="form-control ml-1 mr-1 mt-3 mb-3 ";e.error&&(n+="is-invalid ");return a.a.createElement(a.a.Fragment,null,a.a.createElement("select",Object.assign({ref:t,className:n,onChange:function(t){e.onChange&&e.onChange(t)}},e.inputConfig),e.inputConfig.options.map((function(e){var t="object"===typeof e.value?JSON.stringify(e.value):String(e.value);return a.a.createElement("option",{key:e.displayValue,value:t},e.displayValue)}))))})),Ne=n(25),ye=n.n(Ne),je=n(26),Fe=n.n(je),Ie=function(e){var t=e.title,n=e.contentText,r=e.hyperlinks,a=e.iconType,c=Fe()(ye.a),u=document.createElement("div");if(r){u.className+="text-center";var o=document.createElement("strong");r.forEach((function(e){o.innerHTML+='<a href="'.concat(e.url,'" target="_blank">').concat(e.text,"</a></br>")})),u.append(o)}return c.fire({title:t,html:n,footer:r?u:null,icon:a,confirmButtonText:"Lukk"})};!function(e){e.FIRSTNAME="firstname",e.SUBJECT="subject",e.PLACEMENT="placement",e.YEAR="year",e.COMMENT="comment"}($||($={}));var Re,we=function(e){var t=e.subjects,n=e.addQueueEntity,c=Object(he.a)(),u=c.register,o=c.handleSubmit,i=c.reset,l=c.errors,E=c.formState.isSubmitSuccessful,s=Object(r.useState)([]),d=Object(_.a)(s,2),m=d[0],f=d[1],S=Object(r.useState)({type:T.VALIDATED_TEXT,name:$.FIRSTNAME,placeholder:"Fornavn",validation:{minLength:3,errorMessage:"Vennligst oppgi et fornavn p\xe5 minst 3 bokstaver"}}),b=Object(_.a)(S,1)[0],g=Object(r.useState)({type:T.SELECT,name:$.SUBJECT,options:[]}),h=Object(_.a)(g,2),A=h[0],U=h[1],v=Object(r.useState)({type:T.SELECT,name:$.PLACEMENT,options:[]}),D=Object(_.a)(v,2),L=D[0],O=D[1],k=Object(r.useState)({type:T.SELECT,name:$.YEAR,options:[{value:1,displayValue:"1. \xe5r"},{value:2,displayValue:"2. \xe5r"},{value:3,displayValue:"3. \xe5r"}]}),N=Object(_.a)(k,1)[0],y=Object(r.useState)({type:T.TEXT,name:$.COMMENT,placeholder:'"Har p\xe5 r\xf8d lue"'}),j=Object(_.a)(y,1)[0];Object(r.useEffect)((function(){"undefined"!==typeof t&&t.length>0&&F(),I().then((function(e){f(e),R(m)}))}),[t]),Object(r.useEffect)((function(){E&&i()}),[E,i]);var F=function(){var e=Object(C.a)({},A);e.options=[],null===t||void 0===t||t.forEach((function(t){e.options.push({value:t.id,displayValue:t.name})})),U(e)},I=function(){return ee.get("placements/").then((function(e){return e.data}))},R=function(e){var t=Object(C.a)({},L);t.options=[],e.forEach((function(e){var n="Discord"===e.name?"Discord":e.name+" "+e.number;t.options.push({value:e.id,displayValue:n})})),O(t)},w=a.a.createElement("form",{onSubmit:o((function(e){var r=p(e),a=m.find((function(e){return e.id===r.placement})),c=t.find((function(e){return e.id===r.subject}));if("undefined"!==typeof a&&"undefined"!==typeof c){var u={id:0,createdDate:"",name:r.firstname,subject:c,placement:a,comment:r.comment,studyYear:r.year};n(u)}else Ie({title:"Noe har g\xe5tt galt",iconType:"error",contentText:"Vennligst informer Orakel Koordinator via Facebook, Discord eller p\xe5 Datatorget.</br></br> <b>Feilmelding:</b> "+"Error when creating QueueEntity: Placement or Subject is undefined",hyperlinks:[{url:"https://www.facebook.com/OrakelOsloMet",text:"Orakels Facebookside"}]})})),className:"mt-5 mb-5"},a.a.createElement("label",{className:"text-center"},"Navn, Emne, Plassering, Studie\xe5r og Kommentar"),a.a.createElement("div",{className:"form-group form-inline d-flex justify-content-center"},a.a.createElement(Oe,{inputConfig:b,error:Le(l,b),ref:De(b,u)}),a.a.createElement(ke,{inputConfig:A,ref:De(A,u)}),a.a.createElement(ke,{inputConfig:L,ref:De(L,u)}),a.a.createElement(ke,{inputConfig:N,ref:De(N,u)}),a.a.createElement(Oe,{inputConfig:j,error:Le(l,j),ref:De(j,u)}),a.a.createElement(Ae,{className:"ml-2 mr-2"},"Registrer")));return a.a.createElement("div",{className:"bg-light pb-1 pt-1"},a.a.createElement("h2",{className:"mt-5 text-center font-weight-bold"},"K\xf8registrering"),w)},Me=Object(m.b)((function(e){return{subjects:e.subjects.currentSubjectData,loading:e.queue.loading,error:e.queue.error}}),(function(e){return Object(d.b)({addQueueEntity:le},e)}))(we),Be=n(100),xe=function(e){var t=[];return e.defaultColumns.forEach((function(e){t.push(a.a.createElement("th",{key:"".concat(e," Header"),scope:"col"},e))})),e.isAuthenticated&&e.loggedInColumns.forEach((function(e){t.push(a.a.createElement("th",{key:"".concat(e," Header"),scope:"col"},e))})),a.a.createElement("thead",{key:"tableHead",className:"thead-dark"},a.a.createElement("tr",null,t))},He=function(e){for(var t=e.queueData,n=e.confirmDoneEntity,r=e.deleteQueueEntity,c=e.isAuthenticated,u=e.userRoles,o=e.defaultColumns,i=e.loggedInColumns,l=[],E=function(e){var o="row"+e,i=[],E=t[e],s=E.placement,d="Discord"===(null===s||void 0===s?void 0:s.name)?"Discord":(null===s||void 0===s?void 0:s.name)+" "+(null===s||void 0===s?void 0:s.number),m=null===E.comment?"<ingen kommentar>":E.comment;i.push(a.a.createElement("td",{key:"entry"+e,id:"entry"+e},"# ",e+1)),i.push(a.a.createElement("td",{key:"name"+e,id:"name"+e},E.name)),i.push(a.a.createElement("td",{key:"subject"+e,id:"subject"+e},E.subject.name)),i.push(a.a.createElement("td",{key:"placement"+e,id:"placement"+e},d)),i.push(a.a.createElement("td",{key:"comment"+e,id:"comment"+e},m)),c&&u.includes("ROLE_ADMIN")&&i.push(a.a.createElement("td",{key:"actions"+e,id:"action"+e},a.a.createElement(a.a.Fragment,null,a.a.createElement(Ue,{onClick:function(){return n(t[e].id)}},"Ferdig"),a.a.createElement(ve,{className:"ml-2",onClick:function(){return r(t[e].id)}},"Slett")))),l.push(a.a.createElement("tr",{key:e,id:o},i))},s=0;s<t.length;s++)E(s);var d=a.a.createElement(xe,{defaultColumns:o,loggedInColumns:i,isAuthenticated:c}),m=a.a.createElement("tbody",null,l);return a.a.createElement(Be.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"mb-4 bg-white"},d,m)},Je=function(){return a.a.createElement("div",{className:"spinner-border text-primary"})},Pe=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e})),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){"undefined"!==typeof(null===n||void 0===n?void 0:n.current)&&(null===n||void 0===n||n.current())}),t);return function(){return clearInterval(e)}}}),[t])},Qe=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current},qe=n(54),Ve=n(87),Ge=function(e){var t=e.isAuthenticated,n=e.userRoles,c=e.queueData,u=e.deleteQueueEntity,o=e.confirmDoneEntity,i=e.pollingFunction,l=Object(qe.a)(Ve),E=Object(_.a)(l,1)[0],s=Qe(c);Object(r.useEffect)((function(){i()}),[i]),Pe((function(){i()}),5e3),Object(r.useEffect)((function(){s&&t&&c.length>=s.length&&(function(e,t){if(e.length!==t.length)return!1;for(var n=!0,r=0;r<e.length;r++)if(JSON.stringify(e[r])!==JSON.stringify(t[r])){n=!1;break}return n}(c,s)||E())}),[c,t,E,s]);var d=void 0===c?a.a.createElement(Je,null):a.a.createElement(He,{defaultColumns:["# i k\xf8","Navn","Emne","Plassering","Kommentar"],loggedInColumns:["Handlinger"],queueData:c,isAuthenticated:t,userRoles:n,confirmDoneEntity:o,deleteQueueEntity:u});return a.a.createElement(a.a.Fragment,null,d)},Xe=Object(m.b)((function(e){var t;return{isAuthenticated:null!=(null===(t=e.auth.user)||void 0===t?void 0:t.token),userRoles:e.auth.user?e.auth.user.roles:[],queueData:e.queue.queueData,loading:e.queue.loading,error:e.queue.error}}),(function(e){return Object(d.b)({deleteQueueEntity:Ee,confirmDoneEntity:se,pollingFunction:ie},e)}))(Ge),Ke=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Me,null),a.a.createElement(Xe,null))},Ye=n(55),We=n.n(Ye),ze=function(e){var t="card bg-white mb-4 mt-4 ml-4 mr-4 ",n="".concat(String(e.widthPercent),"%");return e.shadow&&(t+="shadow rounded "),a.a.createElement("div",{className:t,style:{width:n}},a.a.createElement("div",{className:"card-header bg-warning"},a.a.createElement("h2",null,a.a.createElement("b",null,e.header))),e.children)},Ze=n(3),$e=n.n(Ze),et=n(11),tt=Object(r.forwardRef)((function(e,t){var n="form-check form-check-inline ml-2 mr-2 mt-2 mb-4 ";e.error&&(n+="is-invalid ");var r=function(t){e.onChange&&e.onChange(t)},c=[];return e.inputConfig.buttons.forEach((function(u){c.push(a.a.createElement("div",{key:u.label,className:n},a.a.createElement("input",Object.assign({key:"".concat(u.key,"radio").concat(u.value),value:u.value,className:"form-check-input ",ref:t,defaultChecked:u.defaultChecked,onChange:r},e.inputConfig)),a.a.createElement("label",{className:"form-check-label"},u.label)))})),a.a.createElement(a.a.Fragment,null,c)})),nt=function(e){var t=e.title,n=e.contentText,r=Fe()(ye.a);return r.fire({title:t,html:n,icon:"warning",showDenyButton:!0,confirmButtonText:"Confirm",denyButtonText:"Cancel"}).then((function(e){return e.isConfirmed?(r.fire("Done!","","success"),!0):e.isDenied?(r.fire("Aborted","","info"),!1):void 0}))};!function(e){e.SELECTED_SUBJECT="selectedSubject",e.NEW_SUBJECT_NAME="newSubjectName",e.CHECKED_SEMESTER="checkedSemester"}(Re||(Re={}));var rt=function(e){var t=Re.NEW_SUBJECT_NAME,n=Re.SELECTED_SUBJECT,c=Re.CHECKED_SEMESTER,u=Object(he.a)(),o=u.register,i=u.handleSubmit,l=u.reset,E=u.errors,s=u.formState.isSubmitSuccessful,d=Object(r.useState)(!1),m=Object(_.a)(d,2),f=m[0],g=m[1],h=Object(r.useState)({type:T.SELECT,name:n,options:[]}),A=Object(_.a)(h,2),U=A[0],v=A[1],D=Object(r.useState)({type:T.VALIDATED_TEXT,name:t,key:t,placeholder:"Subject Name",validation:{minLength:3,errorMessage:"Please provide a subject name of with at least 3 characters"}}),L=Object(_.a)(D,2),O=L[0],k=L[1],N=Object(r.useState)({type:T.RADIO,name:c,buttons:[{label:S.SPRING,value:0,key:S.SPRING,defaultChecked:!0},{label:S.AUTUMN,value:1,key:S.AUTUMN,defaultChecked:!1}]}),y=Object(_.a)(N,2),j=y[0],F=y[1];Object(r.useEffect)((function(){e.subjects.length>0?I():e.fetchSubjects(!0)}),[e.subjects]),Object(r.useEffect)((function(){s&&R()}),[s,l]);var I=function(){var t=Object(C.a)({},U);t.options=[],t.options.push({value:{name:"<New Subject>"},displayValue:"<New Subject>"}),e.subjects.forEach((function(e){t.options.push({value:e,displayValue:e.name})})),v(t)},R=function(){var e=b(O,{defaultValue:""});k(e),g(!1),l()},w=function(){var t=Object(et.a)($e.a.mark((function t(n){var r,a;return $e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p(JSON.parse(n.selectedSubject)),a={id:r.id?r.id:0,createdDate:"",name:n.newSubjectName,semester:"0"===n.checkedSemester?S.SPRING:S.AUTUMN},!f){t.next=9;break}return t.next=5,nt({title:"Confirm new details of ".concat(r.name),contentText:"New name: ".concat(a.name,". New semester: ").concat(a.semester)});case 5:t.sent&&e.addEditSubject(a,!0),t.next=13;break;case 9:return t.next=11,nt({title:"Are you sure you want to add new subject ".concat(a.name,"?"),contentText:"If you have selected the current semester as this subject's semester, it will be visible\n                to all users once it is saved"});case 11:t.sent&&e.addEditSubject(a,!1);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(et.a)($e.a.mark((function t(n){var r;return $e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=p(JSON.parse(n.selectedSubject)),t.next=3,nt({title:"Delete ".concat(r.name,"?"),contentText:"This action is final and cannot be reverted."});case 3:t.sent&&e.deleteSubject(r.id);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=a.a.createElement("form",{className:"mt-2 mb-2",style:{width:"80%",margin:"auto"}},a.a.createElement(ke,{ref:De(U,o),inputConfig:U,onChange:function(e){return function(e){var t=Object(C.a)({},O),n=Object(C.a)({},j),r=JSON.parse(e.currentTarget.value);"<New Subject>"===r.name?(g(!1),t.placeholder="Subject Name",t.defaultValue="",t.key="<New Subject>"):(g(!0),t.defaultValue=r.name,t.key=r.name,n.buttons.forEach((function(e){e.key=r.name,e.defaultChecked=e.label===r.semester}))),k(t),F(n)}(e)}}),a.a.createElement(Oe,{ref:De(O,o),inputConfig:O,error:Le(E,O)}),a.a.createElement(tt,{ref:De(j,o),inputConfig:j}),a.a.createElement("div",{className:"form-group"},a.a.createElement(Ae,{onClick:i(w)},f?"Save Edit":"Save New"),f?a.a.createElement(ve,{className:"ml-2",onClick:i(M)},"Delete Subject"):null));return a.a.createElement(a.a.Fragment,null,B)},at=Object(m.b)((function(e){return{subjects:e.subjects.allSubjectData,loading:e.queue.loading,error:e.queue.error}}),(function(e){return Object(d.b)({fetchSubjects:Se,addEditSubject:pe,deleteSubject:ge},e)}))(rt),ct=function(){return a.a.createElement("div",{style:{margin:"auto"}},a.a.createElement(Ae,{onClick:function(){te.get("resources/queuedata/",{headers:oe()}).then((function(e){!function(e,t,n){var r=window.URL.createObjectURL(new Blob([n])),a=document.createElement("a");a.href=r,a.setAttribute("download","".concat(e,".").concat(t)),document.body.appendChild(a),a.click()}("queueData","csv",e.data)}))}},"Export"))},ut=function(e){return a.a.createElement(a.a.Fragment,null,e.isAuthenticated?a.a.createElement("div",{className:"d-flex flex-row "+We.a.adminPage},a.a.createElement(ze,{widthPercent:25,shadow:!0,header:"Subjects"},a.a.createElement(at,null)),a.a.createElement(ze,{widthPercent:25,shadow:!0,header:"Export Queue Data"},a.a.createElement(ct,null))):a.a.createElement("h1",{style:{color:"red"}},"UNAUTHORIZED"))},ot=Object(m.b)((function(e){var t;return{isAuthenticated:void 0!==(null===(t=e.auth.user)||void 0===t?void 0:t.token)}}))(ut),it=Object(K.o)(Object(m.b)((function(e){var t;return{isAuthenticated:null!=(null===(t=e.auth.user)||void 0===t?void 0:t.token)}}),(function(e){return Object(d.b)({autoLogin:ae,getSubjectData:Se},e)}))((function(e){var t=e.autoLogin,n=e.getSubjectData;Object(r.useEffect)((function(){t(),n()}),[t,n]);var c=a.a.createElement(K.g,null,a.a.createElement(K.d,{path:Z,exact:!0,render:Ke}),a.a.createElement(K.c,{to:Z}));return e.isAuthenticated&&(c=a.a.createElement(K.g,null,a.a.createElement(K.d,{path:"/Orakel_Queue_Client/Admin",render:function(){return a.a.createElement(ot,null)}}),a.a.createElement(K.d,{path:Z,exact:!0,render:Ke}),a.a.createElement(K.c,{to:Z}))),a.a.createElement("div",{style:{textAlign:"center"}},c)}))),lt=(n(89),n(90),n(101)),Et=n(40),st=n(22),dt=n(23),mt=n.n(dt),ft=function(e){var t=e.onLoginSubmit,n=e.clearLoginError,r=Fe()(ye.a);return r.fire({title:"Orakel Innlogging",html:'<input type="text" id="login" class="swal2-input" placeholder="Brukernavn">\n                        <input type="password" id="password" class="swal2-input" placeholder="Passord">',confirmButtonText:"Logg Inn",showLoaderOnConfirm:!0,showCancelButton:!0,cancelButtonColor:"#d33",cancelButtonText:"Avbryt",allowOutsideClick:function(){return!r.isLoading()},preConfirm:function(){var e=Object(et.a)($e.a.mark((function e(){var n,a,c,u;return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.getPopup().querySelector("#login"),a=r.getPopup().querySelector("#password"),c=n.value.trim(),u=a.value.trim(),c&&u){e.next=7;break}return r.showValidationMessage("Oppgi brukernavn og passord!"),e.abrupt("return",!1);case 7:return e.next=9,t(c,u);case 9:if(e.sent){e.next=13;break}return r.showValidationMessage("Ugyldig brukernavn eller passord!"),e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).then((function(e){e.isDismissed&&n()}))},Tt=function(e){var t=e.isAuthenticated?mt.a.authenticatedLinkText:mt.a.defaultLinkText,r=e.isAuthenticated?{expand:"lg",bg:"warning"}:{variant:"dark",expand:"lg",bg:"primary"},c=a.a.createElement(st.a.Link,{className:t,onClick:e.isAuthenticated?e.logoutHandler:function(){ft({onLoginSubmit:e.onLoginSubmit,clearLoginError:e.clearLoginError})}},e.isAuthenticated?"Logg Ut":"Logg Inn");return a.a.createElement(lt.a,r,a.a.createElement(lt.a.Brand,{className:mt.a.invisibleOnMobile},a.a.createElement("img",{className:mt.a.brandImage,alt:"OsloMet Logo",src:n(e.isAuthenticated?95:96)})),a.a.createElement(Et.LinkContainer,{to:Z},a.a.createElement(st.a.Link,null,a.a.createElement(lt.a.Brand,{className:e.isAuthenticated?mt.a.authenticatedBrandText:mt.a.brandText},"Orakel"))),a.a.createElement(lt.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(lt.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(st.a,null,a.a.createElement(st.a.Link,{className:t,onClick:function(){return Ie({title:"Discord",iconType:"info",contentText:"For digital veiledning benytter vi oss av Discord, og har v\xe5r egen server til dette. Inne p\xe5 serveren setter vi pris p\xe5 om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle \xe5 laste ned Discord klienten i stedet for \xe5 bruke tjenesten gjennom nettleseren.",hyperlinks:[{url:"https://discord.gg/jgzqYpX",text:"Orakel Discord"}]})}},"Discord"),a.a.createElement(st.a.Link,{className:t,onClick:function(){return Ie({title:"Feilrapportering",iconType:"info",contentText:"Orakels k\xf8system er et fritidsprosjekt som er utviklet og vedlikeholdes av en person, det er derfor en viss fare for bugs og feil. </br> </br> Problemer rapporteres til Orakeltjenesten p\xe5 Facebook eller Discord, eller direkte til utvikler Fredrik Pedersen. Vi setter ogs\xe5 pris p\xe5 \xf8nsker om tilleggsfunksjonalitet :)",hyperlinks:[{url:"https://www.facebook.com/OrakelOsloMet",text:"Orakels Facebookside"},{url:"https://github.com/FredrikPedersen",text:"Fredrik Pedersen Github"}]})}},"Feilrapportering"),a.a.createElement(st.a.Link,{className:t,onClick:function(){return Ie({title:"Om Orakels K\xf8system",iconType:"info",contentText:"Coming Soon!",hyperlinks:[{url:"https://orakelqueueservice.herokuapp.com/api/resources/userguide/",text:"Brukerveiledning"}]})}},"Om"),e.isAuthenticated?a.a.createElement(Et.LinkContainer,{to:"/Orakel_Queue_Client/Admin"},a.a.createElement(st.a.Link,{className:t},"Admin")):null,c)))},St=Object(m.b)((function(e){var t;return{isAuthenticated:void 0!==(null===(t=e.auth.user)||void 0===t?void 0:t.token)}}),(function(e){return Object(d.b)({onLoginSubmit:ce,clearLoginError:ue,logoutHandler:re},e)}))(Tt),_t=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(St,null),a.a.createElement("main",{className:"mb-5"},e.children))},Ct=Object(d.e)(G,X(Object(d.a)(f.a))),bt=a.a.createElement(m.a,{store:Ct},a.a.createElement(s.BrowserRouter,null,a.a.createElement(_t,null,a.a.createElement(it,null))));u.a.render(bt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.f9a7a5ee.chunk.js.map