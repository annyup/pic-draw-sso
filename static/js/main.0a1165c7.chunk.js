(this["webpackJsonppic-draw-sso"]=this["webpackJsonppic-draw-sso"]||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),o=(a(35),a(3)),s=a(4),l=a(6),u=a(5),h=(a(36),function(e){return r.a.createElement("button",{className:"button-style",onClick:e.onClick},"Clear",r.a.createElement("i",{class:"far fa-trash-alt"}))}),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getColor=function(t){var a=t.currentTarget.value;e.props.onClick(a)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"button-style",onClick:this.props.onClick},r.a.createElement("label",{htmlFor:"choose-color"},"Color"),r.a.createElement("input",{className:"choose-color",name:"choose-color",id:"choose-color",type:"color",onChange:this.getColor}))}}]),a}(n.Component),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getEraser=function(){e.props.onClick("#FFFFFF")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"button-style",onClick:this.getEraser},"Eraser",r.a.createElement("i",{class:"fas fa-eraser"}))}}]),a}(n.Component),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).saveCanvas=function(){e.props.onClick()},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"button-style",onClick:this.saveCanvas},"Save",r.a.createElement("i",{class:"far fa-save"}))}}]),a}(n.Component),v=a(11),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.b,{to:"/gallery"},r.a.createElement("button",{className:"button-style"},"Gallery",r.a.createElement("i",{class:"far fa-image"})))}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setSize=function(t){var a=t.target.value;e.setState({value:a}),e.props.onChange(a)},e.state={value:1},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"button-style"},r.a.createElement("input",{className:"brush-slider",type:"range",min:"1",max:"50",id:"brush-slider",value:this.state.value,onChange:this.setSize}),r.a.createElement("span",{class:"sr-only"},"Slider"))}}]),a}(n.Component),f=function(e){return r.a.createElement("div",{className:"button-container"},r.a.createElement("span",{className:"palette-icon"},"\ud83c\udfa8"),r.a.createElement("span",{class:"sr-only"},"palette"),r.a.createElement(m,{onClick:e.colorFunction}),r.a.createElement(b,{onChange:e.brushFunction}),r.a.createElement(d,{onClick:e.eraserFunction}),r.a.createElement(h,{onClick:e.clearFunction}),r.a.createElement(p,{onClick:e.postFunction}),r.a.createElement(w,null))},g=a(19),E=a.n(g);a(41);E.a.initializeApp({apiKey:"AIzaSyDEO2ba1uqXgGgxGfGyprWJ-WYnj3stdnA",authDomain:"anny-pham-project-five.firebaseapp.com",databaseURL:"https://anny-pham-project-five.firebaseio.com",projectId:"anny-pham-project-five",storageBucket:"anny-pham-project-five.appspot.com",messagingSenderId:"968522599205",appId:"1:968522599205:web:2703cb30469cf9be3ba8cc"});var y=E.a,C=a(20),j=a.n(C),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).startDrawing=function(t){var a=t.nativeEvent;e.isDrawing=!0,e.handleDraw({nativeEvent:a}),"touchstart"===a.type&&(e.isDrawing=!0)},e.handleDraw=function(t){var a=t.nativeEvent,n=e.canvas.current.getBoundingClientRect(),r=n.left,i=n.top;if(e.ctx.lineJoin="round",e.ctx.lineCap="round",e.isDrawing)if("mousemove"===a.type){var c=parseInt(a.clientX-r),o=parseInt(a.clientY-i);e.ctx.lineTo(c,o),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.moveTo(c,o)}else if("touchmove"===a.type){var s=a.changedTouches[0],l=parseInt(s.clientX-r),u=parseInt(s.clientY-i);e.ctx.lineTo(l,u),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.moveTo(l,u)}},e.stopDrawing=function(t){var a=t.nativeEvent;e.isDrawing=!1,e.ctx.beginPath(),e.ctx.closePath(),"touchend"===a.type&&(e.isDrawing=!1,e.ctx.beginPath())},e.brushSize=function(t){e.ctx.lineWidth=t},e.changeColor=function(t){e.ctx.globalCompositeOperation="source-over",e.ctx.strokeStyle=t},e.useEraser=function(){e.ctx.globalCompositeOperation="destination-out"},e.clearCanvas=function(){e.ctx.clearRect(0,0,e.state.width,e.state.height)},e.saveCanvas=function(){var t=e.canvas.current.toDataURL();t==e.blank?j()({text:"Please draw something!"}):(y.database().ref().push(t),e.clearCanvas(),j()({text:"Your drawing has been saved! Go to the gallery to check it out!"}))},e.updateResize=function(){window.innerWidth>900?e.setState({width:800,height:600}):window.innerWidth<=900&&window.innerWidth>810?e.setState({width:750,height:500}):window.innerWidth<=810&&window.innerWidth>750?e.setState({width:700,height:500}):window.innerWidth<=750&&window.innerWidth>700?e.setState({width:600,height:500}):window.innerWidth<=700&&window.innerWidth>600?e.setState({width:500,height:500}):window.innerWidth<=600&&window.innerWidth>500?e.setState({width:450,height:500}):window.innerWidth<=500&&window.innerWidth>410?e.setState({width:380,height:500}):window.innerWidth<=410&&window.innerWidth>350?e.setState({width:300,height:500}):window.innerWidth<=350&&e.setState({width:280,height:500})},e.isDrawing=!1,e.canvas=r.a.createRef(),e.blank=null,e.state={width:800,height:600},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.ctx=this.canvas.current.getContext("2d"),this.blank=this.canvas.current.toDataURL(),this.updateResize(),window.addEventListener("resize",this.updateResize.bind(this))}},{key:"render",value:function(){return r.a.createElement("main",{className:"wrapper"},r.a.createElement("section",null,r.a.createElement("div",{className:"canvas-header"},r.a.createElement("h1",null,"Pic-draw-sso"),r.a.createElement("p",{className:"p-styles"},"Are you the next Picasso? Use the buttons to get started on your art piece! Remember to hit the save button and press gallery to view!")),r.a.createElement("div",{className:"canvas-button-container"},r.a.createElement(f,{colorFunction:this.changeColor,brushFunction:this.brushSize,eraserFunction:this.useEraser,clearFunction:this.clearCanvas,postFunction:this.saveCanvas}),r.a.createElement("div",{className:"canvas-container"},r.a.createElement("canvas",{id:"canvas-draw",className:"canvas",ref:this.canvas,width:this.state.width,height:this.state.height,onMouseDown:this.startDrawing,onMouseUp:this.stopDrawing,onMouseOut:this.stopDrawing,onMouseMove:this.handleDraw,onTouchStart:this.startDrawing,onTouchMove:this.handleDraw,onTouchEnd:this.stopDrawing})))))}}]),a}(n.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={drawingsArray:[],isLoading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({drawingUrl:a[r]});e.setState({drawingsArray:n,isLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"app-button"},r.a.createElement(v.b,{to:"/"},r.a.createElement("button",{className:"button-style"},"back",r.a.createElement("i",{class:"fas fa-palette"})))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Gallery"),r.a.createElement("p",{className:"p-styles"},"Take a look at your drawing and other users' master pieces!"),this.state.isLoading?r.a.createElement("div",{className:"gallery-loader"}):r.a.createElement("div",{className:"gallery-grid"},this.state.drawingsArray.map((function(e){return r.a.createElement("div",{className:"user-drawing"},r.a.createElement("img",{src:e.drawingUrl,alt:"Canvas drawing by a user"}))})))))}}]),a}(n.Component),x=a(1),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(x.a,{exact:!0,path:"/",component:k}),r.a.createElement(x.a,{path:"/gallery",component:O}),r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Copyright \xa9 Anny Pham 2020 |",r.a.createElement("a",{href:"https://annyup.com"},r.a.createElement("i",{class:"fas fa-globe"})),r.a.createElement("a",{href:"https://github.com/annyup/"},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement("a",{href:"https://twitter.com/annyup_"},r.a.createElement("i",{class:"fab fa-twitter"})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.0a1165c7.chunk.js.map