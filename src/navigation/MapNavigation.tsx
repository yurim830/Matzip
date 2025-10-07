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
      options: {
        headerShown: false,
      }
    },
    AddLocationScreen: {
      screen: AddLocationScreen,
    },
    SearchLocationScreen: {
      screen: SearchLocationScreen,
      options: {
        title: '장소 검색',
      }
    },
  },
});