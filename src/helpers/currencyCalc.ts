import { currencySymbols } from './currencies';
import { formatNumber } from './numberFormatting';

export function currencyCalc(element: HTMLElement): void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let currency = currencySymbols[element.getAttribute('currency')!];
  if (!currency) {
    console.error(
      `Currency symbol for ${element.getAttribute(
        'currency'
      )} is missing. Defaulting to U.S. Dollar.`
    );
    currency = currencySymbols['dollar']; // default to U.S. Dollar if symbol is missing
  }
  element.addEventListener('input', function (e: Event) {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    let value: string = input.value.replace(/[^\d.]/g, ''); // Remove any non-digit characters except the decimal point
    value = value.replace(/^0+/, ''); // Remove leading zeros

    if (currency.prefix) {
      input.value = formatNumber(value) ? currency.symbol + formatNumber(value) : '';
    } else {
      input.value = formatNumber(value) ? formatNumber(value) + currency.symbol : '';
    }
  });
}
