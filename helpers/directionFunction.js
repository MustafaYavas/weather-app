const getDirectionName = (degree) => {
  const directions = ['North', 'East', 'South', 'West'];
  const index =
    Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 4;
  return directions[index];
};

export { getDirectionName };
