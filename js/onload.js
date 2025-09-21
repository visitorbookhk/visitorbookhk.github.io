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
          createQrView(data.res.token);
        } else if (data.res.isValid == '1') {
          createRegView(data.res);
        }
      }else{
        createErrorView(data.error_msg);
      }
      /*
      if (data.status=='0') {
        if (data.res.isValid == '2') {
          vname = data.res.name;
          createQrView(lifeno);
        } else if (data.res.isValid == '1') {
          createRegView(data.res);
        }
      }else{
        alert(lab('100010'));
      }
      */
    }
    off();
  });
}

function gasFullForm() {
  on();
  var url = GAS_URL+'?action=getRegFormWithoutId';
  $.getJSON(url, function(data) {
    if (data !== null) {
      if (data.status=='0') {
        createRegView(data.res);
      }else{
        alert(data.error_msg);
      }
    }
    off();
  });
}

function gasSubmitReg() {
  on();
  var content = window.btoa(unescape(encodeURIComponent(JSON.stringify(regForm))));
  var url = GAS_URL+'?action=regVisit&content='+content;
  $.getJSON(url, function(data) {
    if (data !== null) {
      if (data.status=='0') {
        if (data.res) {
          vname = regForm.fullname.value;
          createQrView(data.res);
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