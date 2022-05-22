import { Platform } from "react-native";

const menuBarHeight =  Platform.OS === 'android' ?  75 : 100;

export {menuBarHeight}