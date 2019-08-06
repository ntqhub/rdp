import {createStackNavigator} from "react-navigation";
import SearchIndexScreen from "../../../screens/app/search/Index";
import SearchMapScreen from "../../../screens/app/search/Map";
import SearchFilterScreen from "../../../screens/app/search/Filter";
import SearchFavoritesScreen from "../../../screens/app/search/Favorites";
import SearchFilterGlobalScreen from "../../../screens/app/search/FilterGlobal";

export default createStackNavigator({
        SearchIndexScreen,
        SearchMapScreen,
        SearchFilterScreen,
        SearchFavoritesScreen,
        SearchFilterGlobalScreen
    }, {
        //initialRouteName: 'SearchFilterGlobalScreen', //Экран открывающийся при вызове
    }
);