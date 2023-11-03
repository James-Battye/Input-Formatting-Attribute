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

  if (currency.prefix === false) {
    element.addEventListener('keydown', function (event: KeyboardEvent) {
      const input: HTMLInputElement = event.target as HTMLInputElement;
      const cursorPosition: number | null = input.selectionStart;

      // Handle Backspace key
      if (
        event.key === 'Backspace' &&
        cursorPosition === input.value.length &&
        input.value.endsWith(currency.symbol)
      ) {
        event.preventDefault(); // Stop the default backspace behavior
        input.value = input.value.slice(0, -2) + input.value.slice(-1); // Remove second to last character
      }

      // Handle Delete key
      if (
        event.key === 'Delete' &&
        cursorPosition === input.value.length - 1 &&
        input.value.endsWith(currency.symbol)
      ) {
        event.preventDefault();
        input.value = input.value.slice(0, cursorPosition) + input.value.slice(cursorPosition + 1);
      }
    });
  }
}
