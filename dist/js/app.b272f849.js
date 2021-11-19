(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header",{on:{filterSelected:t.searchedQuery}}),i("Main",{attrs:{movies:t.moviesList,tvSeries:t.seriesList}})],1)},r=[],o=i("bc3a"),s=i.n(o),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"searchBar"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text",placeholder:"insert text to search"},domProps:{value:t.inputText},on:{change:t.filterSelected,input:function(e){e.target.composing||(t.inputText=e.target.value)}}})])])},l=[],u={name:"Header",data:function(){return{inputText:""}},watch:{inputText:function(){this.filterSelected()}},methods:{filterSelected:function(){this.$emit("filterSelected",this.inputText)}}},p=u,f=i("2877"),g=Object(f["a"])(p,c,l,!1,null,null,null),d=g.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("main",[i("h2",{staticClass:"mt-5"},[t._v("Movies")]),i("div",{staticClass:"container justify-content-center"},[i("div",{staticClass:"row row-cols-5  d-flex gy-5"},t._l(t.movies,(function(t){return i("div",{key:t.id,staticClass:"col d-flex"},[i("Card",{attrs:{posterPath:t.poster_path,title:t.title,originalTitle:t.original_title,originalLanguage:t.original_language,voteAverage:t.vote_average}})],1)})),0)]),i("h2",{staticClass:"mt-5"},[t._v("Tv Shows")]),i("div",{staticClass:"container justify-content-center mb-5"},[i("div",{staticClass:"row row-cols-5  d-flex gy-5"},t._l(t.tvSeries,(function(t){return i("div",{key:t.id,staticClass:"col d-flex"},[i("Card",{attrs:{posterPath:t.poster_path,title:t.name,originalTitle:t.original_name,originalLanguage:t.original_language,voteAverage:t.vote_average}})],1)})),0)])])])},m=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("img",{staticClass:"card-img-top",attrs:{src:t.posterPath?t.posterInitialPath+t.posterPath:"https://img.icons8.com/ios/100/000000/no-image.png",alt:"..."}}),i("div",{staticClass:"card-body"},[i("h2",[t._v(t._s(t.title))]),i("h3",[t._v(t._s(t.originalTitle))]),i("img",{staticClass:"d-inline-block",attrs:{src:t.flagsList[t.originalLanguage]?t.flagsList[t.originalLanguage]:t.flagsList.other,alt:t.originalLanguage,title:t.originalLanguage}}),i("h5",[t._v("vote: "),t._l(t.voteToStars(t.voteAverage),(function(t,e){return i("i",{key:e,class:t,attrs:{"aria-hidden":"true"}})}))],2)])])},y=[],b=(i("a9e3"),{name:"Card",props:{posterPath:String,title:String,originalTitle:String,originalLanguage:String,voteAverage:Number},data:function(){return{flagsList:{en:"https://img.icons8.com/office/30/000000/great-britain.png",it:"https://img.icons8.com/office/30/000000/italy.png",es:"https://img.icons8.com/office/30/000000/spain.png",fr:"https://img.icons8.com/office/30/000000/france.png",de:"https://img.icons8.com/office/30/000000/germany.png",pl:"https://img.icons8.com/office/30/000000/poland.png",ru:"https://img.icons8.com/office/30/000000/russia-federation.png",ja:"https://img.icons8.com/office/30/000000/japan.png",other:"https://img.icons8.com/office/30/000000/globe.png"},posterInitialPath:"https://image.tmdb.org/t/p/w342/"}},methods:{voteToStars:function(t){var e=Math.ceil(t/2),i=[];while(i.length<5)i.length<e?i.push("fa fa-star"):i.push("fa fa-star-o");return i}}}),_=b,x=Object(f["a"])(_,v,y,!1,null,null,null),S=x.exports,w={components:{Card:S},name:"Main",props:{movies:Array,tvSeries:Array},data:function(){return{}},methods:{}},T=w,j=Object(f["a"])(T,h,m,!1,null,null,null),C=j.exports,L={name:"App",components:{Header:d,Main:C},data:function(){return{apiUrl:"https://api.themoviedb.org/3/search/",apiKey:"44892648a93082408df03e205628971e",listToSearch:"",moviesList:[],seriesList:[]}},computed:{},methods:{fetchData:function(t,e){var i=this;s.a.get(this.apiUrl+t,{params:{api_key:this.apiKey,query:e}}).then((function(e){"movie"===t?(i.moviesList=e.data.results,i.listToSearch="movies"):(i.seriesList=e.data.results,i.listToSearch="series")}))},searchedQuery:function(t){this.fetchData("movie",t),this.fetchData("tv",t)}},mounted:function(){}},O=L,P=(i("5c0b"),Object(f["a"])(O,a,r,!1,null,null,null)),M=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.b272f849.js.map