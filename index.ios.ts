import { ios } from "utils/utils"; 

export function getUUID() {
    let mainBundle = ios.getter(NSBundle, NSBundle.mainBundle);
    let appName = mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
    if (!strApplicationUUID) {
        let currentDevice = ios.getter(UIDevice, UIDevice.currentDevice);
        strApplicationUUID = currentDevice.identifierForVendor.UUIDString;
        SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
    }

    return strApplicationUUID;
}
