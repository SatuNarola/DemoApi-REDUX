// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import API from '../Services/';
import { Customer } from '../Types';
import { CustomerActions } from '../Actions';

const getCustomerSaga = function* getCustomerSaga({ params }) {
    console.log('----------getCustomerSaga----------->');
    try {
        // console.log('$$$$$$$$$ ----------->',API);
        const response = yield call(API.CustomerServices.GetCustomer, params);
        console.log('-------->RESPONCE____>',response);
        if (!response?.entries) {
            throw new Error(response);
        }
        yield put(CustomerActions.Success(response));
    } catch (error) {
        yield put(CustomerActions.Failed(error));
    }
};

function* Customersaga() {
    yield all([
        takeEvery(Customer.REQUEST, getCustomerSaga),
    ]);
}

export default Customersaga;