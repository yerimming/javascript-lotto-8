import { ERROR_MESSAGE } from "./constants/message";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_SIX_ELEMENTS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
