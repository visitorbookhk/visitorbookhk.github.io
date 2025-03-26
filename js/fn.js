function selectLang(input) {
  lang = input;
  setInnerHTMLById('container','');
  gasGetLabels();
}

function lab(id) {
  return id ? labels[id] : '';
}

function labArr(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(lab(arr[i]));
  }
  return res;
}

function checkisReg() {
  vname = '';
  regForm = {};
  lifeno = document.getElementById('iv1_lifeno').value;
  (lifeno.length > 0) ? gasIsReg() : gasFullForm();
}

function getCSSClassStr(key) {
  return key.split(' ');
}

function createCustomElement(ele, cssClassKey='') {
  var e = document.createElement(ele);
  if (cssClassKey != '') {
    let arr = cssClassKey.split(' ');
    for (i=0; i<arr.length; i++) {
      // alert(arr[i]);
      e.classList.add(...getCSSClassStr(arr[i]));
    }
    
  }
  
  return e;
}