chrome.storage.onChanged.addListener(function(changes) {
    if ("mode" in changes) {
        chrome.storage.local.get(["tabId", "text"], function(result) {
            chrome.scripting.insertCSS({
                target: {tabId: result.tabId},
                files: [changes.mode.newValue],
            });
            chrome.action.setBadgeText({tabId: result.tabId, text: result.text});
        });
    }
});
