(this.webpackJsonpcoin=this.webpackJsonpcoin||[]).push([[0],[,,,,,,function(t,e,a){t.exports=a.p+"static/media/front.fe7bfc02.png"},function(t,e,a){t.exports=a.p+"static/media/back.cbda9acc.png"},,,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),c=(a(15),a(16),a(1)),s=a(2),l=a(5),u=a(4),d=a(3),m=a(6),f=a.n(m),p=a(7),h=a.n(p),b=(a(17),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Coin"},i.a.createElement("div",{className:this.props.rotate?"Coin-side Coin-side-front animation-front":"Coin-side Coin-side-front"},"front"===this.props.side?i.a.createElement("img",{src:f.a,alt:"Coin's front"}):i.a.createElement("img",{src:h.a,alt:"Coin's back"})),i.a.createElement("div",{className:this.props.rotate?"Coin-side Coin-side-back animation-back":"Coin-side Coin-side-back"},"back"===this.props.side?i.a.createElement("img",{src:f.a,alt:"Coin's front"}):i.a.createElement("img",{src:h.a,alt:"Coin's back"})))}}]),a}(n.Component)),k=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Counter"},i.a.createElement("p",null,"Out of ",this.props.front+this.props.back," flips, there have been ",this.props.front," heads and ",this.props.back," tails."))}}]),a}(n.Component),v=(a(18),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={side:"front",front:0,back:0,rotate:!1},n.clickHandler=n.clickHandler.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"clickHandler",value:function(){var t=this,e=Math.round(Math.random());this.setState({rotate:!0}),setTimeout((function(){t.setState({rotate:!1}),0===e?t.setState({side:"front",front:t.state.front+1}):t.setState({side:"back",back:t.state.back+1})}),1e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Game"},i.a.createElement(b,{side:this.state.side,rotate:this.state.rotate}),i.a.createElement("button",{onClick:this.clickHandler,disabled:this.state.rotate},"Flip coin"),i.a.createElement(k,{front:this.state.front,back:this.state.back}))}}]),a}(n.Component));var C=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.91da9077.chunk.js.map