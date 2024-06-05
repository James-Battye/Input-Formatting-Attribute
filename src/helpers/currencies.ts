export type CurrencyInfo = {
  symbol: string;
  prefix: boolean; // true if the symbol goes before the number, false if after
};

export const currencySymbols: Record<string, CurrencyInfo> = {
  dollar: { symbol: '$', prefix: true }, // U.S. Dollar
  euro: { symbol: '€', prefix: false }, // Euro
  pound: { symbol: '£', prefix: true }, // British Pound
  yen: { symbol: '¥', prefix: true }, // Japanese Yen
  yuan: { symbol: '¥', prefix: true }, // Chinese Yuan
  swissFranc: { symbol: 'CHF', prefix: false }, // Swiss Franc
  cad: { symbol: 'CA$', prefix: true }, // Canadian Dollar
  aud: { symbol: 'AU$', prefix: true }, // Australian Dollar
  nzd: { symbol: 'NZ$', prefix: true }, // New Zealand Dollar
  won: { symbol: '₩', prefix: true }, // Korean Won
  ruble: { symbol: '₽', prefix: true }, // Russian Ruble
  rupee: { symbol: '₹', prefix: true }, // Indian Rupee
  rand: { symbol: 'R', prefix: true }, // South African Rand
  real: { symbol: 'R$', prefix: true }, // Brazilian Real
  peso: { symbol: '₱', prefix: true }, // Philippine Peso
  lira: { symbol: '₺', prefix: true }, // Turkish Lira
  krona: { symbol: 'kr', prefix: false }, // Swedish Krona
  rupiah: { symbol: 'Rp', prefix: true }, // Indonesian Rupiah
  baht: { symbol: '฿', prefix: true }, // Thai Baht
  zloty: { symbol: 'zł', prefix: true }, // Polish Złoty
};
