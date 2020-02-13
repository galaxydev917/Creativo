import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SigninPage from './src/pages/SigninPage';
import HomePage from './src/pages/HomePage';
import OfferPage from './src/pages/OfferPage';
import ProfilePage from './src/pages/ProfilePage';
import WalkthroughPage from './src/pages/WalkthroughPage';
import SignupPage from './src/pages/SignupPage';
import SaleFreePage from './src/pages/SaleFreePage';
import WantedPage from './src/pages/WantedPage';
import PostGroupPage from './src/pages/PostGroupPage';
import AddPostPage from './src/pages/AddPostPage';

const RootStack = createStackNavigator({
  "HomePage": { 
    screen: HomePage,
    navigationOptions: {
      title: 'sale free page',
      headerShown: false
    }
  },
   
});
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;

