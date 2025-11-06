const GAS_URL = 'https://script.google.com/macros/s/AKfycbzM9xakhS9QDBKrRylLCu5rQ2h38UJgP6iZer1b8X0eTfR4HXg7fubWnCJZP_BM1Qwz1w/exec';
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