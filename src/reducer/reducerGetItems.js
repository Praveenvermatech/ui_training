const initialState = {
    productItems: []
};
const reducerGetItems = (state = initialState, action) => {

    // if (action.type === "SAVE_ITEMS") {
    //     console.log("PRAVEEN: " + state.productItems);
    //     return {
    //         ...state,
    //         productItems: state.productItems
    //     }
    // }
    if (action.type === "GET_ITEMS") {
        return state;
    }
    return state;
}

export default reducerGetItems;