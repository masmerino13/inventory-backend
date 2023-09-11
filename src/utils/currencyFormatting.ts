export default (amount: number, currency: 'usd' | 'Q') => {
  const locale = currency === 'usd' ? 'en-US' : 'es-GT';

  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(
    amount,
  );
};
