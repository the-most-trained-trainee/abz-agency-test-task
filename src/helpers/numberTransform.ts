const numberTransform = (data: string) => {
  let number = data;
  if (number[0] !== "+") {
    number = "+" + number;
  }
  const result = `${number.slice(0, 3)} (${number.slice(3, 6)}) ${number.slice(6, 9)} ${number.slice(9, 11)} ${number.slice(11, 13)}`;
  return result;
};

export default numberTransform;
