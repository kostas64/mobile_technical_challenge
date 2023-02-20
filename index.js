/**
 * @format
 */
import App from "./App";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

AppRegistry.registerComponent(appName, () => App);
