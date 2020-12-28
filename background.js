

function startDownload() {
    console.log("start download");
}

browser.browserAction.onClicked.addListener(startDownload);
