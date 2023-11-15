const useStrong = (value: string) => {
  const PWD_LETTER:  RegExp = new RegExp(/^(?=.*[a-z])/);
  const PWD_SYMBOL:  RegExp = new RegExp(/^(?=.*[!@#$%])/);
  const PWD_NUMBER:  RegExp = new RegExp(/^(?=.*[0-9])/);
  let lowerValue = value.toLowerCase();

  const letter = PWD_LETTER.test(lowerValue);
  const symbol = PWD_SYMBOL.test(lowerValue);
  const number = PWD_NUMBER.test(lowerValue);

  return {
    short: lowerValue.length < 8,
    easy: letter || symbol || number,
    medium: (letter && symbol) || (letter && number) || (symbol && number),
    strong: letter && symbol && number,
  }
}

export default useStrong;
