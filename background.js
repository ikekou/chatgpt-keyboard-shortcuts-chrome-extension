chrome.commands.onCommand.addListener((command) => {

  if (command === "click_new_chat") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "clickElement",
        selector: "nav>a:first-of-type",
      });
    });
  }

  else if (command === "click_stop_or_regenerate") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "clickElement",
        selector: "form>div:first-of-type>div:first-of-type>button",
      });
    });
  }

  else if (command === "copy_last_text") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "copyElementText"
      });
    });
  }

  else if (command === "focus_to_input") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "focusToInput"
      });
    });
  }

});
