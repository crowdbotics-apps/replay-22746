import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView5175509Reducer from '../features/CalendarView5175509/redux/reducers';
import Dashboard27175507Reducer from '../features/Dashboard27175507/redux/reducers'
import SignUp14175504Reducer from '../features/SignUp14175504/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView5175509: CalendarView5175509Reducer,
Dashboard27175507: Dashboard27175507Reducer,
SignUp14175504: SignUp14175504Reducer,

});