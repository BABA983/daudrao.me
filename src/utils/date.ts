export function experienceDate(date: string) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      year: '2-digit',
      // day: "numeric",
    }).format(new Date(date));
  } catch (error) {
    return date;
  }
}

export function a11yDate(date: string) {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

export function postListDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
  }).format(new Date(date));
}

export function postFullDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }).format(new Date(date));
}
