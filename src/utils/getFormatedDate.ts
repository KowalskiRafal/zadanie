export const getFormatedDate = (
  date: string,
) => {
  const startDate = new Date(date);

  const getMonth = () => {
    const startMonth = startDate.getMonth() + 1;
    return startMonth < 10 ? `0${startMonth}` : `${startMonth}`;
  };

  const getDay = () => {
    const startDay = startDate.getDate();
    return startDay < 10 ? `0${startDay}` : `${startDay}`;
  };
  const startYear = startDate.getFullYear().toString();

  return date ? (`${getDay()}-${getMonth()}-${startYear}`) : null;
};
