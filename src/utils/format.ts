export const toPersianDigits = (value: number | string) => {
  const map = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
  return value
    .toString()
    .replace(/\d/g, (d) => map[Number(d)]);
};

export const formatPrice = (value: number) => {
  const formatted = new Intl.NumberFormat("en-US").format(value);
  return toPersianDigits(formatted);
};