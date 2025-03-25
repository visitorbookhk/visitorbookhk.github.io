// GAS

function gasGetLabels() {
  on();
  var url = GAS_URL+'?action=getLabels&lang='+lang;
  $.getJSON(url, function(data) {
    if (data !== null) {
      if (data.status=='0') {
        labels = data.res;
        updatePageLabels();
        createInputView1();
      }else{
        alert(data.error_msg);
        location.reload();
      }
    }
    off();
  });
}

function gasIsReg() {
  on();
  var content = window.btoa(unescape(encodeURIComponent(lifeno)));
  var url = GAS_URL+'?action=isRegistered&content='+content;
  $.getJSON(url, function(data) {
    if (data !== null) {
      if (data.status=='0') {
        if (data.res.isValid == '2') {
          vname = data.res.name;
          createQrView();
        } else if (data.res.isValid == '1') {
          createRegView(data.res);
        }
      }else{
        alert(lab('100010'));
      }
    }
    off();
  });
}

// document

$(document).ready(function() {
  createLangView();
});