//Template File
function initializehdrOne() {
    var image2192735980024419 = new kony.ui.Image2({
        "id": "image2192735980024419",
        "isVisible": true,
        "src": "konylogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 100
    }, {});
    hbox192735980024418 = new kony.ui.Box({
        "id": "hbox192735980024418",
        "isVisible": true,
        "skin": "hbxWhiteBG",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980024418.add(
    image2192735980024419);
};