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
    const elements = document.querySelectorAll('div.group p');
    if (elements.length === 0) return;

    const lastElement = elements[elements.length - 1];
    if (lastElement) {
        copyTextToClipboard(lastElement.textContent);
        const d=document.createElement('div');
        d.textContent='Copied!';
        d.style.position='fixed';
        d.style.top='40px';
        d.style.right='40px';
        d.style.padding='10px';
        d.style.background='rgba(0,0,0,0.5)';
        d.style.color='#fff';
        d.style.zIndex='9999';
        d.style.borderRadius='5px';
        d.style.fontSize='16px';
        d.style.fontFamily='sans-serif';
        d.style.fontWeight='bold';
        d.style.textAlign='center';
        d.style.boxShadow='0 0 10px rgba(0,0,0,0.5)';
        document.body.appendChild(d);
        setTimeout(()=>document.body.removeChild(d),1000);
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "clickElement") {
        clickElement(message.selector);
    } else if (message.action === "copyElementText") {
        copyElementText();
    } else if (message.action === "focusToInput") {
        document.querySelector('textarea').focus();
    }
});

window.addEventListener('keyup', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === '4') {
        if (location.pathname === '/') {
            location.search = 'model=gpt-4';
        }
    }
});