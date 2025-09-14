  function onScanSuccess(decodedText, decodedResult) {
    html5QrcodeScanner.clear();
    gasAttend(decodedText);
  }
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },false);
  html5QrcodeScanner.render(onScanSuccess);