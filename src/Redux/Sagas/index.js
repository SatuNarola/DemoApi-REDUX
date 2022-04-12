import { all } from 'redux-saga/effects';
import Customersaga from './CustomerSaga'

//Main Root Saga
const rootSaga = function* rootSaga() {
    yield all([Customersaga()]);
};
export default rootSaga;
