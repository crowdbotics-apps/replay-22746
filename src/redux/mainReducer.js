import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfCalendarView4177172Reducer from '../features/CopyOfCalendarView4177172/redux/reducers';
import Dashboard11176261Reducer from '../features/Dashboard11176261/redux/reducers'
import SignIn52176260Reducer from '../features/SignIn52176260/redux/reducers'
import SignUp23176259Reducer from '../features/SignUp23176259/redux/reducers'
import CalendarView4176258Reducer from '../features/CalendarView4176258/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfCalendarView4177172: CopyOfCalendarView4177172Reducer,
Dashboard11176261: Dashboard11176261Reducer,
SignIn52176260: SignIn52176260Reducer,
SignUp23176259: SignUp23176259Reducer,
CalendarView4176258: CalendarView4176258Reducer,

});