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
  alertModal.show();
}

function showInputModal(title, body, footer) {
  document.getElementById('inputModalTitle').innerHTML = '';
  document.getElementById('inputModalBody').innerHTML = '';
  document.getElementById('inputModalFooter').innerHTML = '';

  document.getElementById('inputModalTitle').innerHTML = title;
  document.getElementById('inputModalBody').innerHTML = body;
  document.getElementById('inputModalFooter').innerHTML = footer;
  inputModal.show();
}

function showConfirmModal(title, body, footer) {
  inputModal.hide();
  document.getElementById('confirmModalTitle').innerHTML = '';
  document.getElementById('confirmModalBody').innerHTML = '';
  document.getElementById('confirmModalFooter').innerHTML = '';

  document.getElementById('confirmModalTitle').innerHTML = title;
  document.getElementById('confirmModalBody').innerHTML = body;
  document.getElementById('confirmModalFooter').innerHTML = footer;
  confirmModal.show();
}

function createFormInputSelect(_key, _options, _values, multi_input, _mandatory) {

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
  if (_mandatory) {
    select.setAttribute('required','true');
  }

  for (var i = 0; i < _values.length; i++) {
    var opt = createCustomElement('option');
    opt.value = _values[i];
    opt.innerHTML = _values[i];
    select.appendChild(opt);
  }


  if (_key == 'reason') {
    select.setAttribute('onchange', 'return reasonOnchange();');
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
      // input.removeAttribute('disabled');
    }
  }

  temp.appendChild(div);
  return temp.innerHTML;
}

function createFormInputText(_key, _label, _placeholder, _mandatory) {

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
  if (_mandatory) {
    input.setAttribute('required','true');
  }

  temp.appendChild(div);
  return temp.innerHTML;
}

function createFormInputDate(_key, _label, _mandatory) {

  var input_id = _key;

  var temp = createCustomElement('div');

  var input = createCustomElement('input', 'form-control');
  temp.appendChild(input);
  input.id = input_id;
  input.setAttribute('style','display:none');
  if (_mandatory) {
    input.setAttribute('required','true');
  }

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
  inputy.setAttribute('onchange', 'return dateOnchange("'+input_id+'")');

  var inputm = createCustomElement('input', 'form-control');
  div.appendChild(inputm);
  inputm.id=input_id+'_m';
  inputm.setAttribute('type', 'text');
  inputm.setAttribute('placeholder', lab('100017'));
  inputm.setAttribute('aria-label', lab('100017'));
  inputm.setAttribute('aria-describedby', input_id+'_m');
  inputm.setAttribute('onchange', 'return dateOnchange("'+input_id+'")');

  var inputd = createCustomElement('input', 'form-control');
  div.appendChild(inputd);
  inputd.id=input_id+'_d';
  inputd.setAttribute('type', 'text');
  inputd.setAttribute('placeholder', lab('100018'));
  inputd.setAttribute('aria-label', lab('100018'));
  inputd.setAttribute('aria-describedby', input_id+'_d');
  inputd.setAttribute('onchange', 'return dateOnchange("'+input_id+'")');

  if (_mandatory) {
    var today = new Date();
    inputy.setAttribute('value', today.getFullYear());
    inputm.setAttribute('value', today.getMonth()+1);
    inputd.setAttribute('value', today.getDate());
    var str = inputy.value+'-'+inputm.value+'-'+inputd.value;
    var date = new Date (str);
    input.setAttribute('value', (date=='Invalid Date') ? 'Invalid Date' : str);
  }

  temp.appendChild(div);
  return temp.innerHTML;
}

function reasonOnchange() {
  var reason = document.getElementById('reason');
  var input = document.getElementById('reason_other');
  if (reason.value == lab('100040')) {
    input.removeAttribute('disabled');
  }else{
    input.setAttribute('disabled', 'disabled'); 
    input.value='';
  }
}

function dateOnchange(id) {
  var input = document.getElementById(id);
  var inputy = document.getElementById(id+'_y');
  var inputm = document.getElementById(id+'_m');
  var inputd = document.getElementById(id+'_d');
  var str = inputy.value+'-'+inputm.value+'-'+inputd.value;
  var date = new Date (str);
  // date.setFullYear(inputy.value, inputm.value+1, inputd.value);
  if (inputy.value=='' && inputm.value=='' && inputd.value=='') {
    input.setAttribute('value', '');
  } else{
    input.setAttribute('value', (date=='Invalid Date' || inputy.value=='' || inputm.value=='' || inputd.value=='') ? 'Invalid Date' : str);
  }
}

function backRegForm() {
  confirmModal.hide();
  inputModal.show();
}

function submitRegForm() {
  confirmModal.hide();
  gasSubmitReg();
}

function createConfrimRegView() {

  var body = '';

  for (var i in regForm) {
    
    if (regForm[i].value == lab('100040') && document.getElementById('reason_other').value.length>0) {
      regForm[i].value += ' ('+document.getElementById('reason_other').value+')';
    }else{
      regForm[i].value = document.getElementById(i).value;
    }

    if (regForm[i].value == 'Invalid Date') {
      alert(regForm[i].label+': '+lab('100051'));
      backRegForm();
      return;
    }
    if (regForm[i].value == '' && (document.getElementById(i).required)) {
      alert(regForm[i].label+': '+lab('100044'));
      backRegForm();
      return;
    }
    
    regForm['lifeno'] = {'value': lifeno};

    body += '<span><strong>'+regForm[i].label+':</strong> <p class="text-primary">'+regForm[i].value+'</p></span>';
  }


  var footer = '<button type="button" class="btn btn-secondary" onclick="return backRegForm();">'+lab('100005')+'</button>';
  footer += '<button type="button" class="btn btn-danger" onclick="return submitRegForm();">'+lab('100050')+'</button>';
  showConfirmModal(lab('100049'),body,footer);
}

function createRegView(res) {
  regForm = {};
  var body = '<div class="alert alert-primary" role="alert">'+lab('100044')+'</div>';

  var form = res.regForm;

  for (var i=0; i < form.length; i++) {
    regForm[form[i].key] = {};
    regForm[form[i].key].label = lab(form[i].label);
    var mandatoryMark = '';
    if (form[i].mandatory==true) {
      mandatoryMark = '*';
    }
    if (form[i].type=='date') {
      body += createFormInputDate(form[i].key, mandatoryMark+lab(form[i].label), form[i].mandatory);
    }
    if (form[i].type=='text') {
      body += createFormInputText(form[i].key, mandatoryMark+lab(form[i].label), lab(form[i].placeholder), form[i].mandatory);
    }
    if (form[i].type=='select') {
      body += createFormInputSelect(form[i].key, mandatoryMark+lab(form[i].label), labArr(form[i].values), form[i]['multi-input']? form[i]['multi-input'] : [], form[i].mandatory);
    }
  }

  var footer = '<button type="button" class="btn btn-primary" onclick="return createConfrimRegView();">'+lab('100048')+'</button>';

  showInputModal(lab('100001'),body,footer);


}

function createQrView(code) {
  var html = '';
  html += '        <div class="d-flex col flex-column align-items-center mt-5 mb-5">';
  html += '          <div id="qrcode"></div>';
  html += '          <p><h1>'+vname+'</h1></p>';
  html += '        </div>';

  showAlertModal(lab('100008'), html,'');

  var qrcode = new QRCode("qrcode","https://visitorbookhk.github.io/register?v="+window.btoa(unescape(encodeURIComponent(code))));
}

function createAccessView(res) {
  console.log(JSON.stringify(res))
  var contentHTML = '';
  contentHTML += '<div class="text-center"><img class="mt-3 mb-3" src="../img/tick_'+res.type+'.gif" class="d-block w-70" alt="">';
  contentHTML += '<h3><span class="badge rounded-pill text-bg-'+((res.type=='sys')?'success':'danger')+'">'+res.name+'</span></h3></div>';
  showAlertModal('成功', contentHTML, '');
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