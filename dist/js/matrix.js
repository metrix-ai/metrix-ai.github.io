!function r(o,a,s){function h(i,t){if(!a[i]){if(!o[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(f)return f(i,!0);throw new Error("Cannot find module '"+i+"'")}var n=a[i]={exports:{}};o[i][0].call(n.exports,function(t){var e=o[i][1][t];return h(e||t)},n,n.exports,r,o,a,s)}return a[i].exports}for(var f="function"==typeof require&&require,t=0;t<s.length;t++)h(s[t]);return h}({1:[function(t,e,i){"use strict";var n=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var r=document.getElementById("matrix").getContext("2d"),a={amount:60,speed:100,size:14,minLength:5,maxLength:15,rowColor:"#7C7C7C",textApperanceSpeed:.8,textTopOffset:5,textLeftOffset:15,firstColor:"#eeeeee",color:"#7C7C7C"},s=[],o=r.canvas.width=window.innerWidth,h=r.canvas.height=window.innerHeight,f=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=0,this.history=[],this.historySizeMax=Math.floor(Math.random()*a.maxLength+a.minLength)}return n(e,[{key:"update",value:function(t,e){this.y+=a.size,this.y>=e+this.historySizeMax*a.size&&(s.splice(s.indexOf(this),1),u(t,e)),this.history.unshift(String.fromCharCode(60+Math.floor(62*Math.random()))),this.history.length>this.historySizeMax&&this.history.pop()}},{key:"draw",value:function(){if(!(.995<Math.random())){r.fillStyle=a.firstColor,r.fillText(this.history[0],this.x,this.y),r.fillStyle=a.color;for(var t,e=1;t=this.history[e];e++)r.fillText(t,this.x,this.y-e*a.size)}}}]),e}();function u(t,e){for(var i=Math.floor(t/a.size),n=Math.floor(Math.random()*i)*a.size,r=0;r<s.length;r++){var o=s[r];if(void 0===o)return;if(o.x===n&&o.y-o.historySizeMax*a.size+a.size<a.size)return}s.push(new f(n))}function l(){r.font=a.size+"px monospace",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,r.shadowColor=a.color}var c=void 0;function d(e,i){return l(),setInterval(function(){r.clearRect(0,0,e,i),s.length<a.amount&&u(e);for(var t=0;t<s.length;t++)s[t].update(e,i),s[t].draw()},a.speed)}l(),c=d(o,h),window.addEventListener("resize",function(){clearInterval(c),s=[],r.canvas.width=window.innerWidth,r.canvas.height=window.innerHeight,c=d(window.innerWidth,window.innerHeight)})},{}]},{},[1]);