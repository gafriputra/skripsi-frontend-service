(function(t){function a(a){for(var e,n,c=a[0],l=a[1],o=a[2],u=0,m=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(e=!1)}e&&(r.splice(a--,1),t=c(c.s=s[0]))}return t}var e={},i={app:0},r=[];function n(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e70c0564"}[t]+".js"}function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var a=[],s=i[t];if(0!==s)if(s)a.push(s[2]);else{var e=new Promise((function(a,e){s=i[t]=[a,e]}));a.push(s[2]=e);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=n(t);var o=new Error;r=function(a){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var e=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",o.name="ChunkLoadError",o.type=e,o.request=r,s[1](o)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(a)},c.m=t,c.c=e,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(s,e,function(a){return t[a]}.bind(null,e));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("85ec"),i=s.n(e);i.a},"08ca":function(t,a,s){},"373b":function(t,a,s){"use strict";var e=s("3c60"),i=s.n(e);i.a},"3c60":function(t,a,s){},"421f":function(t,a,s){"use strict";var e=s("08ca"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n={name:"App",mounted:function(){var t=localStorage.getItem("keranjang");if(t)try{this.$store.dispatch("getKeranjang",JSON.parse(t))}catch(a){localStorage.removeItem("keranjang")}}},c=n,l=(s("034f"),s("2877")),o=Object(l["a"])(c,i,r,!1,null,null,null),u=o.exports,d=(s("d3b7"),s("8c4f")),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("HeaderMitrabakti"),s("HeroMitrabakti"),s("HeroProductMitrabakti"),s("InstagramMitrabakti"),s("PartnerMitrabakti"),s("FooterMitrabakti")],1)},v=[],g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"header-section"},[t._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"inner-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2 col-md-2"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:"img/logo_website_shayna.png",alt:""}})])],1)]),s("div",{staticClass:"col-lg-7 col-md-7"}),s("div",{staticClass:"col-lg-3 text-right col-md-3"},[s("ul",{staticClass:"nav-right"},[s("li",{staticClass:"cart-icon"},[t._v(" Keranjang Belanja "),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon_bag_alt"}),s("span",[t._v(t._s(t.keranjang.length))])]),s("div",{staticClass:"cart-hover"},[s("div",{staticClass:"select-items"},[s("table",[t.keranjang.length>0?s("tbody",t._l(t.keranjang,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"si-pic"},[s("img",{staticClass:"photo-item",attrs:{src:a.image}})]),s("td",{staticClass:"si-text"},[s("div",{staticClass:"product-selected"},[s("p",[t._v(t._s(t.$rupiah(a.price*a.qty)))]),s("h6",[t._v(t._s(a.name))])])]),s("td",{staticClass:"si-close",on:{click:function(s){return t.removeItem(a.id)}}},[s("i",{staticClass:"ti-close"})])])})),0):s("tbody",[t._m(1)])])]),s("div",{staticClass:"select-total"},[s("span",[t._v("total:")]),s("h5",[t._v(t._s(t.$rupiah(t.totalHarga)))])]),s("div",{staticClass:"select-button"},[s("router-link",{staticClass:"primary-btn view-card",attrs:{to:"/cart"}},[t._v("VIEW CARD")]),s("router-link",{staticClass:"primary-btn checkout-btn",attrs:{to:"/cart"}},[t._v("CHECK OUT")])],1)])])])])])])])])},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header-top"},[s("div",{staticClass:"container"},[s("div",{staticClass:"ht-left"},[s("div",{staticClass:"mail-service"},[s("i",{staticClass:"fa fa-envelope"}),t._v(" hello.shayna@gmail.com ")]),s("div",{staticClass:"phone-service"},[s("i",{staticClass:"fa fa-phone"}),t._v(" +628 22081996 ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",[t._v("Keranjang Kosong")])])}],f=(s("13d5"),s("5530")),h=s("2f62"),C={name:"HeaderMitrabakti",methods:{removeItem:function(t){this.$store.dispatch("deleteItem",t)}},computed:Object(f["a"])({},Object(h["c"])(["keranjang"]),{totalHarga:function(){return this.keranjang.reduce((function(t,a){return t+a.price}),0)}})},_=C,b=(s("373b"),Object(l["a"])(_,g,p,!1,null,"f921efee",null)),k=b.exports,y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"hero-section"},[s("carousel",{staticClass:"hero-items",attrs:{items:1,autoplay:!0,nav:!1,loop:!0}},[s("div",{staticClass:"single-hero-items set-bg",staticStyle:{"background-image":"url('/img/hero-1.jpg')"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("span",[t._v("Bag,kids")]),s("h1",[t._v("Black friday")]),s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ")]),s("a",{staticClass:"primary-btn",attrs:{href:"#"}},[t._v("Shop Now")])])])])]),s("div",{staticClass:"single-hero-items set-bg",staticStyle:{"background-image":"url('/img/hero-2.jpg')"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("span",[t._v("Bag,kids")]),s("h1",[t._v("Yellow friday")]),s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ")]),s("a",{staticClass:"primary-btn",attrs:{href:"#"}},[t._v("Shop Now")])])])])]),s("div",{staticClass:"single-hero-items set-bg",staticStyle:{"background-image":"url('/img/hero-3.jpg')"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("span",[t._v("Bag,kids")]),s("h1",[t._v("Yellow friday")]),s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ")]),s("a",{staticClass:"primary-btn",attrs:{href:"#"}},[t._v("Shop Now")])])])])])])],1)},j=[],w=s("7ec7"),$=s.n(w),I={name:"HeroMitrabakti",components:{carousel:$.a}},x=I,P=Object(l["a"])(x,y,j,!1,null,null,null),M=P.exports,S=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"women-banner spad"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t.products.length>0?s("div",{staticClass:"col-lg-12 mt-5"},[s("carousel",{staticClass:"product-slider",attrs:{items:3,autoplay:!0,nav:!1,dots:!1,loop:!0}},t._l(t.products,(function(a){return s("div",{key:a.id,staticClass:"product-item"},[s("div",{staticClass:"pi-pic"},[s("img",{attrs:{src:a.galleries.length?a.galleries[0].image_url:"",alt:""}}),s("ul",[s("li",{staticClass:"w-icon active"},[s("a",{on:{click:function(s){return t.saveKeranjang(a)}}},[s("i",{staticClass:"icon_bag_alt"})])]),s("li",{staticClass:"quick-view"},[s("router-link",{attrs:{to:/product/+a.slug}},[t._v("+ Quick View")])],1)])]),s("div",{staticClass:"pi-text"},[s("div",{staticClass:"catagory-name"},[t._v(t._s(a.type))]),s("router-link",{attrs:{to:/product/+a.slug}},[s("h5",[t._v(t._s(a.name))])]),s("div",{staticClass:"product-price"},[t._v(" "+t._s(t.$rupiah(a.price))+" "),s("span",[t._v("$35.00")])])],1)])})),0)],1):s("div",{staticClass:"col-lg-12"},[s("p",[t._v("Produk Terbaru Belum Tersedia")])])])])])},E=[],H=(s("b0c0"),s("bc3a")),O=s.n(H),A={name:"HeroProductMitrabakti",components:{carousel:$.a},data:function(){return{products:[]}},methods:Object(f["a"])({},Object(h["b"])(["addKeranjang"]),{saveKeranjang:function(t){var a={id:t.id,name:t.name,price:t.price,image:t.galleries[0].image,qty:1};this.$store.dispatch("addKeranjang",a),this.$swal.fire({icon:"success",title:a.name,text:"Berhasil Masuk Keranjang"})}}),mounted:function(){var t=this;O.a.get("".concat(this.$hostname,"/products/")).then((function(a){return t.products=a.data.data})).catch((function(t){return console.log(t)}))}},K=A,N=(s("8a7b"),Object(l["a"])(K,S,E,!1,null,"6cc23416",null)),D=N.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"instagram-photo"},[s("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-1.jpg')"}},[s("div",{staticClass:"inside-text"},[s("i",{staticClass:"ti-instagram"}),s("h5",[s("a",{attrs:{href:"#"}},[t._v("shayna_gallery")])])])]),s("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-2.jpg')"}},[s("div",{staticClass:"inside-text"},[s("i",{staticClass:"ti-instagram"}),s("h5",[s("a",{attrs:{href:"#"}},[t._v("shayna_gallery")])])])]),s("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-3.jpg')"}},[s("div",{staticClass:"inside-text"},[s("i",{staticClass:"ti-instagram"}),s("h5",[s("a",{attrs:{href:"#"}},[t._v("shayna_gallery")])])])]),s("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-4.jpg')"}},[s("div",{staticClass:"inside-text"},[s("i",{staticClass:"ti-instagram"}),s("h5",[s("a",{attrs:{href:"#"}},[t._v("shayna_gallery")])])])]),s("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-5.jpg')"}},[s("div",{staticClass:"inside-text"},[s("i",{staticClass:"ti-instagram"}),s("h5",[s("a",{attrs:{href:"#"}},[t._v("shayna_gallery")])])])]),s("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-6.jpg')"}},[s("div",{staticClass:"inside-text"},[s("i",{staticClass:"ti-instagram"}),s("h5",[s("a",{attrs:{href:"#"}},[t._v("shayna_gallery")])])])])])}],T={name:"InstagramMitrabakti"},B=T,R=Object(l["a"])(B,L,q,!1,null,null,null),F=R.exports,V=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"partner-logo"},[s("div",{staticClass:"container"},[s("carousel",{staticClass:"logo-carousel",attrs:{items:5,autoplay:!0,nav:!1,dots:!1}},[s("div",{staticClass:"logo-item"},[s("div",{staticClass:"tablecell-inner"},[s("img",{attrs:{src:"img/logo-carousel/logo-1.png",alt:""}})])]),s("div",{staticClass:"logo-item"},[s("div",{staticClass:"tablecell-inner"},[s("img",{attrs:{src:"img/logo-carousel/logo-2.png",alt:""}})])]),s("div",{staticClass:"logo-item"},[s("div",{staticClass:"tablecell-inner"},[s("img",{attrs:{src:"img/logo-carousel/logo-3.png",alt:""}})])]),s("div",{staticClass:"logo-item"},[s("div",{staticClass:"tablecell-inner"},[s("img",{attrs:{src:"img/logo-carousel/logo-4.png",alt:""}})])]),s("div",{staticClass:"logo-item"},[s("div",{staticClass:"tablecell-inner"},[s("img",{attrs:{src:"img/logo-carousel/logo-5.png",alt:""}})])])])],1)])},Q=[],J={name:"PartnerMitrabakti",components:{carousel:$.a}},U=J,Y=Object(l["a"])(U,V,Q,!1,null,null,null),z=Y.exports,G=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"footer-section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row text-left"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"footer-left"},[s("div",{staticClass:"footer-logo"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"img/logo_website_shayna_white.png",alt:""}})])]),s("ul",[s("li",[t._v("Address: Setra Duta, Bandung")]),s("li",[t._v("Phone: +628 22081996")]),s("li",[t._v("Email: hello.shayna@gmail.com")])]),s("div",{staticClass:"footer-social"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-instagram"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-pinterest"})])])])]),s("div",{staticClass:"col-lg-3 offset-lg-1"},[s("div",{staticClass:"footer-widget"},[s("h5",[t._v("Information")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("About Us")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Checkout")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Serivius")])])])])]),s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"footer-widget"},[s("h5",[t._v("My Account")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("My Account")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Shopping Cart")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Shop")])])])])])])]),s("div",{staticClass:"copyright-reserved"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"copyright-text"},[t._v(" Copyright © 2020 All rights reserved | Mitrabakti ")])])])])])])}],X={name:"FooterMitrabakti"},Z=X,tt=Object(l["a"])(Z,G,W,!1,null,null,null),at=tt.exports,st={name:"Home",components:{HeaderMitrabakti:k,HeroMitrabakti:M,HeroProductMitrabakti:D,InstagramMitrabakti:F,PartnerMitrabakti:z,FooterMitrabakti:at}},et=st,it=Object(l["a"])(et,m,v,!1,null,null,null),rt=it.exports,nt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product"},[s("HeaderMitrabakti"),s("div",{staticClass:"breacrumb-section text-left"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"breadcrumb-text product-more"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-home"}),t._v(" Home ")]),s("span",[t._v("Detail")])],1)])])])]),s("section",{staticClass:"product-shop spad page-details"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"product-pic-zoom"},[s("img",{staticClass:"product-big-img",attrs:{src:t.gambar_utama,alt:""}})]),t.galleries.length>0?s("div",{staticClass:"product-thumbs"},[s("carousel",{staticClass:"product-thumbs-track ps-slider",attrs:{items:3,autoplay:!0,nav:!1,dots:!1,loop:!0}},t._l(t.galleries,(function(a){return s("div",{key:a.id,staticClass:"pt",class:a.image_url==t.gambar_utama&&"active",on:{click:function(s){return t.changeImage(a.image_url)}}},[s("img",{attrs:{src:a.image_url,alt:""}})])})),0)],1):t._e()]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"product-details text-left"},[s("div",{staticClass:"pd-title"},[s("span",[t._v(t._s(t.productDetails.type))]),s("h3",[t._v(t._s(t.productDetails.name))])]),s("div",{staticClass:"pd-desc"},[s("p",{domProps:{innerHTML:t._s(t.productDetails.description)}}),s("h4",[t._v(t._s(t.$rupiah(t.productDetails.price)))])]),s("div",{staticClass:"quantity"},[s("a",{staticClass:"primary-btn pd-cart",attrs:{href:"#"},on:{click:function(a){return t.saveKeranjang(t.productDetails)}}},[t._v("Add To Cart")])])])])])])])])]),s("RelatedProductsMitrabakti"),s("FooterMitrabakti")],1)},ct=[],lt=(s("99af"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"related-products spad"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-sm-6"},[s("div",{staticClass:"product-item"},[s("div",{staticClass:"pi-pic"},[s("img",{attrs:{src:"img/products/women-1.jpg",alt:""}}),s("ul",[t._m(1),s("li",{staticClass:"quick-view"},[s("router-link",{attrs:{to:"/product"}},[t._v(" + Quick View ")])],1)])]),t._m(2)])]),t._m(3),t._m(4),t._m(5)])])])}),ot=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"section-title"},[s("h2",[t._v("Related Products")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"w-icon active"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon_bag_alt"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pi-text"},[s("div",{staticClass:"catagory-name"},[t._v("Coat")]),s("a",{attrs:{href:"#"}},[s("h5",[t._v("Pure Pineapple")])]),s("div",{staticClass:"product-price"},[t._v(" $14.00 "),s("span",[t._v("$35.00")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-3 col-sm-6"},[s("div",{staticClass:"product-item"},[s("div",{staticClass:"pi-pic"},[s("img",{attrs:{src:"img/products/women-2.jpg",alt:""}}),s("ul",[s("li",{staticClass:"w-icon active"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon_bag_alt"})])]),s("li",{staticClass:"quick-view"},[s("a",{attrs:{href:"#"}},[t._v("+ Quick View")])])])]),s("div",{staticClass:"pi-text"},[s("div",{staticClass:"catagory-name"},[t._v("Shoes")]),s("a",{attrs:{href:"#"}},[s("h5",[t._v("Guangzhou sweater")])]),s("div",{staticClass:"product-price"},[t._v(" $13.00 ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-3 col-sm-6"},[s("div",{staticClass:"product-item"},[s("div",{staticClass:"pi-pic"},[s("img",{attrs:{src:"img/products/women-3.jpg",alt:""}}),s("ul",[s("li",{staticClass:"w-icon active"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon_bag_alt"})])]),s("li",{staticClass:"quick-view"},[s("a",{attrs:{href:"#"}},[t._v("+ Quick View")])])])]),s("div",{staticClass:"pi-text"},[s("div",{staticClass:"catagory-name"},[t._v("Towel")]),s("a",{attrs:{href:"#"}},[s("h5",[t._v("Pure Pineapple")])]),s("div",{staticClass:"product-price"},[t._v(" $34.00 ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-3 col-sm-6"},[s("div",{staticClass:"product-item"},[s("div",{staticClass:"pi-pic"},[s("img",{attrs:{src:"img/products/women-4.jpg",alt:""}}),s("ul",[s("li",{staticClass:"w-icon active"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon_bag_alt"})])]),s("li",{staticClass:"quick-view"},[s("a",{attrs:{href:"#"}},[t._v("+ Quick View")])])])]),s("div",{staticClass:"pi-text"},[s("div",{staticClass:"catagory-name"},[t._v("Towel")]),s("a",{attrs:{href:"#"}},[s("h5",[t._v("Converse Shoes")])]),s("div",{staticClass:"product-price"},[t._v(" $34.00 ")])])])])}],ut={name:"RelatedProductsMitrabakti"},dt=ut,mt=Object(l["a"])(dt,lt,ot,!1,null,null,null),vt=mt.exports,gt={name:"Product",components:{HeaderMitrabakti:k,RelatedProductsMitrabakti:vt,FooterMitrabakti:at,carousel:$.a},data:function(){return{gambar_utama:"",productDetails:[],keranjangUser:[],galleries:[]}},methods:{changeImage:function(t){this.gambar_utama=t},setDataPicture:function(t){this.productDetails=t,this.gambar_utama=t.galleries[0].image_url,this.galleries=t.galleries},saveKeranjang:function(t){var a={id:t.id,name:t.name,price:t.price,image:t.galleries[0].image_url,qty:1};this.$store.dispatch("addKeranjang",a),this.$swal.fire({icon:"success",title:a.name,text:"Berhasil Masuk Keranjang"})}},mounted:function(){var t=this;O.a.get("".concat(this.$hostname,"/products/").concat(this.$route.params.slug)).then((function(a){return t.setDataPicture(a.data.data)})).catch((function(t){return console.log(t)}))}},pt=gt,ft=(s("421f"),Object(l["a"])(pt,nt,ct,!1,null,"5189aff1",null)),ht=ft.exports,Ct=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"shopping"}},[s("HeaderMitrabakti"),s("div",{staticClass:"breacrumb-section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 text-left"},[s("div",{staticClass:"breadcrumb-text product-more"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-home"}),t._v(" Home ")]),s("span",[t._v("Shopping Cart")])],1)])])])]),s("section",{staticClass:"shopping-cart spad"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"cart-table"},[s("table",[t._m(0),t.keranjang.length>0?s("tbody",t._l(t.keranjang,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"cart-pic first-row"},[s("img",{staticClass:"img-cart",attrs:{src:a.image}})]),s("td",{staticClass:"cart-title first-row text-center"},[s("h5",[t._v(t._s(a.name))])]),s("td",{staticClass:"p-price first-row"},[t._v(t._s(t.$rupiah(a.price*a.qty))+" ("+t._s(a.qty)+" pcs)")]),s("td",{staticClass:"delete-item"},[s("a",{on:{click:function(s){return t.removeItem(a.id)}}},[s("i",{staticClass:"material-icons"},[t._v("close")])])])])})),0):s("tbody",[t._m(1)])])])]),t.keranjang.length>0?s("div",{staticClass:"col-lg-8 text-left"},[s("h4",{staticClass:"mb-4"},[t._v("Informasi Pembeli:")]),s("div",{staticClass:"user-checkout"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"namaLengkap"}},[t._v("Nama lengkap")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.name,expression:"customerInfo.name"}],staticClass:"form-control",attrs:{type:"text",id:"namaLengkap","aria-describedby":"namaHelp",placeholder:"Masukan Nama"},domProps:{value:t.customerInfo.name},on:{input:function(a){a.target.composing||t.$set(t.customerInfo,"name",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"namaLengkap"}},[t._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.email,expression:"customerInfo.email"}],staticClass:"form-control",attrs:{type:"email",id:"emailAddress","aria-describedby":"emailHelp",placeholder:"Masukan Email"},domProps:{value:t.customerInfo.email},on:{input:function(a){a.target.composing||t.$set(t.customerInfo,"email",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"namaLengkap"}},[t._v("No. HP")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.phone,expression:"customerInfo.phone"}],staticClass:"form-control",attrs:{type:"text",id:"noHP","aria-describedby":"noHPHelp",placeholder:"Masukan No. HP"},domProps:{value:t.customerInfo.phone},on:{input:function(a){a.target.composing||t.$set(t.customerInfo,"phone",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"alamatLengkap"}},[t._v("Alamat Lengkap")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.address,expression:"customerInfo.address"}],staticClass:"form-control",attrs:{id:"alamatLengkap",rows:"3"},domProps:{value:t.customerInfo.address},on:{input:function(a){a.target.composing||t.$set(t.customerInfo,"address",a.target.value)}}})])])])]):t._e()])]),t.keranjang.length>0?s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"proceed-checkout text-left"},[s("ul",[s("li",{staticClass:"subtotal"},[t._v(" Subtotal "),s("span",[t._v(t._s(t.$rupiah(t.totalHarga)))])]),t._m(2),s("li",{staticClass:"subtotal mt-3"},[t._v(" Total Biaya "),s("span",[t._v(t._s(t.$rupiah(t.totalHargaPajak)))])]),t._m(3),t._m(4),s("li",{staticClass:"subtotal mt-3"},[t._v(" Nama Penerima "),s("span",[t._v(t._s(t.customerInfo.name))])])]),s("a",{staticClass:"proceed-btn",attrs:{href:"#"},on:{click:function(a){return t.checkout()}}},[t._v("I ALREADY PAID")])])])])]):t._e()])])])],1)},_t=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("Image")]),s("th",{staticClass:"p-name text-center"},[t._v("Product Name")]),s("th",[t._v("Price")]),s("th",[t._v("Action")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",{attrs:{colspan:"4"}},[t._v("Keranjang Kosong")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"subtotal mt-3"},[t._v(" Pajak "),s("span",[t._v("10%")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"subtotal mt-3"},[t._v(" Bank Transfer "),s("span",[t._v("Mandiri")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"subtotal mt-3"},[t._v(" No. Rekening "),s("span",[t._v("2208 1996 1403")])])}],bt=(s("d81d"),s("ac1f"),s("5319"),{name:"Cart",components:{HeaderMitrabakti:k},data:function(){return{customerInfo:{name:"",email:"",phone:"",address:""}}},methods:{removeItem:function(t){this.$store.dispatch("deleteItem",t)},checkout:function(){var t=this,a=this.keranjang.map((function(t){return{product_id:t.id,qty:t.qty,price:t.price*t.qty}})),s={name:this.customerInfo.name,email:this.customerInfo.email,phone:this.customerInfo.phone,address:this.customerInfo.address,transaction_total:this.totalHargaPajak,status:"PENDING",details:a},e={"Access-Control-Allow-Origin":"*","Content-type":"application/json","Access-Control-Allow-Methods":"*"};O.a.get("".concat(this.$hostname,"/transactions")).then((function(t){return console.log(t)})),O.a.post("".concat(this.$hostname,"/transactions"),s,{headers:e}).then((function(a){t.$store.dispatch("deleteAllItem"),window.location.replace(a.data.data.payment_url)})).catch((function(t){return console.log(t)}))}},computed:Object(f["a"])({},Object(h["c"])(["keranjang"]),{totalHarga:function(){return this.keranjang.reduce((function(t,a){return t+a.price}),0)},totalHargaPajak:function(){var t=this.totalHarga;return t+.11*t}})}),kt=bt,yt=(s("e2b8"),Object(l["a"])(kt,Ct,_t,!1,null,"2326f149",null)),jt=yt.exports,wt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"success"}},[s("div",{staticClass:"d-flex success-checkout align-items-center justify-content-center"},[s("div",{staticClass:"col col-lg-4 text-center"},[s("img",{attrs:{src:"img/success-buy.png",alt:"",width:"294"}}),s("h3",{staticClass:"mt-4"},[t._v(" Sukses Terbayar! ")]),s("p",{staticClass:"mt-2"},[t._v(" Silakan tunggu update terbaru dari kami via email yang sudah Anda daftarkan sebelumnya. ")]),s("router-link",{staticClass:"primary-btn pd-cart mt-3",attrs:{to:"/"}},[t._v("Back to Home")])],1)])])},$t=[],It={name:"Success"},xt=It,Pt=Object(l["a"])(xt,wt,$t,!1,null,null,null),Mt=Pt.exports;e["a"].use(d["a"]);var St=[{path:"/",name:"Home",component:rt},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/product/:slug",props:!0,name:"Product",component:ht},{path:"/cart",name:"Cart",component:jt},{path:"/success",name:"Success",component:Mt}],Et=new d["a"]({routes:St,mode:"history"}),Ht=Et,Ot=(s("4de4"),s("7db0"),{state:function(){return{keranjang:[]}},getters:{keranjang:function(t){return t.keranjang}},mutations:{getKeranjang:function(t,a){t.keranjang=a},addKeranjang:function(t,a){var s=t.keranjang.find((function(t){return t.id==a.id}));s?s.qty++:t.keranjang.push(a)},deleteItem:function(t,a){t.keranjang=t.keranjang.filter((function(t){return t.id!=a}))},deleteAllItem:function(t){t.keranjang=[],localStorage.removeItem("keranjang")},setLocalStorage:function(t){var a=JSON.stringify(t.keranjang);localStorage.setItem("keranjang",a)}},actions:{getKeranjang:function(t,a){var s=t.commit;s("getKeranjang",a)},addKeranjang:function(t,a){var s=t.commit;s("addKeranjang",a),s("setLocalStorage")},deleteItem:function(t,a){var s=t.commit;s("deleteItem",a),s("setLocalStorage")},deleteAllItem:function(t){var a=t.commit;a("deleteAllItem")}}}),At=s("f9d5"),Kt=s.n(At);s("4413");e["a"].use(h["a"]),e["a"].use(Kt.a);var Nt=new h["a"].Store(Ot);e["a"].config.productionTip=!1,e["a"].prototype.$hostname="http://103.172.205.242:8000",e["a"].prototype.$rupiah=function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)},new e["a"]({router:Ht,store:Nt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,a,s){},"8a7b":function(t,a,s){"use strict";var e=s("d4c1"),i=s.n(e);i.a},b5c9:function(t,a,s){},d4c1:function(t,a,s){},e2b8:function(t,a,s){"use strict";var e=s("b5c9"),i=s.n(e);i.a}});
//# sourceMappingURL=app.24a7f39f.js.map