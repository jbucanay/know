import { AppRegistry } from "react-native";
import { registerScreens } from "./App";
import Icon from "react-native-vector-icons/Ionicons";

import { name as appName } from "./app.json";
import { Navigation } from "react-native-navigation";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: "Home",
              options: {
                text: "Home",
                fontSize: 12
              },
              passProps: {
                text: "This is tab 1",
                myFunction: () => "Hello from a function"
              }
            }
          },
          {
            component: {
              name: "Tech",
              passProps: {
                text: "this is tab two"
              }
            }
          }
        ]
      }
    }
  });
});
