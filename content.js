function clickElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    element.click();
  }
}

function copyTextToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  document.querySelector('textarea').focus();
}

function copyElementText() {
  const elements = document.querySelectorAll('div.group');
  if(elements.length === 0) return;

  const lastElement = elements[elements.length - 1];
  if (lastElement) {
    copyTextToClipboard(lastElement.textContent);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "clickElement") {
    clickElement(message.selector);
  }
  else if (message.action === "copyElementText") {
    copyElementText();
  }else if(message.action === "focusToInput"){
    document.querySelector('textarea').focus();
  }
});

function switchToGPT4() {
  location.search = 'model=gpt-4';
}

function setupKeyboardShortcutCtrlShift4(e) {
  if (e.ctrlKey && e.shiftKey && e.key === '4') {
    switchToGPT4();
  }
}

function setupKeyboardShortcut() {
  window.addEventListener('keyup', (e) => {
    setupKeyboardShortcutCtrlShift4(e);
  });
}

setupKeyboardShortcut();