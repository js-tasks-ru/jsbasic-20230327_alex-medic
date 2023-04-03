function factorial(n) {
  let num = 1;
  let result = 1;
  while (num <= n) {
    result = result * num;
    num++;
  }
  return result;
}
