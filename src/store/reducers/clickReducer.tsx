import CLICK_UPDATE_VALUE from "../actions/actionTypes";

const initialState = {
    newValue: ''
};

const  clickReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};

export default clickReducer;