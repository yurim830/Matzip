import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStaticNavigation} from '@react-navigation/native';

import FeedListScreen from '../screens/feed/FeedListScreen';
import FeedDetailScreen from '../screens/feed/FeedDetailScreen';
import FeedFavoriteScreen from '../screens/feed/FeedFavoriteScreen';
import EditLocationScreen from '../screens/feed/EditLocationScreen';
import {createStackNavigator} from '@react-navigation/stack';

export const FeedStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
  },
  screens: {
    Feed: {
      screen: FeedListScreen,
    },
    FeedDetail: {
      screen: FeedDetailScreen,
    },
    FeedFavorite: {
      screen: FeedFavoriteScreen,
    },
    EditLocation: {
      screen: EditLocationScreen,
    },
  },
});