(()=>{var n={3:()=>{!function(){console.log("Loading template.js");var n=document.querySelector(".burger-container"),r=document.querySelector(".header");function e(){r.classList.toggle("menu-opened"),document.querySelector(".menu-opened")?document.querySelectorAll(".menu-item").forEach((function(n){return n.style.display="block"})):document.querySelectorAll(".menu-item").forEach((function(n){return n.style.display="none"}))}document.querySelector(".menu-opened"),n.onclick=function(){e()},document.querySelectorAll(".menu-item > a").forEach((function(n){n.addEventListener("click",(function(){console.log("Dentro"),e()}))}))}();var n=window.pageYOffset,r=document.querySelector(".header-main");window.onscroll=function(){var e=window.pageYOffset;if(n>e)r.style.top=0===e?"0":"-5vh",r.classList.add("active");else{var t=document.querySelector("#menu").clientHeight,i=document.querySelector("#info-header").clientHeight;r.style.top="-".concat(2*t-i,"px"),r.classList.remove("active")}n=e}},79:(n,r,e)=>{"use strict";e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,"#content-gallery {\r\n    margin-top: 20vh;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n#content-gallery h1{\r\n    text-align: center;\r\n}",""]);const o=i},205:(n,r,e)=>{"use strict";e.d(r,{Z:()=>c});var t=e(645),i=e.n(t),o=e(667),a=e.n(o),l=e(960),s=i()((function(n){return n[1]}));s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;1,400&display=swap);"]);var d=a()(l.Z);s.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Work Sans", sans-serif;\r\n}\r\n\r\n/* #### HEADER DESKTOP LAYOUT #### */\r\nhtml {\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.header-main {\r\n  background: white;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  transition: all ease-out 0.5s;\r\n  -webkit-transition: all ease-out 0.5s;\r\n  z-index: 9;\r\n}\r\n\r\n#info-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #1c3b73;\r\n  font-size: 11px;\r\n  width: 100%;\r\n  height: 5vh;\r\n  color: white;\r\n  justify-content: flex-end;\r\n  padding-right: 10px;\r\n}\r\n\r\n#info-header > div:nth-child(1) {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 50px;\r\n}\r\n\r\n#info-header > div:nth-child(2) {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#leftSideLogo {\r\n  flex-basis: 40%;\r\n}\r\n\r\n#leftSideLogo a img {\r\n  /*width: 110px;*/\r\n  width: 340px;\r\n}\r\n\r\n#menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  /* height: 9vh; */\r\n  width: 100%;\r\n}\r\n\r\n#links {\r\n  flex-basis: 60%;\r\n}\r\n\r\n#links ul {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#links ul li {\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  margin: auto;\r\n}\r\n\r\n#links ul li a {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\n#especial {\r\n  border: 1px solid black;\r\n  border-radius: 30px;\r\n}\r\n\r\n/*Efecto hovers botones menu*/\r\n/* Efecto 1*/\r\n.btn-2:after,\r\n.btn-2:before {\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  border: 1px solid rgba(255, 255, 255, 0);\r\n  bottom: 0px;\r\n  content: " ";\r\n  display: block;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  -webkit-transition: all 280ms ease-in-out;\r\n  transition: all 280ms ease-in-out;\r\n  width: 0;\r\n}\r\n\r\n.btn-2:hover:after,\r\n.btn-2:hover:before {\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  border-color: #1c3b73;\r\n  -webkit-transition: width 350ms ease-in-out;\r\n  transition: width 350ms ease-in-out;\r\n  width: 70%;\r\n}\r\n\r\n.btn-2:hover:before {\r\n  bottom: auto;\r\n  top: 0;\r\n  width: 70%;\r\n}\r\n/* Efecto 2*/\r\n.btn-3 {\r\n  -webkit-transition: all 150ms linear;\r\n  transition: all 150ms linear;\r\n  color: black;\r\n}\r\n\r\n.btn-3 a:hover {\r\n  color: white !important;\r\n  background: #1c3b73;\r\n  border: 4px solid rgba(0, 0, 0, 0.05);\r\n  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);\r\n  text-decoration: none;\r\n  -webkit-transition: all 250ms linear;\r\n  transition: all 250ms linear;\r\n}\r\n\r\n/* #### HEADER MOBILE LAYOUT #### */\r\n.window {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  margin: 0;\r\n  border-radius: 0px;\r\n  box-shadow: 0 0 65px 15px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n  background: #f1f1f1;\r\n}\r\n.window .header {\r\n  position: fixed;\r\n  display: block;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100px;\r\n  width: 100%;\r\n  background: white;\r\n  overflow: hidden;\r\n  -webkit-transition: all 0.5s ease-out, background 1s ease-out;\r\n  transition: all 0.5s ease-out, background 1s ease-out;\r\n  -webkit-transition-delay: 0.2s;\r\n  transition-delay: 0.2s;\r\n  z-index: 1;\r\n}\r\n.window .header .burger-container {\r\n  position: relative;\r\n  display: inline-block;\r\n  height: 100px;\r\n  width: 50px;\r\n  cursor: pointer;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.window .header .burger-container #burger {\r\n  width: 18px;\r\n  height: 8px;\r\n  position: relative;\r\n  display: block;\r\n  margin: -4px auto 0;\r\n  top: 50%;\r\n}\r\n.window .header .burger-container #burger .bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  display: block;\r\n  position: relative;\r\n  background: #1c3b73;\r\n  -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  -webkit-transition-delay: 0s;\r\n  transition-delay: 0s;\r\n}\r\n.window .header .burger-container #burger .bar.topBar {\r\n  -webkit-transform: translateY(0px) rotate(0deg);\r\n  transform: translateY(0px) rotate(0deg);\r\n}\r\n.window .header .burger-container #burger .bar.btmBar {\r\n  -webkit-transform: translateY(6px) rotate(0deg);\r\n  transform: translateY(6px) rotate(0deg);\r\n}\r\n.window .header .icon {\r\n  display: inline-block;\r\n  position: absolute;\r\n  height: 100%;\r\n  line-height: 50px;\r\n  width: 200px;\r\n  height: 100px;\r\n  text-align: center;\r\n  color: #fff;\r\n  font-size: 22px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.icon-logo {\r\n  background-image: url('+d+");\r\n  background-position: center;\r\n  background-size: 200px 50px;\r\n  background-repeat: no-repeat;\r\n}\r\n.window .header .icon.icon-bag {\r\n  right: 0;\r\n  top: 0;\r\n  left: auto;\r\n  -webkit-transform: translateX(0px);\r\n  transform: translateX(0px);\r\n  -webkit-transition: -webkit-transform 0.5s\r\n    cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),\r\n    -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  -webkit-transition-delay: 0.65s;\r\n  transition-delay: 0.65s;\r\n}\r\n.window .header ul.menu {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0px 48px 0;\r\n  list-style: none;\r\n}\r\n.window .header ul.menu li.menu-item {\r\n  border-bottom: 1px solid #1c3b73;\r\n  margin-top: 5px;\r\n  -webkit-transform: scale(1.15) translateY(-30px);\r\n  transform: scale(1.15) translateY(-30px);\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),\r\n    -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),\r\n    -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),\r\n    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),\r\n    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),\r\n    -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(1) {\r\n  -webkit-transition-delay: 0.49s;\r\n  transition-delay: 0.49s;\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(2) {\r\n  -webkit-transition-delay: 0.42s;\r\n  transition-delay: 0.42s;\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(3) {\r\n  -webkit-transition-delay: 0.35s;\r\n  transition-delay: 0.35s;\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(4) {\r\n  -webkit-transition-delay: 0.28s;\r\n  transition-delay: 0.28s;\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(5) {\r\n  -webkit-transition-delay: 0.21s;\r\n  transition-delay: 0.21s;\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(6) {\r\n  -webkit-transition-delay: 0.14s;\r\n  transition-delay: 0.14s;\r\n}\r\n.window .header ul.menu li.menu-item:nth-child(7) {\r\n  -webkit-transition-delay: 0.07s;\r\n  transition-delay: 0.07s;\r\n}\r\n.window .header ul.menu li.menu-item a {\r\n  display: block;\r\n  position: relative;\r\n  color: black;\r\n  font-weight: 100;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  line-height: 2.35;\r\n  font-weight: 200;\r\n  width: 100%;\r\n}\r\n\r\n.menu-item {\r\n  display: none;\r\n}\r\n.window .header.menu-opened {\r\n  height: 100%;\r\n  background-color: white;\r\n  -webkit-transition: all 0.3s ease-in, background 0.5s ease-in;\r\n  transition: all 0.3s ease-in, background 0.5s ease-in;\r\n  -webkit-transition-delay: 0.25s;\r\n  transition-delay: 0.25s;\r\n}\r\n.window .header.menu-opened .burger-container {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.window .header.menu-opened .burger-container #burger .bar {\r\n  -webkit-transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);\r\n  -webkit-transition-delay: 0.2s;\r\n  transition-delay: 0.2s;\r\n}\r\n.window .header.menu-opened .burger-container #burger .bar.topBar {\r\n  -webkit-transform: translateY(4px) rotate(45deg);\r\n  transform: translateY(4px) rotate(45deg);\r\n}\r\n.window .header.menu-opened .burger-container #burger .bar.btmBar {\r\n  -webkit-transform: translateY(3px) rotate(-45deg);\r\n  transform: translateY(3px) rotate(-45deg);\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item {\r\n  -webkit-transform: scale(1) translateY(0px);\r\n  transform: scale(1) translateY(0px);\r\n  opacity: 1;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(1) {\r\n  -webkit-transition-delay: 0.27s;\r\n  transition-delay: 0.27s;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(2) {\r\n  -webkit-transition-delay: 0.34s;\r\n  transition-delay: 0.34s;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(3) {\r\n  -webkit-transition-delay: 0.41s;\r\n  transition-delay: 0.41s;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(4) {\r\n  -webkit-transition-delay: 0.48s;\r\n  transition-delay: 0.48s;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(5) {\r\n  -webkit-transition-delay: 0.55s;\r\n  transition-delay: 0.55s;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(6) {\r\n  -webkit-transition-delay: 0.62s;\r\n  transition-delay: 0.62s;\r\n}\r\n.window .header.menu-opened ul.menu li.menu-item:nth-child(7) {\r\n  -webkit-transition-delay: 0.69s;\r\n  transition-delay: 0.69s;\r\n}\r\n.window .header.menu-opened .icon.icon-bag {\r\n  -webkit-transform: translateX(75px);\r\n  transform: translateX(75px);\r\n  -webkit-transition-delay: 0.3s;\r\n  transition-delay: 0.3s;\r\n}\r\n.window .content {\r\n  padding: 67px 4% 0;\r\n  text-align: justify;\r\n  overflow: scroll;\r\n  max-height: 100%;\r\n}\r\n.window .content::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.window .content h2 {\r\n  margin-bottom: 0px;\r\n  letter-spacing: 1px;\r\n}\r\n.window .content img {\r\n  width: 95%;\r\n  position: relative;\r\n  display: block;\r\n  margin: 75px auto 75px;\r\n}\r\n.window .content img:nth-of-type(2) {\r\n  margin: 75px auto;\r\n}\r\n\r\n/* #### FOOTER #### */\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    height: 49vh;\r\n    width: 100%;\r\n    background-color: black;\r\n    color: grey;\r\n    padding-top: 10%;\r\n  }\r\n  \r\n  footer > div {\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  footer > div > ul,\r\n  #footer-nav ul {\r\n    list-style-type: none;\r\n  }\r\n  footer h4 {\r\n    margin-bottom: 20px;\r\n    color: white;\r\n  }\r\n  \r\n  footer > #logo-slogan > a > img {\r\n    width: 250px;\r\n  }\r\n  \r\n  #footer-nav {\r\n    height: 150px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #footer-nav ul li a,\r\n  #legal ul li a {\r\n    text-decoration: none;\r\n    color: grey;\r\n  }\r\n  \r\n  footer > #contacto > #footer-telf-email > h4 {\r\n    margin-top: 50px;\r\n  }\r\n  /* MQ RESPONSIVE*/\r\n  /*-----------------------------------------------------------------------\r\n  --------------------------------------------------------------------------\r\n  ---------------------------------------------------------------------------\r\n  ---------------------------------------------------------------------------*/\r\n  /* Extra small devices (phones, 600px and down) */\r\n  @media only screen and (max-width: 600px) and (orientation: portrait) {\r\n    /*Header*/\r\n    #header {\r\n      display: none;\r\n    }\r\n    /*Slider*/\r\n    .text {\r\n      font-size: 23px;\r\n      font-weight: bold;\r\n    }\r\n  \r\n    .prev,\r\n    .next {\r\n      font-size: 11px;\r\n    }\r\n  \r\n    .numbertext {\r\n      font-size: 8px;\r\n      padding: 120px 12px;\r\n      font-weight: bold;\r\n    }\r\n  \r\n    .dot {\r\n      height: 6px;\r\n      width: 10px;\r\n      bottom: 40px;\r\n      margin: 0 2px;\r\n    }\r\n  \r\n    /*Marketing site 1*/\r\n    #todo {\r\n      justify-content: center;\r\n      flex-direction: column;\r\n      padding-top: 150px;\r\n      padding-bottom: 150px;\r\n    }\r\n  \r\n    #todo div {\r\n      margin-top: 50px;\r\n      margin-bottom: 50px;\r\n    }\r\n  \r\n    .marketing-site div img {\r\n      margin: auto;\r\n      width: 40px;\r\n    }\r\n  \r\n    /*Marketing site 2*/\r\n    .subContainerMarketing2 {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      padding-top: 150px;\r\n      padding-bottom: 150px;\r\n    }\r\n  \r\n    .subContainerMarketing2 div {\r\n      margin-top: 50px;\r\n      margin-bottom: 50px;\r\n    }\r\n  \r\n    .subContainerMarketing2 div img {\r\n      margin: auto;\r\n      width: 40px;\r\n    }\r\n  \r\n    /*Content*/\r\n    .inInpar {\r\n      min-height: 100vh;\r\n    }\r\n  \r\n    .rowInfo {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      height: 200vh;\r\n    }\r\n\r\n    #img2content {\r\n      order: 99;\r\n    }\r\n    .box {\r\n      width: 150px;\r\n      height: 150px;\r\n      margin-top: 50px;\r\n    }\r\n  \r\n    .icon {\r\n      width: 70px;\r\n    }\r\n  \r\n    .containerBoxes .box .boxContent .desc {\r\n      font-size: 12px;\r\n      height: 20%;\r\n    }\r\n\r\n    .gallery-item {\r\n      /* Minimum width of 24rem and grow to fit available space */\r\n      flex: 1 0 16rem;\r\n      /* Margin value should be half of grid-gap value as margins on flex items don't collapse */\r\n      margin: 0.5rem;\r\n      box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);\r\n      overflow: hidden;\r\n    }\r\n  \r\n    /*FORM*/\r\n    .my-form h1 {\r\n      font-size: 20px;\r\n    }\r\n  \r\n    #formulario {\r\n      font-size: 11px;\r\n    }\r\n  \r\n    .my-form *:required,\r\n    .my-form select {\r\n      background-repeat: no-repeat;\r\n      background-position: center right 12px;\r\n      background-size: 10px 10px;\r\n    }\r\n  \r\n    /*MAP*/\r\n    #map {\r\n      height: 100vh;\r\n    }\r\n  \r\n    /*FOOTER*/\r\n    footer {\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      align-items: flex-start;\r\n      height: 100vh;\r\n      width: 100%;\r\n      background-color: black;\r\n      color: grey;\r\n    }\r\n  \r\n    footer > div {\r\n      margin-left: 25%;\r\n    }\r\n  \r\n    footer h4 {\r\n      margin-bottom: 15px;\r\n      color: white;\r\n    }\r\n  \r\n    footer > #logo-slogan > a > img {\r\n      width: 200px;\r\n      margin-bottom: 50px;\r\n    }\r\n  \r\n    footer > #contacto > #footer-telf-email > h4 {\r\n      margin-top: 20px;\r\n    }\r\n  }\r\n  \r\n  /* Small devices (portrait tablets and large phones, 600px and up) */\r\n  @media only screen and (min-width: 601px) {\r\n    .window {\r\n      display: none;\r\n    }\r\n  \r\n    /*Slider*/\r\n    .text {\r\n      font-size: 30px;\r\n      font-weight: bold;\r\n    }\r\n  \r\n    .numbertext {\r\n      font-size: 12px;\r\n      padding: 190px 12px;\r\n    }\r\n  \r\n    .dot {\r\n      height: 6px;\r\n      width: 10px;\r\n      bottom: 40px;\r\n      margin: 0 2px;\r\n    }\r\n    #links ul {\r\n      margin-bottom: 20px;\r\n    }\r\n    .box {\r\n      width: 115px;\r\n      height: 115px;\r\n      margin-top: 35px;\r\n    }\r\n  \r\n    .icon {\r\n      width: 50px;\r\n    }\r\n  \r\n    .containerBoxes .box .boxContent .desc {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  \r\n  /* Medium devices (landscape tablets, 768px and up) */\r\n  @media only screen and (min-width: 768px) {\r\n    .window {\r\n      display: none;\r\n    }\r\n    .numbertext {\r\n      font-size: 12px;\r\n      padding: 130px 12px;\r\n    }\r\n    .text {\r\n      font-size: 30px;\r\n    }\r\n    .dot {\r\n      height: 6px;\r\n      width: 10px;\r\n      bottom: 40px;\r\n      margin: 0 2px;\r\n    }\r\n    #links ul {\r\n      margin-bottom: 20px;\r\n    }\r\n    .box {\r\n      width: 150px;\r\n      height: 150px;\r\n      margin-top: 35px;\r\n    }\r\n  \r\n    .icon {\r\n      width: 70px;\r\n    }\r\n  \r\n    .containerBoxes .box .boxContent .desc {\r\n      font-size: 13px;\r\n    }\r\n  }\r\n  \r\n  /* Large devices (laptops/desktops, 992px and up) */\r\n  @media only screen and (min-width: 992px) {\r\n    .window {\r\n      display: none;\r\n    }\r\n  \r\n    #links ul {\r\n      margin-bottom: 0px;\r\n    }\r\n    .text {\r\n      font-size: 35px;\r\n    }\r\n  }\r\n  \r\n  /* Extra large devices (large laptops and desktops, 1200px and up) */\r\n  @media only screen and (min-width: 1200px) {\r\n    .window {\r\n      display: none;\r\n    }\r\n  \r\n    #links ul {\r\n      margin-bottom: 0px;\r\n    }\r\n  }\r\n  \r\n  /*Small devices when landscape mode*/\r\n  @media only screen and (max-height: 400px) and (orientation: landscape) {\r\n    #header {\r\n      display: none;\r\n    }\r\n  \r\n    .window {\r\n      display: block;\r\n    }\r\n  \r\n    .numbertext {\r\n      font-size: 12px;\r\n      padding: 130px 12px;\r\n    }\r\n    .text {\r\n      font-size: 27px;\r\n    }\r\n    .dot {\r\n      height: 6px;\r\n      width: 10px;\r\n      bottom: 40px;\r\n      margin: 0 2px;\r\n    }\r\n    .rowInfo {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      height: 200vh;\r\n    }\r\n  \r\n    footer {\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      align-items: flex-start;\r\n      height: 200vh;\r\n      width: 100%;\r\n      background-color: black;\r\n      color: grey;\r\n    }\r\n  \r\n    footer > div {\r\n      margin-left: 25%;\r\n    }\r\n  \r\n    footer h4 {\r\n      margin-bottom: 15px;\r\n      color: white;\r\n    }\r\n  \r\n    footer > #logo-slogan > a > img {\r\n      width: 200px;\r\n      margin-bottom: 50px;\r\n    }\r\n  \r\n    footer > #contacto > #footer-telf-email > h4 {\r\n      margin-top: 20px;\r\n    }\r\n  }\r\n  \r\n  /*Rare small devices*/\r\n  @media only screen and (max-width: 350px) and (max-height: 500px) {\r\n    #header {\r\n      display: none;\r\n    }\r\n  \r\n    .window {\r\n      display: block;\r\n    }\r\n    .numbertext {\r\n      font-size: 12px;\r\n      padding: 130px 12px;\r\n    }\r\n    .text {\r\n      font-size: 25px;\r\n    }\r\n    .dot {\r\n      height: 6px;\r\n      width: 10px;\r\n      bottom: 40px;\r\n      margin: 0 2px;\r\n    }\r\n    .rowInfo {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      height: 200vh;\r\n    }\r\n  \r\n    footer {\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      align-items: flex-start;\r\n      height: 200vh;\r\n      width: 100%;\r\n      background-color: black;\r\n      color: grey;\r\n    }\r\n  \r\n    footer > div {\r\n      margin-left: 25%;\r\n    }\r\n  \r\n    footer h4 {\r\n      margin-bottom: 15px;\r\n      color: white;\r\n    }\r\n  \r\n    footer > #logo-slogan > a > img {\r\n      width: 200px;\r\n      margin-bottom: 50px;\r\n    }\r\n  \r\n    footer > #contacto > #footer-telf-email > h4 {\r\n      margin-top: 20px;\r\n    }\r\n  }\r\n  ",""]);const c=s},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},667:n=>{"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},960:(n,r,e)=>{"use strict";e.d(r,{Z:()=>t});const t=e.p+"ea0245739978a2b15e96bf34cd4877bb.png"},379:(n,r,e)=>{"use strict";var t,i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function a(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function l(n,r){for(var e={},t=[],i=0;i<n.length;i++){var l=n[i],s=r.base?l[0]+r.base:l[0],d=e[s]||0,c="".concat(s," ").concat(d);e[s]=d+1;var p=a(c),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:c,updater:b(u,r),references:1}),t.push(c)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,c=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function p(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function u(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,m=0;function b(n,r){var e,t,i;if(r.singleton){var o=m++;e=h||(h=s(r)),t=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=s(r),t=u.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=l(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=a(e[t]);o[i].references--}for(var s=l(n,r),d=0;d<e.length;d++){var c=a(e[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=s}}}}},r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.p="./",(()=>{"use strict";var n=e(379),r=e.n(n),t=e(79);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var i=e(205);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,e(3),console.log("Loading galeria..."),$(document).ready((function(){for(var n=[],r=0;r<16;r++){var e={src:"acabados"+(r+1)+".jpg",srct:"acabados"+(r+1)+".jpg"};n.push(e)}for(var t=0;t<69;t++){var i={src:"clima"+(t+1)+".jpg",srct:"clima"+(t+1)+".jpg"};n.push(i)}for(var o=0;o<5;o++){var a={src:"fontaneria"+(o+1)+".jpg",srct:"fontaneria"+(o+1)+".jpg"};n.push(a)}for(var l=0;l<20;l++){var s={src:"salamaquinas"+(l+1)+".jpg",srct:"salamaquinas"+(l+1)+".jpg"};n.push(s)}for(var d=0;d<14;d++){var c={src:"san"+(d+1)+".jpg",srct:"san"+(d+1)+".jpg"};n.push(c)}$("#my_nanogallery2").nanogallery2({items:n,itemsBaseURL:"https://sromerom.github.io/assets/images/",galleryMosaic:[{w:2,h:2,c:1,r:1},{w:1,h:1,c:3,r:1},{w:1,h:1,c:3,r:2},{w:1,h:2,c:4,r:1},{w:2,h:1,c:5,r:1},{w:2,h:2,c:5,r:2},{w:1,h:1,c:4,r:3},{w:2,h:1,c:2,r:3},{w:1,h:2,c:1,r:3},{w:1,h:1,c:2,r:4},{w:2,h:1,c:3,r:4},{w:1,h:1,c:5,r:4},{w:1,h:1,c:6,r:4}],galleryMosaicXS:[{w:2,h:2,c:1,r:1},{w:1,h:1,c:3,r:1},{w:1,h:1,c:3,r:2},{w:1,h:2,c:1,r:3},{w:2,h:1,c:2,r:3},{w:1,h:1,c:2,r:4},{w:1,h:1,c:3,r:4}],galleryMosaicSM:[{w:2,h:2,c:1,r:1},{w:1,h:1,c:3,r:1},{w:1,h:1,c:3,r:2},{w:1,h:2,c:1,r:3},{w:2,h:1,c:2,r:3},{w:1,h:1,c:2,r:4},{w:1,h:1,c:3,r:4}],galleryMaxRows:1,galleryDisplayMode:"rows",gallerySorting:"random",thumbnailHeight:"180",thumbnailWidth:"220",thumbnailAlignment:"scaled",thumbnailGutterWidth:0,thumbnailGutterHeight:0,thumbnailBorderHorizontal:0,thumbnailBorderVertical:0,thumbnailToolbarImage:null,thumbnailToolbarAlbum:null,thumbnailLabel:{display:!1},galleryDisplayTransitionDuration:1500,thumbnailDisplayTransition:"slideLeft",thumbnailDisplayTransitionDuration:600,thumbnailDisplayInterval:30,thumbnailBuildInit2:"image_scale_1.15",thumbnailHoverEffect2:"thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00",touchAnimation:!0,touchAutoOpenDelay:500,viewerToolbar:{display:!1},viewerTools:{topLeft:"label",topRight:"shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton"},locationHash:!0})}))})()})();