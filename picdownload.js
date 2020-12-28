var pDownload = {
    mouseX: 0,
    mouseY: 0,
    onKeyDown: function(e) {
        if (e.key == '<') {
            var el = document.elementFromPoint(pDownload.mouseX, pDownload.mouseY);
            if (el) {
                console.log(el);
                if (el.tagName == "IMG") console.log("Image!");
            }
        }
    },
    onMouseMove: function(e) {
        pDownload.mouseX = e.x;
        pDownload.mouseY = e.y;
    }
};

document.addEventListener('keydown', pDownload.onKeyDown, false);
document.addEventListener('mousemove', pDownload.onMouseMove, false);
