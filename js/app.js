"use strict";function Data(t){this.x=t,this.y=0,this.history=[],this.historySizeMax=Math.floor(Math.random()*config.maxLength+config.minLength)}function putData(){for(var t,i=Math.floor(Math.random()*count)*config.size,o=0;t=datarray[o];o++)if(t.x===i&&t.y-t.historySizeMax*config.size+config.size<config.size)return;datarray.push(new Data(i))}var matrix=document.getElementById("matrix"),ctx=matrix.getContext("2d"),config={amount:40,speed:100,size:14,minLength:5,maxLength:15,firstColor:"#eeeeee",color:"#7C7C7C"},datarray=[],width=ctx.canvas.width=window.innerWidth,height=ctx.canvas.height=window.innerHeight;Data.prototype.update=function(){this.y+=config.size,this.y>=height+this.historySizeMax*config.size&&(datarray.splice(datarray.indexOf(this),1),putData()),this.history.unshift(String.fromCharCode(60+Math.floor(62*Math.random()))),this.history.length>this.historySizeMax&&this.history.pop()},Data.prototype.draw=function(){if(!(Math.random()>.995)){ctx.fillStyle=config.firstColor,ctx.fillText(this.history[0],this.x,this.y),ctx.fillStyle=config.color;for(var t,i=1;t=this.history[i];i++)ctx.fillText(t,this.x,this.y-i*config.size)}};var count=Math.floor(width/config.size);ctx.font=config.size+"px monospace",ctx.shadowOffsetX=0,ctx.shadowOffsetY=0,ctx.shadowBlur=0,ctx.shadowColor=config.color,setInterval(function(){ctx.clearRect(0,0,width,height),datarray.length<config.amount&&putData();for(var t,i=0;t=datarray[i];i++)t.update(),t.draw()},config.speed);var scroll_btn_1=document.getElementById("scroll__bottom"),V=.2;scroll_btn_1.addEventListener("click",function(t){function i(t){null===n&&(n=t);var r=t-n,h=e<0?Math.max(o-r/V,o+e):Math.min(o+r/V,o+e);window.scrollTo(0,h),h!=o+e?requestAnimationFrame(i):location.hash=a}t.preventDefault();var o=window.pageYOffset,a="#m",e=document.querySelector(a).getBoundingClientRect().top,n=null;requestAnimationFrame(i)},!1);