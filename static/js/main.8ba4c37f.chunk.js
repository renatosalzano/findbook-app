(this["webpackJsonpfindbook-app"]=this["webpackJsonpfindbook-app"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(31),s=n.n(a),o=n(10),i=n.n(o),u=n(12),l=n(4),j=n(18),b=n.n(j),d=n(1),h=Object(c.createContext)(),O=function(e){var t=e.children,n={find:Object(c.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c,r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.type,c=t.query,r=t.max_res,a=t.volume_id,e.prev=1,e.t0=n,e.next="SRC_BOOKS"===e.t0?5:"SRC_BOOK_ID"===e.t0?8:11;break;case 5:return e.next=7,b.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(c,"&maxResults=").concat(r));case 7:return e.abrupt("return",s=e.sent);case 8:return e.next=10,b.a.get("https://www.googleapis.com/books/v1/volumes/".concat(a));case 10:return e.abrupt("return",s=e.sent);case 11:return e.abrupt("return",s);case 12:e.next=17;break;case 14:return e.prev=14,e.t1=e.catch(1),e.abrupt("return",s=e.t1.response);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),[])}.find,r=function(){var e=Object(c.useState)("light_mode"),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("findbook_theme");"light"===e&&(r("light_mode"),setTimeout((function(){i(!0)}),400)),"dark"===e&&(r("dark_mode"),setTimeout((function(){i(!0)}),400))}),[]),{switch_theme:function(){return i(!0),"light_mode"===n?(localStorage.setItem("findbook_theme","dark"),r("dark_mode")):"dark_mode"===n?(localStorage.setItem("findbook_theme","light"),r("light_mode")):void 0},transition:o,theme:n}}(),a=r.switch_theme,s=r.transition,o=r.theme,j=Object(c.useState)([]),O=Object(l.a)(j,2),f=O[0],m=O[1],x=Object(c.useState)(null),p=Object(l.a)(x,2),v=p[0],_=p[1],g=Object(c.useState)(""),k=Object(l.a)(g,2),N=k[0],y=k[1],C=Object(c.useState)(""),S=Object(l.a)(C,2),w=S[0],E=S[1],q=Object(c.useState)("0"),B=Object(l.a)(q,2),I=B[0],F=B[1],R=function(e){switch(e.status){case 200:return 0===e.data.totalItems&&(F("100"),y("NOT FOUND"),!0);case 404:return y("404"),F("100"),!0;case 500:return y("500"),F("100"),!0;default:return y("ERROR"),F("100"),!0}},M=Object(c.useCallback)((function(e){var t=e.replace(/[+]/g," ");E((function(e){return t}))}),[]),D=Object(c.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var c,r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.query,r=t.max_res,a=void 0===r?5:r,y(""),F("20"),e.next=5,n({type:"SRC_BOOKS",query:c,max_res:a});case 5:if(s=e.sent,F("60"),!R(s)){e.next=9;break}return e.abrupt("return",m([]));case 9:return m((function(e){return s.data.items})),M(c),F("100"),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,M]),T=Object(c.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var c,r,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>1&&void 0!==a[1]?a[1]:"",y(""),F("20"),e.next=5,n({type:"SRC_BOOK_ID",volume_id:t});case 5:if(r=e.sent,F("60"),!R(r)){e.next=9;break}return e.abrupt("return",_(null));case 9:return _((function(e){return r.data})),M(c),F("100"),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,M]);return Object(c.useEffect)((function(){"100"===I&&setTimeout((function(){F("0")}),500)}),[I]),Object(c.useEffect)((function(){}),[]),Object(d.jsx)(h.Provider,{value:{books:f,book:v,loading:I,search_books:D,search_one_book:T,select_book:function(e){var t=f.filter((function(t){return t.id===e}))[0];_((function(e){return t}))},value:w,setValue:E,update_value:M,error:N,switch_theme:a,transition:s,theme:o},children:t})},f=n(11),m=n(3),x=n(32),p=function(e){var t=e.advanced_search_event,n=e.active;return Object(d.jsx)("div",{className:"advanced_button ".concat(n?"active":""),onClick:t,children:Object(d.jsx)(x.a,{})})},v=n(33),_=function(){var e=Object(c.useContext)(h),t=e.switch_theme,n=e.theme;return Object(d.jsx)("div",{className:"theme_button ".concat(n),onClick:t,children:Object(d.jsx)(v.a,{})})},g=n(15),k=n(19),N=function(e){var t=Object(c.useState)(e),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(c.useCallback)((function(e){var t,n=Object.keys(e),c=function(e){return r[e].trim().replace(/ /g,"+")};return t=1===n.length?c(n):n.map((function(e){return""!==r[e]?"".concat(e,":").concat(c(e)):""})).filter(Boolean).join("+"),u((function(e){return t}))}),[r,u]);return Object(c.useEffect)((function(){j(r)}),[r,j]),{input:r,setInput:a,query:i,input_handler:function(e){e.preventDefault();var t=e.target.name,n=e.target.value;a((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(g.a)({},t,n))}))}}},y=n(34),C=function(){return Object(d.jsx)("button",{type:"submit",className:"search_button",children:Object(d.jsx)(y.a,{})})},S=function(e){var t=e.placeholder,n=e.onChange,c=e.value,r=e.class_name,a=e.target_name,s=e.onFocus,o=e.onBlur;return Object(d.jsx)("input",{type:"text",name:a,className:r,placeholder:t,onChange:n,value:c,onFocus:s,onBlur:o})},w=Object(c.memo)(S),E=function(){var e=Object(c.useContext)(h).loading,t={display:"flex",width:"".concat(e,"%"),height:"100%",transition:"width 0.5s"};return Object(d.jsx)("div",{className:"loading_bar",style:{position:"absolute",left:"0",bottom:"-2px",display:"flex",width:"100%",height:"2px"},children:Object(d.jsx)("div",{className:"bar",style:t})})},q=function(e){var t=e.submit_search,n=e.extend,c=e.toggle_extend,r=e.toggle_focus,a=e.isFocus,s=e.advanced,o=N({intitle:"",inauthor:"",inpublisher:""}),i=o.input,u=o.query,l=o.input_handler,j=n?"expand":"";return Object(d.jsxs)("form",{className:"src_container ".concat(j," ").concat(s," ").concat(a),onSubmit:function(e){if(e.preventDefault(),u)return t(u)},onMouseEnter:c,onMouseLeave:c,children:[Object(d.jsxs)("div",{className:"grid",children:[Object(d.jsx)(w,{target_name:"intitle",placeholder:"Titolo",class_name:"input_title",value:i.intitle,onChange:l,onFocus:r,onBlur:r}),Object(d.jsx)(w,{target_name:"inauthor",placeholder:"Autore",class_name:"input_author",value:i.inauthor,onChange:l,onFocus:r,onBlur:r}),Object(d.jsx)(w,{target_name:"inpublisher",placeholder:"Editore",class_name:"input_publisher",value:i.inpublisher,onChange:l,onFocus:r,onBlur:r})]}),Object(d.jsx)(C,{}),Object(d.jsx)(E,{})]})},B=Object(c.memo)(q),I=function(e){var t=e.submit_search,n=e.extend,r=e.isFocus,a=e.toggle_extend,s=e.toggle_focus,o=e.value,i=N({query:o}),u=i.input,l=i.setInput,j=i.query,b=i.input_handler;return Object(c.useEffect)((function(){l({query:o})}),[o,l]),Object(d.jsxs)("form",{className:"src_container ".concat(n," ").concat(r),onSubmit:function(e){return e.preventDefault(),t(j,u.query)},onMouseEnter:a,onMouseLeave:a,children:[Object(d.jsx)(w,{target_name:"query",placeholder:"FindBook...",value:u.query,onChange:b,onFocus:s,onBlur:s}),Object(d.jsx)(C,{}),Object(d.jsx)(E,{})]})},F=Object(c.memo)(I),R=function(){var e=Object(m.g)(),t=Object(c.useContext)(h),n=t.value,r=t.books,a=t.book,s=t.error,o=t.transition,j=Object(c.useState)("middle"),b=Object(l.a)(j,2),O=b[0],f=b[1],x=Object(c.useState)(""),v=Object(l.a)(x,2),g=v[0],k=v[1],N=Object(c.useState)(""),y=Object(l.a)(N,2),C=y[0],S=y[1],w=Object(c.useState)(""),E=Object(l.a)(w,2),q=E[0],I=E[1],R=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=3;break}return f(""),t.abrupt("return",e.push("/search/".concat(n)));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){if(r.length>0||a||s)return f("")}),[r,a,s]);var M=function(){return k(g?"":"focus")},D=function(){return I(q?"":"extend")},T={transition:o?"0.4s":"none"};return Object(d.jsxs)("div",{className:"fixed_container",children:[Object(d.jsx)("div",{className:"margin",style:T}),Object(d.jsxs)("div",{className:"search_bar_container ".concat(O),children:[C?Object(d.jsx)(B,{submit_search:R,extend:q,isFocus:g,toggle_extend:D,toggle_focus:M,advanced:C}):Object(d.jsx)(F,{submit_search:R,extend:q,isFocus:g,toggle_extend:D,toggle_focus:M,value:n}),Object(d.jsxs)("div",{className:"button_container ".concat(q?"hidden":""),children:[Object(d.jsx)(p,{advanced_search_event:function(){return S(C?"":"advanced")},active:C}),Object(d.jsx)(_,{})]})]})]})},M=function(e){var t=e.thumbnail,n=e.id,c=e.title,r=e.is_link,a=Object(m.g)(),s={cursor:r?"pointer":"default"};return Object(d.jsx)("div",{onClick:function(){if(r){var e=c.replace(/ /g,"+");return a.push("/book/".concat(n).concat(c?"/"+e:""))}},className:"cover",style:s,children:Object(d.jsx)("img",{src:t,alt:"book_cover"})})},D=function(e){var t=e.title,n=e.is_link,c=e.id,r=Object(m.g)(),a={cursor:n?"pointer":"default"};return Object(d.jsx)("div",{onClick:function(){if(n){var e=t.replace(/ /g,"+");return r.push("/book/".concat(c).concat(t?"/"+e:""))}},className:"cover cover_miss",style:a,children:Object(d.jsx)("span",{children:t})})},T=function(e){var t=e.authors;return Object(d.jsx)("div",{className:"authors",children:t.map((function(e){return Object(d.jsx)(H,{author:e},e)}))})},H=function(e){var t=e.author,n=t.replace(/ /g,"+");return Object(d.jsx)(f.b,{className:"link",to:"/search/inauthor:".concat(n),children:t})},K=function(e){var t=e.publisher,n=t.replace(/ /g,"+");return Object(d.jsxs)("div",{className:"publisher",children:[Object(d.jsx)("strong",{children:"Editore:"}),Object(d.jsx)(f.b,{className:"link",to:"/search/inpublisher:".concat(n),children:t})]})},L=function(e){var t=e.isbn;return Object(d.jsxs)("div",{className:"ISBN_container",children:[Object(d.jsx)("strong",{children:"ISBN:"}),"OTHER"!==t.type&&t.map((function(e,t){return[t>0&&", ",Object(d.jsx)("span",{children:e.identifier},e.identifier)]}))]})},P=function(e){var t=e.num;return Object(d.jsxs)("div",{className:"page_count",children:[Object(d.jsx)("strong",{children:"Numero di pagine:"}),Object(d.jsx)("span",{children:t})]})},U=function(e){var t=e.date;return Object(d.jsxs)("div",{className:"book_date",children:[Object(d.jsx)("strong",{children:"Pubblicazione:"}),Object(d.jsx)("span",{children:t.split("-")[0]})]})},J=function(e){var t=e.text,n=e.max_length,r=Object(c.useState)(!1),a=Object(l.a)(r,2),s=a[0],o=a[1],i=Object(c.createRef)(null);return Object(c.useLayoutEffect)((function(){var e=i.current.textContent;i.current.textContent.length>n&&!s?i.current.textContent=e.slice(0,n).replace(/<[^>]+>/g,""):i.current.textContent=t.replace(/<[^>]+>/g,"")}),[i,s,t,n]),Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("span",{ref:i,children:t}),t.length>=n&&Object(d.jsx)("span",{className:"expand_text",onClick:function(){o((function(e){return!e}))},children:s?"[Chiudi]":"...Continua"})]})},z=Object(c.memo)(J),A=function(e){var t=e.volume_info,n=t.title,c=t.authors,r=t.imageLinks,a=t.description,s=t.publisher,o=t.printedPageCount,i=t.publishedDate,u=t.industryIdentifiers;return Object(d.jsxs)("div",{className:"book_detail book",children:[Object(d.jsxs)("div",{className:"head",children:[n&&Object(d.jsx)("strong",{className:"title",children:n}),c&&Object(d.jsx)(T,{authors:c})]}),Object(d.jsxs)("div",{className:"book_body",children:[r?Object(d.jsx)(M,{thumbnail:r.thumbnail,title:n}):Object(d.jsx)(D,{title:n}),Object(d.jsxs)("div",{className:"book_info",children:[s&&Object(d.jsx)(K,{publisher:s}),u&&Object(d.jsx)(L,{isbn:u}),o&&Object(d.jsx)(P,{num:o}),i&&Object(d.jsx)(U,{date:i})]})]}),a&&Object(d.jsx)(z,{text:a})]})},Q=function(e){var t=e.match,n=t.params.id,r=t.params.title,a=Object(c.useContext)(h),s=a.book,o=a.search_one_book;return Object(c.useEffect)((function(){o(n,r)}),[n,r,o]),Object(d.jsx)("div",{className:"book_page",children:s&&Object(d.jsx)(A,{volume_info:s.volumeInfo})})},V=Object(c.memo)(Q),G=n(22),W=function(){return"light_mode"===Object(c.useContext)(h).theme?Object(d.jsx)(Y,{}):Object(d.jsx)(X,{})},X=function(){return Object(d.jsxs)("div",{className:"not_found",children:[Object(d.jsx)("strong",{children:"404 RUUN!"}),Object(d.jsx)(G.a,{className:"evil_book"}),Object(d.jsx)($,{})]})},Y=function(){return Object(d.jsxs)("div",{className:"not_found",children:[Object(d.jsx)("strong",{children:"404 OOPS!"}),Object(d.jsx)(G.b,{className:"good_book"}),Object(d.jsx)("span",{className:"random_quotes",children:"Nessun risultato"})]})},Z=["HaHaHaHa","Qui non c'\xe9 niente...","Ti sei perso?","Khandar Estrada khandos thrus...","Mi hai trovato!"],$=function(){var e=Object(c.useRef)(0);return Object(c.useEffect)((function(){e.current=Math.floor(5*Math.random())}),[e]),Object(d.jsx)("span",{className:"random_quotes",children:'"'+Z[e.current]+'"'})},ee=function(e){var t=e.volume_info,n=e.book_id,c=t.title,r=t.authors,a=t.imageLinks,s=t.description;return Object(d.jsxs)("div",{className:"book",children:[c&&Object(d.jsx)("strong",{className:"title",children:c}),Object(d.jsxs)("div",{className:"book_body",children:[a?Object(d.jsx)(M,{thumbnail:a.thumbnail,id:n,title:c,is_link:!0}):Object(d.jsx)(D,{id:n,title:c,is_link:!0}),Object(d.jsxs)("div",{className:"book_info",children:[r&&Object(d.jsx)(T,{authors:r}),s&&Object(d.jsx)(z,{text:s,max_length:250})]})]})]})},te=function(e){var t=e.book_list;return Object(d.jsx)("div",{className:"book_list",children:t&&t.map((function(e){return Object(d.jsx)(ee,{volume_info:e.volumeInfo,book_id:e.id},e.id)}))})},ne=Object(c.memo)(te),ce=function(e){var t=e.match.params.src,n=Object(c.useContext)(h),r=n.books,a=n.search_books,s=n.error;return Object(c.useEffect)((function(){a({query:t})}),[a,t]),Object(d.jsxs)("div",{className:"search_page",children:[r.length>0&&Object(d.jsx)(ne,{book_list:r}),s&&Object(d.jsx)(W,{})]})},re=function(){var e=Object(c.useContext)(h),t=e.theme,n={transition:e.transition?"0.4s":"none"};return Object(d.jsx)(f.a,{children:Object(d.jsx)("div",{className:"layout ".concat(t),style:n,children:Object(d.jsxs)("div",{className:"pages",children:[Object(d.jsx)(R,{}),Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.a,{from:"/search/",to:"/",exact:!0}),Object(d.jsx)(m.b,{path:"/search/:src",component:ce}),Object(d.jsx)(m.a,{from:"/book/",to:"/",exact:!0}),Object(d.jsx)(m.b,{path:"/book/:id/:title",component:V})]})]})})})};n(68),n(69),n(70),n(71);var ae=function(){return Object(d.jsx)(O,{children:Object(d.jsx)(re,{})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.8ba4c37f.chunk.js.map