import { client } from "../../service/apollo";
import { GET_CATEGORIES } from "../../service/queries/get-categories";
import { LOAD_CATEGORIES, CHANGE_CATEGORY } from "../../constant/actions";

export const loadCategories = () => async (dispatch) => {
  const {
    data: { categories },
  } = await client.query({ query: GET_CATEGORIES });

  const categ = {};
  for (let category of categories) {
    categ[category.name] = category;
  }

  dispatch({
    type: LOAD_CATEGORIES,
    payload: categ,
  });
};

export const changeCategory = (category) => (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY,
    payload: category,
  });
};
