import { Console } from "@woowacourse/mission-utils";
import { LOTTO_CONFIG } from "../constants/config.js";

class Input {
    constructor(validate) {
        this.validate = validate;
        this.value = '';
    }

    async inputValue(message) {
        let value;
        while (true) {
            try {
                value = await Console.readLineAsync(message);
                this._validateValue(value);
                break;
            } catch (error) {
                Console.print(error.message);
            }
        }
        this.value = value;
    }

    _validateValue(value) {
        this.validate(value);
    }

    getValue() {
        return this.value;
    }

    getLottoCount() {
        return this.value / LOTTO_CONFIG.LOTTO_PRICE;
    }

    changeArray() {
        this.value = this.value.split(',').map(Number);
    }
}

export default Input;