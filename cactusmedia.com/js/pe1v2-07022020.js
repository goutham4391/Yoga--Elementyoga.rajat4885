function getC2ok(name) {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function appcmcss(lnk) {
  var cssId="cmpxcss07022020";
  if(!document.getElementById(cssId)) {
    //var head=document.getElementsByTagName('head')[0];
    var cssLnk=document.createElement('link');
    cssLnk.id=cssId;
    cssLnk.rel='stylesheet';
    cssLnk.type='text/css';
    cssLnk.href=lnk;
    cssLnk.media='all';
    document.head.appendChild(cssLnk);
  }
}

function appxl() {
  var sid=getC2ok("cmsid");
  if(sid) {
    var lnk='https://cactusmedia.com/clspxv1.wgf?sid='+sid;
    appcmcss(lnk);
  }
}

if (document.readyState!='loading') appxl();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', appxl);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') appxl();
});