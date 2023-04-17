export const converDate = (num) => {
  const date = new Date(num);
  return date.getDate() + "/" + (date.getMonth() + 1);
};

export const convertNumbers = (num) => {
  if (num) {
    if (num < 1000) return num;
    else if (num >= 1000 && num < 1000000) {
      return (
        num.toString().slice(0, -3) + "." + num.toString().slice(-3, -1) + "K"
      );
    } else if (num >= 1000000 && num < 1000000000) {
      return (
        num.toString().slice(0, -6) + "." + num.toString().slice(-6, -4) + "M"
      );
    } else if (num >= 1000000000) {
      return (
        num.toString().slice(0, -9) + "." + num.toString().slice(-9, -7) + "B"
      );
    }
  }
};
