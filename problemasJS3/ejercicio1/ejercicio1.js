
let mouseBrowserInfo = document.getElementById('mouseBrowser');
let mousePageInfo = document.getElementById('mousePage');
let keyEventInfo = document.getElementById('keyEvent');

document.addEventListener('mousemove', function(event) {
   
    let mouseXBrowser = event.clientX;
    let mouseYBrowser = event.clientY;
    mouseBrowserInfo.textContent = `X: ${mouseXBrowser}px, Y: ${mouseYBrowser}px`;

  
    let mouseXPage = event.pageX;
    let mouseYPage = event.pageY;
    mousePageInfo.textContent = `X: ${mouseXPage}px, Y: ${mouseYPage}px`;
});

document.addEventListener('keydown', function(event) {
    let key = event.key;
    let keyCode = event.keyCode;
    keyEventInfo.textContent = `Tecla pulsada: ${key}, Código: ${keyCode}`;
});
