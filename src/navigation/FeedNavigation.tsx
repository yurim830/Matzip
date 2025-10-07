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
      options: {
        title: '피드',
      },
    },
    FeedDetail: {
      screen: FeedDetailScreen,
      options: {
        headerShown: false,
      },
    },
    FeedFavorite: {
      screen: FeedFavoriteScreen,
      options: {
        title: '즐겨찾기',
      },
    },
    EditLocation: {
      screen: EditLocationScreen,
    },
  },
});
