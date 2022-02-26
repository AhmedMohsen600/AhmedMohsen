export const updateData = (data, doesExistInCart, isMap) => {
  const updateData = isMap
    ? data.map((item) =>
        item.cartKey === doesExistInCart.cartKey
          ? { ...item, qtx: item.qtx + 1 }
          : item
      )
    : data.filter((item) => item.cartKey !== doesExistInCart.cartKey);

  return updateData;
};
