import {createStaticNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MapHomeScreen from '../screens/map/MapHomeScreen';
import AddLocationScreen from '../screens/map/AddLocationScreen';
import SearchLocationScreen from '../screens/map/SearchLocationScreen';

export const MapStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
  },
  screens: {
    MapHome: {
      screen: MapHomeScreen,
    },
    AddLocationScreen: {
      screen: AddLocationScreen,
    },
    SearchLocationScreen: {
      screen: SearchLocationScreen,
    },
  },
});