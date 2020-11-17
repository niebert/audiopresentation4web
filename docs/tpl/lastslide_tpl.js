vDataJSON["tpl"]["lastslide"] = `
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="generator" content="pandoc">
  <title>Slide {{{slideindex}}}: {{title}}</title>
  <meta name="author" content="{{author}}">
  <meta name="course" content="{{course}}">
  <style type="text/css">code{white-space: pre;}</style>
<!--
     =============================================
     Slide {{{slideindex}}}
     Last Slide with Information
     Audio audio/{{data.audio.basename}}{{current.number}}.{{current.audio.ext}}
     Created with
        https://niebert.github.io/audioslides4web
     =============================================
-->
<style>
  html, .view body { background-color: black;  counter-reset: slideidx; }
  body, .view section { background-color: black; border-radius: 12px }
  /* A section is a slide. It's size is 800x600, and this will never change */
  section, .view head > title {
      /* The font from Google */
      font-family: 'Oswald', arial, serif;
      font-size: 30px;
  }

  .view section:after {
    counter-increment: slideidx;
    content: counter(slideidx, decimal-leading-zero);
    position: absolute; bottom: -80px; right: 100px;
    color: white;
  }

  .view head > title {
    color: white;
    text-align: center;
    margin: 1em 0 1em 0;
  }

  h1, h2 {
    margin-top: 200px;
    text-align: center;
    font-size: 80px;
  }
  h3 {
    margin: 100px 0 50px 100px;
  }

  ul {
      margin: 50px 200px;
  }
  li > ul {
      margin: 15px 50px;
  }

  p {
    margin: 75px;
    font-size: 50px;
  }

  blockquote {
    height: 100%;
    background-color: black;
    color: white;
    font-size: 60px;
    padding: 50px;
  }
  blockquote:before {
    content: open-quote;
  }
  blockquote:after {
    content: close-quote;
  }

  /* Figures are displayed full-page, with the caption
     on top of the image/video */
  figure {
    background-color: black;
    width: 100%;
    height: 100%;
  }
  figure > * {
    position: absolute;
  }
  figure > img, figure > video {
    width: 100%; height: 100%;
  }
  figcaption {
    margin: 70px;
    font-size: 50px;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 40px;
    text-align: right;
    background-color: #F3F4F8;
    border-top: 1px solid #CCC;
  }

  /* Transition effect */
  /* Feel free to change the transition effect for original
     animations. See here:
     https://developer.mozilla.org/en/CSS/CSS_transitions
     How to use CSS3 Transitions: */
  section {
    -moz-transition: left 400ms linear 0s;
    -webkit-transition: left 400ms linear 0s;
    -ms-transition: left 400ms linear 0s;
    transition: left 400ms linear 0s;
  }
  .view section {
    -moz-transition: none;
    -webkit-transition: none;
    -ms-transition: none;
    transition: none;
  }

  .view section[aria-selected] {
    border: 5px red solid;
  }

  /* Before */
  section { left: -150%; }
  /* Now */
  section[aria-selected] { left: 0; }
  /* After */
  section[aria-selected] ~ section { left: +150%; }

  /* Incremental elements */

  /* By default, visible */
  .incremental > * { opacity: 1; }

  /* The current item */
  .incremental > *[aria-selected] { opacity: 1; }

  /* The items to-be-selected */
  .incremental > *[aria-selected] ~ * { opacity: 0; }

  /* The progressbar, at the bottom of the slides, show the global
     progress of the presentation. */
  #progress-bar {
    height: 2px;
    background: #AAA;
  }
</style>
</head>
<body>
<section id="finalslide" class="slide level2"  style="background: black">
  <center>
   <br/>
    <table width="80%" style="color:white;">
      <tr>
        <td valign="top">
          <b>Title</b>
        </td>
        <td>
          {{title}}
        </td>
      </tr>
      <tr>
        <td valign="top">
          <b>{{topic}}</b>
        </td>
        <td>
          {{course}}
        </td>
      </tr>
      <tr>
        <td valign="top">
          <b>Author</b>
        </td>
        <td>
          {{author}}
        </td>
       </tr>
       <tr>
         <td valign="top">
           <b>Date</b>
         </td>
         <td>
           {{date}}
         </td>
        </tr>
        <tr>
          <td colspan="2">
          This presentation was created with <a href="https://niebert.github.io/audioslides4web" target="_blank">AudioSlides for Web (AudioSlides4Web)</a>.
          As underlying web-based presentation framework <a href="https://paulrouget.com/dzslides" target="_blank">DZ-Slides</a> was used and integrated.
          </td>
        </tr>
    </table>
  </center>
</section>

<!-- dzslides core
#
#
#     __  __  __       .  __   ___  __
#    |  |  / /__  |    | |  | |__  /__
#    |__/ /_ .__/ |___ | |__/ |___ .__/ core :
#
#
# The following block of code is not supposed to be edited.
# But if you want to change the behavior of these slides,
# feel free to hack it!
#
-->

<div id="progress-bar"></div>

<!-- Default Style -->
<style>
  * { margin: 0; padding: 0; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }
  [role="note"] { display: none; }
  body {
    width: 800px; height: 600px;
    margin-left: -400px; margin-top: -300px;
    position: absolute; top: 50%; left: 50%;
    overflow: hidden;
    display: none;
  }
  .iconnext {
    position:absolute;
    margin-top:2%;
    left:10%;
    {{{displayforward}}}
  }
  .iconprevious {
    position:absolute;
    margin-top:2%;
    left:5%;
    {{{displayback}}}
  }
  .bottom-space {
     margin-bottom: 20px;
  }
  .view body {
    position: static;
    margin: 0; padding: 0;
    width: 100%; height: 100%;
    display: inline-block;
    overflow: visible; overflow-x: hidden;
    /* undo Dz.onresize */
    transform: none !important;
    -moz-transform: none !important;
    -webkit-transform: none !important;
    -o-transform: none !important;
    -ms-transform: none !important;
  }
  .view head, .view head > title { display: block }
  section {
    position: absolute;
    pointer-events: none;
    width: 100%; height: 100%;
  }
  .view section {
    pointer-events: auto;
    position: static;
    width: 800px; height: 600px;
    margin: -150px -200px;
    float: left;

    transform: scale(.4);
    -moz-transform: scale(.4);
    -webkit-transform: scale(.4);
    -o-transform: scale(.4);
    -ms-transform: scale(.4);
  }
  .view section > * { pointer-events: none; }
  section[aria-selected] { pointer-events: auto; }
  html { overflow: hidden; }
  html.view { overflow: visible; }
  body.loaded { display: block; }
  .incremental {visibility: hidden; }
  .incremental[active] {visibility: visible; }
  #progress-bar{
    bottom: 0;
    position: absolute;
    -moz-transition: width 400ms linear 0s;
    -webkit-transition: width 400ms linear 0s;
    -ms-transition: width 400ms linear 0s;
    transition: width 400ms linear 0s;
  }
  .view #progress-bar {
    display: none;
  }
</style>

<script>
var Dz = {
  remoteWindows: [],
  idx: -1,
  step: 0,
  minindex: 0,
  maxindex: {{{maxslides}}},
  slideprefix: "slide",
  extension: ".html",
  html: null,
  slides: null,
  progressBar : null,
  params: {
    autoplay: "1"
  }
};

Dz.init = function() {
  document.body.className = "loaded";
  this.slides = Array.prototype.slice.call($$("body > section"));
  this.progressBar = $("#progress-bar");
  this.html = document.body.parentNode;
  //this.idx = this.getSlideNumber4File();
  this.setupParams();
  this.onhashchange();
  this.setupTouchEvents();
  this.onresize();
  this.setupView();
}

Dz.setupParams = function() {
  var p = window.location.search.substr(1).split('&');
  p.forEach(function(e, i, a) {
    var keyVal = e.split('=');
    Dz.params[keyVal[0]] = decodeURIComponent(keyVal[1]);
  });
// Specific params handling
  if (!+this.params.autoplay)
    $$.forEach($$("video"), function(v){ v.controls = true });
}

Dz.onkeydown = function(aEvent) {
  // Don't intercept keyboard shortcuts
  if (aEvent.altKey
    || aEvent.ctrlKey
    || aEvent.metaKey
    || aEvent.shiftKey) {
    return;
  }
  if ( aEvent.keyCode == 37 // left arrow
    || aEvent.keyCode == 38 // up arrow
    || aEvent.keyCode == 33 // page up
  ) {
    aEvent.preventDefault();
    this.back();
  }
  if ( aEvent.keyCode == 39 // right arrow
    || aEvent.keyCode == 40 // down arrow
    || aEvent.keyCode == 34 // page down
  ) {
    aEvent.preventDefault();
    this.forward();
  }
  if (aEvent.keyCode == 35) { // end
    aEvent.preventDefault();
    this.goEnd();
  }
  if (aEvent.keyCode == 36) { // home
    aEvent.preventDefault();
    this.goStart();
  }
  if (aEvent.keyCode == 32) { // space
    aEvent.preventDefault();
    this.toggleContent();
  }
  if (aEvent.keyCode == 70) { // f
    aEvent.preventDefault();
    this.goFullscreen();
  }
  if (aEvent.keyCode == 79) { // o
    aEvent.preventDefault();
    this.toggleView();
  }
}

/* Touch Events */

Dz.setupTouchEvents = function() {
  var orgX, newX;
  var tracking = false;

  var db = document.body;
  db.addEventListener("touchstart", start.bind(this), false);
  db.addEventListener("touchmove", move.bind(this), false);

  function start(aEvent) {
    aEvent.preventDefault();
    tracking = true;
    orgX = aEvent.changedTouches[0].pageX;
  }

  function move(aEvent) {
    if (!tracking) return;
    newX = aEvent.changedTouches[0].pageX;
    if (orgX - newX > 100) {
      tracking = false;
      this.forward();
    } else {
      if (orgX - newX < -100) {
        tracking = false;
        this.back();
      }
    }
  }
}

Dz.setupView = function() {
  document.body.addEventListener("click", function ( e ) {
    if (!Dz.html.classList.contains("view")) return;
    if (!e.target || e.target.nodeName != "SECTION") return;

    Dz.html.classList.remove("view");
    Dz.setCursor(Dz.slides.indexOf(e.target) + 1);
  }, false);
}

/* Adapt the size of the slides to the window */

Dz.onresize = function() {
  var db = document.body;
  var sx = db.clientWidth / window.innerWidth;
  var sy = db.clientHeight / window.innerHeight;
  var transform = "scale(" + (1/Math.max(sx, sy)) + ")";

  db.style.MozTransform = transform;
  db.style.WebkitTransform = transform;
  db.style.OTransform = transform;
  db.style.msTransform = transform;
  db.style.transform = transform;
}


Dz.getNotes = function(aIdx) {
  var s = $("section:nth-of-type(" + aIdx + ")");
  var d = s.$("[role='note']");
  return d ? d.innerHTML : "";
}

Dz.onmessage = function(aEvent) {
  var argv = aEvent.data.split(" "), argc = argv.length;
  argv.forEach(function(e, i, a) { a[i] = decodeURIComponent(e) });
  var win = aEvent.source;
  if (argv[0] === "REGISTER" && argc === 1) {
    this.remoteWindows.push(win);
    this.postMsg(win, "REGISTERED", document.title, this.slides.length);
    this.postMsg(win, "CURSOR", this.idx + "." + this.step);
    return;
  }
  if (argv[0] === "BACK" && argc === 1)
    this.back();
  if (argv[0] === "FORWARD" && argc === 1)
    this.forward();
  if (argv[0] === "START" && argc === 1)
    this.goStart();
  if (argv[0] === "END" && argc === 1)
    this.goEnd();
  if (argv[0] === "TOGGLE_CONTENT" && argc === 1)
    this.toggleContent();
  if (argv[0] === "SET_CURSOR" && argc === 2)
    window.location.hash = "#" + argv[1];
  if (argv[0] === "GET_CURSOR" && argc === 1)
    this.postMsg(win, "CURSOR", this.idx + "." + this.step);
  if (argv[0] === "GET_NOTES" && argc === 1)
    this.postMsg(win, "NOTES", this.getNotes(this.idx));
}

Dz.toggleContent = function() {
  // If a Video is present in this new slide, play it.
  // If a Video is present in the previous slide, stop it.
  var s = $("section[aria-selected]");
  if (s) {
    var video = s.$("video");
    if (video) {
      if (video.ended || video.paused ) {
        video.play();
      } else {
        video.pause();
      }
    }
    var audio = s.$("audio");
    if (audio) {
      if (audio.ended || audio.paused ) {
        audio.play();
      } else {
        audio.pause();
        if (audio.hasOwnProperty("stop")) {
          audio.stop();
        } else {
          console.warn("audio.stop() does not exist - method audio.pause() is called.");
        }
      }
    }
  }
}

Dz.setCursor = function(aIdx, aStep) {
  console.log("CALL: setCursor(aIdx,aStep)");
  // If the user changes the slide number in the URL bar, jump
  // to this slide.
  //aStep = (aStep != 0 && typeof aStep !== "undefined") ? "x" + aStep : "x0";
  // window.location.hash = "#" + aIdx + aStep;
  var newslide = this.slideprefix + aIdx + this.extension; // + "#" + aStep;
  console.log("setCursor: Filename: '" + newslide + "' aIdx="+aIdx+"  aStep="+aStep);
  window.location.href = newslide;
}

Dz.onhashchange = function() {
    var cursor = window.location.hash.split("#"),
        newidx = 1,
        newstep = 0;
    console.log("onhashchange(newidx,newstep)");
    if (cursor.length == 2) {
      newidx = ~~cursor[1].split(".")[0];
      newstep = ~~cursor[1].split(".")[1];
      console.log("onhashchange('" + newidx + "','" + newstep + "')");
      this.setCursor(newidx,newstep);
    }
    this.setProgress(newidx, newstep);
    if (newidx != this.idx) {
      this.setSlide(newidx);
    }
    if (newstep != this.step) {
      this.setIncremental(newstep);
    }
    for (var i = 0; i < this.remoteWindows.length; i++) {
      this.postMsg(this.remoteWindows[i], "CURSOR", this.idx + "." + this.step);
    }
  }



Dz.getSlideNumber4File = function() {
  var vURL = window.document.location.href;
  var vSlideNr = -1;
  console.log("URL: '" + vURL + "'");
  var vDotPos = vURL.lastIndexOf(".");
  var vSlashPos = vURL.lastIndexOf("/");
  if (vSlashPos > -1) {
    vURL = vURL.substr(vSlashPos+1,vDotPos);
    console.log("Filename: '" + vURL + "'");
    if (vURL) {
      vURL = vURL.replace(/[^0-9]/g,"");
      if (vURL) {
        console.log("Slide Number: "+vURL);
        vSlideNr = parseInt(vURL);
      } else {
        console.error("ERROR: No Number encoded in file name '" + vURL + "'");
      }
    } else {
      console.error("Filename empty in '" + vURL + "'");
    }
  }
  return vSlideNr;
}

Dz.back = function() {
  var vSlideNr = this.getSlideNumber4File();
  console.log("BACK: Current Slide Number: "+vSlideNr);
  console.log("BACK Navigation: this.idx="+this.idx+" this.step="+this.step);
  if (vSlideNr > this.minindex) {
    this.setCursor(vSlideNr - 1,this.step);
  }
}

Dz.forward = function() {
  var vSlideNr = this.getSlideNumber4File();
  console.log("FORWARD: Current Slide Number: "+vSlideNr);
  console.log("FORWARD Navigation: this.idx="+this.idx+" this.step="+this.step);
  if (vSlideNr >= this.maxindex) {
    this.idx = this.maxindex
      return;
  } else {
    if (this.step > 0) {
      this.step--;
    }
    this.setCursor(vSlideNr + 1, 0);
  }
}


Dz.goStart = function() {
  this.setCursor(1, 0);
}

Dz.goEnd = function() {
  //var lastIdx = this.slides.length;
  //var lastStep = this.slides[lastIdx - 1].$$('.incremental > *').length;
  //this.setCursor(lastIdx, lastStep);
  this.setCursor(this.maxslides, 0);
}

Dz.toggleView = function() {
  this.html.classList.toggle("view");

  if (this.html.classList.contains("view")) {
    $("section[aria-selected]").scrollIntoView(true);
  }
}
Dz.setSlide_new = function(aIdx) {
  window.document.location.assign(this.slideprefix + aIdx + ".html");
}

Dz.setSlide = function(aIdx) {
  this.idx = aIdx;
  var old = $("section[aria-selected]");
  var next = $("section:nth-of-type("+ this.idx +")");
  if (old) {
    old.removeAttribute("aria-selected");
    var video = old.$("video");
    if (video) {
      video.pause();
    }
    var audio = old.$("audio");
    if (audio) {
      audio.pause();
      //audio.stop();
    }
  }
  if (next) {
    next.setAttribute("aria-selected", "true");
    if (this.html.classList.contains("view")) {
      next.scrollIntoView();
    }
    var video = next.$("video");
    if (video && !!+this.params.autoplay) {
      video.play();
    }
    var audio = next.$("audio");
    if (audio && !!+this.params.autoplay) {
      audio.play();
    }
  } else {
    // That should not happen
    this.idx = -1;
    // console.warn("Slide doesn't exist.");
  }
}

Dz.setIncremental = function(aStep) {
  this.step = aStep;
}


Dz.goFullscreen = function() {
  var html = $('html'),
      requestFullscreen = html.requestFullscreen || html.requestFullScreen || html.mozRequestFullScreen || html.webkitRequestFullScreen;
  if (requestFullscreen) {
    requestFullscreen.apply(html);
  }
}

Dz.setProgress = function(aIdx, aStep) {
  /*
  var slide = 0;
  if (typeof aIdx === "string") {
    slide = parseInt(aIdx);
  } else {
    slide = aIdx
  }
  */
  aIdx = this.getSlideNumber4File();
  var slideSize = 100 / this.maxindex;
  var barSize = aIdx * slideSize;
  if (barSize > 100) {
    barSize = 100
  } else if (barSize < 0) {
    barSize = 0
  }
  console.log("setProgress(" + aIdx + ") progressBar=" +barSize + "%");
  this.progressBar.style.width = barSize + '%';
}

Dz.postMsg = function(aWin, aMsg) { // [arg0, [arg1...]]
  aMsg = [aMsg];
  for (var i = 2; i < arguments.length; i++)
    aMsg.push(encodeURIComponent(arguments[i]));
  aWin.postMessage(aMsg.join(" "), "*");
}

function init() {
  Dz.init();
  window.onkeydown = Dz.onkeydown.bind(Dz);
  window.onresize = Dz.onresize.bind(Dz);
  window.onhashchange = Dz.onhashchange.bind(Dz);
  window.onmessage = Dz.onmessage.bind(Dz);
}

window.onload = init;


if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {

    // closest thing possible to the ECMAScript 5 internal IsCallable
    // function
    if (typeof this !== "function")
    throw new TypeError(
      "Function.prototype.bind - what is trying to be fBound is not callable"
    );

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply( this instanceof fNOP ? this : oThis || window,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

  var $ = (HTMLElement.prototype.$ = function(aQuery) {
    return this.querySelector(aQuery);
  }).bind(document);

  var $$ = (HTMLElement.prototype.$$ = function(aQuery) {
    return this.querySelectorAll(aQuery);
  }).bind(document);

  $$.forEach = function(nodeList, fun) {
    Array.prototype.forEach.call(nodeList, fun);
  };

</script>
<!-- vim: set fdm=marker: -->
<button class="iconnext" onclick="Dz.forward()">&nbsp; &gt; &nbsp;</button>
<button class="iconprevious" onclick="Dz.back()">&nbsp; &lt; &nbsp;</button>
</body>
</html>

`;

// NodeJS: uncomment modules.export in last line
// module.export = {{classname}};
