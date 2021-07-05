import {
    Platform,
    PermissionsAndroid
} from "react-native";

const RNFS = require("react-native-fs");

// function to check permission on android
const checkPermission = async () => {
    if (Platform.OS === "ios") {
        return true;
    }
    else {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Storage Permission Required",
                    message: "Application needs access to your storage to save files"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log("++++", err)
        }
    }
}

// function to write a text file at path
export const save = async (text) => {
    let date = new Date();
    var filename = date.toLocaleDateString().replace(/\//g, "-") + "_" + date.toLocaleTimeString().replace(/:/g, "-") + ".txt";
    var path = `${RNFS.ExternalStorageDirectoryPath}/MyRottenLife/`;
    var perm = await checkPermission();
    if (perm) {
        if (! await RNFS.exists(path)) {
            RNFS.mkdir(path);
        }
        RNFS.writeFile(path+filename, text, "utf8")
        .then((success) => {})
        .catch((err) => {console.log(err)});
    }
    else {
        return false
    }
}

// function to read all the files from path
export const read = async () => {
    let path = `${RNFS.ExternalStorageDirectoryPath}/MyRottenLife/`;
    var arr = new Array();
    let items = await RNFS.readDir(path);
    items.forEach((item) => {
        arr.push(item.name.replace(".txt", ""));
    })
    return arr; 
}


export const readfile = (name) => {
    var path = `${RNFS.ExternalStorageDirectoryPath}/MyRottenLife/${name}.txt`;
    return RNFS.readFile(path)
}