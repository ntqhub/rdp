import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Loading from "../screens/Loading";
import App from "./app/Index";
import Global from "./global/Index";

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading,
            Global,
            App
        },
        {
            initialRouteName: "Loading",
            headerMode: "none"
        }
    )
);
