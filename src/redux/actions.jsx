import { getInstance } from "../helpers/httpClient";

export const setProduct = (data = 6) => {
  return dispatch => {
    getInstance().get('https://api.onlinedu.uz/api/v1/courses?per_page=' + data + '&category_type=paid&is_home=1')
      .then(res => {
        dispatch({
          type: 'SET_PRODUCT',
          payload: res.data.data
        });
      })
      .catch(e => { console.log(e); })
  }
}