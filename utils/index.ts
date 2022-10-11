export const convertDate = (published: string): string => {
  const months = {
    1: "Января",
    2: "Февраля",
    3: "Марта",
    4: "Апреля",
    5: "Мая",
    6: "Июня",
    7: "Июля",
    8: "Августа",
    9: "Сентября",
    10: "Октября",
    11: "Ноября",
    12: "Декабря",
  };
  const date = published.substring(0, 10);
  const [year, month, day] = date.split("-");
  return `${day}-${months[parseInt(month)]}-${year}`;
};
