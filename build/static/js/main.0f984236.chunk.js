(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={Contact__list:"PhoneBook_Contact__list__39gFN",Contact__item:"PhoneBook_Contact__item__3HOKz",Button__remove:"PhoneBook_Button__remove__J888H"}},22:function(t,e,n){t.exports={Filter__search:"Filter_Filter__search__26RSF",Filter__input:"Filter_Filter__input__3v6lu"}},41:function(t,e,n){},7:function(t,e,n){t.exports={Forma:"InputPhonebook_Forma__3orIP",Forma__input:"InputPhonebook_Forma__input__1es7_",nameinput:"InputPhonebook_nameinput__3g3SN",Button__form:"InputPhonebook_Button__form__3p6Qc"}},72:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),u=(n(41),n(10)),s=n(5),i=Object(s.b)("contacts/addFilter"),l=n(6),b=n.n(l),j=n(17),d=n(12),_=n.n(d);_.a.defaults.baseURL="https://61e892337ced4a00172ff620.mockapi.io/contacts/contacts";var f=Object(s.c)("contacts/fetchContacts",Object(j.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("/contacts");case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))),m=Object(s.c)("contacts/addContacts",function(){var t=Object(j.a)(b.a.mark((function t(e){var n,a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:e.name,phone:e.number},t.prev=1,t.next=4,_.a.post("/contacts",n);case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()),p=Object(s.c)("contacts/deleteContact",function(){var t=Object(j.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.delete("/contacts/".concat(e));case 3:return t.abrupt("return",e);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()),O=n(8),h=function(t){return t.contacts.filter},v=Object(O.a)([function(t){return t.contacts.items},h],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),x=n(23),C=n(7),k=n.n(C),F=n(24),g=n(1),N=function(t){var e=t.onSubmit,n=Object(a.useState)(""),r=Object(x.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),s=Object(x.a)(u,2),i=s[0],l=s[1],b=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":l(a);break;default:return}},j=function(){o(""),l("")};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:c,number:i}),j()},className:k.a.Forma,children:[Object(g.jsx)("label",{className:k.a.nameinput}),"Name",Object(g.jsx)("input",{className:k.a.Forma__input,id:Object(F.a)(),type:"text",name:"name",value:c,placeholder:"Ivan Petrov",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b}),Object(g.jsx)("label",{className:k.a.nameinput}),"Number",Object(g.jsx)("input",{className:k.a.Forma__input,id:Object(F.a)(),type:"text",name:"number",value:i,placeholder:"+380990000000",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b}),Object(g.jsx)("button",{type:"submit",className:k.a.Button__form,children:"Add Contact"})]})})},w=n(18),y=n.n(w),B=function(t){var e=t.contacts,n=void 0===e?[]:e,a=t.delContact;return Object(g.jsx)("ul",{className:y.a.Contact__list,children:n.map((function(t){return Object(g.jsxs)("li",{className:y.a.Contact__item,children:[Object(g.jsxs)("span",{children:[t.name," : ",t.phone]}),Object(g.jsx)("button",{type:"button",onClick:function(){return a(t.id)},className:y.a.Button__remove,children:"Remove"})]},t.id)}))})},P=n(22),S=n.n(P),I=function(t){var e=t.filterContact,n=t.value;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{className:S.a.Filter__search,children:[Object(g.jsx)("label",{children:"Search"}),Object(g.jsx)("input",{className:S.a.Filter__input,value:n,onChange:e,placeholder:"Enter your name"})]})})},A=n(9),L=n.n(A);var z=function(){var t=Object(u.c)(v),e=Object(u.c)(h),n=Object(u.b)();Object(a.useEffect)((function(){f&&n(f())}),[n]);var r=function(e){return t.find((function(t){return t.name===e}))},c=e.toLowerCase(),o=t.filter((function(t){return t.name.toLowerCase().includes(c)}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:L.a.PhoneBookBlock,children:Object(g.jsx)(N,{onSubmit:function(t){var e={name:t.name,number:t.number};if(r(e.name))return alert("Name ".concat(e.name,"already on your list\n      "));n(m(e))}})}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:L.a.Contacts__title,children:"Contacts"}),t.length>0?Object(g.jsx)(I,{filterContact:function(t){var e=t.currentTarget;n(i(e))},value:e}):Object(g.jsx)("p",{className:L.a.Filter__text,children:"No contacts\ud83d\ude41"})]}),Object(g.jsx)(B,{contacts:o,delContact:function(t){n(p(t))}})]})]})};var J,Z,E=function(){return Object(g.jsx)("div",{className:L.a.Container,children:Object(g.jsx)(z,{})})},R=(n(68),n(20)),q=n(2),H=n(34),K=n(4),M=Object(s.d)([],(J={},Object(K.a)(J,f.fulfilled,(function(t,e){return e.payload})),Object(K.a)(J,m.fulfilled,(function(t,e){return[].concat(Object(R.a)(t),[e.payload])})),Object(K.a)(J,p.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),J)),Q=Object(s.d)(!1,(Z={},Object(K.a)(Z,f.pending,(function(){return!0})),Object(K.a)(Z,m.fulfilled,(function(){return!1})),Object(K.a)(Z,m.rejected,(function(){return!1})),Object(K.a)(Z,p.pending,(function(){return!0})),Object(K.a)(Z,p.fulfilled,(function(){return!1})),Object(K.a)(Z,p.rejected,(function(){return!1})),Object(K.a)(Z,f.pending,(function(){return!0})),Object(K.a)(Z,f.fulfilled,(function(){return!1})),Object(K.a)(Z,f.rejected,(function(){return!1})),Z)),T=Object(s.d)("",Object(K.a)({},i,(function(t,e){return e.payload}))),D=Object(q.b)({items:M,filter:T,loading:Q}),U=n(36),$=n(35),G={key:"contacts",storage:n.n($).a};Object(H.createLogger)();var V=Object(q.b)({contacts:D}),W=Object(U.a)(G,V),X=Object(s.a)({reducer:W,middleware:[],devTools:!1});o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(u.a,{store:X,children:Object(g.jsx)(E,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={Container:"PhoneBook_Container__2wQ_Z",Contacts__title:"PhoneBook_Contacts__title__1uPsK",Filter__text:"PhoneBook_Filter__text__3_4v4"}}},[[72,1,2]]]);
//# sourceMappingURL=main.0f984236.chunk.js.map