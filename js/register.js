function gasAttend(code) {
  on();
  var content = code;
  var url = GAS_URL+'?action=addAttend&content='+content;
  $.getJSON(url, function(data) {
    if (data !== null) {
      if (data.status=='0') {
        createAccessView(data.res);
      }else{
        alert(data.error_msg);
      }
    }
    off();
  });
}

$(document).ready(function() {
  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('v')) {
    gasAttend(urlParams.get('v'));
  }
});