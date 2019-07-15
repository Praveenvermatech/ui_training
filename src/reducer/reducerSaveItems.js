

const initialState = {
    productItems: []
};
const reducerSaveItimes = (state = initialState, action) => {

    if (action.type === "SAVE_ITEMS") {
        //  console.log(action.productItems);
        return {
            ...state,
            productItems: [...state.productItems, action.productItems],
        }
    }
    return state;
}

export default reducerSaveItimes;