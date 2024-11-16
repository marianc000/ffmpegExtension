//swOpenTab.js
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({
        url: "/html/index.html"
    }));
