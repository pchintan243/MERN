export const initialState = null;
// This is use for modify our navbar option
export const reducer = (state, action) => {
    if (action.type === 'USER') {
        return action.payload;
    }

    return state;
}