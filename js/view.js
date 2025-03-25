function updatePageLabels() {
  setInnerHTMLById('title', lab('100001'));
}

function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}

function setAttributeValueById(id, attr, value) {
  if (document.getElementById(id)) {
    document.getElementById(id).setAttribute(attr, value);
  }
}

function setInnerHTMLById(id, value) {
  if (document.getElementById(id)) {
    document.getElementById(id).innerHTML = value;
  }
}

function showAlertModal(title, body, footer) {
  document.getElementById('alertModalTitle').innerHTML = '';
  document.getElementById('alertModalBody').innerHTML = '';
  document.getElementById('alertModalFooter').innerHTML = '';

  document.getElementById('alertModalTitle').innerHTML = title;
  document.getElementById('alertModalBody').innerHTML = body;
  document.getElementById('alertModalFooter').innerHTML = footer;
  // $('#alertModal').modal({backdrop: 'static', keyboard: false});
  alertModal.show();
}

function createFormInputSelect(_key, _options, _values, multi_input) {

  var input_id = _key;

  var temp = createCustomElement('div');

  var div = createCustomElement('div', 'input-group mb-3');

  var label = createCustomElement('label', 'input-group-text');
  div.appendChild(label);
  label.setAttribute('for', input_id);
  label.innerHTML = _options;

  var select = createCustomElement('select', 'form-select');
  div.appendChild(select);
  select.id = input_id;
  select.value = _values[0];

  for (var i = 0; i < _values.length; i++) {
    var opt = createCustomElement('option');
    opt.value = _values[i];
    opt.innerHTML = _values[i];
    select.appendChild(opt);
  }

  for (var j = 0; j < multi_input.length; j++) {
    if (multi_input[j].type = 'text') {
      var input = createCustomElement('input', 'form-control');
      div.appendChild(input);
      input.id=multi_input[j].key;
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', lab(multi_input[j].placeholder));
      input.setAttribute('aria-label', lab(multi_input[j].placeholder));
      input.setAttribute('aria-describedby', multi_input[j].key); 
      input.setAttribute('disabled', 'disabled'); 
      input.removeAttribute('disabled');
    }
  }

  temp.appendChild(div);
  return temp.innerHTML;
}

function createFormInputText(_key, _label, _placeholder) {

  var input_id = _key;

  var temp = createCustomElement('div');

  var div = createCustomElement('div', 'input-group mb-3');

  var span = createCustomElement('span', 'input-group-text');
  div.appendChild(span);
  span.innerHTML = _label;
  span.id = 'label_'+input_id;

  var input = createCustomElement('input', 'form-control');
  div.appendChild(input);
  input.id=input_id;
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', _placeholder);
  input.setAttribute('aria-label', _placeholder);
  input.setAttribute('aria-describedby', input_id);

  temp.appendChild(div);
  return temp.innerHTML;
}

function createFormInputDate(_key, _label) {

  var input_id = _key;

  var temp = createCustomElement('div');

  var div = createCustomElement('div', 'input-group mb-3');

  var span = createCustomElement('span', 'input-group-text');
  div.appendChild(span);
  span.innerHTML = _label;
  span.id = 'label_'+input_id;

  var inputy = createCustomElement('input', 'form-control');
  div.appendChild(inputy);
  inputy.id=input_id+'_y';
  inputy.setAttribute('type', 'text');
  inputy.setAttribute('placeholder', lab('100016'));
  inputy.setAttribute('aria-label', lab('100016'));
  inputy.setAttribute('aria-describedby', input_id+'_y');

  var inputm = createCustomElement('input', 'form-control');
  div.appendChild(inputm);
  inputm.id=input_id+'_m';
  inputm.setAttribute('type', 'text');
  inputm.setAttribute('placeholder', lab('100017'));
  inputm.setAttribute('aria-label', lab('100017'));
  inputm.setAttribute('aria-describedby', input_id+'_m');

  var inputd = createCustomElement('input', 'form-control');
  div.appendChild(inputd);
  inputd.id=input_id+'_d';
  inputd.setAttribute('type', 'text');
  inputd.setAttribute('placeholder', lab('100018'));
  inputd.setAttribute('aria-label', lab('100018'));
  inputd.setAttribute('aria-describedby', input_id+'_d');

  temp.appendChild(div);
  return temp.innerHTML;
}

function createRegView(res) {
  var body = '<div class="alert alert-primary" role="alert">'+lab('100044')+'</div>';

  var form = res.regForm;

  for (var i=0; i < form.length; i++) {
    var mandatoryMark = '';
    if (form[i].mandatory==true) {
      mandatoryMark = '*'
    }
    if (form[i].type=='date') {
      body += createFormInputDate(form[i].key, mandatoryMark+lab(form[i].label));
    }
    if (form[i].type=='text') {
      body += createFormInputText(form[i].key, mandatoryMark+lab(form[i].label), lab(form[i].placeholder));
    }
    if (form[i].type=='select') {
      body += createFormInputSelect(form[i].key, mandatoryMark+lab(form[i].label), labArr(form[i].values), form[i]['multi-input']? form[i]['multi-input'] : []);
    }
  }
  showAlertModal(lab('100001'),body,'');


}

function createQrView() {
  var html = '';
  html += '        <div class="d-flex col flex-column align-items-center mt-5 mb-5">';
  html += '          <div id="qrcode"></div>';
  html += '          <p><h1>'+vname+'</h1></p>';
  html += '        </div>';

  showAlertModal(lab('100008'), html,'');

  var qrcode = new QRCode("qrcode","https://visitorbookhk.github.io/register?v="+window.btoa(unescape(encodeURIComponent(lifeno))));
}

function createInputView1() {
  var html = '';
  html += '      <div id="inputView1" class="text-center">';
  html += '        <div class="d-flex col flex-column align-items-center mt-3 mb-3">';
  html += '          <h3 class="mt-5 mb-5 col-11">'+lab('100009')+'</h3>';
  html += '          <div class="col-8 col-md-4">';
  html += '          <input type="text" class="form-control" id="iv1_lifeno" placeholder="">';
  html += '          </div>';
  html += '          <button type="button" class="btn btn-primary col-5 mt-5 mb-3" onclick="return checkisReg();" id="nextBtn"></button>';
  html += '        </div>';
  html += '      </div>';

  setInnerHTMLById('container', html);

  setAttributeValueById('iv1_lifeno', 'placeholder', lab('100002'));
  setInnerHTMLById('iv1_nolifeno_label', lab('100003'));
  setInnerHTMLById('nextBtn', lab('100004'));
}

function createLangView() {
  var html = '';
  html += '      <div class="position-absolute top-50 start-50 translate-middle col-12">';
  html += '        <div class="d-flex col flex-column align-items-center mt-3 mb-3">';
  html += '          <div class="btn-group" role="group" aria-label="select language">';
  for (var op in lang_op) {
    html += '            <button type="button" class="btn btn-outline-primary btn-lg" onclick="return selectLang(\''+op+'\');">'+lang_op[op]+'</button>';
  }
  html += '          </div>';
  html += '        </div>';
  html += '      </div>';

  setInnerHTMLById('container', html);
}