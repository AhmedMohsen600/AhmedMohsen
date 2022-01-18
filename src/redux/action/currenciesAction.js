import { client } from "../../service/apollo";
import { GET_CURRENCIES } from "../../service/queries/get-currencies";
import { CHANGE_CURRENCY, GET_CURRENCY } from "../../constant/actions";
export const loadCurrencies = () => async (dispatch) => {
  const {
    data: { currencies },
  } = await client.query({ query: GET_CURRENCIES });

  dispatch({
    type: GET_CURRENCY,
    payload: currencies,
  });
};

export const setCurrentCurrency = (currency) => (dispatch) => {
  dispatch({
    type: CHANGE_CURRENCY,
    payload: currency,
  });
};
