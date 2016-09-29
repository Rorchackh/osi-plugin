chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { doWhatNow: "DanseLeMia"}, function (response) {

        response = $(response.doWhatNow);
        iframe = response.find(".aw-diagnostic-preview-iframe");

        if (iframe.length == 0) {
            iframe = response.find(".aw-diagnostic-preview-iframe-v2");
        }

        var src = iframe.attr('src');
        window.open("http://reports.quantads.net/?module=Core&controller=Test&action=downloadRemotePage&page=" + encodeURIComponent(src));
    });
});