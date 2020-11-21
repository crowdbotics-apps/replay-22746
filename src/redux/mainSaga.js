import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CopyOfCalendarView4177172Saga from '../features/CopyOfCalendarView4177172/redux/sagas';
import CalendarView4176258Saga from '../features/CalendarView4176258/redux/sagas';
import CalendarView5175509Saga from '../features/CalendarView5175509/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CopyOfCalendarView4177172Saga,
CalendarView4176258Saga,
    
  ]);
}