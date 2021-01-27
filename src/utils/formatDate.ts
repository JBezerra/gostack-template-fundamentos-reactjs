const formatDate = (nonFormarttedDate: string): string => {
  const date = new Date(nonFormarttedDate);
  const dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const MM = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const yyyy = date.getFullYear();
  return `${dd}/${MM}/${yyyy}`;
};

export default formatDate;
