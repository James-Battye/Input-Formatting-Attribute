import { currencyCalc } from '$utils/currencyCalc';
import { percentFormat } from '$utils/percentFormat';

window.addEventListener('DOMContentLoaded', () => {
  const currencyInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[currency]');
  const percentInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[percent]');

  if (currencyInputs) {
    currencyInputs.forEach((e) => {
      currencyCalc(e);
    });
  }

  if (percentInputs) {
    percentInputs.forEach((e) => {
      percentFormat(e);
    });
  }
});
