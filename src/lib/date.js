export const getStrDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

export const convertStrToDate = (dateString) => {
  const dateSplited = dateString.split("-");

  const year = Number(dateSplited[0]);
  const month = Number(dateSplited[1]) - 1;
  const date = Number(dateSplited[2]);

  return new Date(year, month, date);
};
