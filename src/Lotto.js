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

    const uniqueNumbers = new Set(numbers);
    if(uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATION);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
