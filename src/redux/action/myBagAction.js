import { ACTIVE, ACTIVE_DROPDOWN } from "../../constant/actions";

export const setActive = () => (dispatch) => {
  dispatch({
    type: ACTIVE,
  });
};

export const setDropdown = (isActive) => (dispatch) => {
  dispatch({
    type: ACTIVE_DROPDOWN,
    payload: isActive,
  });
};
