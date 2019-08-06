import {createStackNavigator} from "react-navigation";
import MessageChatScreen from "../../screens/app/message/Chat";

export default createStackNavigator({
    MessageChatScreen,
}, {
    initialRouteName: 'MessageChatScreen',
});