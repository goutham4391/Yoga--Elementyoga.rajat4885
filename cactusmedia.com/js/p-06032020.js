function getUrlVars(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(o,n,t){e[n]=t});return e}function setC2ok(e,o,n){n=n||1,c2ok=encodeURIComponent(e)+"="+encodeURIComponent(o)+";max-age="+86400*n+";path=/;samesite=strict;secure",document.cookie=c2ok}function getC2ok(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function setSidC2ok(){var e=getUrlVars().sid_name;e&&setC2ok("cmsid",getUrlVars()[e],1)}setSidC2ok();