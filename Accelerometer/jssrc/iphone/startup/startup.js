//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "acc",
    appName: "Accelerometer",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.1.46",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.10.1.46:80/middleware/MWServlet",
    secureurl: "https://10.10.1.46:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrOne();
    initializeftrOne();
    frmAclmeterGlobals();
    frmAclMeter1Globals();
    frmHomeGlobals();
    frmRegisterAccelerometerGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};