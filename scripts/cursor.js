function get_cookie(cookie_name) { const value = "; " + document.cookie; const parts = value.split("; " + cookie_name + "="); if (parts.length === 2) return parts.pop().split(";").shift(); } 

var script=document.createElement("script");
script.src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
document.body.appendChild(script);

var isenabled=get_cookie("cursor");

var iframepos = $("#frame").position();

$('#frame').contents().find('html').on('mousemove', function (e) { 
    var mousex = e.clientX + iframepos.left; 
    var mousey = e.clientY + iframepos.top;
})

if (isenabled=="on"){
  var ring = document.createElement('img');
  ring.id="ring";
  ring.src="/img/ring.gif";
  ring.style.pointerEvents = "none";
  ring.style.userdrag="none";
  ring.style.userselect="none";
  ring.style.zIndex="2147483647";
  ring.style.display="none";
  ring.style.position="absolute";
  ring.style.width="45px";
  ring.style.height="45px";
  document.body.appendChild(ring);

  var cursor1 = document.createElement('img');
  cursor1.id="cursor1";
  cursor1.src="/img/cursor.png";
  cursor1.style.pointerEvents = "none";
  cursor1.style.userdrag="none";
  cursor1.style.userselect="none";
  cursor1.style.zIndex="999999999999999999999999999999999999";
  cursor1.style.display="none";
  cursor1.style.position="absolute";
  cursor1.style.width="22px";
  cursor1.style.height="25px";
  document.body.appendChild(cursor1);

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)!=true){ 
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener("mouseleave", (event) => {  
      if (mousey<0 || mousex<0 || (mousex>window.innerWidth || mousey>window.innerHeight)) {  
        cursor1.style.display="none";
        ring.style.display="none";
      }  
    });
    window.addEventListener('mousemove', (event) => {
      cursor1.style.display="block";
      ring.style.display="block";
      var toleft=mousex-3;
      var totop=mousey-5;
      cursor1.style.left=toleft+"px";
      cursor1.style.top=totop+"px";
      function waiting(){
        var toleft2=mousex-14.5;
        var totop2=mousey-14;
        ring.style.left=toleft2+"px";
        ring.style.top=totop2+"px";
      }
      setTimeout(waiting,15);
    });
  }
  document.onkeypress = function () {cursor1.style.display="none"; ring.style.display="none";};
  function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.cursor="none";}}a(document);
}
else{
  function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.cursor="auto";}}a(document);
}
