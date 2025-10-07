import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStaticNavigation} from '@react-navigation/native';

import CalendarScreen from '../screens/calendar/CalendarScreen';
import {MapStack} from './MapNavigation';
import {FeedStack} from './FeedNavigation';

const MainDrawer = createDrawerNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
  },
  screens: {
    Map: {
      screen: MapStack,
    },
    Feed: {
      screen: FeedStack,
    },
    Calendar: {
      screen: CalendarScreen,
    },
  },
});

const DrawerNavigation = createStaticNavigation(MainDrawer);
export default DrawerNavigation;
