const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

const formatDate = (date: Date, locale: string): string => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export default formatDate;
