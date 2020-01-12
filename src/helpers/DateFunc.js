

export const timespan = (from, to = new Date()) => {
  let span = to - from;

  let days = Math.floor(span / (1000 * 60 * 60 * 24));
  span -= days * (1000 * 60 * 60 * 24);

  let hours = Math.floor(span / (1000 * 60 * 60));
  span -= hours * (1000 * 60 * 60);

  let mins = Math.floor(span / (1000 * 60));
  span -= mins * (1000 * 60);

  let seconds = Math.floor(span / 1000);
  span -= seconds * 1000;

  return `Posted ${
    days
      ? days + " days ago"
      : hours
      ? hours + " hours ago"
      : mins
      ? mins + " mins ago"
      : "now"
  }.`;
};
