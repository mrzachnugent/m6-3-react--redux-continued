export const numberShortner = (num) => {
  if (num < 1000) {
    return num;
  } else if (num < 10000) {
    return `${String(num)[0]}K`;
  } else if (num < 100000) {
    return `${String(num)[0]}${String(num)[1]}K`;
  } else if (num < 1000000) {
    return `${String(num)[0]}${String(num)[1]}${String(num)[2]}K`;
  } else if (num < 10000000) {
    return `${String(num)[0]}M`;
  } else if (num < 100000000) {
    return `${String(num)[0]}${String(num)[1]}M`;
  } else if (num < 1000000000) {
    return `${String(num)[0]}${String(num)[1]}${String(num)[2]}M`;
  }
};
