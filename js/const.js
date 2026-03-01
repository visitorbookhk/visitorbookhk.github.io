const GAS_URL = 'https://script.google.com/macros/s/AKfycbxvGwoRbb4n0FaqmSF1ySh1YepGmwXqMqM5TsGcp7MMixVCeV4xlANn3ZsslRJfvt3YnA/exec';
const YOUR_CLIENT_ID = '876557140858-2mc16osg1aojod8jqvgsa35mvck0a55p.apps.googleusercontent.com';
const YOUR_REDIRECT_URI = 'https://visitorbookhk.github.io/register';
const lang_op = {
  'en': 'English',
  'zh': '繁體中文',
  'ko': '한국어',
};
const alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {backdrop: 'static', keyboard: false});
const inputModal = new bootstrap.Modal(document.getElementById('inputModal'), {backdrop: 'static', keyboard: false});
const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'), {backdrop: 'static', keyboard: false});
const scanModal = new bootstrap.Modal(document.getElementById('scanModal'), {backdrop: 'static', keyboard: false});
