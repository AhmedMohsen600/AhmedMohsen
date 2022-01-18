import { ACTIVE } from "../../constant/actions";

export const setActive = (isActive) => (dispatch) => {
  dispatch({
    type: ACTIVE,
    payload: isActive,
  });
};
