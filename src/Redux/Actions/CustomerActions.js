import { Customer } from "../Types";
// --------------- ACTIONS ---------------
export const getCustomer = {
    Request: (params) => ({ type: Customer.REQUEST, params }),
    Success: (data) => ({ type: Customer.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Customer.FAILED, payload: error }),
};
