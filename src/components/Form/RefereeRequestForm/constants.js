export const PRICE_TAX = 0.21;
export const NET_REFEREE_PRICE = 37.19;
export const GROSS_REFEREE_PRICE =
  NET_REFEREE_PRICE + NET_REFEREE_PRICE * PRICE_TAX;

export const getRefereePrices = (numberOfReferees) => {
  const netPrice = numberOfReferees * NET_REFEREE_PRICE;
  const grossPrice = numberOfReferees * GROSS_REFEREE_PRICE;

  return {
    netPrice: netPrice.toFixed(2),
    grossPrice: grossPrice.toFixed(2),
  };
};
