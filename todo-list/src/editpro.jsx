import * as Types from './action';

var initialState = [];
const EditProductRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            state = action.payload;
            return state
        default: return state;
    }
}
export default EditProductRD;
