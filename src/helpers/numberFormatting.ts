export function formatNumber(number: string): string {
  return number.replace(/\B(?=(\d{3})+(?!\d)(?=\.\d*$))/g, ',');
}

export function formatPercent(number: string): string {
  return number.replace(/\B(?=(\d{3})+(?!\d)(?=\.\d*$))/g, ',');
}
