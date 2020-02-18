module.exports = function getSeason(date) {
  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const autumn = [8, 9, 10];
  const summer = [5, 6, 7];

  if (!date instanceof Date || date === undefined) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error();

  let month = date.getMonth();
  if (winter.includes(month)) return 'winter';
  if (spring.includes(month)) return 'spring';
  if (autumn.includes(month)) return 'autumn';
  if (summer.includes(month)) return 'summer';
};
