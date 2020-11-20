import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard11176261Navigator from '../features/Dashboard11176261/navigator';
import SignIn52176260Navigator from '../features/SignIn52176260/navigator';
import SignUp23176259Navigator from '../features/SignUp23176259/navigator';
import CalendarView4176258Navigator from '../features/CalendarView4176258/navigator';
import Settings6176256Navigator from '../features/Settings6176256/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard11176261: { screen: Dashboard11176261Navigator },
SignIn52176260: { screen: SignIn52176260Navigator },
SignUp23176259: { screen: SignUp23176259Navigator },
CalendarView4176258: { screen: CalendarView4176258Navigator },
Settings6176256: { screen: Settings6176256Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
