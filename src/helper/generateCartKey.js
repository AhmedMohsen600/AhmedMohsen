export const generateCartKey = (product) => {
  const arr = [product.id];
  for (let attr of product?.attributes) {
    if (attr.selectedAttribute) arr.push(attr.selectedAttribute.id);
  }
  return arr.join("-");
};
