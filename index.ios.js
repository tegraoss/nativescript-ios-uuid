var utils_1 = require("utils/utils");
function getUUID() {
    var mainBundle = utils_1.ios.getter(NSBundle, NSBundle.mainBundle);
    var appName = mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
    if (!strApplicationUUID) {
        var currentDevice = utils_1.ios.getter(UIDevice, UIDevice.currentDevice);
        strApplicationUUID = currentDevice.identifierForVendor.UUIDString;
        SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
    }
    return strApplicationUUID;
}
exports.getUUID = getUUID;
//# sourceMappingURL=index.ios.js.map