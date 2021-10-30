const INITIAL_STATE = {
  product: [],
  porofile: {}
};
const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
export default reducers;