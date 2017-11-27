"use strict";function Data(t,e){this.x=t,this.y=0,this.textChar=e,this.history=[],this.historySizeMax=Math.floor(Math.random()*config.maxLength+config.minLength)}function putData(){datarray.push(new Data(Math.floor(Math.random()*columnCount)*config.size))}function setupCanvas(){width=ctx.canvas.width=window.innerWidth,height=ctx.canvas.height=window.innerHeight,ctx.font=config.size+"px monospace",ctx.shadowOffsetX=1,ctx.shadowOffsetY=1,ctx.shadowBlur=6}function strtCan(){console.log("reload animation"),width=ctx.canvas.width=window.innerWidth,height=ctx.canvas.height=window.innerHeight,datarray=[],columnCount=Math.floor(width/config.size),setInterval(function(){ctx.clearRect(0,0,width,height),datarray.length<config.amount&&putData();for(var t=0;t<datarray.length;t++)datarray[t].update(),datarray[t].draw();ctx.fillStyle=config.firstColor,ctx.shadowColor=config.firstColor},config.speed),setupCanvas()}function setup(){for(var t=0;t<opts.particleAmount;t++)particles.push(new Particle);window.requestAnimationFrame(loop)}function loop(){window.requestAnimationFrame(loop),drawArea.clearRect(0,0,w,h);for(var t=0;t<particles.length;t++)particles[t].update(),particles[t].draw();for(var t=0;t<particles.length;t++)linkPoints(particles[t],particles)}function email_valid(t){re.test(t.value)?(t.classList.remove("error"),elements[i].parentElement.classList.remove("error")):(t.classList.add("error"),elements[i].parentElement.classList.add("error"))}var matrix=document.getElementById("matrix"),ctx=matrix.getContext("2d"),config={amount:60,speed:100,size:14,minLength:5,maxLength:15,firstColor:"#eee",rowColor:"#7C7C7C",text:"challenge accepted!)",textApperanceSpeed:.8,textTopOffset:5,textLeftOffset:15},datarray=[],textSet=[],width=ctx.canvas.width=window.innerWidth,height=ctx.canvas.height=window.innerHeight,columnCount=Math.floor(width/config.size),rowCount=Math.floor(height/config.size),textTopOffsetCalculated=config.textTopOffset*config.size,textLeftOffsetCalculated=config.textLeftOffset*config.size,atChar=0;Data.prototype.update=function(){this.y+=config.size,this.y>=height+this.historySizeMax*config.size&&(datarray.splice(datarray.indexOf(this),1),putData());var t;void 0!=this.textChar&&this.y==textTopOffsetCalculated?(t=config.text[this.textChar],textSet.push(t)):t=String.fromCharCode(60+Math.floor(62*Math.random())),this.history.unshift(t),this.history.length>this.historySizeMax&&this.history.pop()},Data.prototype.draw=function(){ctx.shadowColor="rgba(255,255,255,1)",ctx.fillStyle=config.firstColor,ctx.fillText(this.history[0],this.x,this.y);for(var t,e=1;e<this.history.length;e++)t=this.y-e*config.size,ctx.shadowColor="rgba(255,255,255,0)",ctx.fillStyle="rgba(255,255,255,1)",ctx.fillRect(this.x,t-config.size,config.size,config.size),ctx.shadowColor="rgba(255,255,255,0)",ctx.fillStyle=config.rowColor,ctx.fillText(this.history[e],this.x,t)};var scroll_btn_1=document.getElementById("scroll__bottom"),V=.2;scroll_btn_1.addEventListener("click",function(t){function e(t){null===r&&(r=t);var o=t-r,s=n<0?Math.max(i-o/V,i+n):Math.min(i+o/V,i+n);window.scrollTo(0,s),s!=i+n?requestAnimationFrame(e):location.hash=a}t.preventDefault();var i=window.pageYOffset,a="#m",n=document.querySelector(a).getBoundingClientRect().top,r=null;requestAnimationFrame(e)},!1);var scroll_btn_2=document.getElementById("scroll__bottom_2");scroll_btn_2.addEventListener("click",function(t){function e(t){null===r&&(r=t);var o=t-r,s=n<0?Math.max(i-o/V,i+n):Math.min(i+o/V,i+n);window.scrollTo(0,s),s!=i+n?requestAnimationFrame(e):location.hash=a}t.preventDefault();var i=window.pageYOffset,a=this.href.replace(/[^#]*(.*)/,"$1"),n=document.querySelector(a).getBoundingClientRect().top,r=null;console.log(a),requestAnimationFrame(e)},!1);var fix_bl=document.getElementById("fixec_block"),fix_po=fix_bl.style.position,fix_pa=fix_bl.parentElement;window.onscroll=function(){fix_pa.getBoundingClientRect().top<=0?"fixed"!=fix_po&&(fix_bl.style.position="fixed"):"static"!=fix_po&&(fix_bl.style.position="static")},window.addEventListener("load",function(){strtCan(),fix_pa.style.height=fix_bl.getBoundingClientRect().height+35+"px"}),window.addEventListener("resize",function(){strtCan(),fix_pa.style.height=fix_bl.getBoundingClientRect().height+35+"px"});var canvasBody=document.getElementById("canvas"),drawArea=canvasBody.getContext("2d"),w=canvasBody.width=canvasBody.parentElement.getBoundingClientRect().width,h=canvasBody.height=canvasBody.parentElement.getBoundingClientRect().height,delay=200,tid,opts={particleColor:"rgb(0, 185, 220)",lineColor:"rrgb(0, 185, 220)",particleAmount:100,defaultSpeed:0,variantSpeed:.6,defaultRadius:2,variantRadius:2,linkRadius:200},rgb=opts.lineColor.match(/\d+/g),particles=[],resizeReset=function(){w=canvasBody.width=canvasBody.parentElement.getBoundingClientRect().width,h=canvasBody.height=canvasBody.parentElement.getBoundingClientRect().height},deBouncer=function(){clearTimeout(tid),tid=setTimeout(function(){resizeReset()},delay)},checkDistance=function(t,e,i,a){return Math.sqrt(Math.pow(i-t,2)+Math.pow(a-e,2))},linkPoints=function(t,e){for(var i=0;i<e.length;i++){var a=checkDistance(t.x,t.y,e[i].x,e[i].y),n=1-a/opts.linkRadius;n>0&&(drawArea.lineWidth=.5,drawArea.strokeStyle="rgba("+rgb[0]+", "+rgb[1]+", "+rgb[2]+", "+n+")",drawArea.beginPath(),drawArea.moveTo(t.x,t.y),drawArea.lineTo(e[i].x,e[i].y),drawArea.closePath(),drawArea.stroke())}},Particle=function(t,e){this.x=Math.random()*w,this.y=Math.random()*h,this.speed=opts.defaultSpeed+Math.random()*opts.variantSpeed,this.directionAngle=Math.floor(360*Math.random()),this.color=opts.particleColor,this.radius=opts.defaultRadius+Math.random()*opts.variantRadius,this.vector={x:Math.cos(this.directionAngle)*this.speed,y:Math.sin(this.directionAngle)*this.speed},this.update=function(){this.border(),this.x+=this.vector.x,this.y+=this.vector.y},this.border=function(){(this.x>=w||this.x<=0)&&(this.vector.x*=-1),(this.y>=h||this.y<=0)&&(this.vector.y*=-1),this.x>w&&(this.x=w),this.y>h&&(this.y=h),this.x<0&&(this.x=0),this.y<0&&(this.y=0)},this.draw=function(){drawArea.beginPath(),drawArea.arc(this.x,this.y,this.radius,0,2*Math.PI),drawArea.closePath(),drawArea.fillStyle=this.color,drawArea.fill()}};setup();var form_1=document.querySelector(".m__f--form [type=submit]"),re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,in_email=form_1.parentElement.querySelector("input[name=email]");in_email.oninput=function(){this.value.length>7&&email_valid(this)},void 0!=form_1&&form_1.addEventListener("click",function(t){t.preventDefault();for(var e=this.parentElement,i=!1,a=e.querySelectorAll("input[required]"),n=e.querySelector(".m__f--form__out"),r=0;r<a.length;r++)""==a[r].value?(i=!0,a[r].classList.add("error"),a[r].parentElement.classList.add("error")):(a[r].classList.remove("error"),a[r].parentElement.classList.remove("error"),"email"==a[r].name&&(re.test(a[r].value)?(a[r].classList.remove("error"),a[r].parentElement.classList.remove("error")):(a[r].classList.add("error"),a[r].parentElement.classList.add("error"),i=!0)));if(!i){for(var o=e.querySelector("input[name=email]").value,s=e.querySelector("input[name=company]").value,l=e.querySelector("input[name=name]").value,c=e.querySelector("textarea").value,r=0;r<a.length;r++)a[r].value="",a[r].classList.remove("error"),a[r].parentElement.classList.remove("error");e.querySelector("textarea").value="";var h=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return h.open("POST","https://mandrillapp.com/api/1.0/messages/send.json"),h.setRequestHeader("Content-Type","application/json;charset=UTF-8"),h.onreadystatechange=function(){4==h.readyState&&(200==h.status?(console.log("sending"),n.classList.add("active"),setInterval(function(){n.classList.remove("active")},3e3)):alert("Пожалуйста, проверьте соединение с интернетом или перезапустите браузер. После этого отправьте заявку снова."))},h.send(JSON.stringify({key:"3nHfBfKZxETJ-VYZjMx4cw",message:{from_email:"metrix@smter.ru",to:[{email:"d@metrix.ai",type:"to"}],autotext:"true",subject:"C сайта METRIX",html:"<h2>Name - "+l+".</h2><h2>Company - "+s+".</h2><h2>Email - "+o+".</h2><h2>Message - "+c+".</h2>"}})),!1}});