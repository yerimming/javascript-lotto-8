import { LOTTO_CONFIG } from "../constants/config.js";
import { ERROR_MESSAGE } from "../constants/message.js";

class Validator {
    static validatePurchaseAmount(purchaseAmount) {
        const amount = Number(purchaseAmount);
        this.checkDivisibleByThousand(amount);
        this.checkIsNumber(amount);
        this.checkIsPositive(amount);
    }

    static checkDivisibleByThousand(value) {
        if ((value % LOTTO_CONFIG.LOTTO_PRICE) != 0) {
            throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_DIVISIBLE_THOUSAND);
        }
    }

    static checkIsNumber(value) {
        if (isNaN(value)) {
            throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        }
    }

    static checkIsPositive(value) {
        if (value <= 0) {
            throw new ERROR(ERROR_MESSAGE.NOT_POSITIVE);
        }
    }
}

export default Validator;