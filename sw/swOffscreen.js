//swOffscreen.js
chrome.action.onClicked.addListener(() =>
    chrome.offscreen.createDocument({
        url: '/html/index.html',
        reasons: ['WORKERS'],
        justification: 'valid reasons'
    }) //.then(() => setTimeout(() => chrome.offscreen.closeDocument(), 1000))
);
