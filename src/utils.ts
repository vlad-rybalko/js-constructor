export function row(content: string, styles: string = ''): string {
  const style: string = `margin: 0; ${styles}`;
  return `<div class="row" style="${style}">${content}</div>`;
}

export function col(content: string): string {
  return `<div class="col-sm">${content}</div>`;
}

export function css(styles: { [key: string]: string } = {}): string {
  const toString = (key: string) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}
