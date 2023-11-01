import { formatPercent } from './numberFormatting';

export function percentFormat(e: HTMLElement): void {
  e.addEventListener('keydown', function (event: KeyboardEvent) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const cursorPosition: number | null = input.selectionStart;

    // Handle Backspace key
    if (
      event.key === 'Backspace' &&
      cursorPosition === input.value.length &&
      input.value.endsWith('%')
    ) {
      event.preventDefault(); // Stop the default backspace behavior
      input.value = input.value.slice(0, -2) + input.value.slice(-1); // Remove second to last character
    }

    // Handle Delete key
    if (
      event.key === 'Delete' &&
      cursorPosition === input.value.length - 1 &&
      input.value.endsWith('%')
    ) {
      event.preventDefault();
      input.value = input.value.slice(0, cursorPosition) + input.value.slice(cursorPosition + 1);
    }
  });

  e.addEventListener('input', function (e: Event) {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    let value: string = input.value.replace(/%/g, ''); // Remove any '%' first
    value = value.replace(/[^\d.]|^0+(?=\d)/g, '');

    // Prevent multiple decimal points
    const decimalPointCount = (value.match(/\./g) || []).length;
    if (decimalPointCount > 1) {
      value = value.slice(0, value.lastIndexOf('.'));
    }

    if (!value) {
      input.value = '';
      return;
    }

    input.value = formatPercent(value) + '%';
  });
}
