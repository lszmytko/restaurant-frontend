export const showCurrentHours = (data) => {
  const currentday = new Date().getDay();
  return data[currentday].hours;
};
