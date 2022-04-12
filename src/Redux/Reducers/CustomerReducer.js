// --------------- TYPES ---------------
import { Customer } from '../Types';
import { Tools } from '../../Helpers';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    //  console.log('ACTION _______>>>',action)
    switch (action.type) {
        // Register
        case Customer.REQUEST:
            return { ...state, isCustomerSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Customer.SUCCESS:
            return { ...state, isCustomerSuccess: true, successMsg: action.payload.message, CustomerListResponse: action && action['payload'] };
        case Customer.FAILED:
            return { ...state, isCustomerSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message), CustomerListResponse: action && action['payload'] };
        default:
            return state;
    }
};
// , action['payload'].entries, "action"