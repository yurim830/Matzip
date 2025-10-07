import {createStackNavigator} from '@react-navigation/stack';
import {createStaticNavigation} from '@react-navigation/native';

import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const AuthStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: 'black',

    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'gray',
    },
    cardStyle: {
      backgroundColor: 'white',
    },
  },
  screens: {
    AuthHome: {
      screen: AuthHomeScreen,
      options: {
        headerShown: true,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
        },
        cardStyle: {
          backgroundColor: 'yellow',
        },
      },
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: '로그인',
        headerShown: true,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      },
    },
    Signup: {
      screen: SignupScreen,
      options: {headerShown: true},
    },
  },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
