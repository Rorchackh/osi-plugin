chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.doWhatNow == "DanseLeMia") {
        sendResponse({doWhatNow: document.getElementsByTagName("html")[0].innerHTML});
    }
});