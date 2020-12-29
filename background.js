

function startDownload() {
    console.log("start download");
}

function notify(message) {
    var fname = message.img.split('#').shift().split('?').shift().split('/').pop();
    browser.downloads.download({
        url : message.img,
        filename : 'n1/' + fname,
        conflictAction : 'uniquify'
    });
    /*
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("link.png"),
        "title": "You clicked a link!",
        "message": message.img
      });
      */
}

browser.browserAction.onClicked.addListener(startDownload);
browser.runtime.onMessage.addListener(notify);

