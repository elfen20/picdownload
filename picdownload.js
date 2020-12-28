var pDownload = {
    mouseX: 0,
    mouseY: 0,
};

document.addEventListener('keydown', (event) => {
    if (event.key == '<') {
        var el = document.elementFromPoint(pDownload.mouseX, pDownload.mouseY);
        if (el) {
            console.log(el);
            if (el.tagName == "IMG") console.log("Image!");
        }
    }
}, false);

document.addEventListener('mousemove', (event) => {
    pDownload.mouseX = event.x;
    pDownload.mouseY = event.y;
}, false);
