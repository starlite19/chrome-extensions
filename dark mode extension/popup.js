let darkMode = document.getElementById("dark");
let lightMode = document.getElementById("light");

chrome.storage.local.set({tabId: null, mode: "none", text: "none"});

darkMode.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.storage.local.set({tabId: tab.id, mode: "dark.css", text: "Dark"});

});

lightMode.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.storage.local.set({tabId: tab.id, mode: "light.css", text: "Light"});
});


