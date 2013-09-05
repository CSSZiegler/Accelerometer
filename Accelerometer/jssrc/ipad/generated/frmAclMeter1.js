//Form JS File
function frmAclMeter1_frmAclMeter1_onhide_seq0(eventobject, neworientation) {
    stopMonitering.call(this);
};

function frmAclMeter1_btnStopAcc_onClick_seq0(eventobject) {
    stopMonitering.call(this);
};

function addWidgetsfrmAclMeter1() {
    var lblXCord = new kony.ui.Label({
        "id": "lblXCord",
        "isVisible": true,
        "text": "X coordinate:",
        "skin": "sknLblFontWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblX = new kony.ui.Label({
        "id": "lblX",
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox10446524723463 = new kony.ui.Box({
        "id": "hbox10446524723463",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 7, 6, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723463.add(
    lblXCord, lblX);
    var lblYCord = new kony.ui.Label({
        "id": "lblYCord",
        "isVisible": true,
        "text": "Y coordinate:",
        "skin": "sknLblFontWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblY = new kony.ui.Label({
        "id": "lblY",
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox10446524723404 = new kony.ui.Box({
        "id": "hbox10446524723404",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 3, 6, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723404.add(
    lblYCord, lblY);
    var lblZCord = new kony.ui.Label({
        "id": "lblZCord",
        "isVisible": true,
        "text": "Z coordinate:",
        "skin": "sknLblFontWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblZ = new kony.ui.Label({
        "id": "lblZ",
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox10446524723481 = new kony.ui.Box({
        "id": "hbox10446524723481",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 0, 6, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723481.add(
    lblZCord, lblZ);
    var lblTCord = new kony.ui.Label({
        "id": "lblTCord",
        "isVisible": true,
        "text": "Time Stamp:",
        "skin": "sknLblFontWhiteBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblT = new kony.ui.Label({
        "id": "lblT",
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 62
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox10446524723863 = new kony.ui.Box({
        "id": "hbox10446524723863",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 3, 6, 3],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723863.add(
    lblTCord, lblT);
    var btnStopAcc = new kony.ui.Button({
        "id": "btnStopAcc",
        "isVisible": true,
        "text": "Stop Accelerometer",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAclMeter1_btnStopAcc_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 4, 6, 2],
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
    frmAclMeter1.add(
    hbox10446524723463, hbox10446524723404, hbox10446524723481, hbox10446524723863, btnStopAcc);
};

function frmAclMeter1Globals() {
    var MenuId = [];
    frmAclMeter1 = new kony.ui.Form2({
        "id": "frmAclMeter1",
        "title": "Accelerometer Readings",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "onHide": frmAclMeter1_frmAclMeter1_onhide_seq0,
        "addWidgets": addWidgetsfrmAclMeter1
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