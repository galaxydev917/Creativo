import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SigninPage from './src/pages/SigninPage';
import HomePage from './src/pages/HomePage';
import OfferPage from './src/pages/OfferPage';
import ProfilePage from './src/pages/ProfilePage';
import WalkthroughPage from './src/pages/WalkthroughPage';
import SignupPage from './src/pages/SignupPage';

const RootStack = createStackNavigator({
  "HomePage": { 
    screen: HomePage,
    navigationOptions: {
      title: 'profile',
      headerShown: false
    }
  },
   
});
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;

