import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView5175509Navigator from '../features/CalendarView5175509/navigator';
import Dashboard27175507Navigator from '../features/Dashboard27175507/navigator';
import SignUp14175504Navigator from '../features/SignUp14175504/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView5175509: { screen: CalendarView5175509Navigator },
Dashboard27175507: { screen: Dashboard27175507Navigator },
SignUp14175504: { screen: SignUp14175504Navigator },

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
