export function randomColor() {
  const colors = ['var(--accent1)', 'var(--accent2)', 'var(--accent3)', 'var(--accent4)', 'var(--accent5)', 'var(--accent6)', 'var(--accent7)', 'var(--accent8)', 'var(--accent9)', 'var(--accent10)', 'var(--accent11)', 'var(--accent12)', 'var(--accent13)', 'var(--accent14)', 'var(--accent15)']
  return colors[Math.floor(Math.random() * colors.length)]
}

export function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
