let current_search_engine = ""

const search_engines = {
    google: "https://www.google.com/search?q=",
    startpage: "https://www.startpage.com/do/dsearch?query=",
    duckduckgo: "https://duckduckgo.com/?q=",
    ecoasia: "https://www.ecosia.org/search?q=",
    bing: "https://www.bing.com/search?q="
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'save_search_engine') {
        current_search_engine = request.payload;
        sendResponse({ message: 'success' });
    }
});
