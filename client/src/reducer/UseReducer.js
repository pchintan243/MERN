export const initialState = null;
// It is use to modify our navbar option
export const reducer = (state, action) => {
    if (action.type === 'USER') {
        return action.payload;
    }

    return state;
}