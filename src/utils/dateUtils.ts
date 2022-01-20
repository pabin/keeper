const formatDate = (date: string): string => {
  const d = new Date(date);
  return `${d.toDateString()} | ${d.toLocaleTimeString()}`;
};

export { formatDate };
