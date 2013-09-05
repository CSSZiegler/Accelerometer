//Form JS File
function frmRegisterAccelerometer_frmRegisterAccelerometer_onhide_seq0(eventobject, neworientation) {
    onHideDeregister.call(this);
};

function frmRegisterAccelerometer_btnUnregister_onClick_seq0(eventobject) {
    unRegisterAccEvent.call(this);
};

function addWidgetsfrmRegisterAccelerometer() {
    var lblEvent2 = new kony.ui.Label({
        "id": "lblEvent2",
        "isVisible": true,
        "text": null,
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblEvent1 = new kony.ui.Label({
        "id": "lblEvent1",
        "isVisible": true,
        "text": "No of times device shaked:",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 82
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblEvent3 = new kony.ui.Label({
        "id": "lblEvent3",
        "isVisible": true,
        "text": "0",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 18
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox10446524724681 = new kony.ui.Box({
        "id": "hbox10446524724681",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 5, 4, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524724681.add(
    lblEvent1, lblEvent3);
    var btnUnregister = new kony.ui.Button({
        "id": "btnUnregister",
        "isVisible": true,
        "text": "Unregister",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmRegisterAccelerometer_btnUnregister_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 15, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmRegisterAccelerometer.add(
    lblEvent2, hbox10446524724681, btnUnregister);
};

function frmRegisterAccelerometerGlobals() {
    var MenuId = [];
    frmRegisterAccelerometer = new kony.ui.Form2({
        "id": "frmRegisterAccelerometer",
        "title": "Shake Event",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "onHide": frmRegisterAccelerometer_frmRegisterAccelerometer_onhide_seq0,
        "addWidgets": addWidgetsfrmRegisterAccelerometer
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};