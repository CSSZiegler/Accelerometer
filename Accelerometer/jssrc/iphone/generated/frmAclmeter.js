//Form JS File
function frmAclmeter_btnAccData_onClick_seq0(eventobject) {
    retrieveCurrentAcc.call(this);
    frmAclMeter1.show();
};

function frmAclmeter_btnMonitorAcc_onClick_seq0(eventobject) {
    startmonitoringAcc.call(this);
    frmAclMeter1.show();
};

function frmAclmeter_btnShakeEvent_onClick_seq0(eventobject) {
    regAccEvent.call(this);
    frmRegisterAccelerometer.show();
};

function addWidgetsfrmAclmeter() {
    var btnAccData = new kony.ui.Button({
        "id": "btnAccData",
        "isVisible": true,
        "text": "Current accelerometer data",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAclmeter_btnAccData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 8, 4, 5],
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
    var btnMonitorAcc = new kony.ui.Button({
        "id": "btnMonitorAcc",
        "isVisible": true,
        "text": "Start monitoring acceleration",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAclmeter_btnMonitorAcc_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
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
    var btnShakeEvent = new kony.ui.Button({
        "id": "btnShakeEvent",
        "isVisible": true,
        "text": "Register shake event",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAclmeter_btnShakeEvent_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
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
    frmAclmeter.add(
    btnAccData, btnMonitorAcc, btnShakeEvent);
};

function frmAclmeterGlobals() {
    var MenuId = [];
    frmAclmeter = new kony.ui.Form2({
        "id": "frmAclmeter",
        "title": "Basic Features",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAclmeter
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
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