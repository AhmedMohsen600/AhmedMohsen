import { ACTIVE } from "../../constant/actions";

export const setActive = () => (dispatch) => {
  dispatch({
    type: ACTIVE,
  });
};
