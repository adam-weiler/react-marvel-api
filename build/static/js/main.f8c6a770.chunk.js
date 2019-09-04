(window["webpackJsonpreact-marvel-api"]=window["webpackJsonpreact-marvel-api"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(19),c=a.n(n),o=(a(26),a(9)),i=a(2),l=a(1),h=a(4),u=a(3),m=a(7),p=a(5),f=(a(27),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{className:"result-card",onClick:this.props.onClick},s.a.createElement("figure",{className:"result-card__image"},s.a.createElement("img",{src:this.props.image,alt:this.props.title})),s.a.createElement("div",{className:"result-card__info"},s.a.createElement("h2",null,this.props.title)))}}]),t}(r.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.searchTerm?"Whoops, we couldn't find any results for \""+this.props.searchTerm+"\". Why don't you try another one?":"Whoops, it looks like you haven't searched for anything yet. Use the search bar above to get started!";return s.a.createElement("div",{className:"no-results"},s.a.createElement("h1",null,e))}}]),t}(r.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.results.length?this.props.results.map(function(t){return s.a.createElement(f,{key:t.id,image:t.thumbnail.path+"."+t.thumbnail.extension,title:"Characters"===e.props.searchType?t.name:t.title,onClick:function(){return e.props.onResultClick(t.id)}})}):s.a.createElement(b,{searchTerm:this.props.searchTerm});return s.a.createElement("section",{className:"results-list"},t)}}]),t}(r.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"result-details"},s.a.createElement("div",{className:"result-details__backdrop"}),s.a.createElement("div",{className:"result-details__info"},s.a.createElement("div",{className:"result-details__info__header"},s.a.createElement("figure",null,s.a.createElement("img",{src:this.props.image,alt:this.props.title}))),s.a.createElement("div",{className:"result-details__info__body"},s.a.createElement("div",{className:"result-details__info__body__content"},s.a.createElement("h1",null,this.props.title),s.a.createElement("p",null,s.a.createElement("strong",null,"Appears In: ",this.props.stories.available||0," stories")),s.a.createElement("p",null,this.props.description),s.a.createElement("p",null,s.a.createElement("strong",null,"Links:")),s.a.createElement("ul",null,this.props.urls.map(function(e,t){var a=e.url,r=e.type;return s.a.createElement("li",{key:t},s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r))}))),s.a.createElement("button",{onClick:this.props.onClose}))))}}]),t}(r.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-type-controls"},s.a.createElement("label",{htmlFor:"selectCharacters"},s.a.createElement("input",{id:"selectCharacters",name:"searchType",type:"radio",checked:"Characters"===this.props.searchType,onChange:this.props.onCharactersClick}),s.a.createElement("span",null,"Characters")),s.a.createElement("label",{htmlFor:"selectComics"},s.a.createElement("input",{id:"selectComics",name:"searchType",type:"radio",checked:"Comics"===this.props.searchType,onChange:this.props.onComicsClick}),s.a.createElement("span",null,"Comics")))}}]),t}(r.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={searchTerm:e.searchTerm},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"search-bar",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"search-bar__field",type:"text",value:this.state.searchTerm,placeholder:"Heroes search (eg. Spider-Man)",onChange:function(t){return e.setState({searchTerm:t.target.value})}}),s.a.createElement(v,{onCharactersClick:function(){return e.props.onSelect("Characters")},onComicsClick:function(){return e.props.onSelect("Comics")},searchType:this.props.searchType}),s.a.createElement("button",{className:"search-bar__submit",type:"submit"},"Search"))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.searchTerm)}}]),t}(r.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"error"},s.a.createElement("h1",null,"Whoops, something went wrong!"))}}]),t}(r.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loading"},s.a.createElement("h1",null,'Loading results for "'+this.props.searchTerm+'".'))}}]),t}(r.Component),j=a(20),E=a(8),T=a.n(E);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=function(){function e(t){Object(i.a)(this,e),this.apiKey=t.apiKey}return Object(l.a)(e,null,[{key:"ENDPOINTS",get:function(){return{comic:"https://gateway.marvel.com:443/v1/public/comics",comics:"https://gateway.marvel.com:443/v1/public/comics",character:"https://gateway.marvel.com:443/v1/public/characters",characters:"https://gateway.marvel.com:443/v1/public/characters"}}}]),Object(l.a)(e,[{key:"getAuthConfig",value:function(){return{apikey:this.apiKey}}},{key:"getCharacters",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("Params object");var a=S({},t,{},this.getAuthConfig());console.log("Endpoints object");var r=e.ENDPOINTS.characters;return console.log("Axios request"),T.a.get(r,{params:a}).then(function(e){return console.log(e.data.data),e.data.data})}},{key:"getCharacter",value:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("Params object");var r=S({},a,{},this.getAuthConfig());console.log("Endpoings object");var s="".concat(e.ENDPOINTS.character,"/").concat(t);return console.log("Axios request"),T.a.get(s,{params:r}).then(function(e){return console.log(e.data.data),e.data.data})}},{key:"getComics",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("Params object");var a=S({},t,{},this.getAuthConfig());console.log("Endpoints object");var r=e.ENDPOINTS.comics;return console.log("Axios request"),T.a.get(r,{params:a}).then(function(e){return console.log(e.data.data),e.data.data})}},{key:"getComic",value:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("Params object");var r=S({},a,{},this.getAuthConfig());console.log("Endpoings object");var s="".concat(e.ENDPOINTS.comic,"/").concat(t);return console.log("Axios request"),T.a.get(s,{params:r}).then(function(e){return console.log(e.data.data),e.data.data})}}]),e}(),_=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{className:"load-more",onClick:this.props.onClick},"Load More")}}]),t}(r.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={searchTerm:"",searchType:"Characters",results:[],selectedResult:null},a.fetchCharacter=a.fetchCharacter.bind(Object(m.a)(a)),a.fetchMoreCharacters=a.fetchMoreCharacters.bind(Object(m.a)(a)),a.fetchComic=a.fetchComic.bind(Object(m.a)(a)),a.fetchMoreComics=a.fetchMoreComics.bind(Object(m.a)(a)),a.marvelService=new N({apiKey:a.props.apiKey}),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.hasError?s.a.createElement(O,null):this.state.isLoading?s.a.createElement(C,{searchTerm:this.state.searchTerm}):s.a.createElement(d,{results:this.state.results,searchTerm:this.state.searchTerm,searchType:this.state.searchType,onResultClick:"Characters"===this.state.searchType?this.fetchCharacter:this.fetchComic}),a=this.state.selectedResult?s.a.createElement(g,{image:this.state.selectedResult.thumbnail.path+"."+this.state.selectedResult.thumbnail.extension,title:this.state.selectedResult.name,description:this.state.selectedResult.description,stories:this.state.selectedResult.stories,urls:this.state.selectedResult.urls,onClose:function(){return e.setState({selectedResult:null})}}):"",r=this.state.canLoadMore?s.a.createElement(_,{onClick:"Characters"===this.state.searchType?this.fetchMoreCharacters:this.fetchMoreComics}):"";return s.a.createElement("section",{className:"app"},s.a.createElement(y,{searchTerm:this.state.searchTerm,searchType:this.state.searchType,onSubmit:function(t){return e.setState({searchTerm:t})},onSelect:function(t){return e.setState({searchType:t})}}),t,r,a)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchType,r=this.state.searchTerm,s=t.searchType,n=t.searchTerm;!r||r===n&&a===s||("Characters"===a?this.fetchCharacters():this.fetchComics())}},{key:"fetchCharacters",value:function(){var e=this;console.log("__ PUTTING THE APP INTO A LOADING STATE."),this.setState({isLoading:!0,hasError:!1}),this.marvelService.getCharacters({nameStartsWith:this.state.searchTerm}).then(function(t){console.log(".then:"),console.log(t.results),e.setState({results:t.results,isLoading:!1,canLoadMore:t.total>t.offset+t.count})}).catch(function(t){console.error(t),e.setState({hasError:!0})})}},{key:"fetchCharacter",value:function(e){var t=this;console.log(" Loading an Hero!"),this.marvelService.getCharacter(e).then(function(e){console.log(".then:");var a=e.results[0];console.log(a),t.setState({selectedResult:a})}).catch(function(e){console.error(e),t.setState({hasError:!0})})}},{key:"fetchMoreCharacters",value:function(){var e=this;this.marvelService.getCharacters({nameStartsWith:this.state.searchTerm,offset:this.state.results.length}).then(function(t){console.log(".then:"),console.log(t.results),e.setState({results:[].concat(Object(o.a)(e.state.results),Object(o.a)(t.results)),canLoadMore:t.total>t.offset+t.count})}).catch(function(t){console.error(t),e.setState({hasError:!0})})}},{key:"fetchComics",value:function(){var e=this;console.log("__ PUTTING THE APP INTO A LOADING STATE."),this.setState({isLoading:!0,hasError:!1}),this.marvelService.getComics({titleStartsWith:this.state.searchTerm}).then(function(t){console.log(".then:"),console.log(t.results),e.setState({results:t.results,isLoading:!1,canLoadMore:t.total>t.offset+t.count})}).catch(function(t){console.error(t),e.setState({hasError:!0})})}},{key:"fetchComic",value:function(e){var t=this;console.log(" Loading an Hero!"),this.marvelService.getComic(e).then(function(e){console.log(".then:");var a=e.results[0];console.log(a),t.setState({selectedResult:a})}).catch(function(e){console.error(e),t.setState({hasError:!0})})}},{key:"fetchMoreComics",value:function(){var e=this;this.marvelService.getComics({titleStartsWith:this.state.searchTerm,offset:this.state.results.length}).then(function(t){console.log(".then:"),console.log(t.results),e.setState({results:[].concat(Object(o.a)(e.state.results),Object(o.a)(t.results)),canLoadMore:t.total>t.offset+t.count})}).catch(function(t){console.error(t),e.setState({hasError:!0})})}}]),t}(r.Component);c.a.render(s.a.createElement(P,{apiKey:"26e6d76c1b31f6696395800bd58639a7"}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f8c6a770.chunk.js.map