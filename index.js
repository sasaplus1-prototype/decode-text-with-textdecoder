(function(){

  'use strict';

  var download = document.getElementById('js-download');

  download.addEventListener('click', function(event) {
    var decoder, source, text, blob;

    decoder = new TextDecoder('shift_jis', {
      fatal: false,
      ignoreBOM: true
    });

    // Shift_JIS
    source = new Uint8Array([
      0x83, 0x57,
      0x83, 0x83,
      0x83, 0x6f
    ]);

    text = decoder.decode(source);

    blob = new Blob([text], {
      type: 'text/plain'
    });

    download.href = URL.createObjectURL(blob);
  }, false);

}());
