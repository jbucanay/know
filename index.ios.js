import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Navigation } from "react-native-navigation";

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "landingNews.Home"
      }
    }
  });
});
