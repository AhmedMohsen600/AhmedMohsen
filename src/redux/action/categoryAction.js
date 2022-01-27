import { client } from "../../service/apollo";
import { GET_CATEGORIES } from "../../service/queries/get-categories";
import { LOAD_CATEGORIES, CHANGE_CATEGORY } from "../../constant/actions";

export const loadCategories = () => async (dispatch) => {
  const {
    data: { categories },
  } = await client.query({ query: GET_CATEGORIES, fetchPolicy: "no-cache" });

  const categoryObject = {};
  for (let category of categories) {
    categoryObject[category.name] = category;
  }

  dispatch({
    type: LOAD_CATEGORIES,
    payload: categoryObject,
  });
};

export const changeCategory = (category) => (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY,
    payload: category,
  });
};
