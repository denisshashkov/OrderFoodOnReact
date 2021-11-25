(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3u4vU",control:"Checkout_control__HPvSS",actions:"Checkout_actions__1Q4Qc",submit:"Checkout_submit__3-yL2",invalid:"Checkout_invalid__3EkQ8"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1yC-f",total:"Cart_total__HC6My",actions:"Cart_actions__1NwLn","button--alt":"Cart_button--alt__3NbZq",button:"Cart_button__1Wmp8"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3XUpq",summary:"CartItem_summary___ZBbi",price:"CartItem_price__JQIiY",amount:"CartItem_amount__2f4pM",actions:"CartItem_actions__e95cf"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1b-wa",icon:"HeaderCartButton_icon__wU6N6",badge:"HeaderCartButton_badge__3abIk",bump:"HeaderCartButton_bump__2-E4k"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2UMt4",description:"MealItem_description__1Pl4q",price:"MealItem_price__20bh9"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2IH4V","meals-appear":"AvailableMeals_meals-appear__2lShO",MealsIsLoading:"AvailableMeals_MealsIsLoading__3fzHv",MealsError:"AvailableMeals_MealsError__1sVtA"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Xrdh",modal:"Modal_modal__gqDgu","slide-down":"Modal_slide-down__3tj03"}},,function(e,t,n){e.exports={header:"Header_header__1qdBq","main-image":"Header_main-image__2UTF4"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2KHP4"}},function(e,t,n){e.exports={card:"Card_card__3JVxN"}},function(e,t,n){e.exports={input:"Input_input___MrNY"}},function(e,t,n){e.exports={form:"MealItemForm_form__CT_aw"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:{}}),d=n(10),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),h=n.n(O),x=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table of food"})})]})},f=n(19),p=n.n(f),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),N=n(12),y=n(20),g=n.n(y),k=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},A=n(4),I=n(21),M=n.n(I),S=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:M.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(A.a)({ref:t},e.input))]})})),w=n(22),E=n.n(w),F=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(S,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},H=n(13),P=n.n(H),R=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:P.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:P.a.description,children:e.description}),Object(o.jsx)("div",{className:P.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},V=n(14),B=n.n(V),D=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),i=Object(r.a)(a,2),l=i[0],u=i[1],d=Object(s.useState)(null),j=Object(r.a)(d,2),m=j[0],b=j[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://foodorderonreact-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l?Object(o.jsx)("section",{className:B.a.MealsIsLoading,children:Object(o.jsx)("p",{children:"Loading..."})}):m?Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsx)("p",{children:m})}):Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(k,{children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},T=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(D,{})]})},q=n(3),L=n.n(q),J=function(e){return""===e.trim()},U=function(e){var t=Object(s.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(L.a.control," ").concat(c.name?"":L.a.invalid),m="".concat(L.a.control," ").concat(c.street?"":L.a.invalid),b="".concat(L.a.control," ").concat(c.postalCode?"":L.a.invalid),O="".concat(L.a.control," ").concat(c.city?"":L.a.invalid);return Object(o.jsxs)("form",{className:L.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=l.current.value,r=u.current.value,s=d.current.value,o=!J(n),j=!J(c),m=!J(s),b=r.trim().length>=5;a({name:o,street:j,postalCode:b,city:m}),o&&j&&m&&b&&e.onConfirm({name:n,street:c,postalCode:r,city:s})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(o.jsx)("p",{children:"Please Enter Valid Name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Please Enter Valid Street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"Please Enter Valid Postal Code (5 character long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Please Enter Valid City Name!"})]}),Object(o.jsxs)("div",{className:L.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:L.a.submit,children:"Confirm"})]})]})},Y=n(7),z=n.n(Y),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:z.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:z.a.summary,children:[Object(o.jsx)("span",{className:z.a.price,children:t}),Object(o.jsxs)("span",{className:z.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:z.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(15),X=n.n($),Z=function(e){return Object(o.jsx)("div",{className:X.a.backdrop,onClick:e.onClose})},K=function(e){return Object(o.jsx)("div",{className:X.a.modal,children:Object(o.jsx)("div",{className:X.a.content,children:e.children})})},W=document.getElementById("overlays"),G=function(e){return Object(o.jsxs)(s.Fragment,{children:[a.a.createPortal(Object(o.jsx)(Z,{onClose:e.onClose}),W),a.a.createPortal(Object(o.jsx)(K,{children:e.children}),W)]})},ee=n(5),te=n.n(ee),ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],f=Object(s.useContext)(u),p="$".concat(f.totalAmount.toFixed(2)),_=f.items.length>0,v=function(e){f.removeItem(e)},y=function(e){f.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},g=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://foodorderonreact-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f.items})});case 3:m(!1),x(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(o.jsx)("ul",{className:te.a["cart-items"],children:f.items.map((function(e){return Object(o.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),I=Object(o.jsxs)(i.a.Fragment,{children:[k,Object(o.jsxs)("div",{className:te.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),c&&Object(o.jsx)(U,{onConfirm:g,onCancel:e.onClose}),!c&&Object(o.jsxs)("div",{className:te.a.actions,children:[Object(o.jsx)("button",{className:te.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:te.a.button,onClick:function(){a(!0)},children:"Order"})]})]}),M=Object(o.jsx)("p",{children:"Sending order data..."}),S=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:te.a.actions,children:Object(o.jsx)("button",{className:te.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(G,{onClose:e.onClose,children:[!j&&!h&&I,j&&M,!j&&h&&S]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ae},se=function(e){var t=Object(s.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(x,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(T,{})})]})};a.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.e2edce77.chunk.js.map