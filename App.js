import { Navigation } from "react-native-navigation";
import Home from "./components/Home";
import Tech from "./components/Tech";

export function registerScreens() {
  Navigation.registerComponent("Home", () => Home);
  Navigation.registerComponent("Tech", () => Tech);
}
